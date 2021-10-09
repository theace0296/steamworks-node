const fs = require('fs');
const path = require('path');
const steamworks = require('.');
const SteamWorks = new steamworks();

const steamApiJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'lib', 'steam_api.json'), 'utf8'));
const steamApiEnumNames = steamApiJson.enums.map(e => e.enumname);
const steamApiStructNames = steamApiJson.structs.map(s => s.struct);
const SteamCallResultFunctionNames = Object.keys(JSON.parse(fs.readFileSync(path.resolve(__dirname, 'lib', 'steamcallresultfunctions.json'), 'utf8')));

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

const getNestedTypings = (obj, name) => {
  if (!obj || Array.isArray(obj)) {
    return '';
  }
  let typeStr = `interface ${name} {`;
  if (obj?.constructor && (obj?.prototype || obj?.__proto__)) {
    typeStr = `${typeStr}
  constructor(/* Args Unknown */);`;
    for (const method of Object.getOwnPropertyNames(obj?.prototype ?? obj?.__proto__)) {
      if (['equals', 'getCPtr', 'constructor', '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__', '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable', 'toString', 'toLocaleString', 'valueOf', '__proto__'].includes(method)) {
        continue;
      }
      if (method in SteamCallResultFunctionNames) {
        typeStr = `${typeStr}
  ${method}: CallResults.${SteamCallResultFunctionNames[method]};`;
      } else if (method in steamApiEnumNames) {
        typeStr = `${typeStr}
  ${method}: SteamEnums.${steamApiEnumNames[method]};`;
      } else if (method in steamApiStructNames) {
        typeStr = `${typeStr}
  ${method}: SteamStructs.${steamApiStructNames[method]};`;
      } else {
        typeStr = `${typeStr}
  ${method}: {(/* Args Unknown */): unknown};`;
      }
    }
  }
  for (const property of Object.keys(obj)) {
    if (property in SteamCallResultFunctionNames) {
      typeStr = `${typeStr}
  ${property}: CallResults.${SteamCallResultFunctionNames[property]};`;
    } else if (property in steamApiEnumNames) {
      typeStr = `${typeStr}
  ${property}: SteamEnums.${steamApiEnumNames[property]};`;
    } else if (property in steamApiStructNames) {
      typeStr = `${typeStr}
  ${property}: SteamStructs.${steamApiStructNames[property]};`;
    } else {
      const propertyType = getType(obj[property]);
      typeStr = `${typeStr}
  ${property}: ${propertyType !== 'AsyncFunction' ? propertyType : '{(/* Args Unknown */): Promise<unknown>}'};`;
    }
  }
  typeStr = `${typeStr}
}`;
  return typeStr;
};

if (SteamWorks.SteamAPI.IsSteamRunning()) {
  let externTypesStr = '';
  let typingsStr = `
import * as CallResults from './callResults';
import * as SteamEnums from './steamApiEnums';
import * as SteamStructs from './steamApiStructs';

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
    if (property in SteamCallResultFunctionNames) {
      typingsStr = `${typingsStr}
  ${property}: CallResults.${SteamCallResultFunctionNames[property]};`;
    } else if (property in steamApiEnumNames) {
      typingsStr = `${typingsStr}
  ${property}: SteamEnums.${steamApiEnumNames[property]};`;
    } else if (property in steamApiStructNames) {
      typingsStr = `${typingsStr}
  ${property}: SteamStructs.${steamApiStructNames[property]};`;
    } else {
      typingsStr = `${typingsStr}
  ${property}: ${property.toLowerCase()};`;
      externTypesStr = `${externTypesStr}\n${getNestedTypings(SteamWorks[property], property.toLowerCase())}`;
    }
  }
  typingsStr = `${typingsStr}
}
export = SteamWorks;

${externTypesStr}`;

  fs.writeFileSync('./index.d.ts', typingsStr);
  SteamWorks.Shutdown();
}