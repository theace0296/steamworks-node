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
```js
// const steamworks = require('steamworks-node');
// const SteamWorks = new steamworks(appId);
const {
  GetFileDetails,
  SetPersonaName,
  DownloadClanActivityCounts,
  RequestClanOfficerList,
  JoinClanChatRoom,
  GetFollowerCount,
  IsFollowing,
  EnumerateFollowingList,
  GetServerReputation,
  AssociateWithClan,
  ComputeNewPlayerCompatibility,
  RequestUserStats,
  StoreUserStats,
  CreateBrowser,
  RequestEligiblePromoItemDefinitionsIDs,
  StartPurchase,
  RequestPrices,
  RequestLobbyList,
  CreateLobby,
  JoinLobby,
  JoinParty,
  CreateBeacon,
  ChangeNumOpenSlots,
  FileWriteAsync,
  FileReadAsync,
  FileShare,
  UGCDownload,
  UGCDownloadToLocation,
  PublishWorkshopFile,
  PublishVideo,
  CommitPublishedFileUpdate,
  GetPublishedFileDetails,
  DeletePublishedFile,
  EnumerateUserPublishedFiles,
  EnumerateUserSharedWorkshopFiles,
  SubscribePublishedFile,
  SubscribeItem,
  EnumerateUserSubscribedFiles,
  UnsubscribePublishedFile,
  UnsubscribeItem,
  GetPublishedItemVoteDetails,
  GetUserPublishedItemVoteDetails,
  UpdateUserPublishedItemVote,
  SetUserPublishedFileAction,
  EnumeratePublishedFilesByUserAction,
  EnumeratePublishedWorkshopFiles,
  SendQueryUGCRequest,
  RequestUGCDetails,
  CreateItem,
  SubmitItemUpdate,
  SetUserItemVote,
  GetUserItemVote,
  AddItemToFavorites,
  RemoveItemFromFavorites,
  StartPlaytimeTracking,
  StopPlaytimeTracking,
  StopPlaytimeTrackingForAllItems,
  AddDependency,
  RemoveDependency,
  AddAppDependency,
  RemoveAppDependency,
  GetAppDependencies,
  DeleteItem,
  RequestEncryptedAppTicket,
  RequestStoreAuthURL,
  GetMarketEligibility,
  GetDurationControl,
  RequestUserStats_CUserStatsReceived,
  FindOrCreateLeaderboard,
  FindLeaderboard,
  DownloadLeaderboardEntries,
  DownloadLeaderboardEntriesForUsers,
  UploadLeaderboardScore,
  AttachLeaderboardUGC,
  GetNumberOfCurrentPlayers,
  RequestGlobalAchievementPercentages,
  RequestGlobalStats,
  CheckFileSignature,
} = SteamWorks.CallResults;
```

# Call Back Functions
```js
// const steamworks = require('steamworks-node');
// const SteamWorks = new steamworks(appId);
const {
  GetVideoURL: CallableFunction;
  GetOPFSettings: CallableFunction;
} = SteamWorks.CallBacks;
```
