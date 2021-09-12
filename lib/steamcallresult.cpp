
  #include "steamcallresult.h"
  namespace CCallResults {
  
    CFileDetailsResult::CFileDetailsResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CFileDetailsResult::OnFileDetailsResult);
    };

    bool CFileDetailsResult::GetIsCompleted() {
      return m_isComplete;
    };

    FileDetailsResult_t CFileDetailsResult::GetResult() {
      return m_result;
    };

    void CFileDetailsResult::OnFileDetailsResult(FileDetailsResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CSetPersonaNameResponse::CSetPersonaNameResponse(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CSetPersonaNameResponse::OnSetPersonaNameResponse);
    };

    bool CSetPersonaNameResponse::GetIsCompleted() {
      return m_isComplete;
    };

    SetPersonaNameResponse_t CSetPersonaNameResponse::GetResult() {
      return m_result;
    };

    void CSetPersonaNameResponse::OnSetPersonaNameResponse(SetPersonaNameResponse_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CDownloadClanActivityCountsResult::CDownloadClanActivityCountsResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CDownloadClanActivityCountsResult::OnDownloadClanActivityCountsResult);
    };

    bool CDownloadClanActivityCountsResult::GetIsCompleted() {
      return m_isComplete;
    };

    DownloadClanActivityCountsResult_t CDownloadClanActivityCountsResult::GetResult() {
      return m_result;
    };

    void CDownloadClanActivityCountsResult::OnDownloadClanActivityCountsResult(DownloadClanActivityCountsResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CClanOfficerListResponse::CClanOfficerListResponse(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CClanOfficerListResponse::OnClanOfficerListResponse);
    };

    bool CClanOfficerListResponse::GetIsCompleted() {
      return m_isComplete;
    };

    ClanOfficerListResponse_t CClanOfficerListResponse::GetResult() {
      return m_result;
    };

    void CClanOfficerListResponse::OnClanOfficerListResponse(ClanOfficerListResponse_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CJoinClanChatRoomCompletionResult::CJoinClanChatRoomCompletionResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CJoinClanChatRoomCompletionResult::OnJoinClanChatRoomCompletionResult);
    };

    bool CJoinClanChatRoomCompletionResult::GetIsCompleted() {
      return m_isComplete;
    };

    JoinClanChatRoomCompletionResult_t CJoinClanChatRoomCompletionResult::GetResult() {
      return m_result;
    };

    void CJoinClanChatRoomCompletionResult::OnJoinClanChatRoomCompletionResult(JoinClanChatRoomCompletionResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CFriendsGetFollowerCount::CFriendsGetFollowerCount(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CFriendsGetFollowerCount::OnFriendsGetFollowerCount);
    };

    bool CFriendsGetFollowerCount::GetIsCompleted() {
      return m_isComplete;
    };

    FriendsGetFollowerCount_t CFriendsGetFollowerCount::GetResult() {
      return m_result;
    };

    void CFriendsGetFollowerCount::OnFriendsGetFollowerCount(FriendsGetFollowerCount_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CFriendsIsFollowing::CFriendsIsFollowing(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CFriendsIsFollowing::OnFriendsIsFollowing);
    };

    bool CFriendsIsFollowing::GetIsCompleted() {
      return m_isComplete;
    };

    FriendsIsFollowing_t CFriendsIsFollowing::GetResult() {
      return m_result;
    };

    void CFriendsIsFollowing::OnFriendsIsFollowing(FriendsIsFollowing_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CFriendsEnumerateFollowingList::CFriendsEnumerateFollowingList(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CFriendsEnumerateFollowingList::OnFriendsEnumerateFollowingList);
    };

    bool CFriendsEnumerateFollowingList::GetIsCompleted() {
      return m_isComplete;
    };

    FriendsEnumerateFollowingList_t CFriendsEnumerateFollowingList::GetResult() {
      return m_result;
    };

    void CFriendsEnumerateFollowingList::OnFriendsEnumerateFollowingList(FriendsEnumerateFollowingList_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CGSReputation::CGSReputation(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CGSReputation::OnGSReputation);
    };

    bool CGSReputation::GetIsCompleted() {
      return m_isComplete;
    };

    GSReputation_t CGSReputation::GetResult() {
      return m_result;
    };

    void CGSReputation::OnGSReputation(GSReputation_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CAssociateWithClanResult::CAssociateWithClanResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CAssociateWithClanResult::OnAssociateWithClanResult);
    };

    bool CAssociateWithClanResult::GetIsCompleted() {
      return m_isComplete;
    };

    AssociateWithClanResult_t CAssociateWithClanResult::GetResult() {
      return m_result;
    };

    void CAssociateWithClanResult::OnAssociateWithClanResult(AssociateWithClanResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CComputeNewPlayerCompatibilityResult::CComputeNewPlayerCompatibilityResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CComputeNewPlayerCompatibilityResult::OnComputeNewPlayerCompatibilityResult);
    };

    bool CComputeNewPlayerCompatibilityResult::GetIsCompleted() {
      return m_isComplete;
    };

    ComputeNewPlayerCompatibilityResult_t CComputeNewPlayerCompatibilityResult::GetResult() {
      return m_result;
    };

    void CComputeNewPlayerCompatibilityResult::OnComputeNewPlayerCompatibilityResult(ComputeNewPlayerCompatibilityResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CGSStatsReceived::CGSStatsReceived(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CGSStatsReceived::OnGSStatsReceived);
    };

    bool CGSStatsReceived::GetIsCompleted() {
      return m_isComplete;
    };

    GSStatsReceived_t CGSStatsReceived::GetResult() {
      return m_result;
    };

    void CGSStatsReceived::OnGSStatsReceived(GSStatsReceived_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CGSStatsStored::CGSStatsStored(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CGSStatsStored::OnGSStatsStored);
    };

    bool CGSStatsStored::GetIsCompleted() {
      return m_isComplete;
    };

    GSStatsStored_t CGSStatsStored::GetResult() {
      return m_result;
    };

    void CGSStatsStored::OnGSStatsStored(GSStatsStored_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CHTML_BrowserReady::CHTML_BrowserReady(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CHTML_BrowserReady::OnHTML_BrowserReady);
    };

    bool CHTML_BrowserReady::GetIsCompleted() {
      return m_isComplete;
    };

    HTML_BrowserReady_t CHTML_BrowserReady::GetResult() {
      return m_result;
    };

    void CHTML_BrowserReady::OnHTML_BrowserReady(HTML_BrowserReady_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CSteamInventoryEligiblePromoItemDefIDs::CSteamInventoryEligiblePromoItemDefIDs(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CSteamInventoryEligiblePromoItemDefIDs::OnSteamInventoryEligiblePromoItemDefIDs);
    };

    bool CSteamInventoryEligiblePromoItemDefIDs::GetIsCompleted() {
      return m_isComplete;
    };

    SteamInventoryEligiblePromoItemDefIDs_t CSteamInventoryEligiblePromoItemDefIDs::GetResult() {
      return m_result;
    };

    void CSteamInventoryEligiblePromoItemDefIDs::OnSteamInventoryEligiblePromoItemDefIDs(SteamInventoryEligiblePromoItemDefIDs_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CSteamInventoryStartPurchaseResult::CSteamInventoryStartPurchaseResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CSteamInventoryStartPurchaseResult::OnSteamInventoryStartPurchaseResult);
    };

    bool CSteamInventoryStartPurchaseResult::GetIsCompleted() {
      return m_isComplete;
    };

    SteamInventoryStartPurchaseResult_t CSteamInventoryStartPurchaseResult::GetResult() {
      return m_result;
    };

    void CSteamInventoryStartPurchaseResult::OnSteamInventoryStartPurchaseResult(SteamInventoryStartPurchaseResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CSteamInventoryRequestPricesResult::CSteamInventoryRequestPricesResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CSteamInventoryRequestPricesResult::OnSteamInventoryRequestPricesResult);
    };

    bool CSteamInventoryRequestPricesResult::GetIsCompleted() {
      return m_isComplete;
    };

    SteamInventoryRequestPricesResult_t CSteamInventoryRequestPricesResult::GetResult() {
      return m_result;
    };

    void CSteamInventoryRequestPricesResult::OnSteamInventoryRequestPricesResult(SteamInventoryRequestPricesResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CLobbyMatchList::CLobbyMatchList(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CLobbyMatchList::OnLobbyMatchList);
    };

    bool CLobbyMatchList::GetIsCompleted() {
      return m_isComplete;
    };

    LobbyMatchList_t CLobbyMatchList::GetResult() {
      return m_result;
    };

    void CLobbyMatchList::OnLobbyMatchList(LobbyMatchList_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CLobbyCreated::CLobbyCreated(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CLobbyCreated::OnLobbyCreated);
    };

    bool CLobbyCreated::GetIsCompleted() {
      return m_isComplete;
    };

    LobbyCreated_t CLobbyCreated::GetResult() {
      return m_result;
    };

    void CLobbyCreated::OnLobbyCreated(LobbyCreated_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CLobbyEnter::CLobbyEnter(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CLobbyEnter::OnLobbyEnter);
    };

    bool CLobbyEnter::GetIsCompleted() {
      return m_isComplete;
    };

    LobbyEnter_t CLobbyEnter::GetResult() {
      return m_result;
    };

    void CLobbyEnter::OnLobbyEnter(LobbyEnter_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CJoinPartyCallback::CJoinPartyCallback(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CJoinPartyCallback::OnJoinPartyCallback);
    };

    bool CJoinPartyCallback::GetIsCompleted() {
      return m_isComplete;
    };

    JoinPartyCallback_t CJoinPartyCallback::GetResult() {
      return m_result;
    };

    void CJoinPartyCallback::OnJoinPartyCallback(JoinPartyCallback_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CCreateBeaconCallback::CCreateBeaconCallback(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CCreateBeaconCallback::OnCreateBeaconCallback);
    };

    bool CCreateBeaconCallback::GetIsCompleted() {
      return m_isComplete;
    };

    CreateBeaconCallback_t CCreateBeaconCallback::GetResult() {
      return m_result;
    };

    void CCreateBeaconCallback::OnCreateBeaconCallback(CreateBeaconCallback_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CChangeNumOpenSlotsCallback::CChangeNumOpenSlotsCallback(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CChangeNumOpenSlotsCallback::OnChangeNumOpenSlotsCallback);
    };

    bool CChangeNumOpenSlotsCallback::GetIsCompleted() {
      return m_isComplete;
    };

    ChangeNumOpenSlotsCallback_t CChangeNumOpenSlotsCallback::GetResult() {
      return m_result;
    };

    void CChangeNumOpenSlotsCallback::OnChangeNumOpenSlotsCallback(ChangeNumOpenSlotsCallback_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageFileWriteAsyncComplete::CRemoteStorageFileWriteAsyncComplete(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageFileWriteAsyncComplete::OnRemoteStorageFileWriteAsyncComplete);
    };

    bool CRemoteStorageFileWriteAsyncComplete::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageFileWriteAsyncComplete_t CRemoteStorageFileWriteAsyncComplete::GetResult() {
      return m_result;
    };

    void CRemoteStorageFileWriteAsyncComplete::OnRemoteStorageFileWriteAsyncComplete(RemoteStorageFileWriteAsyncComplete_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageFileReadAsyncComplete::CRemoteStorageFileReadAsyncComplete(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageFileReadAsyncComplete::OnRemoteStorageFileReadAsyncComplete);
    };

    bool CRemoteStorageFileReadAsyncComplete::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageFileReadAsyncComplete_t CRemoteStorageFileReadAsyncComplete::GetResult() {
      return m_result;
    };

    void CRemoteStorageFileReadAsyncComplete::OnRemoteStorageFileReadAsyncComplete(RemoteStorageFileReadAsyncComplete_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageFileShareResult::CRemoteStorageFileShareResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageFileShareResult::OnRemoteStorageFileShareResult);
    };

    bool CRemoteStorageFileShareResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageFileShareResult_t CRemoteStorageFileShareResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageFileShareResult::OnRemoteStorageFileShareResult(RemoteStorageFileShareResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageDownloadUGCResult::CRemoteStorageDownloadUGCResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageDownloadUGCResult::OnRemoteStorageDownloadUGCResult);
    };

    bool CRemoteStorageDownloadUGCResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageDownloadUGCResult_t CRemoteStorageDownloadUGCResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageDownloadUGCResult::OnRemoteStorageDownloadUGCResult(RemoteStorageDownloadUGCResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStoragePublishFileProgress::CRemoteStoragePublishFileProgress(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStoragePublishFileProgress::OnRemoteStoragePublishFileProgress);
    };

    bool CRemoteStoragePublishFileProgress::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStoragePublishFileProgress_t CRemoteStoragePublishFileProgress::GetResult() {
      return m_result;
    };

    void CRemoteStoragePublishFileProgress::OnRemoteStoragePublishFileProgress(RemoteStoragePublishFileProgress_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageUpdatePublishedFileResult::CRemoteStorageUpdatePublishedFileResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageUpdatePublishedFileResult::OnRemoteStorageUpdatePublishedFileResult);
    };

    bool CRemoteStorageUpdatePublishedFileResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageUpdatePublishedFileResult_t CRemoteStorageUpdatePublishedFileResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageUpdatePublishedFileResult::OnRemoteStorageUpdatePublishedFileResult(RemoteStorageUpdatePublishedFileResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageGetPublishedFileDetailsResult::CRemoteStorageGetPublishedFileDetailsResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageGetPublishedFileDetailsResult::OnRemoteStorageGetPublishedFileDetailsResult);
    };

    bool CRemoteStorageGetPublishedFileDetailsResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageGetPublishedFileDetailsResult_t CRemoteStorageGetPublishedFileDetailsResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageGetPublishedFileDetailsResult::OnRemoteStorageGetPublishedFileDetailsResult(RemoteStorageGetPublishedFileDetailsResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageDeletePublishedFileResult::CRemoteStorageDeletePublishedFileResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageDeletePublishedFileResult::OnRemoteStorageDeletePublishedFileResult);
    };

    bool CRemoteStorageDeletePublishedFileResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageDeletePublishedFileResult_t CRemoteStorageDeletePublishedFileResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageDeletePublishedFileResult::OnRemoteStorageDeletePublishedFileResult(RemoteStorageDeletePublishedFileResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageEnumerateUserPublishedFilesResult::CRemoteStorageEnumerateUserPublishedFilesResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageEnumerateUserPublishedFilesResult::OnRemoteStorageEnumerateUserPublishedFilesResult);
    };

    bool CRemoteStorageEnumerateUserPublishedFilesResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageEnumerateUserPublishedFilesResult_t CRemoteStorageEnumerateUserPublishedFilesResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageEnumerateUserPublishedFilesResult::OnRemoteStorageEnumerateUserPublishedFilesResult(RemoteStorageEnumerateUserPublishedFilesResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageSubscribePublishedFileResult::CRemoteStorageSubscribePublishedFileResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageSubscribePublishedFileResult::OnRemoteStorageSubscribePublishedFileResult);
    };

    bool CRemoteStorageSubscribePublishedFileResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageSubscribePublishedFileResult_t CRemoteStorageSubscribePublishedFileResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageSubscribePublishedFileResult::OnRemoteStorageSubscribePublishedFileResult(RemoteStorageSubscribePublishedFileResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageEnumerateUserSubscribedFilesResult::CRemoteStorageEnumerateUserSubscribedFilesResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageEnumerateUserSubscribedFilesResult::OnRemoteStorageEnumerateUserSubscribedFilesResult);
    };

    bool CRemoteStorageEnumerateUserSubscribedFilesResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageEnumerateUserSubscribedFilesResult_t CRemoteStorageEnumerateUserSubscribedFilesResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageEnumerateUserSubscribedFilesResult::OnRemoteStorageEnumerateUserSubscribedFilesResult(RemoteStorageEnumerateUserSubscribedFilesResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageUnsubscribePublishedFileResult::CRemoteStorageUnsubscribePublishedFileResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageUnsubscribePublishedFileResult::OnRemoteStorageUnsubscribePublishedFileResult);
    };

    bool CRemoteStorageUnsubscribePublishedFileResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageUnsubscribePublishedFileResult_t CRemoteStorageUnsubscribePublishedFileResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageUnsubscribePublishedFileResult::OnRemoteStorageUnsubscribePublishedFileResult(RemoteStorageUnsubscribePublishedFileResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageGetPublishedItemVoteDetailsResult::CRemoteStorageGetPublishedItemVoteDetailsResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageGetPublishedItemVoteDetailsResult::OnRemoteStorageGetPublishedItemVoteDetailsResult);
    };

    bool CRemoteStorageGetPublishedItemVoteDetailsResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageGetPublishedItemVoteDetailsResult_t CRemoteStorageGetPublishedItemVoteDetailsResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageGetPublishedItemVoteDetailsResult::OnRemoteStorageGetPublishedItemVoteDetailsResult(RemoteStorageGetPublishedItemVoteDetailsResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageUpdateUserPublishedItemVoteResult::CRemoteStorageUpdateUserPublishedItemVoteResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageUpdateUserPublishedItemVoteResult::OnRemoteStorageUpdateUserPublishedItemVoteResult);
    };

    bool CRemoteStorageUpdateUserPublishedItemVoteResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageUpdateUserPublishedItemVoteResult_t CRemoteStorageUpdateUserPublishedItemVoteResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageUpdateUserPublishedItemVoteResult::OnRemoteStorageUpdateUserPublishedItemVoteResult(RemoteStorageUpdateUserPublishedItemVoteResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageSetUserPublishedFileActionResult::CRemoteStorageSetUserPublishedFileActionResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageSetUserPublishedFileActionResult::OnRemoteStorageSetUserPublishedFileActionResult);
    };

    bool CRemoteStorageSetUserPublishedFileActionResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageSetUserPublishedFileActionResult_t CRemoteStorageSetUserPublishedFileActionResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageSetUserPublishedFileActionResult::OnRemoteStorageSetUserPublishedFileActionResult(RemoteStorageSetUserPublishedFileActionResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageEnumeratePublishedFilesByUserActionResult::CRemoteStorageEnumeratePublishedFilesByUserActionResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageEnumeratePublishedFilesByUserActionResult::OnRemoteStorageEnumeratePublishedFilesByUserActionResult);
    };

    bool CRemoteStorageEnumeratePublishedFilesByUserActionResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageEnumeratePublishedFilesByUserActionResult_t CRemoteStorageEnumeratePublishedFilesByUserActionResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageEnumeratePublishedFilesByUserActionResult::OnRemoteStorageEnumeratePublishedFilesByUserActionResult(RemoteStorageEnumeratePublishedFilesByUserActionResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoteStorageEnumerateWorkshopFilesResult::CRemoteStorageEnumerateWorkshopFilesResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoteStorageEnumerateWorkshopFilesResult::OnRemoteStorageEnumerateWorkshopFilesResult);
    };

    bool CRemoteStorageEnumerateWorkshopFilesResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoteStorageEnumerateWorkshopFilesResult_t CRemoteStorageEnumerateWorkshopFilesResult::GetResult() {
      return m_result;
    };

    void CRemoteStorageEnumerateWorkshopFilesResult::OnRemoteStorageEnumerateWorkshopFilesResult(RemoteStorageEnumerateWorkshopFilesResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CSteamUGCQueryCompleted::CSteamUGCQueryCompleted(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CSteamUGCQueryCompleted::OnSteamUGCQueryCompleted);
    };

    bool CSteamUGCQueryCompleted::GetIsCompleted() {
      return m_isComplete;
    };

    SteamUGCQueryCompleted_t CSteamUGCQueryCompleted::GetResult() {
      return m_result;
    };

    void CSteamUGCQueryCompleted::OnSteamUGCQueryCompleted(SteamUGCQueryCompleted_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CSteamUGCRequestUGCDetailsResult::CSteamUGCRequestUGCDetailsResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CSteamUGCRequestUGCDetailsResult::OnSteamUGCRequestUGCDetailsResult);
    };

    bool CSteamUGCRequestUGCDetailsResult::GetIsCompleted() {
      return m_isComplete;
    };

    SteamUGCRequestUGCDetailsResult_t CSteamUGCRequestUGCDetailsResult::GetResult() {
      return m_result;
    };

    void CSteamUGCRequestUGCDetailsResult::OnSteamUGCRequestUGCDetailsResult(SteamUGCRequestUGCDetailsResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CCreateItemResult::CCreateItemResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CCreateItemResult::OnCreateItemResult);
    };

    bool CCreateItemResult::GetIsCompleted() {
      return m_isComplete;
    };

    CreateItemResult_t CCreateItemResult::GetResult() {
      return m_result;
    };

    void CCreateItemResult::OnCreateItemResult(CreateItemResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CSubmitItemUpdateResult::CSubmitItemUpdateResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CSubmitItemUpdateResult::OnSubmitItemUpdateResult);
    };

    bool CSubmitItemUpdateResult::GetIsCompleted() {
      return m_isComplete;
    };

    SubmitItemUpdateResult_t CSubmitItemUpdateResult::GetResult() {
      return m_result;
    };

    void CSubmitItemUpdateResult::OnSubmitItemUpdateResult(SubmitItemUpdateResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CSetUserItemVoteResult::CSetUserItemVoteResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CSetUserItemVoteResult::OnSetUserItemVoteResult);
    };

    bool CSetUserItemVoteResult::GetIsCompleted() {
      return m_isComplete;
    };

    SetUserItemVoteResult_t CSetUserItemVoteResult::GetResult() {
      return m_result;
    };

    void CSetUserItemVoteResult::OnSetUserItemVoteResult(SetUserItemVoteResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CGetUserItemVoteResult::CGetUserItemVoteResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CGetUserItemVoteResult::OnGetUserItemVoteResult);
    };

    bool CGetUserItemVoteResult::GetIsCompleted() {
      return m_isComplete;
    };

    GetUserItemVoteResult_t CGetUserItemVoteResult::GetResult() {
      return m_result;
    };

    void CGetUserItemVoteResult::OnGetUserItemVoteResult(GetUserItemVoteResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CUserFavoriteItemsListChanged::CUserFavoriteItemsListChanged(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CUserFavoriteItemsListChanged::OnUserFavoriteItemsListChanged);
    };

    bool CUserFavoriteItemsListChanged::GetIsCompleted() {
      return m_isComplete;
    };

    UserFavoriteItemsListChanged_t CUserFavoriteItemsListChanged::GetResult() {
      return m_result;
    };

    void CUserFavoriteItemsListChanged::OnUserFavoriteItemsListChanged(UserFavoriteItemsListChanged_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CStartPlaytimeTrackingResult::CStartPlaytimeTrackingResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CStartPlaytimeTrackingResult::OnStartPlaytimeTrackingResult);
    };

    bool CStartPlaytimeTrackingResult::GetIsCompleted() {
      return m_isComplete;
    };

    StartPlaytimeTrackingResult_t CStartPlaytimeTrackingResult::GetResult() {
      return m_result;
    };

    void CStartPlaytimeTrackingResult::OnStartPlaytimeTrackingResult(StartPlaytimeTrackingResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CStopPlaytimeTrackingResult::CStopPlaytimeTrackingResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CStopPlaytimeTrackingResult::OnStopPlaytimeTrackingResult);
    };

    bool CStopPlaytimeTrackingResult::GetIsCompleted() {
      return m_isComplete;
    };

    StopPlaytimeTrackingResult_t CStopPlaytimeTrackingResult::GetResult() {
      return m_result;
    };

    void CStopPlaytimeTrackingResult::OnStopPlaytimeTrackingResult(StopPlaytimeTrackingResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CAddUGCDependencyResult::CAddUGCDependencyResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CAddUGCDependencyResult::OnAddUGCDependencyResult);
    };

    bool CAddUGCDependencyResult::GetIsCompleted() {
      return m_isComplete;
    };

    AddUGCDependencyResult_t CAddUGCDependencyResult::GetResult() {
      return m_result;
    };

    void CAddUGCDependencyResult::OnAddUGCDependencyResult(AddUGCDependencyResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoveUGCDependencyResult::CRemoveUGCDependencyResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoveUGCDependencyResult::OnRemoveUGCDependencyResult);
    };

    bool CRemoveUGCDependencyResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoveUGCDependencyResult_t CRemoveUGCDependencyResult::GetResult() {
      return m_result;
    };

    void CRemoveUGCDependencyResult::OnRemoveUGCDependencyResult(RemoveUGCDependencyResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CAddAppDependencyResult::CAddAppDependencyResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CAddAppDependencyResult::OnAddAppDependencyResult);
    };

    bool CAddAppDependencyResult::GetIsCompleted() {
      return m_isComplete;
    };

    AddAppDependencyResult_t CAddAppDependencyResult::GetResult() {
      return m_result;
    };

    void CAddAppDependencyResult::OnAddAppDependencyResult(AddAppDependencyResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CRemoveAppDependencyResult::CRemoveAppDependencyResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CRemoveAppDependencyResult::OnRemoveAppDependencyResult);
    };

    bool CRemoveAppDependencyResult::GetIsCompleted() {
      return m_isComplete;
    };

    RemoveAppDependencyResult_t CRemoveAppDependencyResult::GetResult() {
      return m_result;
    };

    void CRemoveAppDependencyResult::OnRemoveAppDependencyResult(RemoveAppDependencyResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CGetAppDependenciesResult::CGetAppDependenciesResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CGetAppDependenciesResult::OnGetAppDependenciesResult);
    };

    bool CGetAppDependenciesResult::GetIsCompleted() {
      return m_isComplete;
    };

    GetAppDependenciesResult_t CGetAppDependenciesResult::GetResult() {
      return m_result;
    };

    void CGetAppDependenciesResult::OnGetAppDependenciesResult(GetAppDependenciesResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CDeleteItemResult::CDeleteItemResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CDeleteItemResult::OnDeleteItemResult);
    };

    bool CDeleteItemResult::GetIsCompleted() {
      return m_isComplete;
    };

    DeleteItemResult_t CDeleteItemResult::GetResult() {
      return m_result;
    };

    void CDeleteItemResult::OnDeleteItemResult(DeleteItemResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CEncryptedAppTicketResponse::CEncryptedAppTicketResponse(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CEncryptedAppTicketResponse::OnEncryptedAppTicketResponse);
    };

    bool CEncryptedAppTicketResponse::GetIsCompleted() {
      return m_isComplete;
    };

    EncryptedAppTicketResponse_t CEncryptedAppTicketResponse::GetResult() {
      return m_result;
    };

    void CEncryptedAppTicketResponse::OnEncryptedAppTicketResponse(EncryptedAppTicketResponse_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CStoreAuthURLResponse::CStoreAuthURLResponse(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CStoreAuthURLResponse::OnStoreAuthURLResponse);
    };

    bool CStoreAuthURLResponse::GetIsCompleted() {
      return m_isComplete;
    };

    StoreAuthURLResponse_t CStoreAuthURLResponse::GetResult() {
      return m_result;
    };

    void CStoreAuthURLResponse::OnStoreAuthURLResponse(StoreAuthURLResponse_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CMarketEligibilityResponse::CMarketEligibilityResponse(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CMarketEligibilityResponse::OnMarketEligibilityResponse);
    };

    bool CMarketEligibilityResponse::GetIsCompleted() {
      return m_isComplete;
    };

    MarketEligibilityResponse_t CMarketEligibilityResponse::GetResult() {
      return m_result;
    };

    void CMarketEligibilityResponse::OnMarketEligibilityResponse(MarketEligibilityResponse_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CDurationControl::CDurationControl(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CDurationControl::OnDurationControl);
    };

    bool CDurationControl::GetIsCompleted() {
      return m_isComplete;
    };

    DurationControl_t CDurationControl::GetResult() {
      return m_result;
    };

    void CDurationControl::OnDurationControl(DurationControl_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CUserStatsReceived::CUserStatsReceived(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CUserStatsReceived::OnUserStatsReceived);
    };

    bool CUserStatsReceived::GetIsCompleted() {
      return m_isComplete;
    };

    UserStatsReceived_t CUserStatsReceived::GetResult() {
      return m_result;
    };

    void CUserStatsReceived::OnUserStatsReceived(UserStatsReceived_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CLeaderboardFindResult::CLeaderboardFindResult(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CLeaderboardFindResult::OnLeaderboardFindResult);
    };

    bool CLeaderboardFindResult::GetIsCompleted() {
      return m_isComplete;
    };

    LeaderboardFindResult_t CLeaderboardFindResult::GetResult() {
      return m_result;
    };

    void CLeaderboardFindResult::OnLeaderboardFindResult(LeaderboardFindResult_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CLeaderboardScoresDownloaded::CLeaderboardScoresDownloaded(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CLeaderboardScoresDownloaded::OnLeaderboardScoresDownloaded);
    };

    bool CLeaderboardScoresDownloaded::GetIsCompleted() {
      return m_isComplete;
    };

    LeaderboardScoresDownloaded_t CLeaderboardScoresDownloaded::GetResult() {
      return m_result;
    };

    void CLeaderboardScoresDownloaded::OnLeaderboardScoresDownloaded(LeaderboardScoresDownloaded_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CLeaderboardScoreUploaded::CLeaderboardScoreUploaded(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CLeaderboardScoreUploaded::OnLeaderboardScoreUploaded);
    };

    bool CLeaderboardScoreUploaded::GetIsCompleted() {
      return m_isComplete;
    };

    LeaderboardScoreUploaded_t CLeaderboardScoreUploaded::GetResult() {
      return m_result;
    };

    void CLeaderboardScoreUploaded::OnLeaderboardScoreUploaded(LeaderboardScoreUploaded_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CLeaderboardUGCSet::CLeaderboardUGCSet(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CLeaderboardUGCSet::OnLeaderboardUGCSet);
    };

    bool CLeaderboardUGCSet::GetIsCompleted() {
      return m_isComplete;
    };

    LeaderboardUGCSet_t CLeaderboardUGCSet::GetResult() {
      return m_result;
    };

    void CLeaderboardUGCSet::OnLeaderboardUGCSet(LeaderboardUGCSet_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CNumberOfCurrentPlayers::CNumberOfCurrentPlayers(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CNumberOfCurrentPlayers::OnNumberOfCurrentPlayers);
    };

    bool CNumberOfCurrentPlayers::GetIsCompleted() {
      return m_isComplete;
    };

    NumberOfCurrentPlayers_t CNumberOfCurrentPlayers::GetResult() {
      return m_result;
    };

    void CNumberOfCurrentPlayers::OnNumberOfCurrentPlayers(NumberOfCurrentPlayers_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CGlobalAchievementPercentagesReady::CGlobalAchievementPercentagesReady(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CGlobalAchievementPercentagesReady::OnGlobalAchievementPercentagesReady);
    };

    bool CGlobalAchievementPercentagesReady::GetIsCompleted() {
      return m_isComplete;
    };

    GlobalAchievementPercentagesReady_t CGlobalAchievementPercentagesReady::GetResult() {
      return m_result;
    };

    void CGlobalAchievementPercentagesReady::OnGlobalAchievementPercentagesReady(GlobalAchievementPercentagesReady_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CGlobalStatsReceived::CGlobalStatsReceived(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CGlobalStatsReceived::OnGlobalStatsReceived);
    };

    bool CGlobalStatsReceived::GetIsCompleted() {
      return m_isComplete;
    };

    GlobalStatsReceived_t CGlobalStatsReceived::GetResult() {
      return m_result;
    };

    void CGlobalStatsReceived::OnGlobalStatsReceived(GlobalStatsReceived_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
    CCheckFileSignature::CCheckFileSignature(SteamAPICall_t hSteamAPICall): m_steamApiCall(hSteamAPICall) {
      memset(&m_result, 0, sizeof(m_result));
      m_isComplete = false;
      m_callresult.Set((SteamAPICall_t)m_steamApiCall, this, &CCheckFileSignature::OnCheckFileSignature);
    };

    bool CCheckFileSignature::GetIsCompleted() {
      return m_isComplete;
    };

    CheckFileSignature_t CCheckFileSignature::GetResult() {
      return m_result;
    };

    void CCheckFileSignature::OnCheckFileSignature(CheckFileSignature_t* result, bool bIOFailure) {
      m_isComplete = true;
      if (bIOFailure || result == nullptr) {
        return;
      }
      m_result = *result;
    };
  
  };
  