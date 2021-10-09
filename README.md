# steamworks-node
A wrapper library to call the steamworks API from nodeJS.

# Usage
```js
const steamworks = require('steamworks-node');
// The constructor of steamworks-node's 'steamworks' export calls the Steam API Init function.
const SteamWorks = new steamworks(/* Optional app_id */);
const {
  SteamAPI,
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


# Call Result Functions
Functions listed as 'Call Results' in the Steam API docs return a Promise whose resolved value is the corresponding result. 

# Call Back Functions
```js
// const steamworks = require('steamworks-node');
// const SteamWorks = new steamworks(appId);
const {
  GetVideoURL,
  GetOPFSettings,
} = SteamWorks.CallBacks;
```
