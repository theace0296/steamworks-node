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
    Assert.deepStrictEqual(
      Object.entries(remoteStorageSubscribedFilesResult).map(([key, value]) => [
        key,
        Object.prototype.toString.call(value),
      ]),
      [
        ['m_rgRTimeSubscribed', '[object Array]'],
        ['m_rgPublishedFileId', '[object Array]'],
        ['m_nTotalResultCount', '[object Number]'],
        ['m_nResultsReturned', '[object Number]'],
        ['m_eResult', '[object Number]'],
      ],
    );

    const numSubscribedFiles = SteamWorks.SteamUGC.GetNumSubscribedItems();

    Assert.strictEqual(typeof numSubscribedFiles, 'number');

    const [subscribedFilesResult, subscribedFiles] =
      SteamWorks.SteamUGC.GetSubscribedItems(numSubscribedFiles);

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
