/* eslint-disable no-unused-vars */
const Assert = require('assert');
const steamworks = require('.');
const APP_ID = 480;
const SteamWorks = new steamworks(APP_ID);

(async () => {
  if (SteamWorks.SteamAPI.IsSteamRunning()) {
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

    const userSteamId = SteamWorks.SteamUser.GetSteamID();
    const query = SteamWorks.SteamUGC.CreateQueryUserUGCRequest(
      userSteamId.GetAccountID(),
      SteamWorks.Enums.EUserUGCList.Subscribed,
      SteamWorks.Enums.EUGCMatchingUGCType.Items,
      SteamWorks.Enums.EUserUGCListSortOrder.SubscriptionDateDesc,
      APP_ID,
      APP_ID,
      1,
    );

    const result = await SteamWorks.SteamUGC.SendQueryUGCRequest(query);
    if (result.m_eResult === SteamWorks.Enums.EResult.OK) {
      const subscribedItems = [];
      let item = new SteamWorks.Structs.SteamUGCDetails_t();
      for (let i = 0; i < result.m_unNumResultsReturned; i++) {
        SteamWorks.SteamUGC.GetQueryUGCResult(result.m_handle, i, item);
        subscribedItems.push(item.m_nPublishedFileId);
      }
    }

    SteamWorks.SteamUGC.ReleaseQueryUGCRequest(result.m_handle);

    SteamWorks.Shutdown();
    console.log('PASSED');
    process.exit(0);
  }
  console.error('Steamworks API failed to Initialize!');
  console.error('FAILED');
  process.exit(1);
})();
