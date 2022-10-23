const fs = require('fs-extra');
const path = require('path');

const {
  steamApiJson,
  steamApiEnumNames,
  steamApiStructNames,
  steamApiInterfaces,
  excludedNames,
  getType,
  getTsType,
  getJsType,
  getJsTypeFromTypeOrName,
} = require('./utilities');

const steamworks = require('../');
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

const getStructTyping = (steamStruct, indents = '      ') => {
  let typeStr = '';
  if (
    steamStruct.hasOwnProperty('consts') &&
    Array.isArray(steamStruct.consts)
  ) {
    for (const constant of steamStruct.consts) {
      typeStr = `${typeStr}\n${indents}${
        constant.constname
      }: ${getJsTypeFromTypeOrName(constant.constname, constant.consttype)},`;
    }
  }
  if (
    steamStruct.hasOwnProperty('fields') &&
    Array.isArray(steamStruct.fields)
  ) {
    for (const field of steamStruct.fields) {
      typeStr = `${typeStr}\n${indents}${
        field.fieldname
      }: ${getJsTypeFromTypeOrName(field.fieldname, field.fieldtype)},`;
    }
  }
  if (
    steamStruct.hasOwnProperty('methods') &&
    Array.isArray(steamStruct.methods)
  ) {
    for (const method of steamStruct.methods) {
      if (/operator[^\x20\w]/.test(method.methodname)) {
        continue;
      }
      if (method.methodname !== 'Construct') {
        typeStr = `${typeStr}\n${indents}${method.methodname}: {(${
          method.params.length
            ? method.params
              .filter(
                (param, i, params) =>
                  !SteamInputParams.some(
                    p =>
                      p.typestr ===
                        [param, params[i + 1] ?? {}]
                          .map(
                            ({ paramname, paramtype }) =>
                              `${paramtype} ${paramname}`,
                          )
                          .join(', '),
                  ),
              )
              .map(
                ({ paramname, paramtype }) =>
                  `${paramname}: ${getJsTypeFromTypeOrName(
                    paramname,
                    paramtype,
                  )}`,
              )
              .join(', ')
            : ''
        }): ${getJsType(method.returntype)}},`;
      }
    }
  }
  return typeStr;
};

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
  let typeStr = `  ${isClass ? 'class' : 'interface'} ${name} {`;
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
    ? callResult.args.map(arg => `${arg.name}: ${arg.type}`).join(', ')
    : ''
}): Promise<{ ${Object.entries(callResult.returnType)
  .map(r => `${r[0]}: ${r[1]}`)
  .join(', ')} }>};`;
    } else if (SteamCallBackFunctions.hasOwnProperty(property)) {
      const callBack = SteamCallBackFunctions[property];
      typeStr = `${typeStr}
    ${property}: {(${
  callBack.args.length
    ? callBack.args.map(arg => `${arg.name}: ${arg.type}`).join(', ')
    : ''
}): Promise<{ ${Object.entries(callBack.returnType)
  .map(r => `${r[0]}: ${r[1]}`)
  .join(', ')} }>};`;
    } else if (steamApiEnumNames.includes(property)) {
      typeStr = `${typeStr}\n    ${property}: {`;
      const steamEnum = steamApiJson.enums.find(
        ({ enumname }) => enumname === property,
      );
      for (const enumValue of steamEnum.values) {
        const splitName = enumValue.name.split('_').slice(1).join('_');
        const name = splitName.replace(new RegExp(`${property}_?`), '');
        typeStr = `${typeStr}\n      ${/^\d+/.test(name) ? `'${name}'` : name}: ${enumValue.value},`;
      }
      typeStr = `${typeStr}\n    };`;
    } else if (steamApiStructNames.includes(property)) {
      typeStr = `${typeStr}\n    ${property}: {`;
      const steamStruct = steamApiJson.structs.find(
        ({ struct }) => struct === property,
      );
      typeStr = `${typeStr}\n      new (): {${getStructTyping(
        steamStruct,
        '        ',
      )}\n      },`;
      typeStr = `${typeStr}${getStructTyping(steamStruct, '      ')}`;
      typeStr = `${typeStr}\n    };`;
    } else if (
      steamApiInterfaces.hasOwnProperty(name) &&
      steamApiInterfaces[name].some(m => property === m.methodname)
    ) {
      const steamApiInterfaceMethod = steamApiInterfaces[name].find(
        m => property === m.methodname,
      );
      const args = steamApiInterfaceMethod.params
        .filter(
          (param, i, params) =>
            !SteamInputParams.some(
              p =>
                p.typestr ===
                [param, params[i + 1] ?? {}]
                  .map(
                    ({ paramname, paramtype }) => `${paramtype} ${paramname}`,
                  )
                  .join(', '),
            ),
        )
        .map(({ paramname, paramtype }) => ({
          name: paramname,
          type: getJsTypeFromTypeOrName(paramname, paramtype),
        }));
      const returnType = getJsType(steamApiInterfaceMethod.returntype);
      typeStr = `${typeStr}
    ${property}: {(${
  args.length
    ? args.map(arg => `${arg.name}: ${arg.type}`).join(', ')
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
  let externTypesStr = 'declare namespace SteamWorksNS {';
  let typingsStr = `
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
  for (const property of Object.getOwnPropertyNames(SteamWorks)) {
    typingsStr = `${typingsStr}
  ${property}: SteamWorksNS.${property};`;
    externTypesStr = `${externTypesStr}\n${getNestedTypings(
      SteamWorks[property],
      property,
    )}`;
  }
  typingsStr = `${typingsStr}
}

${externTypesStr}
}`;

  fs.writeFileSync('./index.d.ts', typingsStr);
  SteamWorks.Shutdown();
}
