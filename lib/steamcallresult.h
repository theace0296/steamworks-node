
#include <stdio.h>
#include "steam_api.h"
#include "isteamgameserver.h"
#include "isteamgameserverstats.h"
namespace CCallResults {

  class CFileDetailsResult {
    public:
      CFileDetailsResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      FileDetailsResult_t GetResult();
    private:
      void OnFileDetailsResult(FileDetailsResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CFileDetailsResult, FileDetailsResult_t> m_callresult;
      FileDetailsResult_t m_result;
      bool m_isComplete;
  };

  class CSetPersonaNameResponse {
    public:
      CSetPersonaNameResponse(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      SetPersonaNameResponse_t GetResult();
    private:
      void OnSetPersonaNameResponse(SetPersonaNameResponse_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CSetPersonaNameResponse, SetPersonaNameResponse_t> m_callresult;
      SetPersonaNameResponse_t m_result;
      bool m_isComplete;
  };

  class CDownloadClanActivityCountsResult {
    public:
      CDownloadClanActivityCountsResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      DownloadClanActivityCountsResult_t GetResult();
    private:
      void OnDownloadClanActivityCountsResult(DownloadClanActivityCountsResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CDownloadClanActivityCountsResult, DownloadClanActivityCountsResult_t> m_callresult;
      DownloadClanActivityCountsResult_t m_result;
      bool m_isComplete;
  };

  class CClanOfficerListResponse {
    public:
      CClanOfficerListResponse(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      ClanOfficerListResponse_t GetResult();
    private:
      void OnClanOfficerListResponse(ClanOfficerListResponse_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CClanOfficerListResponse, ClanOfficerListResponse_t> m_callresult;
      ClanOfficerListResponse_t m_result;
      bool m_isComplete;
  };

  class CJoinClanChatRoomCompletionResult {
    public:
      CJoinClanChatRoomCompletionResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      JoinClanChatRoomCompletionResult_t GetResult();
    private:
      void OnJoinClanChatRoomCompletionResult(JoinClanChatRoomCompletionResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CJoinClanChatRoomCompletionResult, JoinClanChatRoomCompletionResult_t> m_callresult;
      JoinClanChatRoomCompletionResult_t m_result;
      bool m_isComplete;
  };

  class CFriendsGetFollowerCount {
    public:
      CFriendsGetFollowerCount(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      FriendsGetFollowerCount_t GetResult();
    private:
      void OnFriendsGetFollowerCount(FriendsGetFollowerCount_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CFriendsGetFollowerCount, FriendsGetFollowerCount_t> m_callresult;
      FriendsGetFollowerCount_t m_result;
      bool m_isComplete;
  };

  class CFriendsIsFollowing {
    public:
      CFriendsIsFollowing(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      FriendsIsFollowing_t GetResult();
    private:
      void OnFriendsIsFollowing(FriendsIsFollowing_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CFriendsIsFollowing, FriendsIsFollowing_t> m_callresult;
      FriendsIsFollowing_t m_result;
      bool m_isComplete;
  };

  class CFriendsEnumerateFollowingList {
    public:
      CFriendsEnumerateFollowingList(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      FriendsEnumerateFollowingList_t GetResult();
    private:
      void OnFriendsEnumerateFollowingList(FriendsEnumerateFollowingList_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CFriendsEnumerateFollowingList, FriendsEnumerateFollowingList_t> m_callresult;
      FriendsEnumerateFollowingList_t m_result;
      bool m_isComplete;
  };

  class CGSReputation {
    public:
      CGSReputation(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      GSReputation_t GetResult();
    private:
      void OnGSReputation(GSReputation_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CGSReputation, GSReputation_t> m_callresult;
      GSReputation_t m_result;
      bool m_isComplete;
  };

  class CAssociateWithClanResult {
    public:
      CAssociateWithClanResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      AssociateWithClanResult_t GetResult();
    private:
      void OnAssociateWithClanResult(AssociateWithClanResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CAssociateWithClanResult, AssociateWithClanResult_t> m_callresult;
      AssociateWithClanResult_t m_result;
      bool m_isComplete;
  };

  class CComputeNewPlayerCompatibilityResult {
    public:
      CComputeNewPlayerCompatibilityResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      ComputeNewPlayerCompatibilityResult_t GetResult();
    private:
      void OnComputeNewPlayerCompatibilityResult(ComputeNewPlayerCompatibilityResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CComputeNewPlayerCompatibilityResult, ComputeNewPlayerCompatibilityResult_t> m_callresult;
      ComputeNewPlayerCompatibilityResult_t m_result;
      bool m_isComplete;
  };

  class CGSStatsReceived {
    public:
      CGSStatsReceived(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      GSStatsReceived_t GetResult();
    private:
      void OnGSStatsReceived(GSStatsReceived_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CGSStatsReceived, GSStatsReceived_t> m_callresult;
      GSStatsReceived_t m_result;
      bool m_isComplete;
  };

  class CGSStatsStored {
    public:
      CGSStatsStored(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      GSStatsStored_t GetResult();
    private:
      void OnGSStatsStored(GSStatsStored_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CGSStatsStored, GSStatsStored_t> m_callresult;
      GSStatsStored_t m_result;
      bool m_isComplete;
  };

  class CHTML_BrowserReady {
    public:
      CHTML_BrowserReady(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      HTML_BrowserReady_t GetResult();
    private:
      void OnHTML_BrowserReady(HTML_BrowserReady_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CHTML_BrowserReady, HTML_BrowserReady_t> m_callresult;
      HTML_BrowserReady_t m_result;
      bool m_isComplete;
  };

  class CSteamInventoryEligiblePromoItemDefIDs {
    public:
      CSteamInventoryEligiblePromoItemDefIDs(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      SteamInventoryEligiblePromoItemDefIDs_t GetResult();
    private:
      void OnSteamInventoryEligiblePromoItemDefIDs(SteamInventoryEligiblePromoItemDefIDs_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CSteamInventoryEligiblePromoItemDefIDs, SteamInventoryEligiblePromoItemDefIDs_t> m_callresult;
      SteamInventoryEligiblePromoItemDefIDs_t m_result;
      bool m_isComplete;
  };

  class CSteamInventoryStartPurchaseResult {
    public:
      CSteamInventoryStartPurchaseResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      SteamInventoryStartPurchaseResult_t GetResult();
    private:
      void OnSteamInventoryStartPurchaseResult(SteamInventoryStartPurchaseResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CSteamInventoryStartPurchaseResult, SteamInventoryStartPurchaseResult_t> m_callresult;
      SteamInventoryStartPurchaseResult_t m_result;
      bool m_isComplete;
  };

  class CSteamInventoryRequestPricesResult {
    public:
      CSteamInventoryRequestPricesResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      SteamInventoryRequestPricesResult_t GetResult();
    private:
      void OnSteamInventoryRequestPricesResult(SteamInventoryRequestPricesResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CSteamInventoryRequestPricesResult, SteamInventoryRequestPricesResult_t> m_callresult;
      SteamInventoryRequestPricesResult_t m_result;
      bool m_isComplete;
  };

  class CLobbyMatchList {
    public:
      CLobbyMatchList(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      LobbyMatchList_t GetResult();
    private:
      void OnLobbyMatchList(LobbyMatchList_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CLobbyMatchList, LobbyMatchList_t> m_callresult;
      LobbyMatchList_t m_result;
      bool m_isComplete;
  };

  class CLobbyCreated {
    public:
      CLobbyCreated(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      LobbyCreated_t GetResult();
    private:
      void OnLobbyCreated(LobbyCreated_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CLobbyCreated, LobbyCreated_t> m_callresult;
      LobbyCreated_t m_result;
      bool m_isComplete;
  };

  class CLobbyEnter {
    public:
      CLobbyEnter(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      LobbyEnter_t GetResult();
    private:
      void OnLobbyEnter(LobbyEnter_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CLobbyEnter, LobbyEnter_t> m_callresult;
      LobbyEnter_t m_result;
      bool m_isComplete;
  };

  class CJoinPartyCallback {
    public:
      CJoinPartyCallback(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      JoinPartyCallback_t GetResult();
    private:
      void OnJoinPartyCallback(JoinPartyCallback_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CJoinPartyCallback, JoinPartyCallback_t> m_callresult;
      JoinPartyCallback_t m_result;
      bool m_isComplete;
  };

  class CCreateBeaconCallback {
    public:
      CCreateBeaconCallback(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      CreateBeaconCallback_t GetResult();
    private:
      void OnCreateBeaconCallback(CreateBeaconCallback_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CCreateBeaconCallback, CreateBeaconCallback_t> m_callresult;
      CreateBeaconCallback_t m_result;
      bool m_isComplete;
  };

  class CChangeNumOpenSlotsCallback {
    public:
      CChangeNumOpenSlotsCallback(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      ChangeNumOpenSlotsCallback_t GetResult();
    private:
      void OnChangeNumOpenSlotsCallback(ChangeNumOpenSlotsCallback_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CChangeNumOpenSlotsCallback, ChangeNumOpenSlotsCallback_t> m_callresult;
      ChangeNumOpenSlotsCallback_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageFileWriteAsyncComplete {
    public:
      CRemoteStorageFileWriteAsyncComplete(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageFileWriteAsyncComplete_t GetResult();
    private:
      void OnRemoteStorageFileWriteAsyncComplete(RemoteStorageFileWriteAsyncComplete_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageFileWriteAsyncComplete, RemoteStorageFileWriteAsyncComplete_t> m_callresult;
      RemoteStorageFileWriteAsyncComplete_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageFileReadAsyncComplete {
    public:
      CRemoteStorageFileReadAsyncComplete(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageFileReadAsyncComplete_t GetResult();
    private:
      void OnRemoteStorageFileReadAsyncComplete(RemoteStorageFileReadAsyncComplete_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageFileReadAsyncComplete, RemoteStorageFileReadAsyncComplete_t> m_callresult;
      RemoteStorageFileReadAsyncComplete_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageFileShareResult {
    public:
      CRemoteStorageFileShareResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageFileShareResult_t GetResult();
    private:
      void OnRemoteStorageFileShareResult(RemoteStorageFileShareResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageFileShareResult, RemoteStorageFileShareResult_t> m_callresult;
      RemoteStorageFileShareResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageDownloadUGCResult {
    public:
      CRemoteStorageDownloadUGCResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageDownloadUGCResult_t GetResult();
    private:
      void OnRemoteStorageDownloadUGCResult(RemoteStorageDownloadUGCResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageDownloadUGCResult, RemoteStorageDownloadUGCResult_t> m_callresult;
      RemoteStorageDownloadUGCResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStoragePublishFileProgress {
    public:
      CRemoteStoragePublishFileProgress(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStoragePublishFileProgress_t GetResult();
    private:
      void OnRemoteStoragePublishFileProgress(RemoteStoragePublishFileProgress_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStoragePublishFileProgress, RemoteStoragePublishFileProgress_t> m_callresult;
      RemoteStoragePublishFileProgress_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageUpdatePublishedFileResult {
    public:
      CRemoteStorageUpdatePublishedFileResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageUpdatePublishedFileResult_t GetResult();
    private:
      void OnRemoteStorageUpdatePublishedFileResult(RemoteStorageUpdatePublishedFileResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageUpdatePublishedFileResult, RemoteStorageUpdatePublishedFileResult_t> m_callresult;
      RemoteStorageUpdatePublishedFileResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageGetPublishedFileDetailsResult {
    public:
      CRemoteStorageGetPublishedFileDetailsResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageGetPublishedFileDetailsResult_t GetResult();
    private:
      void OnRemoteStorageGetPublishedFileDetailsResult(RemoteStorageGetPublishedFileDetailsResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageGetPublishedFileDetailsResult, RemoteStorageGetPublishedFileDetailsResult_t> m_callresult;
      RemoteStorageGetPublishedFileDetailsResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageDeletePublishedFileResult {
    public:
      CRemoteStorageDeletePublishedFileResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageDeletePublishedFileResult_t GetResult();
    private:
      void OnRemoteStorageDeletePublishedFileResult(RemoteStorageDeletePublishedFileResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageDeletePublishedFileResult, RemoteStorageDeletePublishedFileResult_t> m_callresult;
      RemoteStorageDeletePublishedFileResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageEnumerateUserPublishedFilesResult {
    public:
      CRemoteStorageEnumerateUserPublishedFilesResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageEnumerateUserPublishedFilesResult_t GetResult();
    private:
      void OnRemoteStorageEnumerateUserPublishedFilesResult(RemoteStorageEnumerateUserPublishedFilesResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageEnumerateUserPublishedFilesResult, RemoteStorageEnumerateUserPublishedFilesResult_t> m_callresult;
      RemoteStorageEnumerateUserPublishedFilesResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageSubscribePublishedFileResult {
    public:
      CRemoteStorageSubscribePublishedFileResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageSubscribePublishedFileResult_t GetResult();
    private:
      void OnRemoteStorageSubscribePublishedFileResult(RemoteStorageSubscribePublishedFileResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageSubscribePublishedFileResult, RemoteStorageSubscribePublishedFileResult_t> m_callresult;
      RemoteStorageSubscribePublishedFileResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageEnumerateUserSubscribedFilesResult {
    public:
      CRemoteStorageEnumerateUserSubscribedFilesResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageEnumerateUserSubscribedFilesResult_t GetResult();
    private:
      void OnRemoteStorageEnumerateUserSubscribedFilesResult(RemoteStorageEnumerateUserSubscribedFilesResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageEnumerateUserSubscribedFilesResult, RemoteStorageEnumerateUserSubscribedFilesResult_t> m_callresult;
      RemoteStorageEnumerateUserSubscribedFilesResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageUnsubscribePublishedFileResult {
    public:
      CRemoteStorageUnsubscribePublishedFileResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageUnsubscribePublishedFileResult_t GetResult();
    private:
      void OnRemoteStorageUnsubscribePublishedFileResult(RemoteStorageUnsubscribePublishedFileResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageUnsubscribePublishedFileResult, RemoteStorageUnsubscribePublishedFileResult_t> m_callresult;
      RemoteStorageUnsubscribePublishedFileResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageGetPublishedItemVoteDetailsResult {
    public:
      CRemoteStorageGetPublishedItemVoteDetailsResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageGetPublishedItemVoteDetailsResult_t GetResult();
    private:
      void OnRemoteStorageGetPublishedItemVoteDetailsResult(RemoteStorageGetPublishedItemVoteDetailsResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageGetPublishedItemVoteDetailsResult, RemoteStorageGetPublishedItemVoteDetailsResult_t> m_callresult;
      RemoteStorageGetPublishedItemVoteDetailsResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageUpdateUserPublishedItemVoteResult {
    public:
      CRemoteStorageUpdateUserPublishedItemVoteResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageUpdateUserPublishedItemVoteResult_t GetResult();
    private:
      void OnRemoteStorageUpdateUserPublishedItemVoteResult(RemoteStorageUpdateUserPublishedItemVoteResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageUpdateUserPublishedItemVoteResult, RemoteStorageUpdateUserPublishedItemVoteResult_t> m_callresult;
      RemoteStorageUpdateUserPublishedItemVoteResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageSetUserPublishedFileActionResult {
    public:
      CRemoteStorageSetUserPublishedFileActionResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageSetUserPublishedFileActionResult_t GetResult();
    private:
      void OnRemoteStorageSetUserPublishedFileActionResult(RemoteStorageSetUserPublishedFileActionResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageSetUserPublishedFileActionResult, RemoteStorageSetUserPublishedFileActionResult_t> m_callresult;
      RemoteStorageSetUserPublishedFileActionResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageEnumeratePublishedFilesByUserActionResult {
    public:
      CRemoteStorageEnumeratePublishedFilesByUserActionResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageEnumeratePublishedFilesByUserActionResult_t GetResult();
    private:
      void OnRemoteStorageEnumeratePublishedFilesByUserActionResult(RemoteStorageEnumeratePublishedFilesByUserActionResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageEnumeratePublishedFilesByUserActionResult, RemoteStorageEnumeratePublishedFilesByUserActionResult_t> m_callresult;
      RemoteStorageEnumeratePublishedFilesByUserActionResult_t m_result;
      bool m_isComplete;
  };

  class CRemoteStorageEnumerateWorkshopFilesResult {
    public:
      CRemoteStorageEnumerateWorkshopFilesResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoteStorageEnumerateWorkshopFilesResult_t GetResult();
    private:
      void OnRemoteStorageEnumerateWorkshopFilesResult(RemoteStorageEnumerateWorkshopFilesResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoteStorageEnumerateWorkshopFilesResult, RemoteStorageEnumerateWorkshopFilesResult_t> m_callresult;
      RemoteStorageEnumerateWorkshopFilesResult_t m_result;
      bool m_isComplete;
  };

  class CSteamUGCQueryCompleted {
    public:
      CSteamUGCQueryCompleted(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      SteamUGCQueryCompleted_t GetResult();
    private:
      void OnSteamUGCQueryCompleted(SteamUGCQueryCompleted_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CSteamUGCQueryCompleted, SteamUGCQueryCompleted_t> m_callresult;
      SteamUGCQueryCompleted_t m_result;
      bool m_isComplete;
  };

  class CSteamUGCRequestUGCDetailsResult {
    public:
      CSteamUGCRequestUGCDetailsResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      SteamUGCRequestUGCDetailsResult_t GetResult();
    private:
      void OnSteamUGCRequestUGCDetailsResult(SteamUGCRequestUGCDetailsResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CSteamUGCRequestUGCDetailsResult, SteamUGCRequestUGCDetailsResult_t> m_callresult;
      SteamUGCRequestUGCDetailsResult_t m_result;
      bool m_isComplete;
  };

  class CCreateItemResult {
    public:
      CCreateItemResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      CreateItemResult_t GetResult();
    private:
      void OnCreateItemResult(CreateItemResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CCreateItemResult, CreateItemResult_t> m_callresult;
      CreateItemResult_t m_result;
      bool m_isComplete;
  };

  class CSubmitItemUpdateResult {
    public:
      CSubmitItemUpdateResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      SubmitItemUpdateResult_t GetResult();
    private:
      void OnSubmitItemUpdateResult(SubmitItemUpdateResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CSubmitItemUpdateResult, SubmitItemUpdateResult_t> m_callresult;
      SubmitItemUpdateResult_t m_result;
      bool m_isComplete;
  };

  class CSetUserItemVoteResult {
    public:
      CSetUserItemVoteResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      SetUserItemVoteResult_t GetResult();
    private:
      void OnSetUserItemVoteResult(SetUserItemVoteResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CSetUserItemVoteResult, SetUserItemVoteResult_t> m_callresult;
      SetUserItemVoteResult_t m_result;
      bool m_isComplete;
  };

  class CGetUserItemVoteResult {
    public:
      CGetUserItemVoteResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      GetUserItemVoteResult_t GetResult();
    private:
      void OnGetUserItemVoteResult(GetUserItemVoteResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CGetUserItemVoteResult, GetUserItemVoteResult_t> m_callresult;
      GetUserItemVoteResult_t m_result;
      bool m_isComplete;
  };

  class CUserFavoriteItemsListChanged {
    public:
      CUserFavoriteItemsListChanged(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      UserFavoriteItemsListChanged_t GetResult();
    private:
      void OnUserFavoriteItemsListChanged(UserFavoriteItemsListChanged_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CUserFavoriteItemsListChanged, UserFavoriteItemsListChanged_t> m_callresult;
      UserFavoriteItemsListChanged_t m_result;
      bool m_isComplete;
  };

  class CStartPlaytimeTrackingResult {
    public:
      CStartPlaytimeTrackingResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      StartPlaytimeTrackingResult_t GetResult();
    private:
      void OnStartPlaytimeTrackingResult(StartPlaytimeTrackingResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CStartPlaytimeTrackingResult, StartPlaytimeTrackingResult_t> m_callresult;
      StartPlaytimeTrackingResult_t m_result;
      bool m_isComplete;
  };

  class CStopPlaytimeTrackingResult {
    public:
      CStopPlaytimeTrackingResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      StopPlaytimeTrackingResult_t GetResult();
    private:
      void OnStopPlaytimeTrackingResult(StopPlaytimeTrackingResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CStopPlaytimeTrackingResult, StopPlaytimeTrackingResult_t> m_callresult;
      StopPlaytimeTrackingResult_t m_result;
      bool m_isComplete;
  };

  class CAddUGCDependencyResult {
    public:
      CAddUGCDependencyResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      AddUGCDependencyResult_t GetResult();
    private:
      void OnAddUGCDependencyResult(AddUGCDependencyResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CAddUGCDependencyResult, AddUGCDependencyResult_t> m_callresult;
      AddUGCDependencyResult_t m_result;
      bool m_isComplete;
  };

  class CRemoveUGCDependencyResult {
    public:
      CRemoveUGCDependencyResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoveUGCDependencyResult_t GetResult();
    private:
      void OnRemoveUGCDependencyResult(RemoveUGCDependencyResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoveUGCDependencyResult, RemoveUGCDependencyResult_t> m_callresult;
      RemoveUGCDependencyResult_t m_result;
      bool m_isComplete;
  };

  class CAddAppDependencyResult {
    public:
      CAddAppDependencyResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      AddAppDependencyResult_t GetResult();
    private:
      void OnAddAppDependencyResult(AddAppDependencyResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CAddAppDependencyResult, AddAppDependencyResult_t> m_callresult;
      AddAppDependencyResult_t m_result;
      bool m_isComplete;
  };

  class CRemoveAppDependencyResult {
    public:
      CRemoveAppDependencyResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      RemoveAppDependencyResult_t GetResult();
    private:
      void OnRemoveAppDependencyResult(RemoveAppDependencyResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CRemoveAppDependencyResult, RemoveAppDependencyResult_t> m_callresult;
      RemoveAppDependencyResult_t m_result;
      bool m_isComplete;
  };

  class CGetAppDependenciesResult {
    public:
      CGetAppDependenciesResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      GetAppDependenciesResult_t GetResult();
    private:
      void OnGetAppDependenciesResult(GetAppDependenciesResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CGetAppDependenciesResult, GetAppDependenciesResult_t> m_callresult;
      GetAppDependenciesResult_t m_result;
      bool m_isComplete;
  };

  class CDeleteItemResult {
    public:
      CDeleteItemResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      DeleteItemResult_t GetResult();
    private:
      void OnDeleteItemResult(DeleteItemResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CDeleteItemResult, DeleteItemResult_t> m_callresult;
      DeleteItemResult_t m_result;
      bool m_isComplete;
  };

  class CEncryptedAppTicketResponse {
    public:
      CEncryptedAppTicketResponse(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      EncryptedAppTicketResponse_t GetResult();
    private:
      void OnEncryptedAppTicketResponse(EncryptedAppTicketResponse_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CEncryptedAppTicketResponse, EncryptedAppTicketResponse_t> m_callresult;
      EncryptedAppTicketResponse_t m_result;
      bool m_isComplete;
  };

  class CStoreAuthURLResponse {
    public:
      CStoreAuthURLResponse(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      StoreAuthURLResponse_t GetResult();
    private:
      void OnStoreAuthURLResponse(StoreAuthURLResponse_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CStoreAuthURLResponse, StoreAuthURLResponse_t> m_callresult;
      StoreAuthURLResponse_t m_result;
      bool m_isComplete;
  };

  class CMarketEligibilityResponse {
    public:
      CMarketEligibilityResponse(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      MarketEligibilityResponse_t GetResult();
    private:
      void OnMarketEligibilityResponse(MarketEligibilityResponse_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CMarketEligibilityResponse, MarketEligibilityResponse_t> m_callresult;
      MarketEligibilityResponse_t m_result;
      bool m_isComplete;
  };

  class CDurationControl {
    public:
      CDurationControl(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      DurationControl_t GetResult();
    private:
      void OnDurationControl(DurationControl_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CDurationControl, DurationControl_t> m_callresult;
      DurationControl_t m_result;
      bool m_isComplete;
  };

  class CUserStatsReceived {
    public:
      CUserStatsReceived(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      UserStatsReceived_t GetResult();
    private:
      void OnUserStatsReceived(UserStatsReceived_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CUserStatsReceived, UserStatsReceived_t> m_callresult;
      UserStatsReceived_t m_result;
      bool m_isComplete;
  };

  class CLeaderboardFindResult {
    public:
      CLeaderboardFindResult(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      LeaderboardFindResult_t GetResult();
    private:
      void OnLeaderboardFindResult(LeaderboardFindResult_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CLeaderboardFindResult, LeaderboardFindResult_t> m_callresult;
      LeaderboardFindResult_t m_result;
      bool m_isComplete;
  };

  class CLeaderboardScoresDownloaded {
    public:
      CLeaderboardScoresDownloaded(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      LeaderboardScoresDownloaded_t GetResult();
    private:
      void OnLeaderboardScoresDownloaded(LeaderboardScoresDownloaded_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CLeaderboardScoresDownloaded, LeaderboardScoresDownloaded_t> m_callresult;
      LeaderboardScoresDownloaded_t m_result;
      bool m_isComplete;
  };

  class CLeaderboardScoreUploaded {
    public:
      CLeaderboardScoreUploaded(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      LeaderboardScoreUploaded_t GetResult();
    private:
      void OnLeaderboardScoreUploaded(LeaderboardScoreUploaded_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CLeaderboardScoreUploaded, LeaderboardScoreUploaded_t> m_callresult;
      LeaderboardScoreUploaded_t m_result;
      bool m_isComplete;
  };

  class CLeaderboardUGCSet {
    public:
      CLeaderboardUGCSet(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      LeaderboardUGCSet_t GetResult();
    private:
      void OnLeaderboardUGCSet(LeaderboardUGCSet_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CLeaderboardUGCSet, LeaderboardUGCSet_t> m_callresult;
      LeaderboardUGCSet_t m_result;
      bool m_isComplete;
  };

  class CNumberOfCurrentPlayers {
    public:
      CNumberOfCurrentPlayers(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      NumberOfCurrentPlayers_t GetResult();
    private:
      void OnNumberOfCurrentPlayers(NumberOfCurrentPlayers_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CNumberOfCurrentPlayers, NumberOfCurrentPlayers_t> m_callresult;
      NumberOfCurrentPlayers_t m_result;
      bool m_isComplete;
  };

  class CGlobalAchievementPercentagesReady {
    public:
      CGlobalAchievementPercentagesReady(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      GlobalAchievementPercentagesReady_t GetResult();
    private:
      void OnGlobalAchievementPercentagesReady(GlobalAchievementPercentagesReady_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CGlobalAchievementPercentagesReady, GlobalAchievementPercentagesReady_t> m_callresult;
      GlobalAchievementPercentagesReady_t m_result;
      bool m_isComplete;
  };

  class CGlobalStatsReceived {
    public:
      CGlobalStatsReceived(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      GlobalStatsReceived_t GetResult();
    private:
      void OnGlobalStatsReceived(GlobalStatsReceived_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CGlobalStatsReceived, GlobalStatsReceived_t> m_callresult;
      GlobalStatsReceived_t m_result;
      bool m_isComplete;
  };

  class CCheckFileSignature {
    public:
      CCheckFileSignature(SteamAPICall_t hSteamAPICall);
      bool GetIsCompleted();
      CheckFileSignature_t GetResult();
    private:
      void OnCheckFileSignature(CheckFileSignature_t* result, bool bIOFailure);
      SteamAPICall_t m_steamApiCall;
      CCallResult<CCheckFileSignature, CheckFileSignature_t> m_callresult;
      CheckFileSignature_t m_result;
      bool m_isComplete;
  };

};
