
import SteamEnums from './steamApiEnums';
import SteamStructs from './steamApiStructs';

export = SteamWorks;
declare class SteamWorks {
  constructor(appId: number);
  Init: {(appId: number): boolean};
  Shutdown: {(): boolean};
  GetApplicationRunning: {(): boolean};
  GetCallbackThreadRunning: {(): boolean};
  SteamAPI: steamapi;
  Constants: constants;
  Structs: structs;
  Enums: enums;
  Uncategorized: uncategorized;
  SteamClient: steamclient;
  SteamUser: steamuser;
  SteamFriends: steamfriends;
  SteamUtils: steamutils;
  SteamMatchmaking: steammatchmaking;
  SteamMatchmakingServers: steammatchmakingservers;
  SteamGameSearch: steamgamesearch;
  SteamParties: steamparties;
  SteamUserStats: steamuserstats;
  SteamApps: steamapps;
  SteamNetworking: steamnetworking;
  SteamRemoteStorage: steamremotestorage;
  SteamScreenshots: steamscreenshots;
  SteamMusic: steammusic;
  SteamMusicRemote: steammusicremote;
  SteamHTTP: steamhttp;
  SteamController: steamcontroller;
  SteamUGC: steamugc;
  SteamAppList: steamapplist;
  SteamHTMLSurface: steamhtmlsurface;
  SteamInventory: steaminventory;
  SteamVideo: steamvideo;
  SteamParentalSettings: steamparentalsettings;
  SteamInput: steaminput;
  SteamRemotePlay: steamremoteplay;
}


declare interface steamapi {
  RunCallbacks: {(/* Args Unknown */): unknown};
  GetHSteamPipe: {(/* Args Unknown */): unknown};
  GetHSteamUser: {(/* Args Unknown */): unknown};
  RegisterCallback: {(/* Args Unknown */): unknown};
  UnregisterCallback: {(/* Args Unknown */): unknown};
  RegisterCallResult: {(/* Args Unknown */): unknown};
  UnregisterCallResult: {(/* Args Unknown */): unknown};
  Init: {(/* Args Unknown */): unknown};
  Shutdown: {(/* Args Unknown */): unknown};
  RestartAppIfNecessary: {(/* Args Unknown */): unknown};
  ReleaseCurrentThreadMemory: {(/* Args Unknown */): unknown};
  WriteMiniDump: {(/* Args Unknown */): unknown};
  SetMiniDumpComment: {(/* Args Unknown */): unknown};
  IsSteamRunning: {(/* Args Unknown */): unknown};
  GetSteamInstallPath: {(/* Args Unknown */): unknown};
  SetTryCatchCallbacks: {(/* Args Unknown */): unknown};
  ManualDispatch_Init: {(/* Args Unknown */): unknown};
  ManualDispatch_RunFrame: {(/* Args Unknown */): unknown};
  ManualDispatch_GetNextCallback: {(/* Args Unknown */): unknown};
  ManualDispatch_FreeLastCallback: {(/* Args Unknown */): unknown};
  ManualDispatch_GetAPICallResult: {(/* Args Unknown */): unknown};
}
declare interface constants {
  k_uAppIdInvalid: Number;
  k_uDepotIdInvalid: Number;
  k_uAPICallInvalid: Number;
  k_ulPartyBeaconIdInvalid: Number;
  k_EDenyInvalid: Number;
  k_EDenyInvalidVersion: Number;
  k_EDenyGeneric: Number;
  k_EDenyNotLoggedOn: Number;
  k_EDenyNoLicense: Number;
  k_EDenyCheater: Number;
  k_EDenyLoggedInElseWhere: Number;
  k_EDenyUnknownText: Number;
  k_EDenyIncompatibleAnticheat: Number;
  k_EDenyMemoryCorruption: Number;
  k_EDenyIncompatibleSoftware: Number;
  k_EDenySteamConnectionLost: Number;
  k_EDenySteamConnectionError: Number;
  k_EDenySteamResponseTimedOut: Number;
  k_EDenySteamValidationStalled: Number;
  k_EDenySteamOwnerLeftGuestUser: Number;
  k_HAuthTicketInvalid: Number;
  k_EUserHasLicenseResultHasLicense: Number;
  k_EUserHasLicenseResultDoesNotHaveLicense: Number;
  k_EUserHasLicenseResultNoAuth: Number;
  k_unSteamAccountIDMask: Number;
  k_unSteamAccountInstanceMask: Number;
  k_EChatAccountInstanceMask: Number;
  k_EChatInstanceFlagClan: Number;
  k_EChatInstanceFlagLobby: Number;
  k_EChatInstanceFlagMMSLobby: Number;
  k_EPositionTopLeft: Number;
  k_EPositionTopRight: Number;
  k_EPositionBottomLeft: Number;
  k_EPositionBottomRight: Number;
  k_cchGameExtraInfoMax: Number;
  k_EPlayerResultFailedToConnect: Number;
  k_EPlayerResultAbandoned: Number;
  k_EPlayerResultKicked: Number;
  k_EPlayerResultIncomplete: Number;
  k_EPlayerResultCompleted: Number;
  k_iSteamBillingCallbacks: Number;
  k_iSteamContentServerCallbacks: Number;
  k_iSteamNetworkingCallbacks: Number;
  k_iSteamNetworkingSocketsCallbacks: Number;
  k_iSteamNetworkingMessagesCallbacks: Number;
  k_iSteamNetworkingUtilsCallbacks: Number;
  k_iSteamGameCoordinatorCallbacks: Number;
  k_iSteam2AsyncCallbacks: Number;
  k_iSteamGameStatsCallbacks: Number;
  k_iSteamHTTPCallbacks: Number;
  k_iSteamScreenshotsCallbacks: Number;
  k_iSteamStreamLauncherCallbacks: Number;
  k_iSteamControllerCallbacks: Number;
  k_iSteamStreamClientCallbacks: Number;
  k_iSteamAppListCallbacks: Number;
  k_iSteamMusicCallbacks: Number;
  k_iSteamMusicRemoteCallbacks: Number;
  k_iSteamGameNotificationCallbacks: Number;
  k_ISteamParentalSettingsCallbacks: Number;
  k_iSteamGameSearchCallbacks: Number;
  k_iSteamSTARCallbacks: Number;
  k_iSteamRemotePlayCallbacks: Number;
  k_iSteamChatCallbacks: Number;
  STEAMCLIENT_INTERFACE_VERSION: String;
  STEAMUSER_INTERFACE_VERSION: String;
  k_cchMaxFriendsGroupName: Number;
  k_cFriendsGroupLimit: Number;
  k_FriendsGroupID_Invalid: Number;
  k_cEnumerateFollowersMax: Number;
  k_EFriendFlagNone: Number;
  k_EFriendFlagBlocked: Number;
  k_EFriendFlagFriendshipRequested: Number;
  k_EFriendFlagImmediate: Number;
  k_EFriendFlagClanMember: Number;
  k_EFriendFlagOnGameServer: Number;
  k_EFriendFlagRequestingFriendship: Number;
  k_EFriendFlagRequestingInfo: Number;
  k_EFriendFlagIgnored: Number;
  k_EFriendFlagIgnoredFriend: Number;
  k_EFriendFlagChatMember: Number;
  k_EFriendFlagAll: Number;
  k_cchPersonaNameMax: Number;
  k_cwchPersonaNameMax: Number;
  k_nUserRestrictionNone: Number;
  k_nUserRestrictionUnknown: Number;
  k_nUserRestrictionAnyChat: Number;
  k_nUserRestrictionVoiceChat: Number;
  k_nUserRestrictionGroupChat: Number;
  k_nUserRestrictionRating: Number;
  k_nUserRestrictionGameInvites: Number;
  k_nUserRestrictionTrading: Number;
  k_cubChatMetadataMax: Number;
  k_cchMaxRichPresenceKeys: Number;
  k_cchMaxRichPresenceKeyLength: Number;
  k_cchMaxRichPresenceValueLength: Number;
  STEAMFRIENDS_INTERFACE_VERSION: String;
  STEAMUTILS_INTERFACE_VERSION: String;
  k_nMaxLobbyKeyLength: Number;
  STEAMMATCHMAKING_INTERFACE_VERSION: String;
  HSERVERQUERY_INVALID: Number;
  STEAMMATCHMAKINGSERVERS_INTERFACE_VERSION: String;
  k_unFavoriteFlagNone: Number;
  k_unFavoriteFlagFavorite: Number;
  k_unFavoriteFlagHistory: Number;
  STEAMGAMESEARCH_INTERFACE_VERSION: String;
  STEAMPARTIES_INTERFACE_VERSION: String;
  k_cchStatNameMax: Number;
  k_cchLeaderboardNameMax: Number;
  k_cLeaderboardDetailsMax: Number;
  STEAMUSERSTATS_INTERFACE_VERSION: String;
  k_cubAppProofOfPurchaseKeyMax: Number;
  STEAMAPPS_INTERFACE_VERSION: String;
  k_ERegisterActivationCodeAlreadyOwned: Number;
  STEAMNETWORKING_INTERFACE_VERSION: String;
  k_unMaxCloudFileChunkSize: Number;
  k_PublishedFileIdInvalid: Number;
  k_UGCHandleInvalid: Number;
  k_PublishedFileUpdateHandleInvalid: Number;
  k_UGCFileStreamHandleInvalid: Number;
  k_cchPublishedDocumentTitleMax: Number;
  k_cchPublishedDocumentDescriptionMax: Number;
  k_cchPublishedDocumentChangeDescriptionMax: Number;
  k_unEnumeratePublishedFilesMaxResults: Number;
  k_cchTagListMax: Number;
  k_cchFilenameMax: Number;
  k_cchPublishedFileURLMax: Number;
  STEAMREMOTESTORAGE_INTERFACE_VERSION: String;
  k_nScreenshotMaxTaggedUsers: Number;
  k_nScreenshotMaxTaggedPublishedFiles: Number;
  k_cubUFSTagTypeMax: Number;
  k_cubUFSTagValueMax: Number;
  k_ScreenshotThumbWidth: Number;
  INVALID_SCREENSHOT_HANDLE: Number;
  STEAMSCREENSHOTS_INTERFACE_VERSION: String;
  STEAMMUSIC_INTERFACE_VERSION: String;
  k_SteamMusicNameMaxLength: Number;
  k_SteamMusicPNGMaxLength: Number;
  STEAMMUSICREMOTE_INTERFACE_VERSION: String;
  INVALID_HTTPREQUEST_HANDLE: Number;
  INVALID_HTTPCOOKIE_HANDLE: Number;
  STEAMHTTP_INTERFACE_VERSION: String;
  STEAM_CONTROLLER_MAX_COUNT: Number;
  STEAM_CONTROLLER_MAX_ANALOG_ACTIONS: Number;
  STEAM_CONTROLLER_MAX_DIGITAL_ACTIONS: Number;
  STEAM_CONTROLLER_MAX_ORIGINS: Number;
  STEAM_CONTROLLER_MAX_ACTIVE_LAYERS: Number;
  STEAM_CONTROLLER_MIN_ANALOG_ACTION_DATA: Number;
  STEAM_CONTROLLER_MAX_ANALOG_ACTION_DATA: Number;
  STEAMCONTROLLER_INTERFACE_VERSION: String;
  k_UGCQueryHandleInvalid: Number;
  k_UGCUpdateHandleInvalid: Number;
  kNumUGCResultsPerPage: Number;
  k_cchDeveloperMetadataMax: Number;
  STEAMUGC_INTERFACE_VERSION: String;
  STEAMAPPLIST_INTERFACE_VERSION: String;
  INVALID_HTMLBROWSER: Number;
  STEAMHTMLSURFACE_INTERFACE_VERSION: String;
  k_SteamItemInstanceIDInvalid: Number;
  k_ESteamItemNoTrade: Number;
  k_ESteamItemRemoved: Number;
  k_ESteamItemConsumed: Number;
  STEAMINVENTORY_INTERFACE_VERSION: String;
  STEAMVIDEO_INTERFACE_VERSION: String;
  k_EFeatureInvalid: Number;
  k_EFeatureStore: Number;
  k_EFeatureCommunity: Number;
  k_EFeatureProfile: Number;
  k_EFeatureFriends: Number;
  k_EFeatureNews: Number;
  k_EFeatureTrading: Number;
  k_EFeatureSettings: Number;
  k_EFeatureConsole: Number;
  k_EFeatureBrowser: Number;
  k_EFeatureParentalSetup: Number;
  k_EFeatureLibrary: Number;
  k_EFeatureTest: Number;
  k_EFeatureSiteLicense: Number;
  k_EFeatureMax: Number;
  STEAMPARENTALSETTINGS_INTERFACE_VERSION: String;
  STEAM_INPUT_MAX_COUNT: Number;
  STEAM_INPUT_MAX_ANALOG_ACTIONS: Number;
  STEAM_INPUT_MAX_DIGITAL_ACTIONS: Number;
  STEAM_INPUT_MAX_ORIGINS: Number;
  STEAM_INPUT_MAX_ACTIVE_LAYERS: Number;
  STEAM_INPUT_MIN_ANALOG_ACTION_DATA: Number;
  STEAM_INPUT_MAX_ANALOG_ACTION_DATA: Number;
  STEAMINPUT_INTERFACE_VERSION: String;
  STEAMREMOTEPLAY_INTERFACE_VERSION: String;
  STEAMNETWORKINGMESSAGES_INTERFACE_VERSION: String;
  STEAMNETWORKINGSOCKETS_INTERFACE_VERSION: String;
  STEAMNETWORKINGUTILS_INTERFACE_VERSION: String;
  STEAMGAMESERVER_INTERFACE_VERSION: String;
  STEAMGAMESERVERSTATS_INTERFACE_VERSION: String;
  STEAMAPPTICKET_INTERFACE_VERSION: String;
  STEAMGAMECOORDINATOR_INTERFACE_VERSION: String;
  STEAMMATCHMAKINGSERVERLISTRESPONSE_INTERFACE_VERSION: String;
  STEAMMATCHMAKINGPINGRESPONSE_INTERFACE_VERSION: String;
  STEAMMATCHMAKINGPLAYERSRESPONSE_INTERFACE_VERSION: String;
  STEAMMATCHMAKINGRULESRESPONSE_INTERFACE_VERSION: String;
  STEAMNETWORKINGCONNECTIONSIGNALING_INTERFACE_VERSION: String;
  STEAMNETWORKINGSIGNALINGRECVCONTEXT_INTERFACE_VERSION: String;
  STEAMNETWORKINGFAKEUDPPORT_INTERFACE_VERSION: String;
}
declare interface structs {
  SteamIPAddress_t: SteamStructs.SteamIPAddress_t;
  FriendGameInfo_t: SteamStructs.FriendGameInfo_t;
  SteamPartyBeaconLocation_t: SteamStructs.SteamPartyBeaconLocation_t;
  LeaderboardEntry_t: SteamStructs.LeaderboardEntry_t;
  P2PSessionState_t: SteamStructs.P2PSessionState_t;
  SteamParamStringArray_t: SteamStructs.SteamParamStringArray_t;
  SteamUGCDetails_t: SteamStructs.SteamUGCDetails_t;
  SteamItemDetails_t: SteamStructs.SteamItemDetails_t;
  InputAnalogActionData_t: SteamStructs.InputAnalogActionData_t;
  InputDigitalActionData_t: SteamStructs.InputDigitalActionData_t;
  InputMotionData_t: SteamStructs.InputMotionData_t;
  SteamInputActionEvent_t: SteamStructs.SteamInputActionEvent_t;
  SteamNetworkingIdentityRender: {(/* Args Unknown */): unknown};
  SteamNetworkingIPAddrRender: {(/* Args Unknown */): unknown};
}
declare interface enums {
  ESteamIPType: SteamEnums.ESteamIPType;
  EResult: SteamEnums.EResult;
  EVoiceResult: SteamEnums.EVoiceResult;
  EBeginAuthSessionResult: SteamEnums.EBeginAuthSessionResult;
  EAuthSessionResponse: SteamEnums.EAuthSessionResponse;
  EAccountType: SteamEnums.EAccountType;
  EChatEntryType: SteamEnums.EChatEntryType;
  EChatRoomEnterResponse: SteamEnums.EChatRoomEnterResponse;
  EBroadcastUploadResult: SteamEnums.EBroadcastUploadResult;
  EMarketNotAllowedReasonFlags: SteamEnums.EMarketNotAllowedReasonFlags;
  EDurationControlProgress: SteamEnums.EDurationControlProgress;
  EDurationControlNotification: SteamEnums.EDurationControlNotification;
  EDurationControlOnlineState: SteamEnums.EDurationControlOnlineState;
  EGameSearchErrorCode_t: SteamEnums.EGameSearchErrorCode_t;
  ESteamIPv6ConnectivityProtocol: SteamEnums.ESteamIPv6ConnectivityProtocol;
  ESteamIPv6ConnectivityState: SteamEnums.ESteamIPv6ConnectivityState;
  EFriendRelationship: SteamEnums.EFriendRelationship;
  EPersonaState: SteamEnums.EPersonaState;
  EOverlayToStoreFlag: SteamEnums.EOverlayToStoreFlag;
  EActivateGameOverlayToWebPageMode: SteamEnums.EActivateGameOverlayToWebPageMode;
  EPersonaChange: SteamEnums.EPersonaChange;
  ESteamAPICallFailure: SteamEnums.ESteamAPICallFailure;
  EGamepadTextInputMode: SteamEnums.EGamepadTextInputMode;
  EGamepadTextInputLineMode: SteamEnums.EGamepadTextInputLineMode;
  EFloatingGamepadTextInputMode: SteamEnums.EFloatingGamepadTextInputMode;
  ETextFilteringContext: SteamEnums.ETextFilteringContext;
  ECheckFileSignature: SteamEnums.ECheckFileSignature;
  ELobbyType: SteamEnums.ELobbyType;
  ELobbyComparison: SteamEnums.ELobbyComparison;
  ELobbyDistanceFilter: SteamEnums.ELobbyDistanceFilter;
  EChatMemberStateChange: SteamEnums.EChatMemberStateChange;
  ESteamPartyBeaconLocationType: SteamEnums.ESteamPartyBeaconLocationType;
  ESteamPartyBeaconLocationData: SteamEnums.ESteamPartyBeaconLocationData;
  ELeaderboardDataRequest: SteamEnums.ELeaderboardDataRequest;
  ELeaderboardSortMethod: SteamEnums.ELeaderboardSortMethod;
  ELeaderboardDisplayType: SteamEnums.ELeaderboardDisplayType;
  ELeaderboardUploadScoreMethod: SteamEnums.ELeaderboardUploadScoreMethod;
  ERegisterActivationCodeResult: SteamEnums.ERegisterActivationCodeResult;
  EP2PSessionError: SteamEnums.EP2PSessionError;
  EP2PSend: SteamEnums.EP2PSend;
  ESNetSocketState: SteamEnums.ESNetSocketState;
  ESNetSocketConnectionType: SteamEnums.ESNetSocketConnectionType;
  ERemoteStoragePlatform: SteamEnums.ERemoteStoragePlatform;
  ERemoteStoragePublishedFileVisibility: SteamEnums.ERemoteStoragePublishedFileVisibility;
  EWorkshopFileType: SteamEnums.EWorkshopFileType;
  EWorkshopVote: SteamEnums.EWorkshopVote;
  EWorkshopFileAction: SteamEnums.EWorkshopFileAction;
  EWorkshopEnumerationType: SteamEnums.EWorkshopEnumerationType;
  EWorkshopVideoProvider: SteamEnums.EWorkshopVideoProvider;
  EUGCReadAction: SteamEnums.EUGCReadAction;
  ERemoteStorageLocalFileChange: SteamEnums.ERemoteStorageLocalFileChange;
  ERemoteStorageFilePathType: SteamEnums.ERemoteStorageFilePathType;
  EVRScreenshotType: SteamEnums.EVRScreenshotType;
  ESteamControllerPad: SteamEnums.ESteamControllerPad;
  EControllerActionOrigin: SteamEnums.EControllerActionOrigin;
  EXboxOrigin: SteamEnums.EXboxOrigin;
  ESteamInputType: SteamEnums.ESteamInputType;
  ESteamControllerLEDFlag: SteamEnums.ESteamControllerLEDFlag;
  EUGCMatchingUGCType: SteamEnums.EUGCMatchingUGCType;
  EUserUGCList: SteamEnums.EUserUGCList;
  EUGCQuery: SteamEnums.EUGCQuery;
  EItemUpdateStatus: SteamEnums.EItemUpdateStatus;
  EItemState: SteamEnums.EItemState;
  EItemStatistic: SteamEnums.EItemStatistic;
  EItemPreviewType: SteamEnums.EItemPreviewType;
  EInputSourceMode: SteamEnums.EInputSourceMode;
  EInputActionOrigin: SteamEnums.EInputActionOrigin;
  EControllerHapticLocation: SteamEnums.EControllerHapticLocation;
  EControllerHapticType: SteamEnums.EControllerHapticType;
  ESteamInputConfigurationEnableType: SteamEnums.ESteamInputConfigurationEnableType;
  ESteamInputLEDFlag: SteamEnums.ESteamInputLEDFlag;
  ESteamInputGlyphSize: SteamEnums.ESteamInputGlyphSize;
  ESteamInputGlyphStyle: SteamEnums.ESteamInputGlyphStyle;
  ESteamInputActionEventType: SteamEnums.ESteamInputActionEventType;
  ESteamDeviceFormFactor: SteamEnums.ESteamDeviceFormFactor;
}
declare interface uncategorized {
  AudioPlayback_Undefined: Number;
  AudioPlayback_Playing: Number;
  AudioPlayback_Paused: Number;
  AudioPlayback_Idle: Number;
  SteamAppTicket: {(/* Args Unknown */): unknown};
  SteamGameCoordinator: {(/* Args Unknown */): unknown};
  SteamNetworkingConnectionSignaling: {(/* Args Unknown */): unknown};
  SteamNetworkingSignalingRecvContext: {(/* Args Unknown */): unknown};
  SteamNetworkingFakeUDPPort: {(/* Args Unknown */): unknown};
  CSteamID: {(/* Args Unknown */): unknown};
  CGameID: {(/* Args Unknown */): unknown};
  CCallbackBase: {(/* Args Unknown */): unknown};
  CSteamAPIContext: {(/* Args Unknown */): unknown};
}
declare interface steamclient {
  CreateSteamPipe: {(): number}
  BReleaseSteamPipe: {(hSteamPipe: number): boolean}
  ConnectToGlobalUser: {(hSteamPipe: number): number}
  CreateLocalUser: {(phSteamPipe: unknown, eAccountType: SteamEnums.EAccountType): number}
  ReleaseUser: {(hSteamPipe: number, hUser: number): undefined}
  GetISteamUser: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamGameServer: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  SetLocalIPBinding: {(unIP: unknown, usPort: number): undefined}
  GetISteamFriends: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamUtils: {(hSteamPipe: number, pchVersion: string): unknown}
  GetISteamMatchmaking: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamMatchmakingServers: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamGenericInterface: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamUserStats: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamGameServerStats: {(hSteamuser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamApps: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamNetworking: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamRemoteStorage: {(hSteamuser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamScreenshots: {(hSteamuser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamGameSearch: {(hSteamuser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetIPCCallCount: {(): number}
  SetWarningMessageHook: {(pFunction: unknown): undefined}
  BShutdownIfAllPipesClosed: {(): boolean}
  GetISteamHTTP: {(hSteamuser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamController: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamUGC: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamAppList: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamMusic: {(hSteamuser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamMusicRemote: {(hSteamuser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamHTMLSurface: {(hSteamuser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamInventory: {(hSteamuser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamVideo: {(hSteamuser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamParentalSettings: {(hSteamuser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamInput: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamParties: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
  GetISteamRemotePlay: {(hSteamUser: number, hSteamPipe: number, pchVersion: string): unknown}
}
declare interface steamuser {
  GetHSteamUser: {(): number}
  BLoggedOn: {(): boolean}
  GetSteamID: {(): unknown}
  InitiateGameConnection_DEPRECATED: {(pAuthBlob: unknown, cbMaxAuthBlob: number, steamIDGameServer: unknown, unIPServer: number, usPortServer: number, bSecure: boolean): number}
  TerminateGameConnection_DEPRECATED: {(unIPServer: number, usPortServer: number): undefined}
  TrackAppUsageEvent: {(gameID: unknown, eAppUsageEvent: number, pchExtraInfo: string): undefined}
  GetUserDataFolder: {(pchBuffer: string, cubBuffer: number): boolean}
  StartVoiceRecording: {(): undefined}
  StopVoiceRecording: {(): undefined}
  GetAvailableVoice: {(pcbCompressed: unknown, pcbUncompressed_Deprecated: unknown, nUncompressedVoiceDesiredSampleRate_Deprecated: number): SteamEnums.EVoiceResult}
  GetVoice: {(bWantCompressed: boolean, pDestBuffer: unknown, cbDestBufferSize: number, nBytesWritten: unknown, bWantUncompressed_Deprecated: boolean, pUncompressedDestBuffer_Deprecated: unknown, cbUncompressedDestBufferSize_Deprecated: number, nUncompressBytesWritten_Deprecated: unknown, nUncompressedVoiceDesiredSampleRate_Deprecated: number): SteamEnums.EVoiceResult}
  DecompressVoice: {(pCompressed: unknown, cbCompressed: number, pDestBuffer: unknown, cbDestBufferSize: number, nBytesWritten: unknown, nDesiredSampleRate: number): SteamEnums.EVoiceResult}
  GetVoiceOptimalSampleRate: {(): number}
  GetAuthSessionTicket: {(pTicket: unknown, cbMaxTicket: number, pcbTicket: unknown): number}
  BeginAuthSession: {(pAuthTicket: unknown, cbAuthTicket: number, steamID: unknown): SteamEnums.EBeginAuthSessionResult}
  EndAuthSession: {(steamID: unknown): undefined}
  CancelAuthTicket: {(hAuthTicket: number): undefined}
  UserHasLicenseForApp: {(steamID: unknown, appID: number): SteamEnums.EUserHasLicenseForAppResult}
  BIsBehindNAT: {(): boolean}
  AdvertiseGame: {(steamIDGameServer: unknown, unIPServer: number, usPortServer: number): undefined}
  RequestEncryptedAppTicket: {(pDataToInclude: unknown, cbDataToInclude: number): Promise<{ m_eResult: SteamEnums.EResult }>};
  GetEncryptedAppTicket: {(pTicket: unknown, cbMaxTicket: number, pcbTicket: unknown): boolean}
  GetGameBadgeLevel: {(nSeries: number, bFoil: boolean): number}
  GetPlayerSteamLevel: {(): number}
  RequestStoreAuthURL: {(pchRedirectURL: string): Promise<{ m_szURL: string }>};
  BIsPhoneVerified: {(): boolean}
  BIsTwoFactorEnabled: {(): boolean}
  BIsPhoneIdentifying: {(): boolean}
  BIsPhoneRequiringVerification: {(): boolean}
  GetMarketEligibility: {(): Promise<{ m_bAllowed: boolean, m_eNotAllowedReason: SteamEnums.EMarketNotAllowedReasonFlags, m_rtAllowedAtTime: number, m_cdaySteamGuardRequiredDays: number, m_cdayNewDeviceCooldown: number }>};
  GetDurationControl: {(): Promise<{ m_eResult: SteamEnums.EResult, m_appid: number, m_bApplicable: boolean, m_csecsLast5h: number, m_progress: SteamEnums.EDurationControlProgress, m_notification: SteamEnums.EDurationControlNotification, m_csecsToday: number, m_csecsRemaining: number }>};
  BSetDurationControlOnlineState: {(eNewState: SteamEnums.EDurationControlOnlineState): boolean}
}
declare interface steamfriends {
  GetPersonaName: {(): string}
  SetPersonaName: {(pchPersonaName: string): Promise<{ m_bSuccess: boolean, m_bLocalSuccess: boolean, m_result: SteamEnums.EResult }>};
  GetPersonaState: {(): SteamEnums.EPersonaState}
  GetFriendCount: {(iFriendFlags: number): number}
  GetFriendByIndex: {(iFriend: number, iFriendFlags: number): unknown}
  GetFriendRelationship: {(steamIDFriend: unknown): SteamEnums.EFriendRelationship}
  GetFriendPersonaState: {(steamIDFriend: unknown): SteamEnums.EPersonaState}
  GetFriendPersonaName: {(steamIDFriend: unknown): string}
  GetFriendGamePlayed: {(steamIDFriend: unknown, pFriendGameInfo: unknown): boolean}
  GetFriendPersonaNameHistory: {(steamIDFriend: unknown, iPersonaName: number): string}
  GetFriendSteamLevel: {(steamIDFriend: unknown): number}
  GetPlayerNickname: {(steamIDPlayer: unknown): string}
  GetFriendsGroupCount: {(): number}
  GetFriendsGroupIDByIndex: {(iFG: number): number}
  GetFriendsGroupName: {(friendsGroupID: number): string}
  GetFriendsGroupMembersCount: {(friendsGroupID: number): number}
  GetFriendsGroupMembersList: {(friendsGroupID: number, pOutSteamIDMembers: unknown, nMembersCount: number): undefined}
  HasFriend: {(steamIDFriend: unknown, iFriendFlags: number): boolean}
  GetClanCount: {(): number}
  GetClanByIndex: {(iClan: number): unknown}
  GetClanName: {(steamIDClan: unknown): string}
  GetClanTag: {(steamIDClan: unknown): string}
  GetClanActivityCounts: {(steamIDClan: unknown, pnOnline: unknown, pnInGame: unknown, pnChatting: unknown): boolean}
  DownloadClanActivityCounts: {(psteamIDClans: unknown, cClansToRequest: number): Promise<{ m_bSuccess: boolean }>};
  GetFriendCountFromSource: {(steamIDSource: unknown): number}
  GetFriendFromSourceByIndex: {(steamIDSource: unknown, iFriend: number): unknown}
  IsUserInSource: {(steamIDUser: unknown, steamIDSource: unknown): boolean}
  SetInGameVoiceSpeaking: {(steamIDUser: unknown, bSpeaking: boolean): undefined}
  ActivateGameOverlay: {(pchDialog: string): undefined}
  ActivateGameOverlayToUser: {(pchDialog: string, steamID: unknown): undefined}
  ActivateGameOverlayToWebPage: {(pchURL: string, eMode: SteamEnums.EActivateGameOverlayToWebPageMode): undefined}
  ActivateGameOverlayToStore: {(nAppID: number, eFlag: SteamEnums.EOverlayToStoreFlag): undefined}
  SetPlayedWith: {(steamIDUserPlayedWith: unknown): undefined}
  ActivateGameOverlayInviteDialog: {(steamIDLobby: unknown): undefined}
  GetSmallFriendAvatar: {(steamIDFriend: unknown): number}
  GetMediumFriendAvatar: {(steamIDFriend: unknown): number}
  GetLargeFriendAvatar: {(steamIDFriend: unknown): number}
  RequestUserInformation: {(steamIDUser: unknown, bRequireNameOnly: boolean): boolean}
  RequestClanOfficerList: {(steamIDClan: unknown): Promise<{ m_steamIDClan: unknown, m_cOfficers: number, m_bSuccess: number }>};
  GetClanOwner: {(steamIDClan: unknown): unknown}
  GetClanOfficerCount: {(steamIDClan: unknown): number}
  GetClanOfficerByIndex: {(steamIDClan: unknown, iOfficer: number): unknown}
  GetUserRestrictions: {(): number}
  SetRichPresence: {(pchKey: string, pchValue: string): boolean}
  ClearRichPresence: {(): undefined}
  GetFriendRichPresence: {(steamIDFriend: unknown, pchKey: string): string}
  GetFriendRichPresenceKeyCount: {(steamIDFriend: unknown): number}
  GetFriendRichPresenceKeyByIndex: {(steamIDFriend: unknown, iKey: number): string}
  RequestFriendRichPresence: {(steamIDFriend: unknown): undefined}
  InviteUserToGame: {(steamIDFriend: unknown, pchConnectString: string): boolean}
  GetCoplayFriendCount: {(): number}
  GetCoplayFriend: {(iCoplayFriend: number): unknown}
  GetFriendCoplayTime: {(steamIDFriend: unknown): number}
  GetFriendCoplayGame: {(steamIDFriend: unknown): number}
  JoinClanChatRoom: {(steamIDClan: unknown): Promise<{ m_steamIDClanChat: unknown, m_eChatRoomEnterResponse: SteamEnums.EChatRoomEnterResponse }>};
  LeaveClanChatRoom: {(steamIDClan: unknown): boolean}
  GetClanChatMemberCount: {(steamIDClan: unknown): number}
  GetChatMemberByIndex: {(steamIDClan: unknown, iUser: number): unknown}
  SendClanChatMessage: {(steamIDClanChat: unknown, pchText: string): boolean}
  GetClanChatMessage: {(steamIDClanChat: unknown, iMessage: number, prgchText: unknown, cchTextMax: number, peChatEntryType: unknown, psteamidChatter: unknown): number}
  IsClanChatAdmin: {(steamIDClanChat: unknown, steamIDUser: unknown): boolean}
  IsClanChatWindowOpenInSteam: {(steamIDClanChat: unknown): boolean}
  OpenClanChatWindowInSteam: {(steamIDClanChat: unknown): boolean}
  CloseClanChatWindowInSteam: {(steamIDClanChat: unknown): boolean}
  SetListenForFriendsMessages: {(bInterceptEnabled: boolean): boolean}
  ReplyToFriendMessage: {(steamIDFriend: unknown, pchMsgToSend: string): boolean}
  GetFriendMessage: {(steamIDFriend: unknown, iMessageID: number, pvData: unknown, cubData: number, peChatEntryType: unknown): number}
  GetFollowerCount: {(steamID: unknown): Promise<{ m_eResult: SteamEnums.EResult, m_steamID: unknown, m_nCount: number }>};
  IsFollowing: {(steamID: unknown): Promise<{ m_eResult: SteamEnums.EResult, m_steamID: unknown, m_bIsFollowing: boolean }>};
  EnumerateFollowingList: {(unStartIndex: number): Promise<{ m_eResult: SteamEnums.EResult, m_rgSteamID: unknown, m_nResultsReturned: number, m_nTotalResultCount: number }>};
  IsClanPublic: {(steamIDClan: unknown): boolean}
  IsClanOfficialGameGroup: {(steamIDClan: unknown): boolean}
  GetNumChatsWithUnreadPriorityMessages: {(): number}
  ActivateGameOverlayRemotePlayTogetherInviteDialog: {(steamIDLobby: unknown): undefined}
  RegisterProtocolInOverlayBrowser: {(pchProtocol: string): boolean}
  ActivateGameOverlayInviteDialogConnectString: {(pchConnectString: string): undefined}
}
declare interface steamutils {
  GetSecondsSinceAppActive: {(): number}
  GetSecondsSinceComputerActive: {(): number}
  GetConnectedUniverse: {(): SteamEnums.EUniverse}
  GetServerRealTime: {(): number}
  GetIPCountry: {(): string}
  GetImageSize: {(iImage: number, pnWidth: unknown, pnHeight: unknown): boolean}
  GetImageRGBA: {(iImage: number, pubDest: unknown, nDestBufferSize: number): boolean}
  GetCurrentBatteryPower: {(): number}
  GetAppID: {(): number}
  SetOverlayNotificationPosition: {(eNotificationPosition: SteamEnums.ENotificationPosition): undefined}
  IsAPICallCompleted: {(hSteamAPICall: number, pbFailed: unknown): boolean}
  GetAPICallFailureReason: {(hSteamAPICall: number): SteamEnums.ESteamAPICallFailure}
  GetAPICallResult: {(hSteamAPICall: number, pCallback: unknown, cubCallback: number, iCallbackExpected: number, pbFailed: unknown): boolean}
  GetIPCCallCount: {(): number}
  SetWarningMessageHook: {(pFunction: unknown): undefined}
  IsOverlayEnabled: {(): boolean}
  BOverlayNeedsPresent: {(): boolean}
  CheckFileSignature: {(szFileName: string): Promise<{ m_eCheckFileSignature: SteamEnums.ECheckFileSignature }>};
  ShowGamepadTextInput: {(eInputMode: SteamEnums.EGamepadTextInputMode, eLineInputMode: SteamEnums.EGamepadTextInputLineMode, pchDescription: string, unCharMax: number, pchExistingText: string): boolean}
  GetEnteredGamepadTextLength: {(): number}
  GetEnteredGamepadTextInput: {(pchText: string, cchText: number): boolean}
  GetSteamUILanguage: {(): string}
  IsSteamRunningInVR: {(): boolean}
  SetOverlayNotificationInset: {(nHorizontalInset: number, nVerticalInset: number): undefined}
  IsSteamInBigPictureMode: {(): boolean}
  StartVRDashboard: {(): undefined}
  IsVRHeadsetStreamingEnabled: {(): boolean}
  SetVRHeadsetStreamingEnabled: {(bEnabled: boolean): undefined}
  IsSteamChinaLauncher: {(): boolean}
  InitFilterText: {(unFilterOptions: number): boolean}
  FilterText: {(eContext: SteamEnums.ETextFilteringContext, sourceSteamID: unknown, pchInputMessage: string, pchOutFilteredText: string, nByteSizeOutFilteredText: number): number}
  GetIPv6ConnectivityState: {(eProtocol: SteamEnums.ESteamIPv6ConnectivityProtocol): SteamEnums.ESteamIPv6ConnectivityState}
  IsSteamRunningOnSteamDeck: {(): boolean}
  ShowFloatingGamepadTextInput: {(eKeyboardMode: SteamEnums.EFloatingGamepadTextInputMode, nTextFieldXPosition: number, nTextFieldYPosition: number, nTextFieldWidth: number, nTextFieldHeight: number): boolean}
  SetGameLauncherMode: {(bLauncherMode: boolean): undefined}
  DismissFloatingGamepadTextInput: {(): boolean}
}
declare interface steammatchmaking {
  GetFavoriteGameCount: {(): number}
  GetFavoriteGame: {(iGame: number, pnAppID: unknown, pnIP: unknown, pnConnPort: unknown, pnQueryPort: unknown, punFlags: unknown, pRTime32LastPlayedOnServer: unknown): boolean}
  AddFavoriteGame: {(nAppID: number, nIP: number, nConnPort: number, nQueryPort: number, unFlags: number, rTime32LastPlayedOnServer: number): number}
  RemoveFavoriteGame: {(nAppID: number, nIP: number, nConnPort: number, nQueryPort: number, unFlags: number): boolean}
  RequestLobbyList: {(): Promise<{ m_nLobbiesMatching: number }>};
  AddRequestLobbyListStringFilter: {(pchKeyToMatch: string, pchValueToMatch: string, eComparisonType: SteamEnums.ELobbyComparison): undefined}
  AddRequestLobbyListNumericalFilter: {(pchKeyToMatch: string, nValueToMatch: number, eComparisonType: SteamEnums.ELobbyComparison): undefined}
  AddRequestLobbyListNearValueFilter: {(pchKeyToMatch: string, nValueToBeCloseTo: number): undefined}
  AddRequestLobbyListFilterSlotsAvailable: {(nSlotsAvailable: number): undefined}
  AddRequestLobbyListDistanceFilter: {(eLobbyDistanceFilter: SteamEnums.ELobbyDistanceFilter): undefined}
  AddRequestLobbyListResultCountFilter: {(cMaxResults: number): undefined}
  AddRequestLobbyListCompatibleMembersFilter: {(steamIDLobby: unknown): undefined}
  GetLobbyByIndex: {(iLobby: number): unknown}
  CreateLobby: {(eLobbyType: SteamEnums.ELobbyType, cMaxMembers: number): Promise<{ m_eResult: SteamEnums.EResult, m_ulSteamIDLobby: number }>};
  JoinLobby: {(steamIDLobby: unknown): Promise<{ m_ulSteamIDLobby: number, m_rgfChatPermissions: number, m_bLocked: boolean, m_EChatRoomEnterResponse: number }>};
  LeaveLobby: {(steamIDLobby: unknown): undefined}
  InviteUserToLobby: {(steamIDLobby: unknown, steamIDInvitee: unknown): boolean}
  GetNumLobbyMembers: {(steamIDLobby: unknown): number}
  GetLobbyMemberByIndex: {(steamIDLobby: unknown, iMember: number): unknown}
  GetLobbyData: {(steamIDLobby: unknown, pchKey: string): string}
  SetLobbyData: {(steamIDLobby: unknown, pchKey: string, pchValue: string): boolean}
  GetLobbyDataCount: {(steamIDLobby: unknown): number}
  GetLobbyDataByIndex: {(steamIDLobby: unknown, iLobbyData: number, pchKey: string, cchKeyBufferSize: number, pchValue: string, cchValueBufferSize: number): boolean}
  DeleteLobbyData: {(steamIDLobby: unknown, pchKey: string): boolean}
  GetLobbyMemberData: {(steamIDLobby: unknown, steamIDUser: unknown, pchKey: string): string}
  SetLobbyMemberData: {(steamIDLobby: unknown, pchKey: string, pchValue: string): undefined}
  SendLobbyChatMsg: {(steamIDLobby: unknown, pvMsgBody: unknown, cubMsgBody: number): boolean}
  GetLobbyChatEntry: {(steamIDLobby: unknown, iChatID: number, pSteamIDUser: unknown, pvData: unknown, cubData: number, peChatEntryType: unknown): number}
  RequestLobbyData: {(steamIDLobby: unknown): boolean}
  SetLobbyGameServer: {(steamIDLobby: unknown, unGameServerIP: number, unGameServerPort: number, steamIDGameServer: unknown): undefined}
  GetLobbyGameServer: {(steamIDLobby: unknown, punGameServerIP: unknown, punGameServerPort: unknown, psteamIDGameServer: unknown): boolean}
  SetLobbyMemberLimit: {(steamIDLobby: unknown, cMaxMembers: number): boolean}
  GetLobbyMemberLimit: {(steamIDLobby: unknown): number}
  SetLobbyType: {(steamIDLobby: unknown, eLobbyType: SteamEnums.ELobbyType): boolean}
  SetLobbyJoinable: {(steamIDLobby: unknown, bLobbyJoinable: boolean): boolean}
  GetLobbyOwner: {(steamIDLobby: unknown): unknown}
  SetLobbyOwner: {(steamIDLobby: unknown, steamIDNewOwner: unknown): boolean}
  SetLinkedLobby: {(steamIDLobby: unknown, steamIDLobbyDependent: unknown): boolean}
}
declare interface steammatchmakingservers {
  RequestInternetServerList: {(iApp: number, ppchFilters: unknown, nFilters: number, pRequestServersResponse: unknown): unknown}
  RequestLANServerList: {(iApp: number, pRequestServersResponse: unknown): unknown}
  RequestFriendsServerList: {(iApp: number, ppchFilters: unknown, nFilters: number, pRequestServersResponse: unknown): unknown}
  RequestFavoritesServerList: {(iApp: number, ppchFilters: unknown, nFilters: number, pRequestServersResponse: unknown): unknown}
  RequestHistoryServerList: {(iApp: number, ppchFilters: unknown, nFilters: number, pRequestServersResponse: unknown): unknown}
  RequestSpectatorServerList: {(iApp: number, ppchFilters: unknown, nFilters: number, pRequestServersResponse: unknown): unknown}
  ReleaseRequest: {(hServerListRequest: unknown): undefined}
  GetServerDetails: {(hRequest: unknown, iServer: number): unknown}
  CancelQuery: {(hRequest: unknown): undefined}
  RefreshQuery: {(hRequest: unknown): undefined}
  IsRefreshing: {(hRequest: unknown): boolean}
  GetServerCount: {(hRequest: unknown): number}
  RefreshServer: {(hRequest: unknown, iServer: number): undefined}
  PingServer: {(unIP: number, usPort: number, pRequestServersResponse: unknown): number}
  PlayerDetails: {(unIP: number, usPort: number, pRequestServersResponse: unknown): number}
  ServerRules: {(unIP: number, usPort: number, pRequestServersResponse: unknown): number}
  CancelServerQuery: {(hServerQuery: number): undefined}
}
declare interface steamgamesearch {
  AddGameSearchParams: {(pchKeyToFind: string, pchValuesToFind: string): SteamEnums.EGameSearchErrorCode_t}
  SearchForGameWithLobby: {(steamIDLobby: unknown, nPlayerMin: number, nPlayerMax: number): SteamEnums.EGameSearchErrorCode_t}
  SearchForGameSolo: {(nPlayerMin: number, nPlayerMax: number): SteamEnums.EGameSearchErrorCode_t}
  AcceptGame: {(): SteamEnums.EGameSearchErrorCode_t}
  DeclineGame: {(): SteamEnums.EGameSearchErrorCode_t}
  RetrieveConnectionDetails: {(steamIDHost: unknown, pchConnectionDetails: string, cubConnectionDetails: number): SteamEnums.EGameSearchErrorCode_t}
  EndGameSearch: {(): SteamEnums.EGameSearchErrorCode_t}
  SetGameHostParams: {(pchKey: string, pchValue: string): SteamEnums.EGameSearchErrorCode_t}
  SetConnectionDetails: {(pchConnectionDetails: string, cubConnectionDetails: number): SteamEnums.EGameSearchErrorCode_t}
  RequestPlayersForGame: {(nPlayerMin: number, nPlayerMax: number, nMaxTeamSize: number): SteamEnums.EGameSearchErrorCode_t}
  HostConfirmGameStart: {(ullUniqueGameID: number): SteamEnums.EGameSearchErrorCode_t}
  CancelRequestPlayersForGame: {(): SteamEnums.EGameSearchErrorCode_t}
  SubmitPlayerResult: {(ullUniqueGameID: number, steamIDPlayer: unknown, EPlayerResult: SteamEnums.EPlayerResult_t): SteamEnums.EGameSearchErrorCode_t}
  EndGame: {(ullUniqueGameID: number): SteamEnums.EGameSearchErrorCode_t}
}
declare interface steamparties {
  GetNumActiveBeacons: {(): number}
  GetBeaconByIndex: {(unIndex: number): number}
  GetBeaconDetails: {(ulBeaconID: number, pSteamIDBeaconOwner: unknown, pLocation: unknown, pchMetadata: string, cchMetadata: number): boolean}
  JoinParty: {(ulBeaconID: number): Promise<{ m_eResult: SteamEnums.EResult, m_ulBeaconID: number, m_SteamIDBeaconOwner: unknown, m_rgchConnectString: string }>};
  GetNumAvailableBeaconLocations: {(puNumLocations: unknown): boolean}
  GetAvailableBeaconLocations: {(pLocationList: unknown, uMaxNumLocations: number): boolean}
  CreateBeacon: {(unOpenSlots: number, pBeaconLocation: unknown, pchConnectString: string, pchMetadata: string): Promise<{ m_eResult: SteamEnums.EResult, m_ulBeaconID: number }>};
  OnReservationCompleted: {(ulBeacon: number, steamIDUser: unknown): undefined}
  CancelReservation: {(ulBeacon: number, steamIDUser: unknown): undefined}
  ChangeNumOpenSlots: {(ulBeacon: number, unOpenSlots: number): Promise<{ m_eResult: SteamEnums.EResult }>};
  DestroyBeacon: {(ulBeacon: number): boolean}
  GetBeaconLocationData: {(BeaconLocation: SteamStructs.SteamPartyBeaconLocation_t, eData: SteamEnums.ESteamPartyBeaconLocationData, pchDataStringOut: string, cchDataStringOut: number): boolean}
}
declare interface steamuserstats {
  RequestCurrentStats: {(): boolean}
  GetStat: {(pchName: string, pData: unknown): boolean}
  SetStat: {(pchName: string, nData: number): boolean}
  UpdateAvgRateStat: {(pchName: string, flCountThisSession: number, dSessionLength: number): boolean}
  GetAchievement: {(pchName: string, pbAchieved: unknown): boolean}
  SetAchievement: {(pchName: string): boolean}
  ClearAchievement: {(pchName: string): boolean}
  GetAchievementAndUnlockTime: {(pchName: string, pbAchieved: unknown, punUnlockTime: unknown): boolean}
  StoreStats: {(): boolean}
  GetAchievementIcon: {(pchName: string): number}
  GetAchievementDisplayAttribute: {(pchName: string, pchKey: string): string}
  IndicateAchievementProgress: {(pchName: string, nCurProgress: number, nMaxProgress: number): boolean}
  GetNumAchievements: {(): number}
  GetAchievementName: {(iAchievement: number): string}
  RequestUserStats: {(steamIDUser: unknown): Promise<{ m_eResult: SteamEnums.EResult, m_steamIDUser: unknown }>};
  GetUserStat: {(steamIDUser: unknown, pchName: string, pData: unknown): boolean}
  GetUserAchievement: {(steamIDUser: unknown, pchName: string, pbAchieved: unknown): boolean}
  GetUserAchievementAndUnlockTime: {(steamIDUser: unknown, pchName: string, pbAchieved: unknown, punUnlockTime: unknown): boolean}
  ResetAllStats: {(bAchievementsToo: boolean): boolean}
  FindOrCreateLeaderboard: {(pchLeaderboardName: string, eLeaderboardSortMethod: SteamEnums.ELeaderboardSortMethod, eLeaderboardDisplayType: SteamEnums.ELeaderboardDisplayType): Promise<{ m_hSteamLeaderboard: number, m_bLeaderboardFound: number }>};
  FindLeaderboard: {(pchLeaderboardName: string): Promise<{ m_hSteamLeaderboard: number, m_bLeaderboardFound: number }>};
  GetLeaderboardName: {(hSteamLeaderboard: number): string}
  GetLeaderboardEntryCount: {(hSteamLeaderboard: number): number}
  GetLeaderboardSortMethod: {(hSteamLeaderboard: number): SteamEnums.ELeaderboardSortMethod}
  GetLeaderboardDisplayType: {(hSteamLeaderboard: number): SteamEnums.ELeaderboardDisplayType}
  DownloadLeaderboardEntries: {(hSteamLeaderboard: number, eLeaderboardDataRequest: SteamEnums.ELeaderboardDataRequest, nRangeStart: number, nRangeEnd: number): Promise<{ m_hSteamLeaderboard: number, m_hSteamLeaderboardEntries: number, m_cEntryCount: number }>};
  DownloadLeaderboardEntriesForUsers: {(hSteamLeaderboard: number, prgUsers: unknown, cUsers: number): Promise<{ m_hSteamLeaderboard: number, m_hSteamLeaderboardEntries: number, m_cEntryCount: number }>};
  GetDownloadedLeaderboardEntry: {(hSteamLeaderboardEntries: number, index: number, pLeaderboardEntry: unknown, pDetails: unknown, cDetailsMax: number): boolean}
  UploadLeaderboardScore: {(hSteamLeaderboard: number, eLeaderboardUploadScoreMethod: SteamEnums.ELeaderboardUploadScoreMethod, nScore: number, pScoreDetails: unknown, cScoreDetailsCount: number): Promise<{ m_bSuccess: number, m_hSteamLeaderboard: number, m_nScore: number, m_bScoreChanged: number, m_nGlobalRankNew: number, m_nGlobalRankPrevious: number }>};
  AttachLeaderboardUGC: {(hSteamLeaderboard: number, hUGC: number): Promise<{ m_eResult: SteamEnums.EResult, m_hSteamLeaderboard: number }>};
  GetNumberOfCurrentPlayers: {(): Promise<{ m_bSuccess: number, m_cPlayers: number }>};
  RequestGlobalAchievementPercentages: {(): Promise<{ m_nGameID: number, m_eResult: SteamEnums.EResult }>};
  GetMostAchievedAchievementInfo: {(pchName: string, unNameBufLen: number, pflPercent: unknown, pbAchieved: unknown): number}
  GetNextMostAchievedAchievementInfo: {(iIteratorPrevious: number, pchName: string, unNameBufLen: number, pflPercent: unknown, pbAchieved: unknown): number}
  GetAchievementAchievedPercent: {(pchName: string, pflPercent: unknown): boolean}
  RequestGlobalStats: {(nHistoryDays: number): Promise<{ m_nGameID: number, m_eResult: SteamEnums.EResult }>};
  GetGlobalStat: {(pchStatName: string, pData: unknown): boolean}
  GetGlobalStatHistory: {(pchStatName: string, pData: unknown, cubData: number): number}
  GetAchievementProgressLimits: {(pchName: string, pnMinProgress: unknown, pnMaxProgress: unknown): boolean}
}
declare interface steamapps {
  BIsSubscribed: {(): boolean}
  BIsLowViolence: {(): boolean}
  BIsCybercafe: {(): boolean}
  BIsVACBanned: {(): boolean}
  GetCurrentGameLanguage: {(): string}
  GetAvailableGameLanguages: {(): string}
  BIsSubscribedApp: {(appID: number): boolean}
  BIsDlcInstalled: {(appID: number): boolean}
  GetEarliestPurchaseUnixTime: {(nAppID: number): number}
  BIsSubscribedFromFreeWeekend: {(): boolean}
  GetDLCCount: {(): number}
  BGetDLCDataByIndex: {(iDLC: number, pAppID: unknown, pbAvailable: unknown, pchName: string, cchNameBufferSize: number): boolean}
  InstallDLC: {(nAppID: number): undefined}
  UninstallDLC: {(nAppID: number): undefined}
  RequestAppProofOfPurchaseKey: {(nAppID: number): undefined}
  GetCurrentBetaName: {(pchName: string, cchNameBufferSize: number): boolean}
  MarkContentCorrupt: {(bMissingFilesOnly: boolean): boolean}
  GetInstalledDepots: {(appID: number, pvecDepots: unknown, cMaxDepots: number): number}
  GetAppInstallDir: {(appID: number, pchFolder: string, cchFolderBufferSize: number): number}
  BIsAppInstalled: {(appID: number): boolean}
  GetAppOwner: {(): unknown}
  GetLaunchQueryParam: {(pchKey: string): string}
  GetDlcDownloadProgress: {(nAppID: number, punBytesDownloaded: unknown, punBytesTotal: unknown): boolean}
  GetAppBuildId: {(): number}
  RequestAllProofOfPurchaseKeys: {(): undefined}
  GetFileDetails: {(pszFileName: string): Promise<{ m_eResult: SteamEnums.EResult, m_ulFileSize: number, m_FileSHA: number, m_unFlags: number }>};
  GetLaunchCommandLine: {(pszCommandLine: string, cubCommandLine: number): number}
  BIsSubscribedFromFamilySharing: {(): boolean}
  BIsTimedTrial: {(punSecondsAllowed: unknown, punSecondsPlayed: unknown): boolean}
}
declare interface steamnetworking {
  SendP2PPacket: {(steamIDRemote: unknown, pubData: unknown, cubData: number, eP2PSendType: SteamEnums.EP2PSend, nChannel: number): boolean}
  IsP2PPacketAvailable: {(pcubMsgSize: unknown, nChannel: number): boolean}
  ReadP2PPacket: {(pubDest: unknown, cubDest: number, pcubMsgSize: unknown, psteamIDRemote: unknown, nChannel: number): boolean}
  AcceptP2PSessionWithUser: {(steamIDRemote: unknown): boolean}
  CloseP2PSessionWithUser: {(steamIDRemote: unknown): boolean}
  CloseP2PChannelWithUser: {(steamIDRemote: unknown, nChannel: number): boolean}
  GetP2PSessionState: {(steamIDRemote: unknown, pConnectionState: unknown): boolean}
  AllowP2PPacketRelay: {(bAllow: boolean): boolean}
  CreateListenSocket: {(nVirtualP2PPort: number, nIP: SteamStructs.SteamIPAddress_t, nPort: number, bAllowUseOfPacketRelay: boolean): number}
  CreateP2PConnectionSocket: {(steamIDTarget: unknown, nVirtualPort: number, nTimeoutSec: number, bAllowUseOfPacketRelay: boolean): number}
  CreateConnectionSocket: {(nIP: SteamStructs.SteamIPAddress_t, nPort: number, nTimeoutSec: number): number}
  DestroySocket: {(hSocket: number, bNotifyRemoteEnd: boolean): boolean}
  DestroyListenSocket: {(hSocket: number, bNotifyRemoteEnd: boolean): boolean}
  SendDataOnSocket: {(hSocket: number, pubData: unknown, cubData: number, bReliable: boolean): boolean}
  IsDataAvailableOnSocket: {(hSocket: number, pcubMsgSize: unknown): boolean}
  RetrieveDataFromSocket: {(hSocket: number, pubDest: unknown, cubDest: number, pcubMsgSize: unknown): boolean}
  IsDataAvailable: {(hListenSocket: number, pcubMsgSize: unknown, phSocket: unknown): boolean}
  RetrieveData: {(hListenSocket: number, pubDest: unknown, cubDest: number, pcubMsgSize: unknown, phSocket: unknown): boolean}
  GetSocketInfo: {(hSocket: number, pSteamIDRemote: unknown, peSocketStatus: unknown, punIPRemote: unknown, punPortRemote: unknown): boolean}
  GetListenSocketInfo: {(hListenSocket: number, pnIP: unknown, pnPort: unknown): boolean}
  GetSocketConnectionType: {(hSocket: number): SteamEnums.ESNetSocketConnectionType}
  GetMaxPacketSize: {(hSocket: number): number}
}
declare interface steamremotestorage {
  FileWrite: {(pchFile: string, pvData: unknown, cubData: number): boolean}
  FileRead: {(pchFile: string, pvData: unknown, cubDataToRead: number): number}
  FileWriteAsync: {(pchFile: string, pvData: unknown, cubData: number): Promise<{ m_eResult: SteamEnums.EResult }>};
  FileReadAsync: {(pchFile: string, nOffset: number, cubToRead: number): Promise<{ m_hFileReadAsync: number, m_eResult: SteamEnums.EResult, m_nOffset: number, m_cubRead: number }>};
  FileReadAsyncComplete: {(hReadCall: number, pvBuffer: unknown, cubToRead: number): boolean}
  FileForget: {(pchFile: string): boolean}
  FileDelete: {(pchFile: string): boolean}
  FileShare: {(pchFile: string): Promise<{ m_eResult: SteamEnums.EResult, m_hFile: number, m_rgchFilename: string }>};
  SetSyncPlatforms: {(pchFile: string, eRemoteStoragePlatform: SteamEnums.ERemoteStoragePlatform): boolean}
  FileWriteStreamOpen: {(pchFile: string): number}
  FileWriteStreamWriteChunk: {(writeHandle: number, pvData: unknown, cubData: number): boolean}
  FileWriteStreamClose: {(writeHandle: number): boolean}
  FileWriteStreamCancel: {(writeHandle: number): boolean}
  FileExists: {(pchFile: string): boolean}
  FilePersisted: {(pchFile: string): boolean}
  GetFileSize: {(pchFile: string): number}
  GetFileTimestamp: {(pchFile: string): number}
  GetSyncPlatforms: {(pchFile: string): SteamEnums.ERemoteStoragePlatform}
  GetFileCount: {(): number}
  GetFileNameAndSize: {(iFile: number, pnFileSizeInBytes: unknown): string}
  GetQuota: {(pnTotalBytes: unknown, puAvailableBytes: unknown): boolean}
  IsCloudEnabledForAccount: {(): boolean}
  IsCloudEnabledForApp: {(): boolean}
  SetCloudEnabledForApp: {(bEnabled: boolean): undefined}
  UGCDownload: {(hContent: number, unPriority: number): Promise<{ m_eResult: SteamEnums.EResult, m_hFile: number, m_nAppID: number, m_nSizeInBytes: number, m_pchFileName: string, m_ulSteamIDOwner: number }>};
  GetUGCDownloadProgress: {(hContent: number, pnBytesDownloaded: unknown, pnBytesExpected: unknown): boolean}
  GetUGCDetails: {(hContent: number, pnAppID: unknown, ppchName: unknown, pnFileSizeInBytes: unknown, pSteamIDOwner: unknown): boolean}
  UGCRead: {(hContent: number, pvData: unknown, cubDataToRead: number, cOffset: number, eAction: SteamEnums.EUGCReadAction): number}
  GetCachedUGCCount: {(): number}
  GetCachedUGCHandle: {(iCachedContent: number): number}
  PublishWorkshopFile: {(pchFile: string, pchPreviewFile: string, nConsumerAppId: number, pchTitle: string, pchDescription: string, eVisibility: SteamEnums.ERemoteStoragePublishedFileVisibility, pTags: unknown, eWorkshopFileType: SteamEnums.EWorkshopFileType): Promise<{ m_dPercentFile: number, m_bPreview: boolean }>};
  CreatePublishedFileUpdateRequest: {(unPublishedFileId: number): number}
  UpdatePublishedFileFile: {(updateHandle: number, pchFile: string): boolean}
  UpdatePublishedFilePreviewFile: {(updateHandle: number, pchPreviewFile: string): boolean}
  UpdatePublishedFileTitle: {(updateHandle: number, pchTitle: string): boolean}
  UpdatePublishedFileDescription: {(updateHandle: number, pchDescription: string): boolean}
  UpdatePublishedFileVisibility: {(updateHandle: number, eVisibility: SteamEnums.ERemoteStoragePublishedFileVisibility): boolean}
  UpdatePublishedFileTags: {(updateHandle: number, pTags: unknown): boolean}
  CommitPublishedFileUpdate: {(updateHandle: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number, m_bUserNeedsToAcceptWorkshopLegalAgreement: boolean }>};
  GetPublishedFileDetails: {(unPublishedFileId: number, unMaxSecondsOld: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number, m_nCreatorAppID: number, m_nConsumerAppID: number, m_rgchTitle: string, m_rgchDescription: string, m_hFile: number, m_hPreviewFile: number, m_ulSteamIDOwner: number, m_rtimeCreated: number, m_rtimeUpdated: number, m_eVisibility: SteamEnums.ERemoteStoragePublishedFileVisibility, m_bBanned: boolean, m_rgchTags: string, m_bTagsTruncated: boolean, m_pchFileName: string, m_nFileSize: number, m_nPreviewFileSize: number, m_rgchURL: string, m_eFileType: SteamEnums.EWorkshopFileType, m_bAcceptedForUse: boolean }>};
  DeletePublishedFile: {(unPublishedFileId: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number }>};
  EnumerateUserPublishedFiles: {(unStartIndex: number): Promise<{ m_eResult: SteamEnums.EResult, m_nResultsReturned: number, m_nTotalResultCount: number, m_rgPublishedFileId: unknown }>};
  SubscribePublishedFile: {(unPublishedFileId: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number }>};
  EnumerateUserSubscribedFiles: {(unStartIndex: number): Promise<{ m_eResult: SteamEnums.EResult, m_nResultsReturned: number, m_nTotalResultCount: number, m_rgPublishedFileId: unknown, m_rgRTimeSubscribed: number }>};
  UnsubscribePublishedFile: {(unPublishedFileId: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number }>};
  UpdatePublishedFileSetChangeDescription: {(updateHandle: number, pchChangeDescription: string): boolean}
  GetPublishedItemVoteDetails: {(unPublishedFileId: number): Promise<{ m_eResult: SteamEnums.EResult, m_unPublishedFileId: number, m_nVotesFor: number, m_nVotesAgainst: number, m_nReports: number, m_fScore: number }>};
  UpdateUserPublishedItemVote: {(unPublishedFileId: number, bVoteUp: boolean): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number }>};
  GetUserPublishedItemVoteDetails: {(unPublishedFileId: number): Promise<{ m_eResult: SteamEnums.EResult, m_unPublishedFileId: number, m_nVotesFor: number, m_nVotesAgainst: number, m_nReports: number, m_fScore: number }>};
  EnumerateUserSharedWorkshopFiles: {(steamId: unknown, unStartIndex: number, pRequiredTags: unknown, pExcludedTags: unknown): Promise<{ m_eResult: SteamEnums.EResult, m_nResultsReturned: number, m_nTotalResultCount: number, m_rgPublishedFileId: unknown }>};
  PublishVideo: {(eVideoProvider: SteamEnums.EWorkshopVideoProvider, pchVideoAccount: string, pchVideoIdentifier: string, pchPreviewFile: string, nConsumerAppId: number, pchTitle: string, pchDescription: string, eVisibility: SteamEnums.ERemoteStoragePublishedFileVisibility, pTags: unknown): Promise<{ m_dPercentFile: number, m_bPreview: boolean }>};
  SetUserPublishedFileAction: {(unPublishedFileId: number, eAction: SteamEnums.EWorkshopFileAction): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number, m_eAction: SteamEnums.EWorkshopFileAction }>};
  EnumeratePublishedFilesByUserAction: {(eAction: SteamEnums.EWorkshopFileAction, unStartIndex: number): Promise<{ m_eResult: SteamEnums.EResult, m_eAction: SteamEnums.EWorkshopFileAction, m_nResultsReturned: number, m_nTotalResultCount: number, m_rgPublishedFileId: unknown, m_rgRTimeUpdated: number }>};
  EnumeratePublishedWorkshopFiles: {(eEnumerationType: SteamEnums.EWorkshopEnumerationType, unStartIndex: number, unCount: number, unDays: number, pTags: unknown, pUserTags: unknown): Promise<{ m_eResult: SteamEnums.EResult, m_nResultsReturned: number, m_nTotalResultCount: number, m_rgPublishedFileId: unknown, m_rgScore: number, m_nAppId: number, m_unStartIndex: number }>};
  UGCDownloadToLocation: {(hContent: number, pchLocation: string, unPriority: number): Promise<{ m_eResult: SteamEnums.EResult, m_hFile: number, m_nAppID: number, m_nSizeInBytes: number, m_pchFileName: string, m_ulSteamIDOwner: number }>};
  GetLocalFileChangeCount: {(): number}
  GetLocalFileChange: {(iFile: number, pEChangeType: unknown, pEFilePathType: unknown): string}
  BeginFileWriteBatch: {(): boolean}
  EndFileWriteBatch: {(): boolean}
}
declare interface steamscreenshots {
  WriteScreenshot: {(pubRGB: unknown, cubRGB: number, nWidth: number, nHeight: number): number}
  AddScreenshotToLibrary: {(pchFilename: string, pchThumbnailFilename: string, nWidth: number, nHeight: number): number}
  TriggerScreenshot: {(): undefined}
  HookScreenshots: {(bHook: boolean): undefined}
  SetLocation: {(hScreenshot: number, pchLocation: string): boolean}
  TagUser: {(hScreenshot: number, steamID: unknown): boolean}
  TagPublishedFile: {(hScreenshot: number, unPublishedFileID: number): boolean}
  IsScreenshotsHooked: {(): boolean}
  AddVRScreenshotToLibrary: {(eType: SteamEnums.EVRScreenshotType, pchFilename: string, pchVRFilename: string): number}
}
declare interface steammusic {
  BIsEnabled: {(): boolean}
  BIsPlaying: {(): boolean}
  GetPlaybackStatus: {(): SteamEnums.AudioPlayback_Status}
  Play: {(): undefined}
  Pause: {(): undefined}
  PlayPrevious: {(): undefined}
  PlayNext: {(): undefined}
  SetVolume: {(flVolume: number): undefined}
  GetVolume: {(): number}
}
declare interface steammusicremote {
  RegisterSteamMusicRemote: {(pchName: string): boolean}
  DeregisterSteamMusicRemote: {(): boolean}
  BIsCurrentMusicRemote: {(): boolean}
  BActivationSuccess: {(bValue: boolean): boolean}
  SetDisplayName: {(pchDisplayName: string): boolean}
  SetPNGIcon_64x64: {(pvBuffer: unknown, cbBufferLength: number): boolean}
  EnablePlayPrevious: {(bValue: boolean): boolean}
  EnablePlayNext: {(bValue: boolean): boolean}
  EnableShuffled: {(bValue: boolean): boolean}
  EnableLooped: {(bValue: boolean): boolean}
  EnableQueue: {(bValue: boolean): boolean}
  EnablePlaylists: {(bValue: boolean): boolean}
  UpdatePlaybackStatus: {(nStatus: SteamEnums.AudioPlayback_Status): boolean}
  UpdateShuffled: {(bValue: boolean): boolean}
  UpdateLooped: {(bValue: boolean): boolean}
  UpdateVolume: {(flValue: number): boolean}
  CurrentEntryWillChange: {(): boolean}
  CurrentEntryIsAvailable: {(bAvailable: boolean): boolean}
  UpdateCurrentEntryText: {(pchText: string): boolean}
  UpdateCurrentEntryElapsedSeconds: {(nValue: number): boolean}
  UpdateCurrentEntryCoverArt: {(pvBuffer: unknown, cbBufferLength: number): boolean}
  CurrentEntryDidChange: {(): boolean}
  QueueWillChange: {(): boolean}
  ResetQueueEntries: {(): boolean}
  SetQueueEntry: {(nID: number, nPosition: number, pchEntryText: string): boolean}
  SetCurrentQueueEntry: {(nID: number): boolean}
  QueueDidChange: {(): boolean}
  PlaylistWillChange: {(): boolean}
  ResetPlaylistEntries: {(): boolean}
  SetPlaylistEntry: {(nID: number, nPosition: number, pchEntryText: string): boolean}
  SetCurrentPlaylistEntry: {(nID: number): boolean}
  PlaylistDidChange: {(): boolean}
}
declare interface steamhttp {
  CreateHTTPRequest: {(eHTTPRequestMethod: SteamEnums.EHTTPMethod, pchAbsoluteURL: string): number}
  SetHTTPRequestContextValue: {(hRequest: number, ulContextValue: number): boolean}
  SetHTTPRequestNetworkActivityTimeout: {(hRequest: number, unTimeoutSeconds: number): boolean}
  SetHTTPRequestHeaderValue: {(hRequest: number, pchHeaderName: string, pchHeaderValue: string): boolean}
  SetHTTPRequestGetOrPostParameter: {(hRequest: number, pchParamName: string, pchParamValue: string): boolean}
  SendHTTPRequest: {(hRequest: number, pCallHandle: unknown): boolean}
  SendHTTPRequestAndStreamResponse: {(hRequest: number, pCallHandle: unknown): boolean}
  DeferHTTPRequest: {(hRequest: number): boolean}
  PrioritizeHTTPRequest: {(hRequest: number): boolean}
  GetHTTPResponseHeaderSize: {(hRequest: number, pchHeaderName: string, unResponseHeaderSize: unknown): boolean}
  GetHTTPResponseHeaderValue: {(hRequest: number, pchHeaderName: string, pHeaderValueBuffer: unknown, unBufferSize: number): boolean}
  GetHTTPResponseBodySize: {(hRequest: number, unBodySize: unknown): boolean}
  GetHTTPResponseBodyData: {(hRequest: number, pBodyDataBuffer: unknown, unBufferSize: number): boolean}
  GetHTTPStreamingResponseBodyData: {(hRequest: number, cOffset: number, pBodyDataBuffer: unknown, unBufferSize: number): boolean}
  ReleaseHTTPRequest: {(hRequest: number): boolean}
  GetHTTPDownloadProgressPct: {(hRequest: number, pflPercentOut: unknown): boolean}
  SetHTTPRequestRawPostBody: {(hRequest: number, pchContentType: string, pubBody: unknown, unBodyLen: number): boolean}
  CreateCookieContainer: {(bAllowResponsesToModify: boolean): number}
  ReleaseCookieContainer: {(hCookieContainer: number): boolean}
  SetCookie: {(hCookieContainer: number, pchHost: string, pchUrl: string, pchCookie: string): boolean}
  SetHTTPRequestCookieContainer: {(hRequest: number, hCookieContainer: number): boolean}
  SetHTTPRequestUserAgentInfo: {(hRequest: number, pchUserAgentInfo: string): boolean}
  SetHTTPRequestRequiresVerifiedCertificate: {(hRequest: number, bRequireVerifiedCertificate: boolean): boolean}
  SetHTTPRequestAbsoluteTimeoutMS: {(hRequest: number, unMilliseconds: number): boolean}
  GetHTTPRequestWasTimedOut: {(hRequest: number, pbWasTimedOut: unknown): boolean}
}
declare interface steamcontroller {
  Init: {(): boolean}
  Shutdown: {(): boolean}
  RunFrame: {(): undefined}
  GetConnectedControllers: {(handlesOut: unknown): number}
  GetActionSetHandle: {(pszActionSetName: string): number}
  ActivateActionSet: {(controllerHandle: number, actionSetHandle: number): undefined}
  GetCurrentActionSet: {(controllerHandle: number): number}
  ActivateActionSetLayer: {(controllerHandle: number, actionSetLayerHandle: number): undefined}
  DeactivateActionSetLayer: {(controllerHandle: number, actionSetLayerHandle: number): undefined}
  DeactivateAllActionSetLayers: {(controllerHandle: number): undefined}
  GetActiveActionSetLayers: {(controllerHandle: number, handlesOut: unknown): number}
  GetDigitalActionHandle: {(pszActionName: string): number}
  GetDigitalActionData: {(controllerHandle: number, digitalActionHandle: number): SteamStructs.InputDigitalActionData_t}
  GetDigitalActionOrigins: {(controllerHandle: number, actionSetHandle: number, digitalActionHandle: number, originsOut: unknown): number}
  GetAnalogActionHandle: {(pszActionName: string): number}
  GetAnalogActionData: {(controllerHandle: number, analogActionHandle: number): SteamStructs.InputAnalogActionData_t}
  GetAnalogActionOrigins: {(controllerHandle: number, actionSetHandle: number, analogActionHandle: number, originsOut: unknown): number}
  GetGlyphForActionOrigin: {(eOrigin: SteamEnums.EControllerActionOrigin): string}
  GetStringForActionOrigin: {(eOrigin: SteamEnums.EControllerActionOrigin): string}
  StopAnalogActionMomentum: {(controllerHandle: number, eAction: number): undefined}
  GetMotionData: {(controllerHandle: number): SteamStructs.InputMotionData_t}
  TriggerHapticPulse: {(controllerHandle: number, eTargetPad: SteamEnums.ESteamControllerPad, usDurationMicroSec: number): undefined}
  TriggerRepeatedHapticPulse: {(controllerHandle: number, eTargetPad: SteamEnums.ESteamControllerPad, usDurationMicroSec: number, usOffMicroSec: number, unRepeat: number, nFlags: number): undefined}
  TriggerVibration: {(controllerHandle: number, usLeftSpeed: number, usRightSpeed: number): undefined}
  SetLEDColor: {(controllerHandle: number, nColorR: number, nColorG: number, nColorB: number, nFlags: number): undefined}
  ShowBindingPanel: {(controllerHandle: number): boolean}
  GetInputTypeForHandle: {(controllerHandle: number): SteamEnums.ESteamInputType}
  GetControllerForGamepadIndex: {(nIndex: number): number}
  GetGamepadIndexForController: {(ulControllerHandle: number): number}
  GetStringForXboxOrigin: {(eOrigin: SteamEnums.EXboxOrigin): string}
  GetGlyphForXboxOrigin: {(eOrigin: SteamEnums.EXboxOrigin): string}
  GetActionOriginFromXboxOrigin: {(controllerHandle: number, eOrigin: SteamEnums.EXboxOrigin): SteamEnums.EControllerActionOrigin}
  TranslateActionOrigin: {(eDestinationInputType: SteamEnums.ESteamInputType, eSourceOrigin: SteamEnums.EControllerActionOrigin): SteamEnums.EControllerActionOrigin}
  GetControllerBindingRevision: {(controllerHandle: number, pMajor: unknown, pMinor: unknown): boolean}
}
declare interface steamugc {
  CreateQueryUserUGCRequest: {(unAccountID: number, eListType: SteamEnums.EUserUGCList, eMatchingUGCType: SteamEnums.EUGCMatchingUGCType, eSortOrder: SteamEnums.EUserUGCListSortOrder, nCreatorAppID: number, nConsumerAppID: number, unPage: number): number}
  CreateQueryAllUGCRequest: {(eQueryType: SteamEnums.EUGCQuery, eMatchingeMatchingUGCTypeFileType: SteamEnums.EUGCMatchingUGCType, nCreatorAppID: number, nConsumerAppID: number, unPage: number): number}
  CreateQueryUGCDetailsRequest: {(pvecPublishedFileID: unknown, unNumPublishedFileIDs: number): number}
  SendQueryUGCRequest: {(handle: number): Promise<{ m_handle: number, m_eResult: SteamEnums.EResult, m_unNumResultsReturned: number, m_unTotalMatchingResults: number, m_bCachedData: boolean, m_rgchNextCursor: string }>};
  GetQueryUGCResult: {(handle: number, index: number, pDetails: unknown): boolean}
  GetQueryUGCNumTags: {(handle: number, index: number): number}
  GetQueryUGCTag: {(handle: number, index: number, indexTag: number, pchValue: string, cchValueSize: number): boolean}
  GetQueryUGCTagDisplayName: {(handle: number, index: number, indexTag: number, pchValue: string, cchValueSize: number): boolean}
  GetQueryUGCPreviewURL: {(handle: number, index: number, pchURL: string, cchURLSize: number): boolean}
  GetQueryUGCMetadata: {(handle: number, index: number, pchMetadata: string, cchMetadatasize: number): boolean}
  GetQueryUGCChildren: {(handle: number, index: number, pvecPublishedFileID: unknown, cMaxEntries: number): boolean}
  GetQueryUGCStatistic: {(handle: number, index: number, eStatType: SteamEnums.EItemStatistic, pStatValue: unknown): boolean}
  GetQueryUGCNumAdditionalPreviews: {(handle: number, index: number): number}
  GetQueryUGCAdditionalPreview: {(handle: number, index: number, previewIndex: number, pchURLOrVideoID: string, cchURLSize: number, pchOriginalFileName: string, cchOriginalFileNameSize: number, pPreviewType: unknown): boolean}
  GetQueryUGCNumKeyValueTags: {(handle: number, index: number): number}
  GetQueryUGCKeyValueTag: {(handle: number, index: number, keyValueTagIndex: number, pchKey: string, cchKeySize: number, pchValue: string, cchValueSize: number): boolean}
  ReleaseQueryUGCRequest: {(handle: number): boolean}
  AddRequiredTag: {(handle: number, pTagName: string): boolean}
  AddRequiredTagGroup: {(handle: number, pTagGroups: unknown): boolean}
  AddExcludedTag: {(handle: number, pTagName: string): boolean}
  SetReturnOnlyIDs: {(handle: number, bReturnOnlyIDs: boolean): boolean}
  SetReturnKeyValueTags: {(handle: number, bReturnKeyValueTags: boolean): boolean}
  SetReturnLongDescription: {(handle: number, bReturnLongDescription: boolean): boolean}
  SetReturnMetadata: {(handle: number, bReturnMetadata: boolean): boolean}
  SetReturnChildren: {(handle: number, bReturnChildren: boolean): boolean}
  SetReturnAdditionalPreviews: {(handle: number, bReturnAdditionalPreviews: boolean): boolean}
  SetReturnTotalOnly: {(handle: number, bReturnTotalOnly: boolean): boolean}
  SetReturnPlaytimeStats: {(handle: number, unDays: number): boolean}
  SetLanguage: {(handle: number, pchLanguage: string): boolean}
  SetAllowCachedResponse: {(handle: number, unMaxAgeSeconds: number): boolean}
  SetCloudFileNameFilter: {(handle: number, pMatchCloudFileName: string): boolean}
  SetMatchAnyTag: {(handle: number, bMatchAnyTag: boolean): boolean}
  SetSearchText: {(handle: number, pSearchText: string): boolean}
  SetRankedByTrendDays: {(handle: number, unDays: number): boolean}
  SetTimeCreatedDateRange: {(handle: number, rtStart: number, rtEnd: number): boolean}
  SetTimeUpdatedDateRange: {(handle: number, rtStart: number, rtEnd: number): boolean}
  AddRequiredKeyValueTag: {(handle: number, pKey: string, pValue: string): boolean}
  RequestUGCDetails: {(nPublishedFileID: number, unMaxAgeSeconds: number): Promise<{ m_details: SteamStructs.SteamUGCDetails_t, m_bCachedData: boolean }>};
  CreateItem: {(nConsumerAppId: number, eFileType: SteamEnums.EWorkshopFileType): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number, m_bUserNeedsToAcceptWorkshopLegalAgreement: boolean }>};
  StartItemUpdate: {(nConsumerAppId: number, nPublishedFileID: number): number}
  SetItemTitle: {(handle: number, pchTitle: string): boolean}
  SetItemDescription: {(handle: number, pchDescription: string): boolean}
  SetItemUpdateLanguage: {(handle: number, pchLanguage: string): boolean}
  SetItemMetadata: {(handle: number, pchMetaData: string): boolean}
  SetItemVisibility: {(handle: number, eVisibility: SteamEnums.ERemoteStoragePublishedFileVisibility): boolean}
  SetItemTags: {(updateHandle: number, pTags: unknown): boolean}
  SetItemContent: {(handle: number, pszContentFolder: string): boolean}
  SetItemPreview: {(handle: number, pszPreviewFile: string): boolean}
  SetAllowLegacyUpload: {(handle: number, bAllowLegacyUpload: boolean): boolean}
  RemoveAllItemKeyValueTags: {(handle: number): boolean}
  RemoveItemKeyValueTags: {(handle: number, pchKey: string): boolean}
  AddItemKeyValueTag: {(handle: number, pchKey: string, pchValue: string): boolean}
  AddItemPreviewFile: {(handle: number, pszPreviewFile: string, type: SteamEnums.EItemPreviewType): boolean}
  AddItemPreviewVideo: {(handle: number, pszVideoID: string): boolean}
  UpdateItemPreviewFile: {(handle: number, index: number, pszPreviewFile: string): boolean}
  UpdateItemPreviewVideo: {(handle: number, index: number, pszVideoID: string): boolean}
  RemoveItemPreview: {(handle: number, index: number): boolean}
  SubmitItemUpdate: {(handle: number, pchChangeNote: string): Promise<{ m_eResult: SteamEnums.EResult, m_bUserNeedsToAcceptWorkshopLegalAgreement: boolean, m_nPublishedFileId: number }>};
  GetItemUpdateProgress: {(handle: number, punBytesProcessed: unknown, punBytesTotal: unknown): SteamEnums.EItemUpdateStatus}
  SetUserItemVote: {(nPublishedFileID: number, bVoteUp: boolean): Promise<{ m_nPublishedFileId: number, m_eResult: SteamEnums.EResult, m_bVoteUp: boolean }>};
  GetUserItemVote: {(nPublishedFileID: number): Promise<{ m_nPublishedFileId: number, m_eResult: SteamEnums.EResult, m_bVotedUp: boolean, m_bVotedDown: boolean, m_bVoteSkipped: boolean }>};
  AddItemToFavorites: {(nAppId: number, nPublishedFileID: number): Promise<{ m_nPublishedFileId: number, m_eResult: SteamEnums.EResult, m_bWasAddRequest: boolean }>};
  RemoveItemFromFavorites: {(nAppId: number, nPublishedFileID: number): Promise<{ m_nPublishedFileId: number, m_eResult: SteamEnums.EResult, m_bWasAddRequest: boolean }>};
  SubscribeItem: {(nPublishedFileID: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number }>};
  UnsubscribeItem: {(nPublishedFileID: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number }>};
  GetNumSubscribedItems: {(): number}
  GetSubscribedItems: {(pvecPublishedFileID: unknown, cMaxEntries: number): number}
  GetItemState: {(nPublishedFileID: number): number}
  GetItemInstallInfo: {(nPublishedFileID: number, punSizeOnDisk: unknown, pchFolder: string, cchFolderSize: number, punTimeStamp: unknown): boolean}
  GetItemDownloadInfo: {(nPublishedFileID: number, punBytesDownloaded: unknown, punBytesTotal: unknown): boolean}
  DownloadItem: {(nPublishedFileID: number, bHighPriority: boolean): boolean}
  BInitWorkshopForGameServer: {(unWorkshopDepotID: number, pszFolder: string): boolean}
  SuspendDownloads: {(bSuspend: boolean): undefined}
  StartPlaytimeTracking: {(pvecPublishedFileID: unknown, unNumPublishedFileIDs: number): Promise<{ m_eResult: SteamEnums.EResult }>};
  StopPlaytimeTracking: {(pvecPublishedFileID: unknown, unNumPublishedFileIDs: number): Promise<{ m_eResult: SteamEnums.EResult }>};
  StopPlaytimeTrackingForAllItems: {(): Promise<{ m_eResult: SteamEnums.EResult }>};
  AddDependency: {(nParentPublishedFileID: number, nChildPublishedFileID: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number, m_nChildPublishedFileId: number }>};
  RemoveDependency: {(nParentPublishedFileID: number, nChildPublishedFileID: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number, m_nChildPublishedFileId: number }>};
  AddAppDependency: {(nPublishedFileID: number, nAppID: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number, m_nAppID: number }>};
  RemoveAppDependency: {(nPublishedFileID: number, nAppID: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number, m_nAppID: number }>};
  GetAppDependencies: {(nPublishedFileID: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number, m_rgAppIDs: unknown, m_nNumAppDependencies: number, m_nTotalNumAppDependencies: number }>};
  DeleteItem: {(nPublishedFileID: number): Promise<{ m_eResult: SteamEnums.EResult, m_nPublishedFileId: number }>};
  ShowWorkshopEULA: {(): boolean}
  GetWorkshopEULAStatus: {(): Promise<{ m_eResult: SteamEnums.EResult, m_nAppID: number, m_unVersion: number, m_rtAction: number, m_bAccepted: boolean, m_bNeedsAction: boolean }>};
}
declare interface steamapplist {
  GetNumInstalledApps: {(): number}
  GetInstalledApps: {(pvecAppID: unknown, unMaxAppIDs: number): number}
  GetAppName: {(nAppID: number, pchName: string, cchNameMax: number): number}
  GetAppInstallDir: {(nAppID: number, pchDirectory: string, cchNameMax: number): number}
  GetAppBuildId: {(nAppID: number): number}
}
declare interface steamhtmlsurface {
  Init: {(): boolean}
  Shutdown: {(): boolean}
  CreateBrowser: {(pchUserAgent: string, pchUserCSS: string): Promise<{ unBrowserHandle: number }>};
  RemoveBrowser: {(unBrowserHandle: number): undefined}
  LoadURL: {(unBrowserHandle: number, pchURL: string, pchPostData: string): undefined}
  SetSize: {(unBrowserHandle: number, unWidth: number, unHeight: number): undefined}
  StopLoad: {(unBrowserHandle: number): undefined}
  Reload: {(unBrowserHandle: number): undefined}
  GoBack: {(unBrowserHandle: number): undefined}
  GoForward: {(unBrowserHandle: number): undefined}
  AddHeader: {(unBrowserHandle: number, pchKey: string, pchValue: string): undefined}
  ExecuteJavascript: {(unBrowserHandle: number, pchScript: string): undefined}
  MouseUp: {(unBrowserHandle: number, eMouseButton: unknown): undefined}
  MouseDown: {(unBrowserHandle: number, eMouseButton: unknown): undefined}
  MouseDoubleClick: {(unBrowserHandle: number, eMouseButton: unknown): undefined}
  MouseMove: {(unBrowserHandle: number, x: number, y: number): undefined}
  MouseWheel: {(unBrowserHandle: number, nDelta: number): undefined}
  KeyDown: {(unBrowserHandle: number, nNativeKeyCode: number, eHTMLKeyModifiers: unknown, bIsSystemKey: boolean): undefined}
  KeyUp: {(unBrowserHandle: number, nNativeKeyCode: number, eHTMLKeyModifiers: unknown): undefined}
  KeyChar: {(unBrowserHandle: number, cUnicodeChar: number, eHTMLKeyModifiers: unknown): undefined}
  SetHorizontalScroll: {(unBrowserHandle: number, nAbsolutePixelScroll: number): undefined}
  SetVerticalScroll: {(unBrowserHandle: number, nAbsolutePixelScroll: number): undefined}
  SetKeyFocus: {(unBrowserHandle: number, bHasKeyFocus: boolean): undefined}
  ViewSource: {(unBrowserHandle: number): undefined}
  CopyToClipboard: {(unBrowserHandle: number): undefined}
  PasteFromClipboard: {(unBrowserHandle: number): undefined}
  Find: {(unBrowserHandle: number, pchSearchStr: string, bCurrentlyInFind: boolean, bReverse: boolean): undefined}
  StopFind: {(unBrowserHandle: number): undefined}
  GetLinkAtPosition: {(unBrowserHandle: number, x: number, y: number): undefined}
  SetCookie: {(pchHostname: string, pchKey: string, pchValue: string, pchPath: string, nExpires: number, bSecure: boolean, bHTTPOnly: boolean): undefined}
  SetPageScaleFactor: {(unBrowserHandle: number, flZoom: number, nPointX: number, nPointY: number): undefined}
  SetBackgroundMode: {(unBrowserHandle: number, bBackgroundMode: boolean): undefined}
  SetDPIScalingFactor: {(unBrowserHandle: number, flDPIScaling: number): undefined}
  OpenDeveloperTools: {(unBrowserHandle: number): undefined}
  AllowStartRequest: {(unBrowserHandle: number, bAllowed: boolean): undefined}
  JSDialogResponse: {(unBrowserHandle: number, bResult: boolean): undefined}
  FileLoadDialogResponse: {(unBrowserHandle: number, pchSelectedFiles: unknown): undefined}
}
declare interface steaminventory {
  GetResultStatus: {(resultHandle: number): SteamEnums.EResult}
  GetResultItems: {(resultHandle: number, pOutItemsArray: unknown, punOutItemsArraySize: unknown): boolean}
  GetResultItemProperty: {(resultHandle: number, unItemIndex: number, pchPropertyName: string, pchValueBuffer: string, punValueBufferSizeOut: unknown): boolean}
  GetResultTimestamp: {(resultHandle: number): number}
  CheckResultSteamID: {(resultHandle: number, steamIDExpected: unknown): boolean}
  DestroyResult: {(resultHandle: number): undefined}
  GetAllItems: {(pResultHandle: unknown): boolean}
  GetItemsByID: {(pResultHandle: unknown, pInstanceIDs: unknown, unCountInstanceIDs: number): boolean}
  SerializeResult: {(resultHandle: number, pOutBuffer: unknown, punOutBufferSize: unknown): boolean}
  DeserializeResult: {(pOutResultHandle: unknown, pBuffer: unknown, unBufferSize: number, bRESERVED_MUST_BE_FALSE: boolean): boolean}
  GenerateItems: {(pResultHandle: unknown, pArrayItemDefs: unknown, punArrayQuantity: unknown, unArrayLength: number): boolean}
  GrantPromoItems: {(pResultHandle: unknown): boolean}
  AddPromoItem: {(pResultHandle: unknown, itemDef: number): boolean}
  AddPromoItems: {(pResultHandle: unknown, pArrayItemDefs: unknown, unArrayLength: number): boolean}
  ConsumeItem: {(pResultHandle: unknown, itemConsume: number, unQuantity: number): boolean}
  ExchangeItems: {(pResultHandle: unknown, pArrayGenerate: unknown, punArrayGenerateQuantity: unknown, unArrayGenerateLength: number, pArrayDestroy: unknown, punArrayDestroyQuantity: unknown, unArrayDestroyLength: number): boolean}
  TransferItemQuantity: {(pResultHandle: unknown, itemIdSource: number, unQuantity: number, itemIdDest: number): boolean}
  SendItemDropHeartbeat: {(): undefined}
  TriggerItemDrop: {(pResultHandle: unknown, dropListDefinition: number): boolean}
  TradeItems: {(pResultHandle: unknown, steamIDTradePartner: unknown, pArrayGive: unknown, pArrayGiveQuantity: unknown, nArrayGiveLength: number, pArrayGet: unknown, pArrayGetQuantity: unknown, nArrayGetLength: number): boolean}
  LoadItemDefinitions: {(): boolean}
  GetItemDefinitionIDs: {(pItemDefIDs: unknown, punItemDefIDsArraySize: unknown): boolean}
  GetItemDefinitionProperty: {(iDefinition: number, pchPropertyName: string, pchValueBuffer: string, punValueBufferSizeOut: unknown): boolean}
  RequestEligiblePromoItemDefinitionsIDs: {(steamID: unknown): Promise<{ m_result: SteamEnums.EResult, m_steamID: unknown, m_numEligiblePromoItemDefs: number, m_bCachedData: boolean }>};
  GetEligiblePromoItemDefinitionIDs: {(steamID: unknown, pItemDefIDs: unknown, punItemDefIDsArraySize: unknown): boolean}
  StartPurchase: {(pArrayItemDefs: unknown, punArrayQuantity: unknown, unArrayLength: number): Promise<{ m_result: SteamEnums.EResult, m_ulOrderID: number, m_ulTransID: number }>};
  RequestPrices: {(): Promise<{ m_result: SteamEnums.EResult, m_rgchCurrency: string }>};
  GetNumItemsWithPrices: {(): number}
  GetItemsWithPrices: {(pArrayItemDefs: unknown, pCurrentPrices: unknown, pBasePrices: unknown, unArrayLength: number): boolean}
  GetItemPrice: {(iDefinition: number, pCurrentPrice: unknown, pBasePrice: unknown): boolean}
  StartUpdateProperties: {(): number}
  RemoveProperty: {(handle: number, nItemID: number, pchPropertyName: string): boolean}
  SetProperty: {(handle: number, nItemID: number, pchPropertyName: string, pchPropertyValue: string): boolean}
  SubmitUpdateProperties: {(handle: number, pResultHandle: unknown): boolean}
  InspectItem: {(pResultHandle: unknown, pchItemToken: string): boolean}
}
declare interface steamvideo {
  GetVideoURL: {(unVideoAppID: number): Promise<{ m_eResult: SteamEnums.EResult, m_unVideoAppID: number, m_rgchURL: string }>};
  IsBroadcasting: {(pnNumViewers: unknown): boolean}
  GetOPFSettings: {(unVideoAppID: number): Promise<{ m_eResult: SteamEnums.EResult, m_unVideoAppID: number }>};
  GetOPFStringForApp: {(unVideoAppID: number, pchBuffer: string, pnBufferSize: unknown): boolean}
}
declare interface steamparentalsettings {
  BIsParentalLockEnabled: {(): boolean}
  BIsParentalLockLocked: {(): boolean}
  BIsAppBlocked: {(nAppID: number): boolean}
  BIsAppInBlockList: {(nAppID: number): boolean}
  BIsFeatureBlocked: {(eFeature: SteamEnums.EParentalFeature): boolean}
  BIsFeatureInBlockList: {(eFeature: SteamEnums.EParentalFeature): boolean}
}
declare interface steaminput {
  Init: {(bExplicitlyCallRunFrame: boolean): boolean}
  Shutdown: {(): boolean}
  SetInputActionManifestFilePath: {(pchInputActionManifestAbsolutePath: string): boolean}
  RunFrame: {(bReservedValue: boolean): undefined}
  BWaitForData: {(bWaitForever: boolean, unTimeout: number): boolean}
  BNewDataAvailable: {(): boolean}
  GetConnectedControllers: {(handlesOut: unknown): number}
  EnableDeviceCallbacks: {(): undefined}
  EnableActionEventCallbacks: {(pCallback: number): undefined}
  GetActionSetHandle: {(pszActionSetName: string): number}
  ActivateActionSet: {(inputHandle: number, actionSetHandle: number): undefined}
  GetCurrentActionSet: {(inputHandle: number): number}
  ActivateActionSetLayer: {(inputHandle: number, actionSetLayerHandle: number): undefined}
  DeactivateActionSetLayer: {(inputHandle: number, actionSetLayerHandle: number): undefined}
  DeactivateAllActionSetLayers: {(inputHandle: number): undefined}
  GetActiveActionSetLayers: {(inputHandle: number, handlesOut: unknown): number}
  GetDigitalActionHandle: {(pszActionName: string): number}
  GetDigitalActionData: {(inputHandle: number, digitalActionHandle: number): SteamStructs.InputDigitalActionData_t}
  GetDigitalActionOrigins: {(inputHandle: number, actionSetHandle: number, digitalActionHandle: number, originsOut: unknown): number}
  GetStringForDigitalActionName: {(eActionHandle: number): string}
  GetAnalogActionHandle: {(pszActionName: string): number}
  GetAnalogActionData: {(inputHandle: number, analogActionHandle: number): SteamStructs.InputAnalogActionData_t}
  GetAnalogActionOrigins: {(inputHandle: number, actionSetHandle: number, analogActionHandle: number, originsOut: unknown): number}
  GetGlyphPNGForActionOrigin: {(eOrigin: SteamEnums.EInputActionOrigin, eSize: SteamEnums.ESteamInputGlyphSize, unFlags: number): string}
  GetGlyphSVGForActionOrigin: {(eOrigin: SteamEnums.EInputActionOrigin, unFlags: number): string}
  GetGlyphForActionOrigin_Legacy: {(eOrigin: SteamEnums.EInputActionOrigin): string}
  GetStringForActionOrigin: {(eOrigin: SteamEnums.EInputActionOrigin): string}
  GetStringForAnalogActionName: {(eActionHandle: number): string}
  StopAnalogActionMomentum: {(inputHandle: number, eAction: number): undefined}
  GetMotionData: {(inputHandle: number): SteamStructs.InputMotionData_t}
  TriggerVibration: {(inputHandle: number, usLeftSpeed: number, usRightSpeed: number): undefined}
  TriggerVibrationExtended: {(inputHandle: number, usLeftSpeed: number, usRightSpeed: number, usLeftTriggerSpeed: number, usRightTriggerSpeed: number): undefined}
  TriggerSimpleHapticEvent: {(inputHandle: number, eHapticLocation: SteamEnums.EControllerHapticLocation, nIntensity: number, nGainDB: string, nOtherIntensity: number, nOtherGainDB: string): undefined}
  SetLEDColor: {(inputHandle: number, nColorR: number, nColorG: number, nColorB: number, nFlags: number): undefined}
  Legacy_TriggerHapticPulse: {(inputHandle: number, eTargetPad: SteamEnums.ESteamControllerPad, usDurationMicroSec: number): undefined}
  Legacy_TriggerRepeatedHapticPulse: {(inputHandle: number, eTargetPad: SteamEnums.ESteamControllerPad, usDurationMicroSec: number, usOffMicroSec: number, unRepeat: number, nFlags: number): undefined}
  ShowBindingPanel: {(inputHandle: number): boolean}
  GetInputTypeForHandle: {(inputHandle: number): SteamEnums.ESteamInputType}
  GetControllerForGamepadIndex: {(nIndex: number): number}
  GetGamepadIndexForController: {(ulinputHandle: number): number}
  GetStringForXboxOrigin: {(eOrigin: SteamEnums.EXboxOrigin): string}
  GetGlyphForXboxOrigin: {(eOrigin: SteamEnums.EXboxOrigin): string}
  GetActionOriginFromXboxOrigin: {(inputHandle: number, eOrigin: SteamEnums.EXboxOrigin): SteamEnums.EInputActionOrigin}
  TranslateActionOrigin: {(eDestinationInputType: SteamEnums.ESteamInputType, eSourceOrigin: SteamEnums.EInputActionOrigin): SteamEnums.EInputActionOrigin}
  GetDeviceBindingRevision: {(inputHandle: number, pMajor: unknown, pMinor: unknown): boolean}
  GetRemotePlaySessionID: {(inputHandle: number): number}
  GetSessionInputConfigurationSettings: {(): number}
}
declare interface steamremoteplay {
  GetSessionCount: {(): number}
  GetSessionID: {(iSessionIndex: number): number}
  GetSessionSteamID: {(unSessionID: number): unknown}
  GetSessionClientName: {(unSessionID: number): string}
  GetSessionClientFormFactor: {(unSessionID: number): SteamEnums.ESteamDeviceFormFactor}
  BGetSessionClientResolution: {(unSessionID: number, pnResolutionX: unknown, pnResolutionY: unknown): boolean}
  BSendRemotePlayTogetherInvite: {(steamIDFriend: unknown): boolean}
}