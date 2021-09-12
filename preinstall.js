const fs = require('fs');
const path = require('path');

const steamSdkBasePath = process?.env?.STEAMWORKS_SDK_PATH ?? __dirname;

try {
  if (!fs.existsSync(steamSdkBasePath)) {
    throw new Error(
      "The Steamworks SDK directory was not found or is invalid!\nThe default location should be [steamworks_node_directory]/sdk.\nYou can also point to a custom directory using a 'STEAMWORKS_SDK_PATH' environment variable.",
    );
  }

  const steamRedisDir = path.join(
    steamSdkBasePath,
    'sdk',
    'redistributable_bin',
  );
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
          .filter(file => fs.statSync(path.join(steamRedisDir, file)).isFile())
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
      const gypContent = fs.readFileSync(
        path.join(__dirname, 'binding.gyp'),
        'utf-8',
      );
      const gypObject = JSON.parse(gypContent);
      if (
        gypObject &&
        gypObject?.targets?.length &&
        gypObject?.targets[0]?.libraries
      ) {
        gypObject.targets[0].libraries = [
          path.relative(path.join(__dirname, 'build'), steamRedisFile),
        ];
        fs.writeFileSync(
          path.join(__dirname, 'binding.gyp'),
          JSON.stringify(gypObject, null, 2),
        );
      } else {
        throw new Error(
          'bindings.gyp was unreadable or formatted incorrectly!',
        );
      }
    }
  }

  const steamAuthlibDir = path.join(steamSdkBasePath, 'sdk', 'lib');
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
      const gypContent = fs.readFileSync(
        path.join(__dirname, 'binding.gyp'),
        'utf-8',
      );
      const gypObject = JSON.parse(gypContent);
      if (
        gypObject &&
        gypObject?.targets?.length &&
        gypObject?.targets[0]?.libraries
      ) {
        gypObject.targets[0].libraries = [
          ...gypObject.targets[0].libraries,
          path.relative(path.join(__dirname, 'build'), steamAuthlibFile),
        ];
        fs.writeFileSync(
          path.join(__dirname, 'binding.gyp'),
          JSON.stringify(gypObject, null, 2),
        );
      } else {
        throw new Error(
          'bindings.gyp was unreadable or formatted incorrectly!',
        );
      }
    }
  }

  const SteamCallResultNames = [];
  const SteamCallBackNames = [];
  const steamHeadersDir = path.resolve(steamSdkBasePath, 'sdk/public/steam');
  for (const steamHeader of fs.readdirSync(steamHeadersDir)) {
    if (fs.lstatSync(path.resolve(steamHeadersDir, steamHeader)).isFile()) {
      const content = fs.readFileSync(
        path.resolve(steamHeadersDir, steamHeader),
        'utf8',
      );
      const resultMatches = content
        .match(/(?<!#define )STEAM_CALL_RESULT\(\s*(\w+)\s*\)/gm)
        ?.map(match => /STEAM_CALL_RESULT\(\s*(\w+)\s*\)/.exec(match)[1])
        ?.filter(match => match.toUpperCase() !== match);
      if (resultMatches?.length) {
        for (const resultMatch of resultMatches) {
          SteamCallResultNames.push(resultMatch);
        }
      }

      const callbackMatches = content
        .match(/(?<!#define )STEAM_CALLBACK_BEGIN\(\s*(\w+),\s*[^\)]*\)/gm)
        ?.map(
          match => /STEAM_CALLBACK_BEGIN\(\s*(\w+),\s*[^\)]*\)/.exec(match)[1],
        )
        ?.filter(match => match.toUpperCase() !== match);
      if (callbackMatches?.length) {
        for (const callbackMatch of callbackMatches) {
          SteamCallBackNames.push(callbackMatch);
        }
      }
    }
  }

  const steamApiJson = JSON.parse(
    fs.readFileSync(
      path.resolve(steamSdkBasePath, 'sdk/public/steam/steam_api.json'),
      'utf8',
    ),
  );

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
  const callResultFunctionsMade = [];
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
      .filter(interface => interface?.methods?.length)
      .flatMap(interface => interface.methods)
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
        callResultFunctionsMade.includes(methodname)
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
      callResultFunctionsMade.push(functionName);
    }
  }

  callResultClasses = `${callResultClasses}
  };
  `;
  callResultDefinitions = `${callResultDefinitions}
  };
  `;
  callResultFunctions = `${callResultFunctions}
  };
  `;

  fs.writeFileSync('./lib/steamcallresult.h', callResultClasses);
  fs.writeFileSync('./lib/steamcallresult.cpp', callResultDefinitions);
  fs.writeFileSync('./lib/steamcallresultfunctions.h', callResultFunctions);
  fs.writeFileSync(
    './lib/steamcallresultfunctionnames.json',
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
  const callBackFunctionsMade = [];
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
      .filter(interface => interface?.methods?.length)
      .flatMap(interface => interface.methods)
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
        callBackFunctionsMade.includes(methodname) ? `_C${callBackName}` : ''
      }`;
      callBackFunctions = `${callBackFunctions}
      C${callBackName}* ${functionName}(${paramsDeclarationString}) {
        ${methodNameSplit[1].substr(1)}()->${
        methodNameSplit[2]
      }(${paramsString});
        C${callBackName}* ${methodname}Result = new C${callBackName}();
        return ${methodname}Result;
      };
    `;
      callBackFunctionsMade.push(functionName);
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

  callBackClasses = `${callBackClasses}
  };
  `;
  callBackDefinitions = `${callBackDefinitions}
  };
  `;
  callBackFunctions = `${callBackFunctions}
  };
  `;

  fs.writeFileSync('./lib/steamcallback.h', callBackClasses);
  fs.writeFileSync('./lib/steamcallback.cpp', callBackDefinitions);
  fs.writeFileSync('./lib/steamcallbackfunctions.h', callBackFunctions);
  fs.writeFileSync(
    './lib/steamcallbackfunctionnames.json',
    JSON.stringify(callBackFunctionsMade, null, 2),
  );
} catch (error) {
  console.error(
    '=====================================================',
  );
  console.error('An error occured during install:');
  console.error(error.message);
  console.error(
    '=====================================================',
  );
  process.exit(1);
}
