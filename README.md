![npm](https://img.shields.io/npm/v/@theace0296/steamworks?label=%40theace0296%2Fsteamworks)  ![GitHub release (latest by date)](https://img.shields.io/github/v/release/theace0296/steamworks-node)
# @theace0296/steamworks
A wrapper library to call the Steamworks API from nodeJS.

# Requirements

This package uses [CMake.js](https://github.com/cmake-js/cmake-js), and therefore requires [CMake](https://cmake.org/download/) to install.

# Installation
```
npm install @theace0296/steamworks
```

After installing, run the initialization script:
```
npx steamworks-init
```
This step will authenticate and download the Steamworks SDK, if you already have the Steamworks SDK on your computer, you can set the `STEAMWORKS_SDK_PATH` environment variable to the location of the Steamworks SDK.

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
    const [subscribedFilesResult, subscribedFiles] =
      SteamWorks.SteamUGC.GetSubscribedItems(numSubscribedFiles);
    console.log(`Subscribed files result:\n${subscribedFilesResult}`);
    console.log(`Number of Subscribed files:\n${numSubscribedFiles}`);
    console.log(`Subscribed files:\n${JSON.stringify(subscribedFiles)}`);

    SteamWorks.Shutdown();
  }
  console.error('Steamworks API failed to Initialize!');
})();
```
