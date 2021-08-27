# steamworks-node
A wrapper library to call the steamworks API from nodeJS.

# Usage
```js
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
} = require('steamworks-node');

if (SteamAPI.Init() || SteamAPI.IsSteamRunning()) {
  console.log('Steamworks API Initialized!');
}
```
