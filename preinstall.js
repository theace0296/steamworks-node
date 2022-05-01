const fs = require('fs-extra');
const path = require('path');
const decompress = require('decompress');
const decompressTargz = require('decompress-targz');

const { downloadSteamworksSdk } = require('./download_steam_sdk');

const defaultSteamSdkPath = './sdk';
const steamSdkBasePath =
  process?.env?.STEAMWORKS_SDK_PATH ?? defaultSteamSdkPath;

const main = async () => {
  try {
    const swigArchiveName = (() => {
      switch (process.platform) {
      case 'win32':
        return 'swig-win';
      case 'linux':
        return 'swig-linux';
      case 'darwin':
        return 'swig-mac';
      default:
        throw new Error(`${process.platform} is not supported!`);
      }
    })();
    await decompress(`./${swigArchiveName}.tar.gz`, './swig', {
      plugins: [decompressTargz()],
    });

    if (
      !fs.existsSync(steamSdkBasePath) &&
      steamSdkBasePath !== defaultSteamSdkPath
    ) {
      throw new Error(
        'The Steamworks SDK directory was not found or is invalid!\nThe default location should be [program_dir]/steam.\nYou can also point to a custom directory using a \'STEAMWORKS_SDK_PATH\' environment variable.',
      );
    } else if (!fs.existsSync(steamSdkBasePath)) {
      await downloadSteamworksSdk();
    }

    fs.copySync(
      path.join(steamSdkBasePath, 'redistributable_bin'),
      './steam/redistributable_bin',
      { recursive: true, overwrite: true },
    );
    fs.copySync(path.join(steamSdkBasePath, 'public/steam'), './steam/', {
      recursive: true,
      overwrite: true,
    });
    fs.rmSync('./build', { recursive: true, force: true });
    fs.rmSync('./lib/steam_api_wrap.cxx', { force: true });

    const steamRedisDir = './steam/redistributable_bin';
    const steamRedisFiles = (() => {
      switch (process.platform) {
      case 'win32':
        if (process.arch === 'x64') {
          return fs
            .readdirSync(path.join(steamRedisDir, 'win64'))
            .map(file => path.join(steamRedisDir, 'win64', file));
        }
        return fs
          .readdirSync(path.join(steamRedisDir))
          .filter(file =>
            fs.statSync(path.join(steamRedisDir, file)).isFile(),
          )
          .map(file => path.join(steamRedisDir, file));
      case 'linux':
        if (process.arch === 'x64') {
          return fs
            .readdirSync(path.join(steamRedisDir, 'linux64'))
            .map(file => path.join(steamRedisDir, 'linux64', file));
        }
        return fs
          .readdirSync(path.join(steamRedisDir, 'linux32'))
          .map(file => path.join(steamRedisDir, 'linux32', file));
      case 'darwin':
        return fs
          .readdirSync(path.join(steamRedisDir, 'osx'))
          .map(file => path.join(steamRedisDir, 'osx', file));
      default:
        throw new Error(`${process.platform} is not supported!`);
      }
    })();

    if (steamRedisFiles.length <= 0) {
      throw new Error(
        'An unknown error has occured! (Perhaps the Steam SDK files are missing?)',
      );
    }

    for (const steamRedisFile of steamRedisFiles) {
      if (path.basename(steamRedisFile).includes('lib')) {
        const gypContent = fs.readFileSync('./binding.gyp', 'utf-8');
        const gypObject = JSON.parse(gypContent);
        if (
          gypObject &&
          gypObject?.targets?.length &&
          gypObject?.targets[0]?.libraries
        ) {
          gypObject.targets[0].libraries = [
            path.relative(path.resolve('./build'), steamRedisFile),
          ];
          fs.writeFileSync('./binding.gyp', JSON.stringify(gypObject, null, 2));
        } else {
          throw new Error(
            'bindings.gyp was unreadable or formatted incorrectly!',
          );
        }
      }
    }

    const steamAuthlibDir = './steam/lib';
    const steamAuthlibFiles = (() => {
      switch (process.platform) {
      case 'win32':
        if (process.arch === 'x64') {
          return fs
            .readdirSync(path.join(steamAuthlibDir, 'win64'))
            .map(file => path.join(steamAuthlibDir, 'win64', file));
        }
        return fs
          .readdirSync(path.join(steamAuthlibDir, 'win32'))
          .map(file => path.join(steamAuthlibDir, 'win32', file));
      case 'linux':
        if (process.arch === 'x64') {
          return fs
            .readdirSync(path.join(steamAuthlibDir, 'linux64'))
            .map(file => path.join(steamAuthlibDir, 'linux64', file));
        }
        return fs
          .readdirSync(path.join(steamAuthlibDir, 'linux32'))
          .map(file => path.join(steamAuthlibDir, 'linux32', file));
      case 'darwin':
        return fs
          .readdirSync(path.join(steamAuthlibDir, 'osx'))
          .map(file => path.join(steamAuthlibDir, 'osx', file));
      default:
        throw new Error(`${process.platform} is not supported!`);
      }
    })();

    if (steamAuthlibFiles.length <= 0) {
      throw new Error(
        'An unknown error has occured! (Perhaps the Steam SDK files are missing?)',
      );
    }

    for (const steamAuthlibFile of steamAuthlibFiles) {
      if (path.basename(steamAuthlibFile).includes('lib')) {
        const gypContent = fs.readFileSync('./binding.gyp', 'utf-8');
        const gypObject = JSON.parse(gypContent);
        if (
          gypObject &&
          gypObject?.targets?.length &&
          gypObject?.targets[0]?.libraries
        ) {
          gypObject.targets[0].libraries = [
            ...gypObject.targets[0].libraries,
            path.relative(path.resolve('./build'), steamAuthlibFile),
          ];
          fs.writeFileSync('./binding.gyp', JSON.stringify(gypObject, null, 2));
        } else {
          throw new Error(
            'bindings.gyp was unreadable or formatted incorrectly!',
          );
        }
      }
    }

    const SteamCallResultNames = [];
    const SteamCallBackNames = [];
    const SteamGlobalAccessors = [];
    const SteamInterfaces = [];
    for (const steamHeader of fs.readdirSync('./steam')) {
      if (fs.lstatSync(path.resolve('./steam', steamHeader)).isFile()) {
        let content = fs.readFileSync(
          path.resolve('./steam', steamHeader),
          'utf8',
        );
        if (content.match(/EControllerSourceMode/gm)) {
          content = content.replace(
            /EControllerSourceMode/gm,
            'EInputSourceMode',
          );
          fs.writeFileSync(path.resolve('./steam', steamHeader), content); // The steam headers don't seem to define this enum, even though it's the same as EInputSourceMode
        }
        if (content.match(/class CSteamGameServerAPIContext.+};/gs)) {
          content = content.replace(
            /class CSteamGameServerAPIContext.+};/gs,
            '',
          );
          fs.writeFileSync(path.resolve('./steam', steamHeader), content); // The CSteamGameServerAPIContext class don't play nice.
        }
        if (
          content.match(
            /\/\/ this set of functions is hidden.+explicit CSteamID.+bool BValidExternalSteamID\(\) const;/gs,
          )
        ) {
          content = content.replace(
            /\/\/ this set of functions is hidden.+explicit CSteamID.+bool BValidExternalSteamID\(\) const;/gs,
            '',
          );
          fs.writeFileSync(path.resolve('./steam', steamHeader), content); // These 'hidden' methods in the CSteamID class also don't play nice.
        }
        if (
          content.match(
            /\/\/ Hidden functions.+explicit CGameID.+static const char \*Render.+?\n/gs,
          )
        ) {
          content = content.replace(
            /\/\/ Hidden functions.+explicit CGameID.+static const char \*Render.+?\n/gs,
            '',
          );
          fs.writeFileSync(path.resolve('./steam', steamHeader), content); // These 'hidden' methods in the CGameID class also don't play nice.
        }

        const resultMatches = content
          .match(/(?<!#define )STEAM_CALL_RESULT\(\s*(\w+)\s*\)/gm)
          ?.map(match => /STEAM_CALL_RESULT\(\s*(\w+)\s*\)/.exec(match)[1])
          ?.filter(match => match.toUpperCase() !== match);
        if (resultMatches?.length) {
          SteamCallResultNames.push(...resultMatches);
        }

        const callbackMatches = content
          .match(/(?<!#define )STEAM_CALLBACK_BEGIN\(\s*(\w+),\s*[^)]*\)/gm)
          ?.map(
            match => /STEAM_CALLBACK_BEGIN\(\s*(\w+),\s*[^)]*\)/.exec(match)[1],
          )
          ?.filter(match => match.toUpperCase() !== match);
        if (callbackMatches?.length) {
          SteamCallBackNames.push(...callbackMatches);
        }

        const accessorMatches = content
          .match(/\s*inline (ISteam\w+) \*Steam\w+\(\)/gm)
          ?.map(match => /\s*inline (ISteam\w+) \*Steam\w+\(\)/.exec(match)[1])
          ?.filter(match => match.toUpperCase() !== match);
        if (accessorMatches?.length) {
          SteamGlobalAccessors.push(...accessorMatches);
        }

        const interfaceMatches = content
          .match(/class (ISteam\w+)/gm)
          ?.map(match => /class (ISteam\w+)/.exec(match)[1])
          ?.filter(match => match.toUpperCase() !== match);
        if (
          interfaceMatches?.length &&
          !['steam_api_internal.h', 'isteamps3overlayrenderer.h'].includes(
            steamHeader,
          )
        ) {
          for (const interfaceMatch of interfaceMatches) {
            SteamInterfaces.push({ name: interfaceMatch, file: steamHeader });
          }
        }
      }
    }

    let steamInterfaceIncludes = [];
    let steamInterfacesStr = '';
    for (const {
      name: steamInterface,
      file: interfaceHeaderFile,
    } of SteamInterfaces) {
      if (!SteamGlobalAccessors.includes(steamInterface)) {
        if (!steamInterfaceIncludes.includes(interfaceHeaderFile)) {
          steamInterfaceIncludes.push(interfaceHeaderFile);
        }
        steamInterfacesStr = `${steamInterfacesStr}
// Global interface accessor for ${steamInterface}
inline ${steamInterface} *${steamInterface.slice(1)}();
#ifndef ${steamInterface.slice(1).toUpperCase()}_INTERFACE_VERSION
#define ${steamInterface
    .slice(1)
    .toUpperCase()}_INTERFACE_VERSION "${steamInterface.slice(1)}001"
#endif
STEAM_DEFINE_USER_INTERFACE_ACCESSOR( ${steamInterface} *, ${steamInterface.slice(
  1,
)}, ${steamInterface.slice(1).toUpperCase()}_INTERFACE_VERSION );
`;
      }
    }
    steamInterfacesStr = `
#include "steam_api_common.h"
#include "steam_api.h"

${steamInterfaceIncludes.map(incl => `#include "${incl}"`).join('\n')}

${steamInterfacesStr}`;
    fs.writeFileSync('./lib/steaminterfaces.h', steamInterfacesStr);

    const steamApiJson = JSON.parse(
      fs.readFileSync('./steam/steam_api.json', 'utf8'),
    );
    fs.writeFileSync(
      './lib/steam_api.json',
      JSON.stringify(steamApiJson, null, 2),
    );

    const steamApiTypeDefs = {};
    steamApiJson.typedefs.forEach(
      type => (steamApiTypeDefs[type.typedef] = type.type),
    );
    const steamApiEnumNames = steamApiJson.enums.map(e => e.enumname);
    const steamApiStructNames = steamApiJson.structs.map(s => s.struct);

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
      if (
        ['int', 'unsigned', 'signed', 'double', 'float', 'long', 'short'].some(
          t => typeStr.includes(t),
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

    let steamApiEnumStr = `export = SteamEnums;
declare namespace SteamEnums {`;
    for (const steamEnum of steamApiJson.enums) {
      steamApiEnumStr = `${steamApiEnumStr}\n  export enum ${steamEnum.enumname} {`;
      for (const enumValue of steamEnum.values) {
        steamApiEnumStr = `${steamApiEnumStr}\n    ${enumValue.name} = ${enumValue.value},`;
      }
      steamApiEnumStr = `${steamApiEnumStr}\n  }\n`;
    }
    steamApiEnumStr = `${steamApiEnumStr}\n}`;
    fs.writeFileSync('./steamApiEnums.d.ts', steamApiEnumStr);

    let steamApiStructStr = `import SteamEnums from './steamApiEnums';

export = SteamStructs;
declare namespace SteamStructs {`;
    for (const steamStruct of steamApiJson.structs) {
      const isClass = !!steamStruct?.methods
        ?.map(m => m.methodname)
        ?.includes('Construct');
      steamApiStructStr = `${steamApiStructStr}\n  export ${
        isClass ? 'class' : 'interface'
      } ${steamStruct.struct} {`;
      if (
        steamStruct.hasOwnProperty('consts') &&
        Array.isArray(steamStruct.consts)
      ) {
        for (const constant of steamStruct.consts) {
          steamApiStructStr = `${steamApiStructStr}\n    ${
            constant.constname
          }: ${getJsType(constant.consttype)}${isClass ? ';' : ','}`;
        }
      }
      if (
        steamStruct.hasOwnProperty('fields') &&
        Array.isArray(steamStruct.fields)
      ) {
        for (const field of steamStruct.fields) {
          steamApiStructStr = `${steamApiStructStr}\n    ${
            field.fieldname
          }: ${getJsType(field.fieldtype)}${isClass ? ';' : ','}`;
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
          if (method.methodname === 'Construct') {
            steamApiStructStr = `${steamApiStructStr}\n    constructor(${
              method.params.length
                ? method.params
                  .map(p => `${p.paramname}: ${getJsType(p.paramtype)}`)
                  .join(', ')
                : ''
            })${isClass ? ';' : ','}`;
          } else {
            steamApiStructStr = `${steamApiStructStr}\n    ${
              method.methodname
            }: {(${
              method.params.length
                ? method.params
                  .map(p => `${p.paramname}: ${getJsType(p.paramtype)}`)
                  .join(', ')
                : ''
            }): ${getJsType(method.returntype)}}${isClass ? ';' : ','}`;
          }
        }
      }
      steamApiStructStr = `${steamApiStructStr}\n  }\n`;
    }
    steamApiStructStr = `${steamApiStructStr}\n}`;
    fs.writeFileSync('./steamApiStructs.d.ts', steamApiStructStr);

    const getReturnTypeFromCallResultJson = callresult => {
      if (
        !callresult ||
        !callresult.hasOwnProperty('fields') ||
        !Array.isArray(callresult.fields)
      ) {
        return null;
      }
      const returnType = {};
      for (let i = 0; i < callresult.fields.length; i++) {
        const field = callresult.fields[i];
        if (
          !field ||
          !field.hasOwnProperty('fieldname') ||
          !field.hasOwnProperty('fieldtype')
        ) {
          returnType[`arg${i}`] = getJsType();
        } else {
          returnType[field.fieldname] = getJsType(field.fieldtype);
        }
      }
      return returnType;
    };

    const callResultsMade = [];
    let callResultDefinitions = `
#include "steamcallresult.h"
namespace CCallResults {
`;
    let callResultClasses = `
#include <stdio.h>
#include "steam_api.h"
#include "isteamgameserver.h"
#include "isteamgameserverstats.h"
namespace CCallResults {
`;
    const callResultFunctionsMade = {};
    let callResultFunctions = `
#include "steamcallresult.h"
namespace CCallResults {
`;

    for (const SteamCallResultName of SteamCallResultNames) {
      const callResult = steamApiJson.callback_structs.find(
        cb => cb?.struct === SteamCallResultName,
      );
      if (!callResult || !callResult?.struct) {
        continue;
      }
      const callResultStructName = callResult.struct;

      if (callResultsMade.includes(callResultStructName)) {
        continue;
      }

      callResultsMade.push(callResultStructName);
      const callResultName = callResultStructName.substr(
        0,
        callResultStructName.length - 2,
      );
      callResultClasses = `${callResultClasses}
  class C${callResultName} {
    public:
      C${callResultName}(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      ${callResultStructName} GetResult();
    private:
      void On${callResultName}(${callResultStructName}* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<C${callResultName}, ${callResultStructName}> m_callresult;
      ${callResultStructName} m_result;
      bool m_isComplete;
  };
`;
      callResultDefinitions = `${callResultDefinitions}
  C${callResultName}::C${callResultName}(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
    memset(&m_result, 0, sizeof(m_result));
    m_isComplete = false;
    m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &C${callResultName}::On${callResultName});
  };

  bool C${callResultName}::GetIsCompleted() {
    return m_isComplete;
  };

  ${callResultStructName} C${callResultName}::GetResult() {
    return m_result;
  };

  void C${callResultName}::On${callResultName}(${callResultStructName}* result, bool bIOFailure) {
    m_isComplete = true;
    if (bIOFailure || result == nullptr) {
      return;
    }
    m_result = *result;
  };
`;

      const methodsWithCallResult = steamApiJson.interfaces
        .filter(i => i?.methods?.length)
        .flatMap(i => i.methods)
        .filter(method => method?.callresult === callResult.struct);

      for (const method of methodsWithCallResult) {
        const { methodname, methodname_flat, returntype, params } = method;
        const methodNameSplit = methodname_flat.split('_');
        if (!methodNameSplit?.length || methodNameSplit?.length !== 3) {
          continue;
        }
        const paramsDeclarationString = params?.length
          ? params
            .map(({ paramname, paramtype }) => `${paramtype} ${paramname}`)
            .join(', ')
          : '';
        const paramsString = params?.length
          ? params.map(({ paramname }) => `${paramname}`).join(', ')
          : '';
        const functionName = `${methodname}${
          callResultFunctionsMade.hasOwnProperty(methodname)
            ? `_C${callResultName}`
            : ''
        }`;
        callResultFunctions = `${callResultFunctions}
  C${callResultName}* ${functionName}(${paramsDeclarationString}) {
    ${returntype} ${methodname}Call = ${methodNameSplit[1].substr(1)}()->${
  methodNameSplit[2]
}(${paramsString});
    C${callResultName}* ${methodname}Result = new C${callResultName}(${methodname}Call);
    return ${methodname}Result;
  };
`;
        callResultFunctionsMade[functionName] = {
          name  : functionName,
          parent: methodNameSplit[1].substr(1),
          result: callResultName,
          args  : params.map(({ paramname, paramtype }) => ({
            name: paramname,
            type: getJsType(paramtype),
          })),
          returnType: getReturnTypeFromCallResultJson(callResult),
        };
      }
    }

    callResultClasses = `${callResultClasses}\n};\n`;
    callResultDefinitions = `${callResultDefinitions}\n};\n`;
    callResultFunctions = `${callResultFunctions}\n};\n`;

    fs.writeFileSync('./lib/steamcallresult.h', callResultClasses);
    fs.writeFileSync('./lib/steamcallresult.cpp', callResultDefinitions);
    fs.writeFileSync('./lib/steamcallresultfunctions.h', callResultFunctions);
    fs.writeFileSync(
      './lib/steamcallresultfunctions.json',
      JSON.stringify(callResultFunctionsMade, null, 2),
    );

    const callBacksMade = [];
    let callBackDefinitions = `
#include "steamcallback.h"
namespace CCallBacks {
`;
    let callBackClasses = `
#include <stdio.h>
#include "steam_api.h"
#include "isteamgameserver.h"
#include "isteamgameserverstats.h"
namespace CCallBacks {
`;
    const callBackFunctionsMade = {};
    let callBackFunctions = `
#include "steamcallback.h"
namespace CCallBacks {
`;

    for (const SteamCallBackName of SteamCallBackNames) {
      const callBack = steamApiJson.callback_structs.find(
        cb => cb?.struct === SteamCallBackName,
      );
      if (!callBack || !callBack?.struct) {
        continue;
      }
      const callBackStructName = callBack.struct;

      if (callBacksMade.includes(callBackStructName)) {
        continue;
      }

      callBacksMade.push(callBackStructName);
      const callBackName = callBackStructName.substr(
        0,
        callBackStructName.length - 2,
      );

      const callbackAltName = callBack.struct.substr(
        0,
        callBackStructName.length - 8,
      );
      const methodsWithCallBack = steamApiJson.interfaces
        .filter(i => i?.methods?.length)
        .flatMap(i => i.methods)
        .filter(
          method =>
            method?.callback === callBack.struct ||
            method?.methodname === callbackAltName,
        );

      let hasMethodWithCallback = false;
      for (const method of methodsWithCallBack) {
        const { methodname, methodname_flat, params } = method;
        const methodNameSplit = methodname_flat.split('_');
        if (!methodNameSplit?.length || methodNameSplit?.length !== 3) {
          continue;
        }
        const paramsDeclarationString = params?.length
          ? params
            .map(({ paramname, paramtype }) => `${paramtype} ${paramname}`)
            .join(', ')
          : '';
        const paramsString = params?.length
          ? params.map(({ paramname }) => `${paramname}`).join(', ')
          : '';
        const functionName = `${methodname}${
          callBackFunctionsMade.hasOwnProperty(methodname)
            ? `_C${callBackName}`
            : ''
        }`;
        callBackFunctions = `${callBackFunctions}
  C${callBackName}* ${functionName}(${paramsDeclarationString}) {
    ${methodNameSplit[1].substr(1)}()->${methodNameSplit[2]}(${paramsString});
    C${callBackName}* ${methodname}Result = new C${callBackName}();
    return ${methodname}Result;
  };
`;
        callBackFunctionsMade[functionName] = {
          name  : functionName,
          parent: methodNameSplit[1].substr(1),
          result: callBackName,
          args  : params.map(({ paramname, paramtype }) => ({
            name: paramname,
            type: getJsType(paramtype),
          })),
          returnType: getReturnTypeFromCallResultJson(callBack),
        };
        hasMethodWithCallback = true;
      }

      if (!hasMethodWithCallback) {
        continue;
      }

      callBackClasses = `${callBackClasses}
  class C${callBackName}: CCallback<C${callBackName}, ${callBackStructName}, false> {
    public:
      C${callBackName}();
      bool GetIsCompleted();
      ${callBackStructName} GetResult();
    private:
      void On${callBackName}(${callBackStructName}* result);
      ${callBackStructName} m_result;
      bool m_isComplete;
  };
`;
      callBackDefinitions = `${callBackDefinitions}
  C${callBackName}::C${callBackName}(): CCallback<C${callBackName}, ${callBackStructName}, false>(this, &C${callBackName}::On${callBackName}) {
    memset(&m_result, 0, sizeof(m_result));
    m_isComplete = false;
  };

  bool C${callBackName}::GetIsCompleted() {
    return m_isComplete;
  };

  ${callBackStructName} C${callBackName}::GetResult() {
    return m_result;
  };

  void C${callBackName}::On${callBackName}(${callBackStructName}* result) {
    m_isComplete = true;
    if (result == nullptr) {
      return;
    }
    m_result = *result;
  };
`;
    }

    callBackClasses = `${callBackClasses}\n};\n`;
    callBackDefinitions = `${callBackDefinitions}\n};\n`;
    callBackFunctions = `${callBackFunctions}\n};\n`;

    fs.writeFileSync('./lib/steamcallback.h', callBackClasses);
    fs.writeFileSync('./lib/steamcallback.cpp', callBackDefinitions);
    fs.writeFileSync('./lib/steamcallbackfunctions.h', callBackFunctions);
    fs.writeFileSync(
      './lib/steamcallbackfunctions.json',
      JSON.stringify(callBackFunctionsMade, null, 2),
    );
  } catch (error) {
    console.error('=====================================================');
    console.error('An error occured during install:');
    console.error(error.message);
    console.error('=====================================================');
    process.exit(1);
  }
};

main();
