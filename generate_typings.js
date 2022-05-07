const fs = require('fs-extra');
const path = require('path');

const {
  steamApiEnumNames,
  steamApiStructNames,
  steamApiInterfaces,
  excludedNames,
  getType,
  getTsType,
  getJsType,
  getJsTypeFromTypeOrName,
} = require('./utilities');

const steamworks = require('.');
const SteamWorks = new steamworks();

const SteamCallResultFunctions = JSON.parse(
  fs.readFileSync(
    path.resolve('./lib', 'steamcallresultfunctions.json'),
    'utf8',
  ),
);
const SteamCallBackFunctions = JSON.parse(
  fs.readFileSync(path.resolve('./lib', 'steamcallbackfunctions.json'), 'utf8'),
);
const SteamInputParams = JSON.parse(
  fs.readFileSync('./lib/steamInputParams.json', 'utf8'),
);

const getNestedTypings = (obj, name) => {
  if (!obj || Array.isArray(obj)) {
    return '';
  }
  const typedNames = [];
  const objType = getType(obj);
  const isClass =
    obj?.constructor?.toString()?.startsWith('class') &&
    (obj?.prototype || obj?.__proto__) &&
    objType !== 'Object';
  let typeStr = `declare ${isClass ? 'class' : 'interface'} ${name} {`;
  const properties = (
    !(obj?.prototype || obj?.__proto__)
      ? Object.keys(obj)
      : [
        ...Object.getOwnPropertyNames(obj?.prototype ?? obj?.__proto__),
        ...Object.keys(obj),
      ]
  ).filter(property => !excludedNames.includes(property));
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
  ${property}: {(${
  callResult.args.length
    ? callResult.args
      .map(arg => `${arg.name}: ${arg.type}`)
      .join(', ')
    : ''
}): Promise<{ ${Object.entries(callResult.returnType)
  .map(r => `${r[0]}: ${r[1]}`)
  .join(', ')} }>};`;
    } else if (SteamCallBackFunctions.hasOwnProperty(property)) {
      const callBack = SteamCallBackFunctions[property];
      typeStr = `${typeStr}
  ${property}: {(${
  callBack.args.length
    ? callBack.args
      .map(arg => `${arg.name}: ${arg.type}`)
      .join(', ')
    : ''
}): Promise<{ ${Object.entries(callBack.returnType)
  .map(r => `${r[0]}: ${r[1]}`)
  .join(', ')} }>};`;
    } else if (steamApiEnumNames.includes(property)) {
      typeStr = `${typeStr}
  ${property}: SteamEnums.${property};`;
    } else if (steamApiStructNames.includes(property)) {
      typeStr = `${typeStr}
  ${property}: SteamStructs.${property};`;
    } else if (
      steamApiInterfaces.hasOwnProperty(name) &&
      steamApiInterfaces[name].some(m => property === m.methodname)
    ) {
      const steamApiInterfaceMethod = steamApiInterfaces[name].find(
        m => property === m.methodname,
      );
      const args = steamApiInterfaceMethod.params.map(
        ({ paramname, paramtype }) => ({
          name: paramname,
          type: SteamInputParams.some(
            p => p.paramname === paramname && p.paramtype === paramtype,
          )
            ? `${getJsTypeFromTypeOrName(
              paramname,
              paramtype.replace(/\x20*\*/, ''),
            )}[]`
            : getJsTypeFromTypeOrName(paramname, paramtype),
        }),
      );
      const returnType = getJsType(steamApiInterfaceMethod.returntype);
      typeStr = `${typeStr}
  ${property}: {(${
  args.length
    ? args
      .map(arg => `${arg.name}: ${arg.type}`)
      .join(', ')
    : ''
}): ${returnType}}`;
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
  ${method}: {${
  'Init' === method ? '(appId: number): boolean' : '(): boolean'
}};`;
    }
  }
  for (const property of Object.keys(SteamWorks)) {
    typingsStr = `${typingsStr}
  ${property}: ${property};`;
    externTypesStr = `${externTypesStr}\n${getNestedTypings(
      SteamWorks[property],
      property,
    )}`;
  }
  typingsStr = `${typingsStr}
}

${externTypesStr}`;

  fs.writeFileSync('./index.d.ts', typingsStr);
  SteamWorks.Shutdown();
}
