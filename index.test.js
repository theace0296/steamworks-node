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

    const subscribedItems = [];
    const subscribedFilesResult = await SteamWorks.SteamRemoteStorage.EnumerateUserPublishedFiles(0);
    console.log(`Subscribed files result:\n${JSON.stringify(subscribedFilesResult, null, 2)}`);
    console.log(`Subscribed items:\n${JSON.stringify(subscribedItems, null, 2)}`);

    SteamWorks.Shutdown();
    console.log('PASSED');
    process.exit(0);
  }
  console.error('Steamworks API failed to Initialize!');
  console.error('FAILED');
  process.exit(1);
})();
