const fs = require('fs');
const path = require('path');
const steamworks = require('.');
const SteamWorks = new steamworks();

const steamApiJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'lib', 'steam_api.json'), 'utf8'));
const steamApiTypeDefs = {};
steamApiJson.typedefs.forEach(type => (steamApiTypeDefs[type.typedef] = type.type));
const steamApiEnumNames = steamApiJson.enums.map(e => e.enumname);
const steamApiStructNames = steamApiJson.structs.map(s => s.struct);
const SteamCallResultFunctions = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'lib', 'steamcallresultfunctions.json'), 'utf8'));
const SteamCallBackFunctions = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'lib', 'steamcallbackfunctions.json'), 'utf8'));
const steamApiInterfaces = {};
steamApiJson.interfaces.filter(i => i?.methods?.length).forEach(i => {
  const methods = i.methods.filter(m => !m?.callresult);
  steamApiInterfaces[i.classname.slice(1).toLowerCase()] = methods;
});

const excludedNames = [
  '__defineGetter__',
  '__defineSetter__',
  '__lookupGetter__',
  '__lookupSetter__',
  '__proto__',
  'constructor',
  'equals',
  'getCPtr',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf',
  'undefined',
];

const getType = (variable) => {
  if (variable === undefined) {
    return 'Undefined';
  }
  if (variable === null || !variable.toString) {
    return 'Null';
  }
  if (Number.isNaN(variable)) {
    return 'NaN';
  }
  return Object.getPrototypeOf(variable)?.constructor?.name ?? Object.prototype.toString.call(variable).match(/\s(\w+)/)[1];
};

const getTsType = (typeStr) => {
  switch (typeStr) {
  case 'Function':
    return '{(/* Args Unknown */): unknown}';
  case 'AsyncFunction':
    return '{(/* Args Unknown */): Promise<unknown>}';
  default:
    return typeStr;
  }
};

const getJsType = typeStr => {
  if (!typeStr) {
    return 'unknown';
  }
  if (typeStr === 'void') {
    return 'undefined';
  }
  if (typeStr === 'bool') {
    return 'boolean';
  }
  if (['int', 'unsigned', 'signed', 'double', 'float', 'long', 'short'].some(t => typeStr.includes(t)) && !typeStr.includes('*') && !typeStr.includes('&')) {
    return 'number';
  }
  if (['const char *', 'char *', 'char'].includes(typeStr) || /char \[\d+\]/.test(typeStr)) {
    return 'string';
  }
  if (steamApiTypeDefs.hasOwnProperty(typeStr)) {
    return getJsType(steamApiTypeDefs[typeStr]);
  }
  if (steamApiEnumNames.includes(typeStr)) {
    return `SteamEnums.${typeStr}`;
  }
  if (steamApiStructNames.includes(typeStr)) {
    return `SteamStructs.${typeStr}`;
  }
  return 'unknown';
};

const getNestedTypings = (obj, name) => {
  if (!obj || Array.isArray(obj)) {
    return '';
  }
  const typedNames = [];
  const objType = getType(obj);
  const isClass = obj?.constructor?.toString()?.startsWith('class') && (obj?.prototype || obj?.__proto__) && objType !== 'Object';
  let typeStr = `declare ${isClass ? 'class' : 'interface'} ${name} {`;
  const properties = (!(obj?.prototype || obj?.__proto__) ? Object.keys(obj) : [...Object.getOwnPropertyNames(obj?.prototype ?? obj?.__proto__), ...Object.keys(obj)]).filter(property => !excludedNames.includes(property));
  if (isClass) {
    typeStr = `${typeStr}
  constructor(/* Args Unknown */);`;
  }
  for (const property of properties) {
    if (typedNames.includes(property)) {
      continue;
    }
    typedNames.push(property);
    if (SteamCallResultFunctions.hasOwnProperty(property)) {
      const callResult = SteamCallResultFunctions[property];
      typeStr = `${typeStr}
  ${property}: {(${callResult.args.length ? callResult.args.map(arg => `${arg.name}: ${arg.type}`).join(', ') : ''}): Promise<{ ${Object.entries(callResult.returnType).map(r => `${r[0]}: ${r[1]}`).join(', ')} }>};`;
    } else if (SteamCallBackFunctions.hasOwnProperty(property)) {
      const callBack = SteamCallBackFunctions[property];
      typeStr = `${typeStr}
  ${property}: {(${callBack.args.length ? callBack.args.map(arg => `${arg.name}: ${arg.type}`).join(', ') : ''}): Promise<{ ${Object.entries(callBack.returnType).map(r => `${r[0]}: ${r[1]}`).join(', ')} }>};`;
    } else if (steamApiEnumNames.includes(property)) {
      typeStr = `${typeStr}
  ${property}: SteamEnums.${property};`;
    } else if (steamApiStructNames.includes(property)) {
      typeStr = `${typeStr}
  ${property}: SteamStructs.${property};`;
    } else if (steamApiInterfaces.hasOwnProperty(name) && steamApiInterfaces[name].some(m => property === m.methodname)) {
      const steamApiInterfaceMethod = steamApiInterfaces[name].find(m => property === m.methodname);
      const args = steamApiInterfaceMethod.params.map(({ paramname, paramtype }) => ({
        name: paramname,
        type: getJsType(paramtype),
      }));
      const returnType = getJsType(steamApiInterfaceMethod.returntype);
      typeStr = `${typeStr}
  ${property}: {(${args.length ? args.map(arg => `${arg.name}: ${arg.type}`).join(', ') : ''}): ${returnType}}`;
    } else {
      typeStr = `${typeStr}
  ${property}: ${getTsType(getType(obj[property]))};`;
    }
  }
  typeStr = `${typeStr}
}`;
  return typeStr;
};

if (SteamWorks.SteamAPI.IsSteamRunning()) {
  let externTypesStr = '';
  let typingsStr = `
import SteamEnums from './steamApiEnums';
import SteamStructs from './steamApiStructs';

export = SteamWorks;
declare class SteamWorks {`;
  for (const method of Object.getOwnPropertyNames(steamworks.prototype)) {
    if (method === 'constructor') {
      typingsStr = `${typingsStr}
  ${method}(appId: number);`;
    } else {
      typingsStr = `${typingsStr}
  ${method}: {${'Init' === method ? '(appId: number): boolean' : '(): boolean'}};`;
    }
  }
  for (const property of Object.keys(SteamWorks)) {
    typingsStr = `${typingsStr}
  ${property}: ${property.toLowerCase()};`;
    externTypesStr = `${externTypesStr}\n${getNestedTypings(SteamWorks[property], property.toLowerCase())}`;
  }
  typingsStr = `${typingsStr}
}

${externTypesStr}`;

  fs.writeFileSync('./index.d.ts', typingsStr);
  SteamWorks.Shutdown();
}