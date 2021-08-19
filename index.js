const steamworks = require('./steamworks.node');

const SteamAPI = {};
const {
  SteamClient,
  SteamUser,
  SteamFriends,
  SteamUtils,
  SteamMatchmaking,
  SteamUserStats,
  SteamApps,
  SteamNetworking,
  SteamRemoteStorage,
  SteamScreenshots,
  SteamMusic,
  SteamMusicRemote,
  SteamHTTP,
  SteamController,
  SteamUGC,
  SteamAppList,
  SteamHTMLSurface,
  SteamInventory,
  SteamVideo,
  SteamParentalSettings,
  SteamInput,
  SteamRemotePlay,
  SteamNetworkingMessages,
  SteamNetworkingSockets,
  SteamNetworkingUtils,
} = steamworks;

const Constants = {};
const Structs = {};
const Enums = {};

for (const key in steamworks) {
  if (key.startsWith('SteamAPI_')) {
    SteamAPI[key.substr('SteamAPI_'.length)] = steamworks[key];
  } if (key.startsWith('k_') && !key.startsWith('k_E')) {
    Constants[key] = steamworks[key];
  } else if (key.endsWith('_t')) {
    Structs[key] = steamworks[key];
  } else if (key.startsWith('e') || key.startsWith('k_E')) {
    Enums[key] = steamworks[key];
  }
}


module.exports = {
  SteamAPI,
  SteamClient,
  SteamUser,
  SteamFriends,
  SteamUtils,
  SteamMatchmaking,
  SteamUserStats,
  SteamApps,
  SteamNetworking,
  SteamRemoteStorage,
  SteamScreenshots,
  SteamMusic,
  SteamMusicRemote,
  SteamHTTP,
  SteamController,
  SteamUGC,
  SteamAppList,
  SteamHTMLSurface,
  SteamInventory,
  SteamVideo,
  SteamParentalSettings,
  SteamInput,
  SteamRemotePlay,
  SteamNetworkingMessages,
  SteamNetworkingSockets,
  SteamNetworkingUtils,
  Constants,
  Structs,
  Enums,
};