const {
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
} = require('.');

if (SteamAPI.Init() || SteamAPI.IsSteamRunning()) {
  console.log('Steamworks API Initialized! Test passed!');
  process.exit(0);
}
console.error('Steamworks API failed to Initialize! Test failed!');
process.exit(1);
