/* eslint-disable no-unused-vars */
const Assert = require('assert');
const steamworks = require('.');
const SteamWorks = new steamworks();
const { SteamAPI, Constants, Enums, Structs, Uncategorized } = SteamWorks;

(async () => {
  if (SteamAPI.IsSteamRunning()) {
    console.log('Steamworks API Initialized!');

    const remoteStorageSubscribedFilesResult =
      await SteamWorks.SteamRemoteStorage.EnumerateUserSubscribedFiles(0);
    Assert.deepStrictEqual(Object.keys(remoteStorageSubscribedFilesResult), [
      'm_rgRTimeSubscribed',
      'm_rgPublishedFileId',
      'm_nTotalResultCount',
      'm_nResultsReturned',
      'm_eResult',
    ]);

    const numSubscribedFiles = SteamWorks.SteamUGC.GetNumSubscribedItems();

    Assert.strictEqual(typeof numSubscribedFiles, 'number');

    const subscribedFiles = Array.from(Array(numSubscribedFiles), (_, i) => i);
    const subscribedFilesResult = SteamWorks.SteamUGC.GetSubscribedItems(
      subscribedFiles,
      numSubscribedFiles,
    );

    Assert.strictEqual(subscribedFilesResult, numSubscribedFiles);
    Assert.strictEqual(Array.isArray(subscribedFiles), true);
    Assert.strictEqual(subscribedFiles.length, subscribedFilesResult);

    SteamWorks.Shutdown();
    console.log('PASSED');
    process.exit(0);
  }
  console.error('Steamworks API failed to Initialize!');
  console.error('FAILED');
  process.exit(1);
})();
