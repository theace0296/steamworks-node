/* eslint-disable no-unused-vars */
const Assert = require('assert');
const steamworks = require('.');
const SteamWorks = new steamworks();
const {
  SteamAPI,
  Constants,
  Enums,
  Structs,
  Uncategorized,
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
    console.log('PASSED');
    process.exit(0);
  }
  console.error('Steamworks API failed to Initialize!');
  console.error('FAILED');
  process.exit(1);
})();
