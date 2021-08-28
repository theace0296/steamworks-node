const steamworks = require('.');
const SteamWorks = new steamworks();
const {
  SteamAPI,
  SteamAppList,
  SteamApps,
  SteamController,
  SteamFriends,
  SteamGameSearch,
  SteamGameServer,
  SteamGameServerApps,
  SteamGameServerHTTP,
  SteamGameServerInventory,
  SteamGameServerNetworking,
  SteamGameServerNetworkingMessages,
  SteamGameServerNetworkingSockets,
  SteamGameServerStats,
  SteamGameServerUGC,
  SteamGameServerUtils,
  SteamHTMLSurface,
  SteamHTTP,
  SteamInput,
  SteamInventory,
  SteamMatchmaking,
  SteamMatchmakingServers,
  SteamMusic,
  SteamMusicRemote,
  SteamNetworking,
  SteamNetworkingMessages,
  SteamNetworkingSockets,
  SteamNetworkingUtils,
  SteamParentalSettings,
  SteamParties,
  SteamRemotePlay,
  SteamRemoteStorage,
  SteamScreenshots,
  SteamUGC,
  SteamUser,
  SteamUserStats,
  SteamUtils,
  SteamVideo,
  CallBacks,
  CallResults,
  Constants,
  Enums,
  Structs,
  Uncategorized,
} = SteamWorks;

if (SteamAPI.IsSteamRunning()) {
  console.log('Steamworks API Initialized! Test passed!');
  SteamWorks.Shutdown();
  process.exit(0);
}
console.error('Steamworks API failed to Initialize! Test failed!');
process.exit(1);
