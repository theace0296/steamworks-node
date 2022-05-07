const fs = require('fs-extra');
const path = require('path');

const steamApiJson = JSON.parse(
  fs.readFileSync(path.resolve('./lib', 'steam_api.json'), 'utf8'),
);
const steamApiTypeDefs = steamApiJson.typedefs.reduce(
  (acc, type) => ({ ...acc, [type.typedef]: type.type }),
  {},
);
const steamApiEnumNames = steamApiJson.enums.map(e => e.enumname);
const steamApiStructNames = steamApiJson.structs.map(s => s.struct);

const steamApiInterfaces = steamApiJson.interfaces
  .filter(i => i?.methods?.length)
  .reduce((acc, i) => {
    const methods = i.methods.filter(m => !m?.callresult);
    acc[i.classname.slice(1).toLowerCase()] = methods;
    return acc;
  }, {});

const steamApiMethodsWithPointerParams = Object.keys(steamApiJson)
  .reduce(
    (acc, key) => [
      ...acc,
      ...steamApiJson[key].filter(a => a.methods?.length).map(a => a.methods),
    ],
    [],
  )
  .flat()
  .filter(
    method =>
      method.params?.length &&
      method.params.some(param => param.paramtype.endsWith('*')),
  );

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

const findMatchingTypeDef = typeStr => {
  if (steamApiTypeDefs.hasOwnProperty(typeStr)) {
    return steamApiTypeDefs[typeStr];
  }
  const normalizedTypeStr = typeStr
    .replace(/^[a-z]_[a-z]+/, '')
    .replace(/_t$/, '');
  const match = Object.keys(steamApiTypeDefs).find(typeDef => {
    if (
      normalizedTypeStr ===
      typeDef.replace(/^[a-z]_[a-z]+/, '').replace(/_t$/, '')
    ) {
      return true;
    }
    return false;
  });
  if (match) {
    return `${steamApiTypeDefs[match]}//*[]*//`;
  }
};

const getType = variable => {
  if (variable === undefined) {
    return 'Undefined';
  }
  if (variable === null || !variable.toString) {
    return 'Null';
  }
  if (Number.isNaN(variable)) {
    return 'NaN';
  }
  const type = (
    Object.getPrototypeOf(variable)?.constructor?.name ??
    Object.prototype.toString.call(variable).match(/\s(\w+)/)[1]
  );
  if (['Number', 'String', 'Boolean'].includes(type)) {
    return type.toLowerCase();
  }
  return type;
};

const getTsType = typeStr => {
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
  if (typeStr.endsWith('//*[]*//')) {
    return `${getJsType(typeStr.replace(/\/\/\*\[\]\*\/\/$/, ''))}[]`;
  }
  if (!typeStr) {
    return 'unknown';
  }
  if (typeStr === 'void') {
    return 'undefined';
  }
  if (typeStr === 'bool') {
    return 'boolean';
  }
  if (
    ['int', 'unsigned', 'signed', 'double', 'float', 'long', 'short'].some(t =>
      typeStr.includes(t),
    ) &&
    !typeStr.includes('*') &&
    !typeStr.includes('&')
  ) {
    return 'number';
  }
  if (
    ['const char *', 'char *', 'char'].includes(typeStr) ||
    /char \[\d+\]/.test(typeStr)
  ) {
    return 'string';
  }
  if (findMatchingTypeDef(typeStr)) {
    return getJsType(findMatchingTypeDef(typeStr));
  }
  if (steamApiEnumNames.includes(typeStr)) {
    return `SteamEnums.${typeStr}`;
  }
  if (steamApiStructNames.includes(typeStr)) {
    return `SteamStructs.${typeStr}`;
  }
  return 'unknown';
};

const getJsTypeFromTypeOrName = (name, type) => {
  let jsType = getJsType(type);
  if (jsType !== 'unknown') {
    return jsType;
  }
  return getJsType(name);
};

const getCppTypeFromTypeOrName = (name, type) => {
  let cppType = findMatchingTypeDef(type);
  if (cppType) {
    return cppType;
  }
  cppType = findMatchingTypeDef(name);
  if (cppType) {
    return cppType;
  }
  cppType = findMatchingTypeDef(type.replace(/\x20*\*/, ''));
  if (cppType) {
    return `${cppType} *`;
  }
};

module.exports = {
  steamApiTypeDefs,
  steamApiEnumNames,
  steamApiStructNames,
  steamApiInterfaces,
  steamApiMethodsWithPointerParams,
  excludedNames,
  getType,
  getTsType,
  getJsType,
  getJsTypeFromTypeOrName,
  getCppTypeFromTypeOrName,
};
