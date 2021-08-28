# steamworks-node
A wrapper library to call the steamworks API from nodeJS.

# Usage
```js
const steamworks = require('steamworks-node');
// The constructor of steamworks-node's 'steamworks' export calls the Steam API Init function.
const SteamWorks = new steamworks(/* Optional app_id */);
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
  console.log('Steamworks API Initialized!');
}
```
