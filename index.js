const fs = require('fs');
const path = require('path');
const steam = require('./bin/steamworks.node');

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
          : prevValue[currentValue] =
              Math.abs(record[currentIndex + 1]) >> 0 === +record[currentIndex + 1]
                ? []
                : {},
      obj,
    )[record[record.length - 1]] = value;
  return obj;
};

const WaitForCallResult = (callresult, timeout = 10000) => {
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
};

class SteamWorks {
  SteamAPI = {};
  CallBacks = {};
  Constants = {};
  Structs = {};
  Enums = {};
  Uncategorized = {};

  constructor(appId = 0) {
    try {
      this.Init(appId);

      const steamApiJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'lib', 'steam_api.json'), 'utf8'));
      const steamApiEnumNames = steamApiJson.enums.map(e => e.enumname);
      const steamApiStructNames = steamApiJson.structs.map(s => s.struct);
      const steamApiCallbackStructNames = steamApiJson.callback_structs.map(c => c.struct);

      const SteamCallResultFunctions = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'lib', 'steamcallresultfunctions.json'), 'utf8'));

      const SteamCallBackFunctionNames = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'lib', 'steamcallbackfunctionnames.json'), 'utf8'));

      const setInterfaceKeys = [];
      const nullInterfaces = [];
      const unsetKeys = [];

      for (const key in steam) {
        const accessorKey = key.slice(1);
        if (!key.startsWith('ISteam') || !steam[accessorKey]) {
          continue;
        }
        this[accessorKey] = steam[accessorKey]();
        if (!this[accessorKey]) {
          delete this[accessorKey];
          nullInterfaces.push(key);
        } else {
          for (const record in this[accessorKey]) {
            if (Object.keys(SteamCallResultFunctions).includes(record) && steam.hasOwnProperty(record)) {
              const asyncCall = async (...args) => {
                try {
                  const callresult = steam[record](...args);
                  await WaitForCallResult(callresult);
                  return callresult.GetResult();
                } catch (error) {
                  console.error(error);
                }
              };
              this[accessorKey][record] = asyncCall;
            }
            setInterfaceKeys.push(record);
          }
          setInterfaceKeys.push(key, accessorKey);
        }
      }

      for (const key in steam) {
        if (key.startsWith('SteamAPI_')) {
          this.SteamAPI[key.substr('SteamAPI_'.length)] = steam[key];
          continue;
        }
        if (key.startsWith('ISteam')) {
          continue;
        }
        if (SteamCallBackFunctionNames.includes(key)) {
          this.CallBacks[key] = steam[key];
        } else if (steamApiStructNames.some(name => key.includes(name))) {
          this.Structs[key] = steam[key];
        } else if (steamApiEnumNames.some(name => key.includes(name) || key.includes(name.slice(0, key.indexOf('_'))))) {
          if (!key.startsWith('k') && steamApiEnumNames.some(name => key.includes(name.slice(0, key.indexOf('_'))))) {
            // debugger;
          }
          const enumName = steamApiEnumNames.find(name => key.includes(name));
          set(this.Enums, [enumName, key], steam[key]);
        } else {
          unsetKeys.push(key);
        }
      }

      for (const key of unsetKeys) {
        if (
          !key.startsWith('SteamInternal_') &&
          !key.startsWith('ISteam') &&
          !key.startsWith('SteamGameServer') &&
          !this[key] &&
          !Object.values(SteamCallResultFunctions).some(({ name, parent, result }) => key.includes(name) || key.includes(parent) || key.includes(result)) &&
          !steamApiCallbackStructNames.some(name => key.includes(name))
        ) {
          if (key.toUpperCase() === key || key.startsWith('k')) {
            this.Constants[key] = steam[key];
          } else {
            this.Uncategorized[key] = steam[key];
          }
        }
      }

      if (Object.keys(this.Uncategorized).length === 0) {
        delete this.Uncategorized;
      }
      if (Object.keys(SteamCallResultFunctions).length !== setInterfaceKeys.length) {
        // eslint-disable-next-line no-unused-vars
        const unsetCallResults = Object.keys(SteamCallResultFunctions).filter(name => !setInterfaceKeys.includes(name));
      }
    } catch (error) {
      console.error(error);
      steam.Shutdown();
    }
  }

  Init(appId = 0) {
    this.Shutdown();
    if (appId !== 0) {
      const steamAppIdPath = path.resolve(__dirname, 'steam_appid.txt');
      if (fs.existsSync(steamAppIdPath)) {
        fs.unlinkSync(steamAppIdPath);
      }
      fs.writeFileSync(steamAppIdPath, `${appId}`, 'utf8');
    }

    const success = steam.Init();
    if (!success) {
      throw new Error('Steam API failed to initialize!');
    }
    return success;
  }

  Shutdown() {
    return steam.Shutdown();
  }

  GetApplicationRunning() {
    return steam.GetApplicationRunning();
  }

  GetCallbackThreadRunning() {
    return steam.GetCallbackThreadRunning();
  }
}

module.exports = SteamWorks;
