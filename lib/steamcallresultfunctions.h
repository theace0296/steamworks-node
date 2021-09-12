
#include "steamcallresult.h"
namespace CCallResults {

CFileDetailsResult* GetFileDetails(const char * pszFileName) {
  SteamAPICall_t GetFileDetailsCall = SteamApps()->GetFileDetails(pszFileName);
  CFileDetailsResult* GetFileDetailsResult = new CFileDetailsResult(GetFileDetailsCall);
  return GetFileDetailsResult;
};

CSetPersonaNameResponse* SetPersonaName(const char * pchPersonaName) {
  SteamAPICall_t SetPersonaNameCall = SteamFriends()->SetPersonaName(pchPersonaName);
  CSetPersonaNameResponse* SetPersonaNameResult = new CSetPersonaNameResponse(SetPersonaNameCall);
  return SetPersonaNameResult;
};

CDownloadClanActivityCountsResult* DownloadClanActivityCounts(CSteamID * psteamIDClans, int cClansToRequest) {
  SteamAPICall_t DownloadClanActivityCountsCall = SteamFriends()->DownloadClanActivityCounts(psteamIDClans, cClansToRequest);
  CDownloadClanActivityCountsResult* DownloadClanActivityCountsResult = new CDownloadClanActivityCountsResult(DownloadClanActivityCountsCall);
  return DownloadClanActivityCountsResult;
};

CClanOfficerListResponse* RequestClanOfficerList(CSteamID steamIDClan) {
  SteamAPICall_t RequestClanOfficerListCall = SteamFriends()->RequestClanOfficerList(steamIDClan);
  CClanOfficerListResponse* RequestClanOfficerListResult = new CClanOfficerListResponse(RequestClanOfficerListCall);
  return RequestClanOfficerListResult;
};

CJoinClanChatRoomCompletionResult* JoinClanChatRoom(CSteamID steamIDClan) {
  SteamAPICall_t JoinClanChatRoomCall = SteamFriends()->JoinClanChatRoom(steamIDClan);
  CJoinClanChatRoomCompletionResult* JoinClanChatRoomResult = new CJoinClanChatRoomCompletionResult(JoinClanChatRoomCall);
  return JoinClanChatRoomResult;
};

CFriendsGetFollowerCount* GetFollowerCount(CSteamID steamID) {
  SteamAPICall_t GetFollowerCountCall = SteamFriends()->GetFollowerCount(steamID);
  CFriendsGetFollowerCount* GetFollowerCountResult = new CFriendsGetFollowerCount(GetFollowerCountCall);
  return GetFollowerCountResult;
};

CFriendsIsFollowing* IsFollowing(CSteamID steamID) {
  SteamAPICall_t IsFollowingCall = SteamFriends()->IsFollowing(steamID);
  CFriendsIsFollowing* IsFollowingResult = new CFriendsIsFollowing(IsFollowingCall);
  return IsFollowingResult;
};

CFriendsEnumerateFollowingList* EnumerateFollowingList(uint32 unStartIndex) {
  SteamAPICall_t EnumerateFollowingListCall = SteamFriends()->EnumerateFollowingList(unStartIndex);
  CFriendsEnumerateFollowingList* EnumerateFollowingListResult = new CFriendsEnumerateFollowingList(EnumerateFollowingListCall);
  return EnumerateFollowingListResult;
};

CGSReputation* GetServerReputation() {
  SteamAPICall_t GetServerReputationCall = SteamGameServer()->GetServerReputation();
  CGSReputation* GetServerReputationResult = new CGSReputation(GetServerReputationCall);
  return GetServerReputationResult;
};

CAssociateWithClanResult* AssociateWithClan(CSteamID steamIDClan) {
  SteamAPICall_t AssociateWithClanCall = SteamGameServer()->AssociateWithClan(steamIDClan);
  CAssociateWithClanResult* AssociateWithClanResult = new CAssociateWithClanResult(AssociateWithClanCall);
  return AssociateWithClanResult;
};

CComputeNewPlayerCompatibilityResult* ComputeNewPlayerCompatibility(CSteamID steamIDNewPlayer) {
  SteamAPICall_t ComputeNewPlayerCompatibilityCall = SteamGameServer()->ComputeNewPlayerCompatibility(steamIDNewPlayer);
  CComputeNewPlayerCompatibilityResult* ComputeNewPlayerCompatibilityResult = new CComputeNewPlayerCompatibilityResult(ComputeNewPlayerCompatibilityCall);
  return ComputeNewPlayerCompatibilityResult;
};

CGSStatsReceived* RequestUserStats(CSteamID steamIDUser) {
  SteamAPICall_t RequestUserStatsCall = SteamGameServerStats()->RequestUserStats(steamIDUser);
  CGSStatsReceived* RequestUserStatsResult = new CGSStatsReceived(RequestUserStatsCall);
  return RequestUserStatsResult;
};

CGSStatsStored* StoreUserStats(CSteamID steamIDUser) {
  SteamAPICall_t StoreUserStatsCall = SteamGameServerStats()->StoreUserStats(steamIDUser);
  CGSStatsStored* StoreUserStatsResult = new CGSStatsStored(StoreUserStatsCall);
  return StoreUserStatsResult;
};

CHTML_BrowserReady* CreateBrowser(const char * pchUserAgent, const char * pchUserCSS) {
  SteamAPICall_t CreateBrowserCall = SteamHTMLSurface()->CreateBrowser(pchUserAgent, pchUserCSS);
  CHTML_BrowserReady* CreateBrowserResult = new CHTML_BrowserReady(CreateBrowserCall);
  return CreateBrowserResult;
};

CSteamInventoryEligiblePromoItemDefIDs* RequestEligiblePromoItemDefinitionsIDs(CSteamID steamID) {
  SteamAPICall_t RequestEligiblePromoItemDefinitionsIDsCall = SteamInventory()->RequestEligiblePromoItemDefinitionsIDs(steamID);
  CSteamInventoryEligiblePromoItemDefIDs* RequestEligiblePromoItemDefinitionsIDsResult = new CSteamInventoryEligiblePromoItemDefIDs(RequestEligiblePromoItemDefinitionsIDsCall);
  return RequestEligiblePromoItemDefinitionsIDsResult;
};

CSteamInventoryStartPurchaseResult* StartPurchase(const SteamItemDef_t * pArrayItemDefs, const uint32 * punArrayQuantity, uint32 unArrayLength) {
  SteamAPICall_t StartPurchaseCall = SteamInventory()->StartPurchase(pArrayItemDefs, punArrayQuantity, unArrayLength);
  CSteamInventoryStartPurchaseResult* StartPurchaseResult = new CSteamInventoryStartPurchaseResult(StartPurchaseCall);
  return StartPurchaseResult;
};

CSteamInventoryRequestPricesResult* RequestPrices() {
  SteamAPICall_t RequestPricesCall = SteamInventory()->RequestPrices();
  CSteamInventoryRequestPricesResult* RequestPricesResult = new CSteamInventoryRequestPricesResult(RequestPricesCall);
  return RequestPricesResult;
};

CLobbyMatchList* RequestLobbyList() {
  SteamAPICall_t RequestLobbyListCall = SteamMatchmaking()->RequestLobbyList();
  CLobbyMatchList* RequestLobbyListResult = new CLobbyMatchList(RequestLobbyListCall);
  return RequestLobbyListResult;
};

CLobbyCreated* CreateLobby(ELobbyType eLobbyType, int cMaxMembers) {
  SteamAPICall_t CreateLobbyCall = SteamMatchmaking()->CreateLobby(eLobbyType, cMaxMembers);
  CLobbyCreated* CreateLobbyResult = new CLobbyCreated(CreateLobbyCall);
  return CreateLobbyResult;
};

CLobbyEnter* JoinLobby(CSteamID steamIDLobby) {
  SteamAPICall_t JoinLobbyCall = SteamMatchmaking()->JoinLobby(steamIDLobby);
  CLobbyEnter* JoinLobbyResult = new CLobbyEnter(JoinLobbyCall);
  return JoinLobbyResult;
};

CJoinPartyCallback* JoinParty(PartyBeaconID_t ulBeaconID) {
  SteamAPICall_t JoinPartyCall = SteamParties()->JoinParty(ulBeaconID);
  CJoinPartyCallback* JoinPartyResult = new CJoinPartyCallback(JoinPartyCall);
  return JoinPartyResult;
};

CCreateBeaconCallback* CreateBeacon(uint32 unOpenSlots, SteamPartyBeaconLocation_t * pBeaconLocation, const char * pchConnectString, const char * pchMetadata) {
  SteamAPICall_t CreateBeaconCall = SteamParties()->CreateBeacon(unOpenSlots, pBeaconLocation, pchConnectString, pchMetadata);
  CCreateBeaconCallback* CreateBeaconResult = new CCreateBeaconCallback(CreateBeaconCall);
  return CreateBeaconResult;
};

CChangeNumOpenSlotsCallback* ChangeNumOpenSlots(PartyBeaconID_t ulBeacon, uint32 unOpenSlots) {
  SteamAPICall_t ChangeNumOpenSlotsCall = SteamParties()->ChangeNumOpenSlots(ulBeacon, unOpenSlots);
  CChangeNumOpenSlotsCallback* ChangeNumOpenSlotsResult = new CChangeNumOpenSlotsCallback(ChangeNumOpenSlotsCall);
  return ChangeNumOpenSlotsResult;
};

CRemoteStorageFileWriteAsyncComplete* FileWriteAsync(const char * pchFile, const void * pvData, uint32 cubData) {
  SteamAPICall_t FileWriteAsyncCall = SteamRemoteStorage()->FileWriteAsync(pchFile, pvData, cubData);
  CRemoteStorageFileWriteAsyncComplete* FileWriteAsyncResult = new CRemoteStorageFileWriteAsyncComplete(FileWriteAsyncCall);
  return FileWriteAsyncResult;
};

CRemoteStorageFileReadAsyncComplete* FileReadAsync(const char * pchFile, uint32 nOffset, uint32 cubToRead) {
  SteamAPICall_t FileReadAsyncCall = SteamRemoteStorage()->FileReadAsync(pchFile, nOffset, cubToRead);
  CRemoteStorageFileReadAsyncComplete* FileReadAsyncResult = new CRemoteStorageFileReadAsyncComplete(FileReadAsyncCall);
  return FileReadAsyncResult;
};

CRemoteStorageFileShareResult* FileShare(const char * pchFile) {
  SteamAPICall_t FileShareCall = SteamRemoteStorage()->FileShare(pchFile);
  CRemoteStorageFileShareResult* FileShareResult = new CRemoteStorageFileShareResult(FileShareCall);
  return FileShareResult;
};

CRemoteStorageDownloadUGCResult* UGCDownload(UGCHandle_t hContent, uint32 unPriority) {
  SteamAPICall_t UGCDownloadCall = SteamRemoteStorage()->UGCDownload(hContent, unPriority);
  CRemoteStorageDownloadUGCResult* UGCDownloadResult = new CRemoteStorageDownloadUGCResult(UGCDownloadCall);
  return UGCDownloadResult;
};

CRemoteStorageDownloadUGCResult* UGCDownloadToLocation(UGCHandle_t hContent, const char * pchLocation, uint32 unPriority) {
  SteamAPICall_t UGCDownloadToLocationCall = SteamRemoteStorage()->UGCDownloadToLocation(hContent, pchLocation, unPriority);
  CRemoteStorageDownloadUGCResult* UGCDownloadToLocationResult = new CRemoteStorageDownloadUGCResult(UGCDownloadToLocationCall);
  return UGCDownloadToLocationResult;
};

CRemoteStoragePublishFileProgress* PublishWorkshopFile(const char * pchFile, const char * pchPreviewFile, AppId_t nConsumerAppId, const char * pchTitle, const char * pchDescription, ERemoteStoragePublishedFileVisibility eVisibility, SteamParamStringArray_t * pTags, EWorkshopFileType eWorkshopFileType) {
  SteamAPICall_t PublishWorkshopFileCall = SteamRemoteStorage()->PublishWorkshopFile(pchFile, pchPreviewFile, nConsumerAppId, pchTitle, pchDescription, eVisibility, pTags, eWorkshopFileType);
  CRemoteStoragePublishFileProgress* PublishWorkshopFileResult = new CRemoteStoragePublishFileProgress(PublishWorkshopFileCall);
  return PublishWorkshopFileResult;
};

CRemoteStoragePublishFileProgress* PublishVideo(EWorkshopVideoProvider eVideoProvider, const char * pchVideoAccount, const char * pchVideoIdentifier, const char * pchPreviewFile, AppId_t nConsumerAppId, const char * pchTitle, const char * pchDescription, ERemoteStoragePublishedFileVisibility eVisibility, SteamParamStringArray_t * pTags) {
  SteamAPICall_t PublishVideoCall = SteamRemoteStorage()->PublishVideo(eVideoProvider, pchVideoAccount, pchVideoIdentifier, pchPreviewFile, nConsumerAppId, pchTitle, pchDescription, eVisibility, pTags);
  CRemoteStoragePublishFileProgress* PublishVideoResult = new CRemoteStoragePublishFileProgress(PublishVideoCall);
  return PublishVideoResult;
};

CRemoteStorageUpdatePublishedFileResult* CommitPublishedFileUpdate(PublishedFileUpdateHandle_t updateHandle) {
  SteamAPICall_t CommitPublishedFileUpdateCall = SteamRemoteStorage()->CommitPublishedFileUpdate(updateHandle);
  CRemoteStorageUpdatePublishedFileResult* CommitPublishedFileUpdateResult = new CRemoteStorageUpdatePublishedFileResult(CommitPublishedFileUpdateCall);
  return CommitPublishedFileUpdateResult;
};

CRemoteStorageGetPublishedFileDetailsResult* GetPublishedFileDetails(PublishedFileId_t unPublishedFileId, uint32 unMaxSecondsOld) {
  SteamAPICall_t GetPublishedFileDetailsCall = SteamRemoteStorage()->GetPublishedFileDetails(unPublishedFileId, unMaxSecondsOld);
  CRemoteStorageGetPublishedFileDetailsResult* GetPublishedFileDetailsResult = new CRemoteStorageGetPublishedFileDetailsResult(GetPublishedFileDetailsCall);
  return GetPublishedFileDetailsResult;
};

CRemoteStorageDeletePublishedFileResult* DeletePublishedFile(PublishedFileId_t unPublishedFileId) {
  SteamAPICall_t DeletePublishedFileCall = SteamRemoteStorage()->DeletePublishedFile(unPublishedFileId);
  CRemoteStorageDeletePublishedFileResult* DeletePublishedFileResult = new CRemoteStorageDeletePublishedFileResult(DeletePublishedFileCall);
  return DeletePublishedFileResult;
};

CRemoteStorageEnumerateUserPublishedFilesResult* EnumerateUserPublishedFiles(uint32 unStartIndex) {
  SteamAPICall_t EnumerateUserPublishedFilesCall = SteamRemoteStorage()->EnumerateUserPublishedFiles(unStartIndex);
  CRemoteStorageEnumerateUserPublishedFilesResult* EnumerateUserPublishedFilesResult = new CRemoteStorageEnumerateUserPublishedFilesResult(EnumerateUserPublishedFilesCall);
  return EnumerateUserPublishedFilesResult;
};

CRemoteStorageEnumerateUserPublishedFilesResult* EnumerateUserSharedWorkshopFiles(CSteamID steamId, uint32 unStartIndex, SteamParamStringArray_t * pRequiredTags, SteamParamStringArray_t * pExcludedTags) {
  SteamAPICall_t EnumerateUserSharedWorkshopFilesCall = SteamRemoteStorage()->EnumerateUserSharedWorkshopFiles(steamId, unStartIndex, pRequiredTags, pExcludedTags);
  CRemoteStorageEnumerateUserPublishedFilesResult* EnumerateUserSharedWorkshopFilesResult = new CRemoteStorageEnumerateUserPublishedFilesResult(EnumerateUserSharedWorkshopFilesCall);
  return EnumerateUserSharedWorkshopFilesResult;
};

CRemoteStorageSubscribePublishedFileResult* SubscribePublishedFile(PublishedFileId_t unPublishedFileId) {
  SteamAPICall_t SubscribePublishedFileCall = SteamRemoteStorage()->SubscribePublishedFile(unPublishedFileId);
  CRemoteStorageSubscribePublishedFileResult* SubscribePublishedFileResult = new CRemoteStorageSubscribePublishedFileResult(SubscribePublishedFileCall);
  return SubscribePublishedFileResult;
};

CRemoteStorageSubscribePublishedFileResult* SubscribeItem(PublishedFileId_t nPublishedFileID) {
  SteamAPICall_t SubscribeItemCall = SteamUGC()->SubscribeItem(nPublishedFileID);
  CRemoteStorageSubscribePublishedFileResult* SubscribeItemResult = new CRemoteStorageSubscribePublishedFileResult(SubscribeItemCall);
  return SubscribeItemResult;
};

CRemoteStorageEnumerateUserSubscribedFilesResult* EnumerateUserSubscribedFiles(uint32 unStartIndex) {
  SteamAPICall_t EnumerateUserSubscribedFilesCall = SteamRemoteStorage()->EnumerateUserSubscribedFiles(unStartIndex);
  CRemoteStorageEnumerateUserSubscribedFilesResult* EnumerateUserSubscribedFilesResult = new CRemoteStorageEnumerateUserSubscribedFilesResult(EnumerateUserSubscribedFilesCall);
  return EnumerateUserSubscribedFilesResult;
};

CRemoteStorageUnsubscribePublishedFileResult* UnsubscribePublishedFile(PublishedFileId_t unPublishedFileId) {
  SteamAPICall_t UnsubscribePublishedFileCall = SteamRemoteStorage()->UnsubscribePublishedFile(unPublishedFileId);
  CRemoteStorageUnsubscribePublishedFileResult* UnsubscribePublishedFileResult = new CRemoteStorageUnsubscribePublishedFileResult(UnsubscribePublishedFileCall);
  return UnsubscribePublishedFileResult;
};

CRemoteStorageUnsubscribePublishedFileResult* UnsubscribeItem(PublishedFileId_t nPublishedFileID) {
  SteamAPICall_t UnsubscribeItemCall = SteamUGC()->UnsubscribeItem(nPublishedFileID);
  CRemoteStorageUnsubscribePublishedFileResult* UnsubscribeItemResult = new CRemoteStorageUnsubscribePublishedFileResult(UnsubscribeItemCall);
  return UnsubscribeItemResult;
};

CRemoteStorageGetPublishedItemVoteDetailsResult* GetPublishedItemVoteDetails(PublishedFileId_t unPublishedFileId) {
  SteamAPICall_t GetPublishedItemVoteDetailsCall = SteamRemoteStorage()->GetPublishedItemVoteDetails(unPublishedFileId);
  CRemoteStorageGetPublishedItemVoteDetailsResult* GetPublishedItemVoteDetailsResult = new CRemoteStorageGetPublishedItemVoteDetailsResult(GetPublishedItemVoteDetailsCall);
  return GetPublishedItemVoteDetailsResult;
};

CRemoteStorageGetPublishedItemVoteDetailsResult* GetUserPublishedItemVoteDetails(PublishedFileId_t unPublishedFileId) {
  SteamAPICall_t GetUserPublishedItemVoteDetailsCall = SteamRemoteStorage()->GetUserPublishedItemVoteDetails(unPublishedFileId);
  CRemoteStorageGetPublishedItemVoteDetailsResult* GetUserPublishedItemVoteDetailsResult = new CRemoteStorageGetPublishedItemVoteDetailsResult(GetUserPublishedItemVoteDetailsCall);
  return GetUserPublishedItemVoteDetailsResult;
};

CRemoteStorageUpdateUserPublishedItemVoteResult* UpdateUserPublishedItemVote(PublishedFileId_t unPublishedFileId, bool bVoteUp) {
  SteamAPICall_t UpdateUserPublishedItemVoteCall = SteamRemoteStorage()->UpdateUserPublishedItemVote(unPublishedFileId, bVoteUp);
  CRemoteStorageUpdateUserPublishedItemVoteResult* UpdateUserPublishedItemVoteResult = new CRemoteStorageUpdateUserPublishedItemVoteResult(UpdateUserPublishedItemVoteCall);
  return UpdateUserPublishedItemVoteResult;
};

CRemoteStorageSetUserPublishedFileActionResult* SetUserPublishedFileAction(PublishedFileId_t unPublishedFileId, EWorkshopFileAction eAction) {
  SteamAPICall_t SetUserPublishedFileActionCall = SteamRemoteStorage()->SetUserPublishedFileAction(unPublishedFileId, eAction);
  CRemoteStorageSetUserPublishedFileActionResult* SetUserPublishedFileActionResult = new CRemoteStorageSetUserPublishedFileActionResult(SetUserPublishedFileActionCall);
  return SetUserPublishedFileActionResult;
};

CRemoteStorageEnumeratePublishedFilesByUserActionResult* EnumeratePublishedFilesByUserAction(EWorkshopFileAction eAction, uint32 unStartIndex) {
  SteamAPICall_t EnumeratePublishedFilesByUserActionCall = SteamRemoteStorage()->EnumeratePublishedFilesByUserAction(eAction, unStartIndex);
  CRemoteStorageEnumeratePublishedFilesByUserActionResult* EnumeratePublishedFilesByUserActionResult = new CRemoteStorageEnumeratePublishedFilesByUserActionResult(EnumeratePublishedFilesByUserActionCall);
  return EnumeratePublishedFilesByUserActionResult;
};

CRemoteStorageEnumerateWorkshopFilesResult* EnumeratePublishedWorkshopFiles(EWorkshopEnumerationType eEnumerationType, uint32 unStartIndex, uint32 unCount, uint32 unDays, SteamParamStringArray_t * pTags, SteamParamStringArray_t * pUserTags) {
  SteamAPICall_t EnumeratePublishedWorkshopFilesCall = SteamRemoteStorage()->EnumeratePublishedWorkshopFiles(eEnumerationType, unStartIndex, unCount, unDays, pTags, pUserTags);
  CRemoteStorageEnumerateWorkshopFilesResult* EnumeratePublishedWorkshopFilesResult = new CRemoteStorageEnumerateWorkshopFilesResult(EnumeratePublishedWorkshopFilesCall);
  return EnumeratePublishedWorkshopFilesResult;
};

CSteamUGCQueryCompleted* SendQueryUGCRequest(UGCQueryHandle_t handle) {
  SteamAPICall_t SendQueryUGCRequestCall = SteamUGC()->SendQueryUGCRequest(handle);
  CSteamUGCQueryCompleted* SendQueryUGCRequestResult = new CSteamUGCQueryCompleted(SendQueryUGCRequestCall);
  return SendQueryUGCRequestResult;
};

CSteamUGCRequestUGCDetailsResult* RequestUGCDetails(PublishedFileId_t nPublishedFileID, uint32 unMaxAgeSeconds) {
  SteamAPICall_t RequestUGCDetailsCall = SteamUGC()->RequestUGCDetails(nPublishedFileID, unMaxAgeSeconds);
  CSteamUGCRequestUGCDetailsResult* RequestUGCDetailsResult = new CSteamUGCRequestUGCDetailsResult(RequestUGCDetailsCall);
  return RequestUGCDetailsResult;
};

CCreateItemResult* CreateItem(AppId_t nConsumerAppId, EWorkshopFileType eFileType) {
  SteamAPICall_t CreateItemCall = SteamUGC()->CreateItem(nConsumerAppId, eFileType);
  CCreateItemResult* CreateItemResult = new CCreateItemResult(CreateItemCall);
  return CreateItemResult;
};

CSubmitItemUpdateResult* SubmitItemUpdate(UGCUpdateHandle_t handle, const char * pchChangeNote) {
  SteamAPICall_t SubmitItemUpdateCall = SteamUGC()->SubmitItemUpdate(handle, pchChangeNote);
  CSubmitItemUpdateResult* SubmitItemUpdateResult = new CSubmitItemUpdateResult(SubmitItemUpdateCall);
  return SubmitItemUpdateResult;
};

CSetUserItemVoteResult* SetUserItemVote(PublishedFileId_t nPublishedFileID, bool bVoteUp) {
  SteamAPICall_t SetUserItemVoteCall = SteamUGC()->SetUserItemVote(nPublishedFileID, bVoteUp);
  CSetUserItemVoteResult* SetUserItemVoteResult = new CSetUserItemVoteResult(SetUserItemVoteCall);
  return SetUserItemVoteResult;
};

CGetUserItemVoteResult* GetUserItemVote(PublishedFileId_t nPublishedFileID) {
  SteamAPICall_t GetUserItemVoteCall = SteamUGC()->GetUserItemVote(nPublishedFileID);
  CGetUserItemVoteResult* GetUserItemVoteResult = new CGetUserItemVoteResult(GetUserItemVoteCall);
  return GetUserItemVoteResult;
};

CUserFavoriteItemsListChanged* AddItemToFavorites(AppId_t nAppId, PublishedFileId_t nPublishedFileID) {
  SteamAPICall_t AddItemToFavoritesCall = SteamUGC()->AddItemToFavorites(nAppId, nPublishedFileID);
  CUserFavoriteItemsListChanged* AddItemToFavoritesResult = new CUserFavoriteItemsListChanged(AddItemToFavoritesCall);
  return AddItemToFavoritesResult;
};

CUserFavoriteItemsListChanged* RemoveItemFromFavorites(AppId_t nAppId, PublishedFileId_t nPublishedFileID) {
  SteamAPICall_t RemoveItemFromFavoritesCall = SteamUGC()->RemoveItemFromFavorites(nAppId, nPublishedFileID);
  CUserFavoriteItemsListChanged* RemoveItemFromFavoritesResult = new CUserFavoriteItemsListChanged(RemoveItemFromFavoritesCall);
  return RemoveItemFromFavoritesResult;
};

CStartPlaytimeTrackingResult* StartPlaytimeTracking(PublishedFileId_t * pvecPublishedFileID, uint32 unNumPublishedFileIDs) {
  SteamAPICall_t StartPlaytimeTrackingCall = SteamUGC()->StartPlaytimeTracking(pvecPublishedFileID, unNumPublishedFileIDs);
  CStartPlaytimeTrackingResult* StartPlaytimeTrackingResult = new CStartPlaytimeTrackingResult(StartPlaytimeTrackingCall);
  return StartPlaytimeTrackingResult;
};

CStopPlaytimeTrackingResult* StopPlaytimeTracking(PublishedFileId_t * pvecPublishedFileID, uint32 unNumPublishedFileIDs) {
  SteamAPICall_t StopPlaytimeTrackingCall = SteamUGC()->StopPlaytimeTracking(pvecPublishedFileID, unNumPublishedFileIDs);
  CStopPlaytimeTrackingResult* StopPlaytimeTrackingResult = new CStopPlaytimeTrackingResult(StopPlaytimeTrackingCall);
  return StopPlaytimeTrackingResult;
};

CStopPlaytimeTrackingResult* StopPlaytimeTrackingForAllItems() {
  SteamAPICall_t StopPlaytimeTrackingForAllItemsCall = SteamUGC()->StopPlaytimeTrackingForAllItems();
  CStopPlaytimeTrackingResult* StopPlaytimeTrackingForAllItemsResult = new CStopPlaytimeTrackingResult(StopPlaytimeTrackingForAllItemsCall);
  return StopPlaytimeTrackingForAllItemsResult;
};

CAddUGCDependencyResult* AddDependency(PublishedFileId_t nParentPublishedFileID, PublishedFileId_t nChildPublishedFileID) {
  SteamAPICall_t AddDependencyCall = SteamUGC()->AddDependency(nParentPublishedFileID, nChildPublishedFileID);
  CAddUGCDependencyResult* AddDependencyResult = new CAddUGCDependencyResult(AddDependencyCall);
  return AddDependencyResult;
};

CRemoveUGCDependencyResult* RemoveDependency(PublishedFileId_t nParentPublishedFileID, PublishedFileId_t nChildPublishedFileID) {
  SteamAPICall_t RemoveDependencyCall = SteamUGC()->RemoveDependency(nParentPublishedFileID, nChildPublishedFileID);
  CRemoveUGCDependencyResult* RemoveDependencyResult = new CRemoveUGCDependencyResult(RemoveDependencyCall);
  return RemoveDependencyResult;
};

CAddAppDependencyResult* AddAppDependency(PublishedFileId_t nPublishedFileID, AppId_t nAppID) {
  SteamAPICall_t AddAppDependencyCall = SteamUGC()->AddAppDependency(nPublishedFileID, nAppID);
  CAddAppDependencyResult* AddAppDependencyResult = new CAddAppDependencyResult(AddAppDependencyCall);
  return AddAppDependencyResult;
};

CRemoveAppDependencyResult* RemoveAppDependency(PublishedFileId_t nPublishedFileID, AppId_t nAppID) {
  SteamAPICall_t RemoveAppDependencyCall = SteamUGC()->RemoveAppDependency(nPublishedFileID, nAppID);
  CRemoveAppDependencyResult* RemoveAppDependencyResult = new CRemoveAppDependencyResult(RemoveAppDependencyCall);
  return RemoveAppDependencyResult;
};

CGetAppDependenciesResult* GetAppDependencies(PublishedFileId_t nPublishedFileID) {
  SteamAPICall_t GetAppDependenciesCall = SteamUGC()->GetAppDependencies(nPublishedFileID);
  CGetAppDependenciesResult* GetAppDependenciesResult = new CGetAppDependenciesResult(GetAppDependenciesCall);
  return GetAppDependenciesResult;
};

CDeleteItemResult* DeleteItem(PublishedFileId_t nPublishedFileID) {
  SteamAPICall_t DeleteItemCall = SteamUGC()->DeleteItem(nPublishedFileID);
  CDeleteItemResult* DeleteItemResult = new CDeleteItemResult(DeleteItemCall);
  return DeleteItemResult;
};

CEncryptedAppTicketResponse* RequestEncryptedAppTicket(void * pDataToInclude, int cbDataToInclude) {
  SteamAPICall_t RequestEncryptedAppTicketCall = SteamUser()->RequestEncryptedAppTicket(pDataToInclude, cbDataToInclude);
  CEncryptedAppTicketResponse* RequestEncryptedAppTicketResult = new CEncryptedAppTicketResponse(RequestEncryptedAppTicketCall);
  return RequestEncryptedAppTicketResult;
};

CStoreAuthURLResponse* RequestStoreAuthURL(const char * pchRedirectURL) {
  SteamAPICall_t RequestStoreAuthURLCall = SteamUser()->RequestStoreAuthURL(pchRedirectURL);
  CStoreAuthURLResponse* RequestStoreAuthURLResult = new CStoreAuthURLResponse(RequestStoreAuthURLCall);
  return RequestStoreAuthURLResult;
};

CMarketEligibilityResponse* GetMarketEligibility() {
  SteamAPICall_t GetMarketEligibilityCall = SteamUser()->GetMarketEligibility();
  CMarketEligibilityResponse* GetMarketEligibilityResult = new CMarketEligibilityResponse(GetMarketEligibilityCall);
  return GetMarketEligibilityResult;
};

CDurationControl* GetDurationControl() {
  SteamAPICall_t GetDurationControlCall = SteamUser()->GetDurationControl();
  CDurationControl* GetDurationControlResult = new CDurationControl(GetDurationControlCall);
  return GetDurationControlResult;
};

CUserStatsReceived* RequestUserStats_CUserStatsReceived(CSteamID steamIDUser) {
  SteamAPICall_t RequestUserStatsCall = SteamUserStats()->RequestUserStats(steamIDUser);
  CUserStatsReceived* RequestUserStatsResult = new CUserStatsReceived(RequestUserStatsCall);
  return RequestUserStatsResult;
};

CLeaderboardFindResult* FindOrCreateLeaderboard(const char * pchLeaderboardName, ELeaderboardSortMethod eLeaderboardSortMethod, ELeaderboardDisplayType eLeaderboardDisplayType) {
  SteamAPICall_t FindOrCreateLeaderboardCall = SteamUserStats()->FindOrCreateLeaderboard(pchLeaderboardName, eLeaderboardSortMethod, eLeaderboardDisplayType);
  CLeaderboardFindResult* FindOrCreateLeaderboardResult = new CLeaderboardFindResult(FindOrCreateLeaderboardCall);
  return FindOrCreateLeaderboardResult;
};

CLeaderboardFindResult* FindLeaderboard(const char * pchLeaderboardName) {
  SteamAPICall_t FindLeaderboardCall = SteamUserStats()->FindLeaderboard(pchLeaderboardName);
  CLeaderboardFindResult* FindLeaderboardResult = new CLeaderboardFindResult(FindLeaderboardCall);
  return FindLeaderboardResult;
};

CLeaderboardScoresDownloaded* DownloadLeaderboardEntries(SteamLeaderboard_t hSteamLeaderboard, ELeaderboardDataRequest eLeaderboardDataRequest, int nRangeStart, int nRangeEnd) {
  SteamAPICall_t DownloadLeaderboardEntriesCall = SteamUserStats()->DownloadLeaderboardEntries(hSteamLeaderboard, eLeaderboardDataRequest, nRangeStart, nRangeEnd);
  CLeaderboardScoresDownloaded* DownloadLeaderboardEntriesResult = new CLeaderboardScoresDownloaded(DownloadLeaderboardEntriesCall);
  return DownloadLeaderboardEntriesResult;
};

CLeaderboardScoresDownloaded* DownloadLeaderboardEntriesForUsers(SteamLeaderboard_t hSteamLeaderboard, CSteamID * prgUsers, int cUsers) {
  SteamAPICall_t DownloadLeaderboardEntriesForUsersCall = SteamUserStats()->DownloadLeaderboardEntriesForUsers(hSteamLeaderboard, prgUsers, cUsers);
  CLeaderboardScoresDownloaded* DownloadLeaderboardEntriesForUsersResult = new CLeaderboardScoresDownloaded(DownloadLeaderboardEntriesForUsersCall);
  return DownloadLeaderboardEntriesForUsersResult;
};

CLeaderboardScoreUploaded* UploadLeaderboardScore(SteamLeaderboard_t hSteamLeaderboard, ELeaderboardUploadScoreMethod eLeaderboardUploadScoreMethod, int32 nScore, const int32 * pScoreDetails, int cScoreDetailsCount) {
  SteamAPICall_t UploadLeaderboardScoreCall = SteamUserStats()->UploadLeaderboardScore(hSteamLeaderboard, eLeaderboardUploadScoreMethod, nScore, pScoreDetails, cScoreDetailsCount);
  CLeaderboardScoreUploaded* UploadLeaderboardScoreResult = new CLeaderboardScoreUploaded(UploadLeaderboardScoreCall);
  return UploadLeaderboardScoreResult;
};

CLeaderboardUGCSet* AttachLeaderboardUGC(SteamLeaderboard_t hSteamLeaderboard, UGCHandle_t hUGC) {
  SteamAPICall_t AttachLeaderboardUGCCall = SteamUserStats()->AttachLeaderboardUGC(hSteamLeaderboard, hUGC);
  CLeaderboardUGCSet* AttachLeaderboardUGCResult = new CLeaderboardUGCSet(AttachLeaderboardUGCCall);
  return AttachLeaderboardUGCResult;
};

CNumberOfCurrentPlayers* GetNumberOfCurrentPlayers() {
  SteamAPICall_t GetNumberOfCurrentPlayersCall = SteamUserStats()->GetNumberOfCurrentPlayers();
  CNumberOfCurrentPlayers* GetNumberOfCurrentPlayersResult = new CNumberOfCurrentPlayers(GetNumberOfCurrentPlayersCall);
  return GetNumberOfCurrentPlayersResult;
};

CGlobalAchievementPercentagesReady* RequestGlobalAchievementPercentages() {
  SteamAPICall_t RequestGlobalAchievementPercentagesCall = SteamUserStats()->RequestGlobalAchievementPercentages();
  CGlobalAchievementPercentagesReady* RequestGlobalAchievementPercentagesResult = new CGlobalAchievementPercentagesReady(RequestGlobalAchievementPercentagesCall);
  return RequestGlobalAchievementPercentagesResult;
};

CGlobalStatsReceived* RequestGlobalStats(int nHistoryDays) {
  SteamAPICall_t RequestGlobalStatsCall = SteamUserStats()->RequestGlobalStats(nHistoryDays);
  CGlobalStatsReceived* RequestGlobalStatsResult = new CGlobalStatsReceived(RequestGlobalStatsCall);
  return RequestGlobalStatsResult;
};

CCheckFileSignature* CheckFileSignature(const char * szFileName) {
  SteamAPICall_t CheckFileSignatureCall = SteamUtils()->CheckFileSignature(szFileName);
  CCheckFileSignature* CheckFileSignatureResult = new CCheckFileSignature(CheckFileSignatureCall);
  return CheckFileSignatureResult;
};

};
