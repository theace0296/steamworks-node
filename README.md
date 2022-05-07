![npm](https://img.shields.io/npm/v/@theace0296/steamworks?label=%40theace0296%2Fsteamworks)  ![GitHub release (latest by date)](https://img.shields.io/github/v/release/theace0296/steamworks-node)
# @theace0296/steamworks
A wrapper library to call the Steamworks API from nodeJS.

# Installation
```
npm install @theace0296/steamworks
```

After installing, run the initialization script:
```
npx steamworks-init
```

# [Docs](https://github.com/theace0296/steamworks-node/wiki)

# Basic Usage
```js
const steamworks = require('@theace0296/steamworks');
// The constructor of steamworks's default export calls the Steam API Init function.
const SteamWorks = new steamworks(/* Optional app_id */);
const {
  SteamAPI,
  Constants,
  Enums,
  Structs,
  Uncategorized,
  // Steam API Interfaces are also available at this level see index.d.ts
} = SteamWorks;

(async () => {
  if (SteamAPI.IsSteamRunning()) {
    console.log('Steamworks API Initialized!');

    const remoteStorageSubscribedFilesResult = await SteamWorks.SteamRemoteStorage.EnumerateUserSubscribedFiles(0);
    console.log(`Published files result:\n${JSON.stringify(remoteStorageSubscribedFilesResult)}`);

    const numSubscribedFiles = SteamWorks.SteamUGC.GetNumSubscribedItems();
    const subscribedFiles = Array.from(Array(numSubscribedFiles), (_, i) => i);
    const subscribedFilesResult = SteamWorks.SteamUGC.GetSubscribedItems(subscribedFiles, numSubscribedFiles);
    console.log(`Subscribed files result:\n${JSON.stringify(subscribedFilesResult)}`);
    console.log(`Number of Subscribed files:\n${numSubscribedFiles}`);
    console.log(`Subscribed files:\n${JSON.stringify(subscribedFiles)}`);

    SteamWorks.Shutdown();
  }
  console.error('Steamworks API failed to Initialize!');
})();
```
