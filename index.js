const fs = require('fs');
const path = require('path');
const steamworks = require('./bin/steamworks.node');

const set = (obj, record, value) => {
  if (Object(obj) !== obj) {
    return obj;
  }

  if (!Array.isArray(record)) {
    record = record.toString().match(/[^.[\]]+/g) || [];
  }
  record
    .slice(0, -1)
    .reduce(
      (prevValue, currentValue, currentIndex) =>
        Object(prevValue[currentValue]) === prevValue[currentValue]
          ? prevValue[currentValue]
          : (prevValue[currentValue] =
              Math.abs(record[currentIndex + 1]) >> 0 ===
              +record[currentIndex + 1]
                ? []
                : {}),
      obj,
    )[record[record.length - 1]] = value;
  return obj;
};

class SteamWorks {
  _types = {
    SteamAPI: {},
    CallResults: {},
    CallResultsAsync: {},
    CallBacks: {},
    Constants: {},
    Structs: {},
    Enums: {},
    Uncategorized: {},
  };
  SteamAPI = {};
  CallResults = {};
  CallResultsAsync = {};
  CallBacks = {};
  Constants = {};
  Structs = {};
  Enums = {};
  Uncategorized = {};

  constructor(appId = 0) {
    try {
      if (appId !== 0) {
        const steamAppIdPath = path.resolve(__dirname, 'steam_appid.txt');
        if (fs.existsSync(steamAppIdPath)) {
          fs.unlinkSync(steamAppIdPath);
        }
        fs.writeFileSync(steamAppIdPath, `${appId}`, 'utf8');
      }

      const success = steamworks.Init();
      if (!success) {
        throw new Error('Steam API failed to initialize!');
      }

      const SteamCallResultFunctionNames = JSON.parse(
        fs.readFileSync(
          path.resolve(__dirname, 'lib', 'steamcallresultfunctionnames.json'),
          'utf8',
        ),
      );

      const SteamCallBackFunctionNames = JSON.parse(
        fs.readFileSync(
          path.resolve(__dirname, 'lib', 'steamcallbackfunctionnames.json'),
          'utf8',
        ),
      );

      const setKeys = [];
      const unsetKeys = [];

      for (const key in steamworks) {
        let subKeys = key.split('_');
        if (
          key.startsWith('SteamAPI_') &&
          subKeys.every(subKey => subKey.length > 1) &&
          /v\d{3}/.test(subKeys[subKeys.length - 1])
        ) {
          subKeys = subKeys.slice(1, subKeys.length - 1);
          set(this, subKeys, steamworks[key]());
          set(this._types, subKeys, typeof steamworks[key]);
          setKeys.push(...subKeys);
        }
      }

      for (const key in steamworks) {
        if (key.startsWith('SteamAPI_')) {
          let subKeys = key.split('_');
          if (subKeys.every(subKey => subKey.length > 1)) {
            if (/v\d{3}/.test(subKeys[subKeys.length - 1])) {
            } else if (subKeys[1].startsWith('ISteam')) {
              subKeys.shift();
              subKeys[0] = subKeys[0].substr(1);
              if (this._types[subKeys[0]]) {
                set(
                  this._types[subKeys[0]],
                  subKeys.slice(1, subKeys.length - 1),
                  typeof steamworks[key],
                );
              } else {
                set(this.Uncategorized, subKeys, steamworks[key]);
                set(this._types.Uncategorized, subKeys, typeof steamworks[key]);
              }
            } else {
              set(this, subKeys, steamworks[key]);
              set(this._types, subKeys, typeof steamworks[key]);
            }
          } else {
            this[key.substr('SteamAPI_'.length)] = steamworks[key];
            this._types[key.substr('SteamAPI_'.length)] =
              typeof steamworks[key];
          }
          setKeys.push(...subKeys);
        } else if (
          SteamCallResultFunctionNames.includes(key)
        ) {
          this.CallResults[key] = steamworks[key];
          this._types.CallResults[key] = typeof steamworks[key];
          const asyncCall = async (...args) => {
            const callresult = steamworks[key](...args);
            await this.WaitForCallResult(callresult);
            return callresult.GetResult();
          };
          this.CallResultsAsync[key] = asyncCall;
          this._types.CallResultsAsync[key] = asyncCall;
        } else if (SteamCallBackFunctionNames.includes(key)) {
          this.CallBacks[key] = steamworks[key];
          this._types.CallBacks[key] = typeof steamworks[key];
        } else if (key.startsWith('k_') && !key.startsWith('k_E')) {
          this.Constants[key] = steamworks[key];
          this._types.Constants[key] = typeof steamworks[key];
        } else if (key.endsWith('_t')) {
          this.Structs[key] = steamworks[key];
          this._types.Structs[key] = typeof steamworks[key];
        } else if (key.startsWith('e') || key.startsWith('k_E')) {
          this.Enums[key] = steamworks[key];
          this._types.Enums[key] = typeof steamworks[key];
        } else {
          unsetKeys.push(key);
        }
      }

      for (const key of unsetKeys) {
        if (
          !key.startsWith('SteamInternal_') &&
          !key.startsWith('ISteam') &&
          !key.startsWith('SteamGameServer') &&
          !setKeys.includes(key) &&
          !this.hasOwnProperty(key)
        ) {
          if (key.toUpperCase() === key || key.startsWith('k')) {
            this.Constants[key] = steamworks[key];
            this._types.Constants[key] = typeof steamworks[key];
          } else {
            this.Uncategorized[key] = steamworks[key];
            this._types.Uncategorized[key] = typeof steamworks[key];
          }
        }
      }

      if (Object.keys(this.Uncategorized).length === 0) {
        delete this.Uncategorized;
        delete this._types.Uncategorized;
      }
    } catch (error) {
      console.error(error);
      steamworks.Shutdown();
    }
  }

  Shutdown() {
    return steamworks.Shutdown();
  }

  GetApplicationRunning() {
    return steamworks.GetApplicationRunning();
  }

  GetCallbackThreadRunning() {
    return steamworks.GetCallbackThreadRunning();
  }

  WaitForCallResult(callresult, timeout = 10000) {
    return new Promise((res, rej) => {
      if (!callresult?.GetResult || !callresult?.GetIsCompleted) {
        rej('Call result given was not a call result object!');
      }
      let interval = null;
      let timer = null;
      interval = setInterval(() => {
        if (callresult.GetIsCompleted()) {
          if (interval) {
            clearInterval(interval);
          }
          if (timer) {
            clearTimeout(timer);
          }
          res(true);
        }
      }, 100);
      timer = setTimeout(() => {
        if (interval) {
          clearInterval(interval);
        }
        if (timer) {
          clearTimeout(timer);
        }
        rej('Call result timed out after 10 seconds!');
      }, timeout);
    });
  }
}

module.exports = SteamWorks;
