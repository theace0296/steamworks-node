# steamworks-node
A wrapper library to call the steamworks API from nodeJS.

# Usage
```js
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
} = require('steamworks-node');

if (SteamAPI.Init() || SteamAPI.IsSteamRunning()) {
  console.log('Steamworks API Initialized!');
}
```
