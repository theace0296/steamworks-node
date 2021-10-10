# steamworks-node
A wrapper library to call the steamworks API from nodeJS.

# Usage
```js
const steamworks = require('steamworks-node');
// The constructor of steamworks-node's 'steamworks' export calls the Steam API Init function.
const SteamWorks = new steamworks(/* Optional app_id */);
const {
  SteamAPI,
  Constants,
  Enums,
  Structs,
  Uncategorized,
  // Steam API Interfaces are also available at this level see index.d.ts
} = SteamWorks;

if (SteamAPI.IsSteamRunning()) {
  console.log('Steamworks API Initialized!');
}
```


# Call Result and Callback Functions
Functions listed as 'Call Results' or 'Callbacks' in the Steam API docs return a Promise whose resolved value is the corresponding result.
