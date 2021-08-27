const {
  SteamAPI,
  Constants,
  Structs,
  Enums,
  Uncategorized,
  SteamClient,
  SteamUser,
  SteamFriends,
  SteamUtils,
  SteamMatchmaking,
  SteamMatchmakingServerListResponse,
  SteamMatchmakingPingResponse,
  SteamMatchmakingPlayersResponse,
  SteamMatchmakingRulesResponse,
  SteamMatchmakingServers,
  SteamGameSearch,
  SteamParties,
  SteamRemoteStorage,
  SteamUserStats,
  SteamApps,
  SteamNetworking,
  SteamScreenshots,
  SteamMusic,
  SteamMusicRemote,
  SteamHTTP,
  SteamInput,
  SteamController,
  SteamUGC,
  SteamAppList,
  SteamHTMLSurface,
  SteamInventory,
  SteamVideo,
  SteamParentalSettings,
  SteamRemotePlay,
  SteamNetworkingMessages,
  SteamNetworkingSockets,
  SteamNetworkingUtils,
  SteamGameServer,
  SteamGameServerStats,
} = require('.');

if (SteamAPI.Init() || SteamAPI.IsSteamRunning()) {
  console.log('Steamworks API Initialized! Test passed!');
  process.exit(0);
}
console.error('Steamworks API failed to Initialize! Test failed!');
process.exit(1);
