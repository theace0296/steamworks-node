
%typemap(in, noblock=1) HSteamPipe *phSteamPipe (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) HSteamPipe *phSteamPipe "";
%typemap(argout, noblock=1) HSteamPipe *phSteamPipe {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply HSteamPipe * INOUT {HSteamPipe *phSteamPipe};
%typemap(in, noblock=1) FriendGameInfo_t *pFriendGameInfo (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) FriendGameInfo_t *pFriendGameInfo "";
%typemap(argout, noblock=1) FriendGameInfo_t *pFriendGameInfo {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply FriendGameInfo_t * INOUT {FriendGameInfo_t *pFriendGameInfo};
%typemap(in, noblock=1) CSteamID *pOutSteamIDMembers (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) CSteamID *pOutSteamIDMembers "";
%typemap(argout, noblock=1) CSteamID *pOutSteamIDMembers {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply CSteamID * INOUT {CSteamID *pOutSteamIDMembers};
%typemap(in, noblock=1) CSteamID *psteamIDClans (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) CSteamID *psteamIDClans "";
%typemap(argout, noblock=1) CSteamID *psteamIDClans {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply CSteamID * INOUT {CSteamID *psteamIDClans};
%typemap(in, noblock=1) CSteamID *psteamidChatter (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) CSteamID *psteamidChatter "";
%typemap(argout, noblock=1) CSteamID *psteamidChatter {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply CSteamID * INOUT {CSteamID *psteamidChatter};
%typemap(in, noblock=1) CSteamID *pSteamIDUser (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) CSteamID *pSteamIDUser "";
%typemap(argout, noblock=1) CSteamID *pSteamIDUser {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply CSteamID * INOUT {CSteamID *pSteamIDUser};
%typemap(in, noblock=1) CSteamID *psteamIDGameServer (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) CSteamID *psteamIDGameServer "";
%typemap(argout, noblock=1) CSteamID *psteamIDGameServer {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply CSteamID * INOUT {CSteamID *psteamIDGameServer};
%typemap(in, noblock=1) CSteamID *pSteamIDBeaconOwner (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) CSteamID *pSteamIDBeaconOwner "";
%typemap(argout, noblock=1) CSteamID *pSteamIDBeaconOwner {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply CSteamID * INOUT {CSteamID *pSteamIDBeaconOwner};
%typemap(in, noblock=1) CSteamID *pSteamIDOwner (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) CSteamID *pSteamIDOwner "";
%typemap(argout, noblock=1) CSteamID *pSteamIDOwner {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply CSteamID * INOUT {CSteamID *pSteamIDOwner};
%typemap(in, noblock=1) CSteamID *prgUsers (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) CSteamID *prgUsers "";
%typemap(argout, noblock=1) CSteamID *prgUsers {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply CSteamID * INOUT {CSteamID *prgUsers};
%typemap(in, noblock=1) CSteamID *psteamIDRemote (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) CSteamID *psteamIDRemote "";
%typemap(argout, noblock=1) CSteamID *psteamIDRemote {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply CSteamID * INOUT {CSteamID *psteamIDRemote};
%typemap(in, noblock=1) CSteamID *pSteamIDRemote (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) CSteamID *pSteamIDRemote "";
%typemap(argout, noblock=1) CSteamID *pSteamIDRemote {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply CSteamID * INOUT {CSteamID *pSteamIDRemote};
%typemap(in, noblock=1) EChatEntryType *peChatEntryType (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) EChatEntryType *peChatEntryType "";
%typemap(argout, noblock=1) EChatEntryType *peChatEntryType {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply EChatEntryType * INOUT {EChatEntryType *peChatEntryType};
%typemap(in, noblock=1) AppId_t *pnAppID (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) AppId_t *pnAppID "";
%typemap(argout, noblock=1) AppId_t *pnAppID {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply AppId_t * INOUT {AppId_t *pnAppID};
%typemap(in, noblock=1) AppId_t *pAppID (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) AppId_t *pAppID "";
%typemap(argout, noblock=1) AppId_t *pAppID {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply AppId_t * INOUT {AppId_t *pAppID};
%typemap(in, noblock=1) AppId_t *pvecAppID (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) AppId_t *pvecAppID "";
%typemap(argout, noblock=1) AppId_t *pvecAppID {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply AppId_t * INOUT {AppId_t *pvecAppID};
%typemap(in, noblock=1) MatchMakingKeyValuePair_t **ppchFilters (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) MatchMakingKeyValuePair_t **ppchFilters "";
%typemap(argout, noblock=1) MatchMakingKeyValuePair_t **ppchFilters {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply MatchMakingKeyValuePair_t ** INOUT {MatchMakingKeyValuePair_t **ppchFilters};
%typemap(in, noblock=1) ISteamMatchmakingServerListResponse *pRequestServersResponse (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ISteamMatchmakingServerListResponse *pRequestServersResponse "";
%typemap(argout, noblock=1) ISteamMatchmakingServerListResponse *pRequestServersResponse {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ISteamMatchmakingServerListResponse * INOUT {ISteamMatchmakingServerListResponse *pRequestServersResponse};
%typemap(in, noblock=1) ISteamMatchmakingPingResponse *pRequestServersResponse (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ISteamMatchmakingPingResponse *pRequestServersResponse "";
%typemap(argout, noblock=1) ISteamMatchmakingPingResponse *pRequestServersResponse {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ISteamMatchmakingPingResponse * INOUT {ISteamMatchmakingPingResponse *pRequestServersResponse};
%typemap(in, noblock=1) ISteamMatchmakingPlayersResponse *pRequestServersResponse (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ISteamMatchmakingPlayersResponse *pRequestServersResponse "";
%typemap(argout, noblock=1) ISteamMatchmakingPlayersResponse *pRequestServersResponse {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ISteamMatchmakingPlayersResponse * INOUT {ISteamMatchmakingPlayersResponse *pRequestServersResponse};
%typemap(in, noblock=1) ISteamMatchmakingRulesResponse *pRequestServersResponse (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ISteamMatchmakingRulesResponse *pRequestServersResponse "";
%typemap(argout, noblock=1) ISteamMatchmakingRulesResponse *pRequestServersResponse {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ISteamMatchmakingRulesResponse * INOUT {ISteamMatchmakingRulesResponse *pRequestServersResponse};
%typemap(in, noblock=1) SteamPartyBeaconLocation_t *pLocation (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamPartyBeaconLocation_t *pLocation "";
%typemap(argout, noblock=1) SteamPartyBeaconLocation_t *pLocation {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamPartyBeaconLocation_t * INOUT {SteamPartyBeaconLocation_t *pLocation};
%typemap(in, noblock=1) SteamPartyBeaconLocation_t *pLocationList (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamPartyBeaconLocation_t *pLocationList "";
%typemap(argout, noblock=1) SteamPartyBeaconLocation_t *pLocationList {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamPartyBeaconLocation_t * INOUT {SteamPartyBeaconLocation_t *pLocationList};
%typemap(in, noblock=1) SteamPartyBeaconLocation_t *pBeaconLocation (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamPartyBeaconLocation_t *pBeaconLocation "";
%typemap(argout, noblock=1) SteamPartyBeaconLocation_t *pBeaconLocation {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamPartyBeaconLocation_t * INOUT {SteamPartyBeaconLocation_t *pBeaconLocation};
%typemap(in, noblock=1) SteamParamStringArray_t *pTags (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamParamStringArray_t *pTags "";
%typemap(argout, noblock=1) SteamParamStringArray_t *pTags {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamParamStringArray_t * INOUT {SteamParamStringArray_t *pTags};
%typemap(in, noblock=1) SteamParamStringArray_t *pRequiredTags (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamParamStringArray_t *pRequiredTags "";
%typemap(argout, noblock=1) SteamParamStringArray_t *pRequiredTags {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamParamStringArray_t * INOUT {SteamParamStringArray_t *pRequiredTags};
%typemap(in, noblock=1) SteamParamStringArray_t *pExcludedTags (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamParamStringArray_t *pExcludedTags "";
%typemap(argout, noblock=1) SteamParamStringArray_t *pExcludedTags {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamParamStringArray_t * INOUT {SteamParamStringArray_t *pExcludedTags};
%typemap(in, noblock=1) SteamParamStringArray_t *pUserTags (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamParamStringArray_t *pUserTags "";
%typemap(argout, noblock=1) SteamParamStringArray_t *pUserTags {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamParamStringArray_t * INOUT {SteamParamStringArray_t *pUserTags};
%typemap(in, noblock=1) ERemoteStorageLocalFileChange *pEChangeType (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ERemoteStorageLocalFileChange *pEChangeType "";
%typemap(argout, noblock=1) ERemoteStorageLocalFileChange *pEChangeType {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ERemoteStorageLocalFileChange * INOUT {ERemoteStorageLocalFileChange *pEChangeType};
%typemap(in, noblock=1) ERemoteStorageFilePathType *pEFilePathType (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ERemoteStorageFilePathType *pEFilePathType "";
%typemap(argout, noblock=1) ERemoteStorageFilePathType *pEFilePathType {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ERemoteStorageFilePathType * INOUT {ERemoteStorageFilePathType *pEFilePathType};
%typemap(in, noblock=1) LeaderboardEntry_t *pLeaderboardEntry (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) LeaderboardEntry_t *pLeaderboardEntry "";
%typemap(argout, noblock=1) LeaderboardEntry_t *pLeaderboardEntry {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply LeaderboardEntry_t * INOUT {LeaderboardEntry_t *pLeaderboardEntry};
%typemap(in, noblock=1) DepotId_t *pvecDepots (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) DepotId_t *pvecDepots "";
%typemap(argout, noblock=1) DepotId_t *pvecDepots {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply DepotId_t * INOUT {DepotId_t *pvecDepots};
%typemap(in, noblock=1) P2PSessionState_t *pConnectionState (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) P2PSessionState_t *pConnectionState "";
%typemap(argout, noblock=1) P2PSessionState_t *pConnectionState {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply P2PSessionState_t * INOUT {P2PSessionState_t *pConnectionState};
%typemap(in, noblock=1) SNetSocket_t *phSocket (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SNetSocket_t *phSocket "";
%typemap(argout, noblock=1) SNetSocket_t *phSocket {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SNetSocket_t * INOUT {SNetSocket_t *phSocket};
%typemap(in, noblock=1) SteamIPAddress_t *punIPRemote (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamIPAddress_t *punIPRemote "";
%typemap(argout, noblock=1) SteamIPAddress_t *punIPRemote {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamIPAddress_t * INOUT {SteamIPAddress_t *punIPRemote};
%typemap(in, noblock=1) SteamIPAddress_t *pnIP (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamIPAddress_t *pnIP "";
%typemap(argout, noblock=1) SteamIPAddress_t *pnIP {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamIPAddress_t * INOUT {SteamIPAddress_t *pnIP};
%typemap(in, noblock=1) SteamAPICall_t *pCallHandle (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamAPICall_t *pCallHandle "";
%typemap(argout, noblock=1) SteamAPICall_t *pCallHandle {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamAPICall_t * INOUT {SteamAPICall_t *pCallHandle};
%typemap(in, noblock=1) InputHandle_t *handlesOut (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) InputHandle_t *handlesOut "";
%typemap(argout, noblock=1) InputHandle_t *handlesOut {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply InputHandle_t * INOUT {InputHandle_t *handlesOut};
%typemap(in, noblock=1) InputActionSetHandle_t *handlesOut (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) InputActionSetHandle_t *handlesOut "";
%typemap(argout, noblock=1) InputActionSetHandle_t *handlesOut {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply InputActionSetHandle_t * INOUT {InputActionSetHandle_t *handlesOut};
%typemap(in, noblock=1) EInputActionOrigin *originsOut (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) EInputActionOrigin *originsOut "";
%typemap(argout, noblock=1) EInputActionOrigin *originsOut {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply EInputActionOrigin * INOUT {EInputActionOrigin *originsOut};
%typemap(in, noblock=1) ControllerHandle_t *handlesOut (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ControllerHandle_t *handlesOut "";
%typemap(argout, noblock=1) ControllerHandle_t *handlesOut {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ControllerHandle_t * INOUT {ControllerHandle_t *handlesOut};
%typemap(in, noblock=1) ControllerActionSetHandle_t *handlesOut (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ControllerActionSetHandle_t *handlesOut "";
%typemap(argout, noblock=1) ControllerActionSetHandle_t *handlesOut {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ControllerActionSetHandle_t * INOUT {ControllerActionSetHandle_t *handlesOut};
%typemap(in, noblock=1) EControllerActionOrigin *originsOut (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) EControllerActionOrigin *originsOut "";
%typemap(argout, noblock=1) EControllerActionOrigin *originsOut {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply EControllerActionOrigin * INOUT {EControllerActionOrigin *originsOut};
%typemap(in, noblock=1) PublishedFileId_t *pvecPublishedFileID (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) PublishedFileId_t *pvecPublishedFileID "";
%typemap(argout, noblock=1) PublishedFileId_t *pvecPublishedFileID {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply PublishedFileId_t * INOUT {PublishedFileId_t *pvecPublishedFileID};
%typemap(in, noblock=1) SteamUGCDetails_t *pDetails (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamUGCDetails_t *pDetails "";
%typemap(argout, noblock=1) SteamUGCDetails_t *pDetails {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamUGCDetails_t * INOUT {SteamUGCDetails_t *pDetails};
%typemap(in, noblock=1) EItemPreviewType *pPreviewType (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) EItemPreviewType *pPreviewType "";
%typemap(argout, noblock=1) EItemPreviewType *pPreviewType {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply EItemPreviewType * INOUT {EItemPreviewType *pPreviewType};
%typemap(in, noblock=1) SteamItemDetails_t *pOutItemsArray (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamItemDetails_t *pOutItemsArray "";
%typemap(argout, noblock=1) SteamItemDetails_t *pOutItemsArray {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamItemDetails_t * INOUT {SteamItemDetails_t *pOutItemsArray};
%typemap(in, noblock=1) SteamInventoryResult_t *pResultHandle (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamInventoryResult_t *pResultHandle "";
%typemap(argout, noblock=1) SteamInventoryResult_t *pResultHandle {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamInventoryResult_t * INOUT {SteamInventoryResult_t *pResultHandle};
%typemap(in, noblock=1) SteamInventoryResult_t *pOutResultHandle (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamInventoryResult_t *pOutResultHandle "";
%typemap(argout, noblock=1) SteamInventoryResult_t *pOutResultHandle {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamInventoryResult_t * INOUT {SteamInventoryResult_t *pOutResultHandle};
%typemap(in, noblock=1) SteamItemDef_t *pItemDefIDs (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamItemDef_t *pItemDefIDs "";
%typemap(argout, noblock=1) SteamItemDef_t *pItemDefIDs {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamItemDef_t * INOUT {SteamItemDef_t *pItemDefIDs};
%typemap(in, noblock=1) SteamItemDef_t *pArrayItemDefs (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamItemDef_t *pArrayItemDefs "";
%typemap(argout, noblock=1) SteamItemDef_t *pArrayItemDefs {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamItemDef_t * INOUT {SteamItemDef_t *pArrayItemDefs};
%typemap(in, noblock=1) SteamNetworkingMessage_t **ppOutMessages (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetworkingMessage_t **ppOutMessages "";
%typemap(argout, noblock=1) SteamNetworkingMessage_t **ppOutMessages {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetworkingMessage_t ** INOUT {SteamNetworkingMessage_t **ppOutMessages};
%typemap(in, noblock=1) SteamNetConnectionInfo_t *pConnectionInfo (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetConnectionInfo_t *pConnectionInfo "";
%typemap(argout, noblock=1) SteamNetConnectionInfo_t *pConnectionInfo {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetConnectionInfo_t * INOUT {SteamNetConnectionInfo_t *pConnectionInfo};
%typemap(in, noblock=1) SteamNetConnectionInfo_t *pInfo (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetConnectionInfo_t *pInfo "";
%typemap(argout, noblock=1) SteamNetConnectionInfo_t *pInfo {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetConnectionInfo_t * INOUT {SteamNetConnectionInfo_t *pInfo};
%typemap(in, noblock=1) SteamNetConnectionRealTimeStatus_t *pQuickStatus (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetConnectionRealTimeStatus_t *pQuickStatus "";
%typemap(argout, noblock=1) SteamNetConnectionRealTimeStatus_t *pQuickStatus {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetConnectionRealTimeStatus_t * INOUT {SteamNetConnectionRealTimeStatus_t *pQuickStatus};
%typemap(in, noblock=1) SteamNetConnectionRealTimeStatus_t *pStatus (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetConnectionRealTimeStatus_t *pStatus "";
%typemap(argout, noblock=1) SteamNetConnectionRealTimeStatus_t *pStatus {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetConnectionRealTimeStatus_t * INOUT {SteamNetConnectionRealTimeStatus_t *pStatus};
%typemap(in, noblock=1) SteamNetworkingMessage_t *const *pMessages (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetworkingMessage_t *const *pMessages "";
%typemap(argout, noblock=1) SteamNetworkingMessage_t *const *pMessages {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetworkingMessage_t *const * INOUT {SteamNetworkingMessage_t *const *pMessages};
%typemap(in, noblock=1) SteamNetConnectionRealTimeLaneStatus_t *pLanes (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetConnectionRealTimeLaneStatus_t *pLanes "";
%typemap(argout, noblock=1) SteamNetConnectionRealTimeLaneStatus_t *pLanes {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetConnectionRealTimeLaneStatus_t * INOUT {SteamNetConnectionRealTimeLaneStatus_t *pLanes};
%typemap(in, noblock=1) SteamNetworkingIPAddr *address (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetworkingIPAddr *address "";
%typemap(argout, noblock=1) SteamNetworkingIPAddr *address {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetworkingIPAddr * INOUT {SteamNetworkingIPAddr *address};
%typemap(in, noblock=1) SteamNetworkingIPAddr *pOutAddr (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetworkingIPAddr *pOutAddr "";
%typemap(argout, noblock=1) SteamNetworkingIPAddr *pOutAddr {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetworkingIPAddr * INOUT {SteamNetworkingIPAddr *pOutAddr};
%typemap(in, noblock=1) SteamNetworkingIPAddr *pAddr (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetworkingIPAddr *pAddr "";
%typemap(argout, noblock=1) SteamNetworkingIPAddr *pAddr {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetworkingIPAddr * INOUT {SteamNetworkingIPAddr *pAddr};
%typemap(in, noblock=1) HSteamNetConnection *pOutConnection1 (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) HSteamNetConnection *pOutConnection1 "";
%typemap(argout, noblock=1) HSteamNetConnection *pOutConnection1 {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply HSteamNetConnection * INOUT {HSteamNetConnection *pOutConnection1};
%typemap(in, noblock=1) HSteamNetConnection *pOutConnection2 (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) HSteamNetConnection *pOutConnection2 "";
%typemap(argout, noblock=1) HSteamNetConnection *pOutConnection2 {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply HSteamNetConnection * INOUT {HSteamNetConnection *pOutConnection2};
%typemap(in, noblock=1) SteamNetworkingIdentity *pIdentity (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetworkingIdentity *pIdentity "";
%typemap(argout, noblock=1) SteamNetworkingIdentity *pIdentity {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetworkingIdentity * INOUT {SteamNetworkingIdentity *pIdentity};
%typemap(in, noblock=1) SteamNetworkingIdentity *pOutRealIdentity (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetworkingIdentity *pOutRealIdentity "";
%typemap(argout, noblock=1) SteamNetworkingIdentity *pOutRealIdentity {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetworkingIdentity * INOUT {SteamNetworkingIdentity *pOutRealIdentity};
%typemap(in, noblock=1) SteamNetAuthenticationStatus_t *pDetails (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetAuthenticationStatus_t *pDetails "";
%typemap(argout, noblock=1) SteamNetAuthenticationStatus_t *pDetails {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetAuthenticationStatus_t * INOUT {SteamNetAuthenticationStatus_t *pDetails};
%typemap(in, noblock=1) SteamDatagramRelayAuthTicket *pOutParsedTicket (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamDatagramRelayAuthTicket *pOutParsedTicket "";
%typemap(argout, noblock=1) SteamDatagramRelayAuthTicket *pOutParsedTicket {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamDatagramRelayAuthTicket * INOUT {SteamDatagramRelayAuthTicket *pOutParsedTicket};
%typemap(in, noblock=1) SteamDatagramHostedAddress *pRouting (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamDatagramHostedAddress *pRouting "";
%typemap(argout, noblock=1) SteamDatagramHostedAddress *pRouting {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamDatagramHostedAddress * INOUT {SteamDatagramHostedAddress *pRouting};
%typemap(in, noblock=1) SteamDatagramGameCoordinatorServerLogin *pLoginInfo (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamDatagramGameCoordinatorServerLogin *pLoginInfo "";
%typemap(argout, noblock=1) SteamDatagramGameCoordinatorServerLogin *pLoginInfo {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamDatagramGameCoordinatorServerLogin * INOUT {SteamDatagramGameCoordinatorServerLogin *pLoginInfo};
%typemap(in, noblock=1) ISteamNetworkingConnectionSignaling *pSignaling (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ISteamNetworkingConnectionSignaling *pSignaling "";
%typemap(argout, noblock=1) ISteamNetworkingConnectionSignaling *pSignaling {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ISteamNetworkingConnectionSignaling * INOUT {ISteamNetworkingConnectionSignaling *pSignaling};
%typemap(in, noblock=1) ISteamNetworkingSignalingRecvContext *pContext (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ISteamNetworkingSignalingRecvContext *pContext "";
%typemap(argout, noblock=1) ISteamNetworkingSignalingRecvContext *pContext {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ISteamNetworkingSignalingRecvContext * INOUT {ISteamNetworkingSignalingRecvContext *pContext};
%typemap(in, noblock=1) SteamNetworkingFakeIPResult_t *pInfo (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetworkingFakeIPResult_t *pInfo "";
%typemap(argout, noblock=1) SteamNetworkingFakeIPResult_t *pInfo {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetworkingFakeIPResult_t * INOUT {SteamNetworkingFakeIPResult_t *pInfo};
%typemap(in, noblock=1) SteamRelayNetworkStatus_t *pDetails (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamRelayNetworkStatus_t *pDetails "";
%typemap(argout, noblock=1) SteamRelayNetworkStatus_t *pDetails {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamRelayNetworkStatus_t * INOUT {SteamRelayNetworkStatus_t *pDetails};
%typemap(in, noblock=1) SteamNetworkingPOPID *pViaRelayPoP (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetworkingPOPID *pViaRelayPoP "";
%typemap(argout, noblock=1) SteamNetworkingPOPID *pViaRelayPoP {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetworkingPOPID * INOUT {SteamNetworkingPOPID *pViaRelayPoP};
%typemap(in, noblock=1) SteamNetworkingPOPID *list (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) SteamNetworkingPOPID *list "";
%typemap(argout, noblock=1) SteamNetworkingPOPID *list {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply SteamNetworkingPOPID * INOUT {SteamNetworkingPOPID *list};
%typemap(in, noblock=1) ESteamNetworkingConfigDataType *pOutDataType (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ESteamNetworkingConfigDataType *pOutDataType "";
%typemap(argout, noblock=1) ESteamNetworkingConfigDataType *pOutDataType {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ESteamNetworkingConfigDataType * INOUT {ESteamNetworkingConfigDataType *pOutDataType};
%typemap(in, noblock=1) ESteamNetworkingConfigScope *pOutScope (void *argp = 0, int res = 0) {
  $1 = %reinterpret_cast(argp, $ltype);
}
%typemap(freearg) ESteamNetworkingConfigScope *pOutScope "";
%typemap(argout, noblock=1) ESteamNetworkingConfigScope *pOutScope {
  $result = AppendToNonArrayTypeOutput($result, SWIG_NewPointerObj($1, $&1_descriptor, SWIG_POINTER_OWN | 0 ));
}
%apply ESteamNetworkingConfigScope * INOUT {ESteamNetworkingConfigScope *pOutScope};