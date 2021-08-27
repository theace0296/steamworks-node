const steamworks = require('./steamworks.node');

const set = (obj, path, value) => {
  if (Object(obj) !== obj) {
    return obj;
  }

  if (!Array.isArray(path)) {
    path = path.toString().match(/[^.[\]]+/g) || [];
  }
  path
    .slice(0, -1)
    .reduce(
      (a, c, i) =>
        Object(a[c]) === a[c]
          ? a[c]
          : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {}),
      obj,
    )[path[path.length - 1]] = value;
  return obj;
};

const Exports = {
  SteamAPI: {},
  Constants: {},
  Structs: {},
  Enums: {},
  Uncategorized: {},
};

const setKeys = [];
const unsetKeys = [];
for (const key in steamworks) {
  if (key.startsWith('SteamAPI_')) {
    let subKeys = key.split('_');
    if (subKeys[subKeys.length - 1].length > 1) {
      if (subKeys[1].startsWith('ISteam')) {
        subKeys.shift();
        subKeys[0] = subKeys[0].substr(1);
      }
      set(Exports, subKeys, steamworks[key]);
    } else {
      Exports[key.substr('SteamAPI_'.length)] = steamworks[key];
    }
    setKeys.push(...subKeys);
  } else if (key.startsWith('k_') && !key.startsWith('k_E')) {
    Exports.Constants[key] = steamworks[key];
  } else if (key.endsWith('_t')) {
    Exports.Structs[key] = steamworks[key];
  } else if (key.startsWith('e') || key.startsWith('k_E')) {
    Exports.Enums[key] = steamworks[key];
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
    !Object.keys(Exports).includes(key)
  ) {
    if (key.toUpperCase() === key || key.startsWith('k')) {
      Exports.Constants[key] = steamworks[key];
    } else {
      Exports.Uncategorized[key] = steamworks[key];
    }
  }
}

if (Object.keys(Exports.Uncategorized).length === 0) {
  delete Exports.Uncategorized;
}


module.exports = Exports;
