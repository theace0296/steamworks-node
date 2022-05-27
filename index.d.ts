
export = SteamWorks;
declare class SteamWorks {
  constructor(appId: number);
  Init: {(appId: number): boolean};
  Shutdown: {(): boolean};
  GetApplicationRunning: {(): boolean};
  GetCallbackThreadRunning: {(): boolean};
  SteamAPI: SteamWorksNS.SteamAPI;
  Constants: SteamWorksNS.Constants;
  Structs: SteamWorksNS.Structs;
  Enums: SteamWorksNS.Enums;
  Uncategorized: SteamWorksNS.Uncategorized;
  SteamClient: SteamWorksNS.SteamClient;
  SteamUser: SteamWorksNS.SteamUser;
  SteamFriends: SteamWorksNS.SteamFriends;
  SteamUtils: SteamWorksNS.SteamUtils;
  SteamMatchmaking: SteamWorksNS.SteamMatchmaking;
  SteamMatchmakingServers: SteamWorksNS.SteamMatchmakingServers;
  SteamGameSearch: SteamWorksNS.SteamGameSearch;
  SteamParties: SteamWorksNS.SteamParties;
  SteamUserStats: SteamWorksNS.SteamUserStats;
  SteamApps: SteamWorksNS.SteamApps;
  SteamNetworking: SteamWorksNS.SteamNetworking;
  SteamRemoteStorage: SteamWorksNS.SteamRemoteStorage;
  SteamScreenshots: SteamWorksNS.SteamScreenshots;
  SteamMusic: SteamWorksNS.SteamMusic;
  SteamMusicRemote: SteamWorksNS.SteamMusicRemote;
  SteamHTTP: SteamWorksNS.SteamHTTP;
  SteamController: SteamWorksNS.SteamController;
  SteamUGC: SteamWorksNS.SteamUGC;
  SteamAppList: SteamWorksNS.SteamAppList;
  SteamHTMLSurface: SteamWorksNS.SteamHTMLSurface;
  SteamInventory: SteamWorksNS.SteamInventory;
  SteamVideo: SteamWorksNS.SteamVideo;
  SteamParentalSettings: SteamWorksNS.SteamParentalSettings;
  SteamInput: SteamWorksNS.SteamInput;
  SteamRemotePlay: SteamWorksNS.SteamRemotePlay;
}

declare namespace SteamWorksNS {
  interface SteamAPI {
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
  interface Constants {
    k_uAppIdInvalid: number;
    k_uDepotIdInvalid: number;
    k_uAPICallInvalid: number;
    k_ulPartyBeaconIdInvalid: number;
    k_ESteamIPTypeIPv4: number;
    k_ESteamIPTypeIPv6: number;
    k_EResultNone: number;
    k_EResultOK: number;
    k_EResultFail: number;
    k_EResultNoConnection: number;
    k_EResultInvalidPassword: number;
    k_EResultLoggedInElsewhere: number;
    k_EResultInvalidProtocolVer: number;
    k_EResultInvalidParam: number;
    k_EResultFileNotFound: number;
    k_EResultBusy: number;
    k_EResultInvalidState: number;
    k_EResultInvalidName: number;
    k_EResultInvalidEmail: number;
    k_EResultDuplicateName: number;
    k_EResultAccessDenied: number;
    k_EResultTimeout: number;
    k_EResultBanned: number;
    k_EResultAccountNotFound: number;
    k_EResultInvalidSteamID: number;
    k_EResultServiceUnavailable: number;
    k_EResultNotLoggedOn: number;
    k_EResultPending: number;
    k_EResultEncryptionFailure: number;
    k_EResultInsufficientPrivilege: number;
    k_EResultLimitExceeded: number;
    k_EResultRevoked: number;
    k_EResultExpired: number;
    k_EResultAlreadyRedeemed: number;
    k_EResultDuplicateRequest: number;
    k_EResultAlreadyOwned: number;
    k_EResultIPNotFound: number;
    k_EResultPersistFailed: number;
    k_EResultLockingFailed: number;
    k_EResultLogonSessionReplaced: number;
    k_EResultConnectFailed: number;
    k_EResultHandshakeFailed: number;
    k_EResultIOFailure: number;
    k_EResultRemoteDisconnect: number;
    k_EResultShoppingCartNotFound: number;
    k_EResultBlocked: number;
    k_EResultIgnored: number;
    k_EResultNoMatch: number;
    k_EResultAccountDisabled: number;
    k_EResultServiceReadOnly: number;
    k_EResultAccountNotFeatured: number;
    k_EResultAdministratorOK: number;
    k_EResultContentVersion: number;
    k_EResultTryAnotherCM: number;
    k_EResultPasswordRequiredToKickSession: number;
    k_EResultAlreadyLoggedInElsewhere: number;
    k_EResultSuspended: number;
    k_EResultCancelled: number;
    k_EResultDataCorruption: number;
    k_EResultDiskFull: number;
    k_EResultRemoteCallFailed: number;
    k_EResultPasswordUnset: number;
    k_EResultExternalAccountUnlinked: number;
    k_EResultPSNTicketInvalid: number;
    k_EResultExternalAccountAlreadyLinked: number;
    k_EResultRemoteFileConflict: number;
    k_EResultIllegalPassword: number;
    k_EResultSameAsPreviousValue: number;
    k_EResultAccountLogonDenied: number;
    k_EResultCannotUseOldPassword: number;
    k_EResultInvalidLoginAuthCode: number;
    k_EResultAccountLogonDeniedNoMail: number;
    k_EResultHardwareNotCapableOfIPT: number;
    k_EResultIPTInitError: number;
    k_EResultParentalControlRestricted: number;
    k_EResultFacebookQueryError: number;
    k_EResultExpiredLoginAuthCode: number;
    k_EResultIPLoginRestrictionFailed: number;
    k_EResultAccountLockedDown: number;
    k_EResultAccountLogonDeniedVerifiedEmailRequired: number;
    k_EResultNoMatchingURL: number;
    k_EResultBadResponse: number;
    k_EResultRequirePasswordReEntry: number;
    k_EResultValueOutOfRange: number;
    k_EResultUnexpectedError: number;
    k_EResultDisabled: number;
    k_EResultInvalidCEGSubmission: number;
    k_EResultRestrictedDevice: number;
    k_EResultRegionLocked: number;
    k_EResultRateLimitExceeded: number;
    k_EResultAccountLoginDeniedNeedTwoFactor: number;
    k_EResultItemDeleted: number;
    k_EResultAccountLoginDeniedThrottle: number;
    k_EResultTwoFactorCodeMismatch: number;
    k_EResultTwoFactorActivationCodeMismatch: number;
    k_EResultAccountAssociatedToMultiplePartners: number;
    k_EResultNotModified: number;
    k_EResultNoMobileDevice: number;
    k_EResultTimeNotSynced: number;
    k_EResultSmsCodeFailed: number;
    k_EResultAccountLimitExceeded: number;
    k_EResultAccountActivityLimitExceeded: number;
    k_EResultPhoneActivityLimitExceeded: number;
    k_EResultRefundToWallet: number;
    k_EResultEmailSendFailure: number;
    k_EResultNotSettled: number;
    k_EResultNeedCaptcha: number;
    k_EResultGSLTDenied: number;
    k_EResultGSOwnerDenied: number;
    k_EResultInvalidItemType: number;
    k_EResultIPBanned: number;
    k_EResultGSLTExpired: number;
    k_EResultInsufficientFunds: number;
    k_EResultTooManyPending: number;
    k_EResultNoSiteLicensesFound: number;
    k_EResultWGNetworkSendExceeded: number;
    k_EResultAccountNotFriends: number;
    k_EResultLimitedUserAccount: number;
    k_EResultCantRemoveItem: number;
    k_EResultAccountDeleted: number;
    k_EResultExistingUserCancelledLicense: number;
    k_EResultCommunityCooldown: number;
    k_EResultNoLauncherSpecified: number;
    k_EResultMustAgreeToSSA: number;
    k_EResultLauncherMigrated: number;
    k_EResultSteamRealmMismatch: number;
    k_EResultInvalidSignature: number;
    k_EResultParseFailure: number;
    k_EResultNoVerifiedPhone: number;
    k_EVoiceResultOK: number;
    k_EVoiceResultNotInitialized: number;
    k_EVoiceResultNotRecording: number;
    k_EVoiceResultNoData: number;
    k_EVoiceResultBufferTooSmall: number;
    k_EVoiceResultDataCorrupted: number;
    k_EVoiceResultRestricted: number;
    k_EVoiceResultUnsupportedCodec: number;
    k_EVoiceResultReceiverOutOfDate: number;
    k_EVoiceResultReceiverDidNotAnswer: number;
    k_EDenyInvalid: number;
    k_EDenyInvalidVersion: number;
    k_EDenyGeneric: number;
    k_EDenyNotLoggedOn: number;
    k_EDenyNoLicense: number;
    k_EDenyCheater: number;
    k_EDenyLoggedInElseWhere: number;
    k_EDenyUnknownText: number;
    k_EDenyIncompatibleAnticheat: number;
    k_EDenyMemoryCorruption: number;
    k_EDenyIncompatibleSoftware: number;
    k_EDenySteamConnectionLost: number;
    k_EDenySteamConnectionError: number;
    k_EDenySteamResponseTimedOut: number;
    k_EDenySteamValidationStalled: number;
    k_EDenySteamOwnerLeftGuestUser: number;
    k_HAuthTicketInvalid: number;
    k_EBeginAuthSessionResultOK: number;
    k_EBeginAuthSessionResultInvalidTicket: number;
    k_EBeginAuthSessionResultDuplicateRequest: number;
    k_EBeginAuthSessionResultInvalidVersion: number;
    k_EBeginAuthSessionResultGameMismatch: number;
    k_EBeginAuthSessionResultExpiredTicket: number;
    k_EAuthSessionResponseOK: number;
    k_EAuthSessionResponseUserNotConnectedToSteam: number;
    k_EAuthSessionResponseNoLicenseOrExpired: number;
    k_EAuthSessionResponseVACBanned: number;
    k_EAuthSessionResponseLoggedInElseWhere: number;
    k_EAuthSessionResponseVACCheckTimedOut: number;
    k_EAuthSessionResponseAuthTicketCanceled: number;
    k_EAuthSessionResponseAuthTicketInvalidAlreadyUsed: number;
    k_EAuthSessionResponseAuthTicketInvalid: number;
    k_EAuthSessionResponsePublisherIssuedBan: number;
    k_EUserHasLicenseResultHasLicense: number;
    k_EUserHasLicenseResultDoesNotHaveLicense: number;
    k_EUserHasLicenseResultNoAuth: number;
    k_EAccountTypeInvalid: number;
    k_EAccountTypeIndividual: number;
    k_EAccountTypeMultiseat: number;
    k_EAccountTypeGameServer: number;
    k_EAccountTypeAnonGameServer: number;
    k_EAccountTypePending: number;
    k_EAccountTypeContentServer: number;
    k_EAccountTypeClan: number;
    k_EAccountTypeChat: number;
    k_EAccountTypeConsoleUser: number;
    k_EAccountTypeAnonUser: number;
    k_EAccountTypeMax: number;
    k_EChatEntryTypeInvalid: number;
    k_EChatEntryTypeChatMsg: number;
    k_EChatEntryTypeTyping: number;
    k_EChatEntryTypeInviteGame: number;
    k_EChatEntryTypeEmote: number;
    k_EChatEntryTypeLeftConversation: number;
    k_EChatEntryTypeEntered: number;
    k_EChatEntryTypeWasKicked: number;
    k_EChatEntryTypeWasBanned: number;
    k_EChatEntryTypeDisconnected: number;
    k_EChatEntryTypeHistoricalChat: number;
    k_EChatEntryTypeLinkBlocked: number;
    k_EChatRoomEnterResponseSuccess: number;
    k_EChatRoomEnterResponseDoesntExist: number;
    k_EChatRoomEnterResponseNotAllowed: number;
    k_EChatRoomEnterResponseFull: number;
    k_EChatRoomEnterResponseError: number;
    k_EChatRoomEnterResponseBanned: number;
    k_EChatRoomEnterResponseLimited: number;
    k_EChatRoomEnterResponseClanDisabled: number;
    k_EChatRoomEnterResponseCommunityBan: number;
    k_EChatRoomEnterResponseMemberBlockedYou: number;
    k_EChatRoomEnterResponseYouBlockedMember: number;
    k_EChatRoomEnterResponseRatelimitExceeded: number;
    k_unSteamAccountIDMask: number;
    k_unSteamAccountInstanceMask: number;
    k_EChatAccountInstanceMask: number;
    k_EChatInstanceFlagClan: number;
    k_EChatInstanceFlagLobby: number;
    k_EChatInstanceFlagMMSLobby: number;
    k_EPositionTopLeft: number;
    k_EPositionTopRight: number;
    k_EPositionBottomLeft: number;
    k_EPositionBottomRight: number;
    k_EBroadcastUploadResultNone: number;
    k_EBroadcastUploadResultOK: number;
    k_EBroadcastUploadResultInitFailed: number;
    k_EBroadcastUploadResultFrameFailed: number;
    k_EBroadcastUploadResultTimeout: number;
    k_EBroadcastUploadResultBandwidthExceeded: number;
    k_EBroadcastUploadResultLowFPS: number;
    k_EBroadcastUploadResultMissingKeyFrames: number;
    k_EBroadcastUploadResultNoConnection: number;
    k_EBroadcastUploadResultRelayFailed: number;
    k_EBroadcastUploadResultSettingsChanged: number;
    k_EBroadcastUploadResultMissingAudio: number;
    k_EBroadcastUploadResultTooFarBehind: number;
    k_EBroadcastUploadResultTranscodeBehind: number;
    k_EBroadcastUploadResultNotAllowedToPlay: number;
    k_EBroadcastUploadResultBusy: number;
    k_EBroadcastUploadResultBanned: number;
    k_EBroadcastUploadResultAlreadyActive: number;
    k_EBroadcastUploadResultForcedOff: number;
    k_EBroadcastUploadResultAudioBehind: number;
    k_EBroadcastUploadResultShutdown: number;
    k_EBroadcastUploadResultDisconnect: number;
    k_EBroadcastUploadResultVideoInitFailed: number;
    k_EBroadcastUploadResultAudioInitFailed: number;
    k_EMarketNotAllowedReason_None: number;
    k_EMarketNotAllowedReason_TemporaryFailure: number;
    k_EMarketNotAllowedReason_AccountDisabled: number;
    k_EMarketNotAllowedReason_AccountLockedDown: number;
    k_EMarketNotAllowedReason_AccountLimited: number;
    k_EMarketNotAllowedReason_TradeBanned: number;
    k_EMarketNotAllowedReason_AccountNotTrusted: number;
    k_EMarketNotAllowedReason_SteamGuardNotEnabled: number;
    k_EMarketNotAllowedReason_SteamGuardOnlyRecentlyEnabled: number;
    k_EMarketNotAllowedReason_RecentPasswordReset: number;
    k_EMarketNotAllowedReason_NewPaymentMethod: number;
    k_EMarketNotAllowedReason_InvalidCookie: number;
    k_EMarketNotAllowedReason_UsingNewDevice: number;
    k_EMarketNotAllowedReason_RecentSelfRefund: number;
    k_EMarketNotAllowedReason_NewPaymentMethodCannotBeVerified: number;
    k_EMarketNotAllowedReason_NoRecentPurchases: number;
    k_EMarketNotAllowedReason_AcceptedWalletGift: number;
    k_cchGameExtraInfoMax: number;
    k_EGameSearchErrorCode_OK: number;
    k_EGameSearchErrorCode_Failed_Search_Already_In_Progress: number;
    k_EGameSearchErrorCode_Failed_No_Search_In_Progress: number;
    k_EGameSearchErrorCode_Failed_Not_Lobby_Leader: number;
    k_EGameSearchErrorCode_Failed_No_Host_Available: number;
    k_EGameSearchErrorCode_Failed_Search_Params_Invalid: number;
    k_EGameSearchErrorCode_Failed_Offline: number;
    k_EGameSearchErrorCode_Failed_NotAuthorized: number;
    k_EGameSearchErrorCode_Failed_Unknown_Error: number;
    k_EPlayerResultFailedToConnect: number;
    k_EPlayerResultAbandoned: number;
    k_EPlayerResultKicked: number;
    k_EPlayerResultIncomplete: number;
    k_EPlayerResultCompleted: number;
    k_iSteamBillingCallbacks: number;
    k_iSteamContentServerCallbacks: number;
    k_iSteamNetworkingCallbacks: number;
    k_iSteamNetworkingSocketsCallbacks: number;
    k_iSteamNetworkingMessagesCallbacks: number;
    k_iSteamNetworkingUtilsCallbacks: number;
    k_iSteamGameCoordinatorCallbacks: number;
    k_iSteam2AsyncCallbacks: number;
    k_iSteamGameStatsCallbacks: number;
    k_iSteamHTTPCallbacks: number;
    k_iSteamScreenshotsCallbacks: number;
    k_iSteamStreamLauncherCallbacks: number;
    k_iSteamControllerCallbacks: number;
    k_iSteamStreamClientCallbacks: number;
    k_iSteamAppListCallbacks: number;
    k_iSteamMusicCallbacks: number;
    k_iSteamMusicRemoteCallbacks: number;
    k_iSteamGameNotificationCallbacks: number;
    k_ISteamParentalSettingsCallbacks: number;
    k_iSteamGameSearchCallbacks: number;
    k_iSteamSTARCallbacks: number;
    k_iSteamRemotePlayCallbacks: number;
    k_iSteamChatCallbacks: number;
    STEAMCLIENT_INTERFACE_VERSION: string;
    STEAMUSER_INTERFACE_VERSION: string;
    k_EFriendRelationshipNone: number;
    k_EFriendRelationshipBlocked: number;
    k_EFriendRelationshipRequestRecipient: number;
    k_EFriendRelationshipFriend: number;
    k_EFriendRelationshipRequestInitiator: number;
    k_EFriendRelationshipIgnored: number;
    k_EFriendRelationshipIgnoredFriend: number;
    k_EFriendRelationshipSuggested_DEPRECATED: number;
    k_EFriendRelationshipMax: number;
    k_cchMaxFriendsGroupName: number;
    k_cFriendsGroupLimit: number;
    k_FriendsGroupID_Invalid: number;
    k_cEnumerateFollowersMax: number;
    k_EPersonaStateOffline: number;
    k_EPersonaStateOnline: number;
    k_EPersonaStateBusy: number;
    k_EPersonaStateAway: number;
    k_EPersonaStateSnooze: number;
    k_EPersonaStateLookingToTrade: number;
    k_EPersonaStateLookingToPlay: number;
    k_EPersonaStateInvisible: number;
    k_EPersonaStateMax: number;
    k_EFriendFlagNone: number;
    k_EFriendFlagBlocked: number;
    k_EFriendFlagFriendshipRequested: number;
    k_EFriendFlagImmediate: number;
    k_EFriendFlagClanMember: number;
    k_EFriendFlagOnGameServer: number;
    k_EFriendFlagRequestingFriendship: number;
    k_EFriendFlagRequestingInfo: number;
    k_EFriendFlagIgnored: number;
    k_EFriendFlagIgnoredFriend: number;
    k_EFriendFlagChatMember: number;
    k_EFriendFlagAll: number;
    k_cchPersonaNameMax: number;
    k_cwchPersonaNameMax: number;
    k_nUserRestrictionNone: number;
    k_nUserRestrictionUnknown: number;
    k_nUserRestrictionAnyChat: number;
    k_nUserRestrictionVoiceChat: number;
    k_nUserRestrictionGroupChat: number;
    k_nUserRestrictionRating: number;
    k_nUserRestrictionGameInvites: number;
    k_nUserRestrictionTrading: number;
    k_cubChatMetadataMax: number;
    k_cchMaxRichPresenceKeys: number;
    k_cchMaxRichPresenceKeyLength: number;
    k_cchMaxRichPresenceValueLength: number;
    STEAMFRIENDS_INTERFACE_VERSION: string;
    k_EPersonaChangeName: number;
    k_EPersonaChangeStatus: number;
    k_EPersonaChangeComeOnline: number;
    k_EPersonaChangeGoneOffline: number;
    k_EPersonaChangeGamePlayed: number;
    k_EPersonaChangeGameServer: number;
    k_EPersonaChangeAvatar: number;
    k_EPersonaChangeJoinedSource: number;
    k_EPersonaChangeLeftSource: number;
    k_EPersonaChangeRelationshipChanged: number;
    k_EPersonaChangeNameFirstSet: number;
    k_EPersonaChangeBroadcast: number;
    k_EPersonaChangeNickname: number;
    k_EPersonaChangeSteamLevel: number;
    k_EPersonaChangeRichPresence: number;
    k_ESteamAPICallFailureNone: number;
    k_ESteamAPICallFailureSteamGone: number;
    k_ESteamAPICallFailureNetworkFailure: number;
    k_ESteamAPICallFailureInvalidHandle: number;
    k_ESteamAPICallFailureMismatchedCallback: number;
    k_EGamepadTextInputModeNormal: number;
    k_EGamepadTextInputModePassword: number;
    k_EGamepadTextInputLineModeSingleLine: number;
    k_EGamepadTextInputLineModeMultipleLines: number;
    k_EFloatingGamepadTextInputModeModeSingleLine: number;
    k_EFloatingGamepadTextInputModeModeMultipleLines: number;
    k_EFloatingGamepadTextInputModeModeEmail: number;
    k_EFloatingGamepadTextInputModeModeNumeric: number;
    k_ETextFilteringContextUnknown: number;
    k_ETextFilteringContextGameContent: number;
    k_ETextFilteringContextChat: number;
    k_ETextFilteringContextName: number;
    STEAMUTILS_INTERFACE_VERSION: string;
    k_ELobbyTypePrivate: number;
    k_ELobbyTypeFriendsOnly: number;
    k_ELobbyTypePublic: number;
    k_ELobbyTypeInvisible: number;
    k_ELobbyTypePrivateUnique: number;
    k_ELobbyComparisonEqualToOrLessThan: number;
    k_ELobbyComparisonLessThan: number;
    k_ELobbyComparisonEqual: number;
    k_ELobbyComparisonGreaterThan: number;
    k_ELobbyComparisonEqualToOrGreaterThan: number;
    k_ELobbyComparisonNotEqual: number;
    k_ELobbyDistanceFilterClose: number;
    k_ELobbyDistanceFilterDefault: number;
    k_ELobbyDistanceFilterFar: number;
    k_ELobbyDistanceFilterWorldwide: number;
    k_nMaxLobbyKeyLength: number;
    STEAMMATCHMAKING_INTERFACE_VERSION: string;
    HSERVERQUERY_INVALID: number;
    STEAMMATCHMAKINGSERVERS_INTERFACE_VERSION: string;
    k_unFavoriteFlagNone: number;
    k_unFavoriteFlagFavorite: number;
    k_unFavoriteFlagHistory: number;
    k_EChatMemberStateChangeEntered: number;
    k_EChatMemberStateChangeLeft: number;
    k_EChatMemberStateChangeDisconnected: number;
    k_EChatMemberStateChangeKicked: number;
    k_EChatMemberStateChangeBanned: number;
    STEAMGAMESEARCH_INTERFACE_VERSION: string;
    k_ESteamPartyBeaconLocationDataInvalid: number;
    k_ESteamPartyBeaconLocationDataName: number;
    k_ESteamPartyBeaconLocationDataIconURLSmall: number;
    k_ESteamPartyBeaconLocationDataIconURLMedium: number;
    k_ESteamPartyBeaconLocationDataIconURLLarge: number;
    STEAMPARTIES_INTERFACE_VERSION: string;
    k_cchStatNameMax: number;
    k_cchLeaderboardNameMax: number;
    k_cLeaderboardDetailsMax: number;
    k_ELeaderboardDataRequestGlobal: number;
    k_ELeaderboardDataRequestGlobalAroundUser: number;
    k_ELeaderboardDataRequestFriends: number;
    k_ELeaderboardDataRequestUsers: number;
    k_ELeaderboardSortMethodNone: number;
    k_ELeaderboardSortMethodAscending: number;
    k_ELeaderboardSortMethodDescending: number;
    k_ELeaderboardDisplayTypeNone: number;
    k_ELeaderboardDisplayTypeNumeric: number;
    k_ELeaderboardDisplayTypeTimeSeconds: number;
    k_ELeaderboardDisplayTypeTimeMilliSeconds: number;
    k_ELeaderboardUploadScoreMethodNone: number;
    k_ELeaderboardUploadScoreMethodKeepBest: number;
    k_ELeaderboardUploadScoreMethodForceUpdate: number;
    STEAMUSERSTATS_INTERFACE_VERSION: string;
    k_cubAppProofOfPurchaseKeyMax: number;
    STEAMAPPS_INTERFACE_VERSION: string;
    k_ERegisterActivationCodeResultOK: number;
    k_ERegisterActivationCodeResultFail: number;
    k_ERegisterActivationCodeResultAlreadyRegistered: number;
    k_ERegisterActivationCodeResultTimeout: number;
    k_ERegisterActivationCodeAlreadyOwned: number;
    k_EP2PSessionErrorNone: number;
    k_EP2PSessionErrorNoRightsToApp: number;
    k_EP2PSessionErrorTimeout: number;
    k_EP2PSessionErrorNotRunningApp_DELETED: number;
    k_EP2PSessionErrorDestinationNotLoggedIn_DELETED: number;
    k_EP2PSessionErrorMax: number;
    k_EP2PSendUnreliable: number;
    k_EP2PSendUnreliableNoDelay: number;
    k_EP2PSendReliable: number;
    k_EP2PSendReliableWithBuffering: number;
    k_ESNetSocketStateInvalid: number;
    k_ESNetSocketStateConnected: number;
    k_ESNetSocketStateInitiated: number;
    k_ESNetSocketStateLocalCandidatesFound: number;
    k_ESNetSocketStateReceivedRemoteCandidates: number;
    k_ESNetSocketStateChallengeHandshake: number;
    k_ESNetSocketStateDisconnecting: number;
    k_ESNetSocketStateLocalDisconnect: number;
    k_ESNetSocketStateTimeoutDuringConnect: number;
    k_ESNetSocketStateRemoteEndDisconnected: number;
    k_ESNetSocketStateConnectionBroken: number;
    k_ESNetSocketConnectionTypeNotConnected: number;
    k_ESNetSocketConnectionTypeUDP: number;
    k_ESNetSocketConnectionTypeUDPRelay: number;
    STEAMNETWORKING_INTERFACE_VERSION: string;
    k_unMaxCloudFileChunkSize: number;
    k_PublishedFileIdInvalid: number;
    k_UGCHandleInvalid: number;
    k_PublishedFileUpdateHandleInvalid: number;
    k_UGCFileStreamHandleInvalid: number;
    k_cchPublishedDocumentTitleMax: number;
    k_cchPublishedDocumentDescriptionMax: number;
    k_cchPublishedDocumentChangeDescriptionMax: number;
    k_unEnumeratePublishedFilesMaxResults: number;
    k_cchTagListMax: number;
    k_cchFilenameMax: number;
    k_cchPublishedFileURLMax: number;
    k_ERemoteStoragePlatformNone: number;
    k_ERemoteStoragePlatformWindows: number;
    k_ERemoteStoragePlatformOSX: number;
    k_ERemoteStoragePlatformPS3: number;
    k_ERemoteStoragePlatformLinux: number;
    k_ERemoteStoragePlatformSwitch: number;
    k_ERemoteStoragePlatformAndroid: number;
    k_ERemoteStoragePlatformIOS: number;
    k_ERemoteStoragePlatformAll: number;
    k_ERemoteStoragePublishedFileVisibilityPublic: number;
    k_ERemoteStoragePublishedFileVisibilityFriendsOnly: number;
    k_ERemoteStoragePublishedFileVisibilityPrivate: number;
    k_ERemoteStoragePublishedFileVisibilityUnlisted: number;
    k_EWorkshopFileTypeFirst: number;
    k_EWorkshopFileTypeCommunity: number;
    k_EWorkshopFileTypeMicrotransaction: number;
    k_EWorkshopFileTypeCollection: number;
    k_EWorkshopFileTypeArt: number;
    k_EWorkshopFileTypeVideo: number;
    k_EWorkshopFileTypeScreenshot: number;
    k_EWorkshopFileTypeGame: number;
    k_EWorkshopFileTypeSoftware: number;
    k_EWorkshopFileTypeConcept: number;
    k_EWorkshopFileTypeWebGuide: number;
    k_EWorkshopFileTypeIntegratedGuide: number;
    k_EWorkshopFileTypeMerch: number;
    k_EWorkshopFileTypeControllerBinding: number;
    k_EWorkshopFileTypeSteamworksAccessInvite: number;
    k_EWorkshopFileTypeGameManagedItem: number;
    k_EWorkshopFileTypeMax: number;
    k_EWorkshopVoteUnvoted: number;
    k_EWorkshopVoteFor: number;
    k_EWorkshopVoteAgainst: number;
    k_EWorkshopVoteLater: number;
    k_EWorkshopFileActionPlayed: number;
    k_EWorkshopFileActionCompleted: number;
    k_EWorkshopEnumerationTypeRankedByVote: number;
    k_EWorkshopEnumerationTypeRecent: number;
    k_EWorkshopEnumerationTypeTrending: number;
    k_EWorkshopEnumerationTypeFavoritesOfFriends: number;
    k_EWorkshopEnumerationTypeVotedByFriends: number;
    k_EWorkshopEnumerationTypeContentByFriends: number;
    k_EWorkshopEnumerationTypeRecentFromFollowedUsers: number;
    k_EWorkshopVideoProviderNone: number;
    k_EWorkshopVideoProviderYoutube: number;
    k_EUGCRead_ContinueReadingUntilFinished: number;
    k_EUGCRead_ContinueReading: number;
    k_EUGCRead_Close: number;
    STEAMREMOTESTORAGE_INTERFACE_VERSION: string;
    k_nScreenshotMaxTaggedUsers: number;
    k_nScreenshotMaxTaggedPublishedFiles: number;
    k_cubUFSTagTypeMax: number;
    k_cubUFSTagValueMax: number;
    k_ScreenshotThumbWidth: number;
    INVALID_SCREENSHOT_HANDLE: number;
    STEAMSCREENSHOTS_INTERFACE_VERSION: string;
    STEAMMUSIC_INTERFACE_VERSION: string;
    k_SteamMusicNameMaxLength: number;
    k_SteamMusicPNGMaxLength: number;
    STEAMMUSICREMOTE_INTERFACE_VERSION: string;
    INVALID_HTTPREQUEST_HANDLE: number;
    INVALID_HTTPCOOKIE_HANDLE: number;
    STEAMHTTP_INTERFACE_VERSION: string;
    STEAM_CONTROLLER_MAX_COUNT: number;
    STEAM_CONTROLLER_MAX_ANALOG_ACTIONS: number;
    STEAM_CONTROLLER_MAX_DIGITAL_ACTIONS: number;
    STEAM_CONTROLLER_MAX_ORIGINS: number;
    STEAM_CONTROLLER_MAX_ACTIVE_LAYERS: number;
    STEAM_CONTROLLER_MIN_ANALOG_ACTION_DATA: number;
    STEAM_CONTROLLER_MAX_ANALOG_ACTION_DATA: number;
    STEAMCONTROLLER_INTERFACE_VERSION: string;
    k_UGCQueryHandleInvalid: number;
    k_UGCUpdateHandleInvalid: number;
    k_EItemUpdateStatusInvalid: number;
    k_EItemUpdateStatusPreparingConfig: number;
    k_EItemUpdateStatusPreparingContent: number;
    k_EItemUpdateStatusUploadingContent: number;
    k_EItemUpdateStatusUploadingPreviewFile: number;
    k_EItemUpdateStatusCommittingChanges: number;
    k_EItemStateNone: number;
    k_EItemStateSubscribed: number;
    k_EItemStateLegacyItem: number;
    k_EItemStateInstalled: number;
    k_EItemStateNeedsUpdate: number;
    k_EItemStateDownloading: number;
    k_EItemStateDownloadPending: number;
    kNumUGCResultsPerPage: number;
    k_cchDeveloperMetadataMax: number;
    STEAMUGC_INTERFACE_VERSION: string;
    STEAMAPPLIST_INTERFACE_VERSION: string;
    INVALID_HTMLBROWSER: number;
    STEAMHTMLSURFACE_INTERFACE_VERSION: string;
    k_SteamItemInstanceIDInvalid: number;
    k_ESteamItemNoTrade: number;
    k_ESteamItemRemoved: number;
    k_ESteamItemConsumed: number;
    STEAMINVENTORY_INTERFACE_VERSION: string;
    STEAMVIDEO_INTERFACE_VERSION: string;
    k_EFeatureInvalid: number;
    k_EFeatureStore: number;
    k_EFeatureCommunity: number;
    k_EFeatureProfile: number;
    k_EFeatureFriends: number;
    k_EFeatureNews: number;
    k_EFeatureTrading: number;
    k_EFeatureSettings: number;
    k_EFeatureConsole: number;
    k_EFeatureBrowser: number;
    k_EFeatureParentalSetup: number;
    k_EFeatureLibrary: number;
    k_EFeatureTest: number;
    k_EFeatureSiteLicense: number;
    k_EFeatureMax: number;
    STEAMPARENTALSETTINGS_INTERFACE_VERSION: string;
    STEAM_INPUT_MAX_COUNT: number;
    STEAM_INPUT_MAX_ANALOG_ACTIONS: number;
    STEAM_INPUT_MAX_DIGITAL_ACTIONS: number;
    STEAM_INPUT_MAX_ORIGINS: number;
    STEAM_INPUT_MAX_ACTIVE_LAYERS: number;
    STEAM_INPUT_MIN_ANALOG_ACTION_DATA: number;
    STEAM_INPUT_MAX_ANALOG_ACTION_DATA: number;
    STEAMINPUT_INTERFACE_VERSION: string;
    k_ESteamDeviceFormFactorUnknown: number;
    k_ESteamDeviceFormFactorPhone: number;
    k_ESteamDeviceFormFactorTablet: number;
    k_ESteamDeviceFormFactorComputer: number;
    k_ESteamDeviceFormFactorTV: number;
    STEAMREMOTEPLAY_INTERFACE_VERSION: string;
    STEAMNETWORKINGMESSAGES_INTERFACE_VERSION: string;
    STEAMNETWORKINGSOCKETS_INTERFACE_VERSION: string;
    STEAMNETWORKINGUTILS_INTERFACE_VERSION: string;
    STEAMGAMESERVER_INTERFACE_VERSION: string;
    STEAMGAMESERVERSTATS_INTERFACE_VERSION: string;
    STEAMAPPTICKET_INTERFACE_VERSION: string;
    STEAMGAMECOORDINATOR_INTERFACE_VERSION: string;
    STEAMMATCHMAKINGSERVERLISTRESPONSE_INTERFACE_VERSION: string;
    STEAMMATCHMAKINGPINGRESPONSE_INTERFACE_VERSION: string;
    STEAMMATCHMAKINGPLAYERSRESPONSE_INTERFACE_VERSION: string;
    STEAMMATCHMAKINGRULESRESPONSE_INTERFACE_VERSION: string;
    STEAMNETWORKINGCONNECTIONSIGNALING_INTERFACE_VERSION: string;
    STEAMNETWORKINGSIGNALINGRECVCONTEXT_INTERFACE_VERSION: string;
    STEAMNETWORKINGFAKEUDPPORT_INTERFACE_VERSION: string;
  }
  interface Structs {
    SteamIPAddress_t: {
      new (): {
        m_rgubIPv6: number,
        m_eType: SteamWorksNS.Enums.ESteamIPType,
        IsSet: {(): boolean},
      },
      m_rgubIPv6: number,
      m_eType: SteamWorksNS.Enums.ESteamIPType,
      IsSet: {(): boolean},
    };
    FriendGameInfo_t: {
      new (): {
        m_gameID: unknown,
        m_unGameIP: number,
        m_usGamePort: number,
        m_usQueryPort: number,
        m_steamIDLobby: unknown,
      },
      m_gameID: unknown,
      m_unGameIP: number,
      m_usGamePort: number,
      m_usQueryPort: number,
      m_steamIDLobby: unknown,
    };
    SteamPartyBeaconLocation_t: {
      new (): {
        m_eType: SteamWorksNS.Enums.ESteamPartyBeaconLocationType,
        m_ulLocationID: number,
      },
      m_eType: SteamWorksNS.Enums.ESteamPartyBeaconLocationType,
      m_ulLocationID: number,
    };
    LeaderboardEntry_t: {
      new (): {
        m_steamIDUser: unknown,
        m_nGlobalRank: number,
        m_nScore: number,
        m_cDetails: number,
        m_hUGC: number,
      },
      m_steamIDUser: unknown,
      m_nGlobalRank: number,
      m_nScore: number,
      m_cDetails: number,
      m_hUGC: number,
    };
    P2PSessionState_t: {
      new (): {
        m_bConnectionActive: number,
        m_bConnecting: number,
        m_eP2PSessionError: number,
        m_bUsingRelay: number,
        m_nBytesQueuedForSend: number,
        m_nPacketsQueuedForSend: number,
        m_nRemoteIP: number,
        m_nRemotePort: number,
      },
      m_bConnectionActive: number,
      m_bConnecting: number,
      m_eP2PSessionError: number,
      m_bUsingRelay: number,
      m_nBytesQueuedForSend: number,
      m_nPacketsQueuedForSend: number,
      m_nRemoteIP: number,
      m_nRemotePort: number,
    };
    SteamParamStringArray_t: {
      new (): {
        m_ppStrings: unknown,
        m_nNumStrings: number,
      },
      m_ppStrings: unknown,
      m_nNumStrings: number,
    };
    SteamUGCDetails_t: {
      new (): {
        m_nPublishedFileId: number,
        m_eResult: SteamWorksNS.Enums.EResult,
        m_eFileType: SteamWorksNS.Enums.EWorkshopFileType,
        m_nCreatorAppID: number,
        m_nConsumerAppID: number,
        m_rgchTitle: string,
        m_rgchDescription: string,
        m_ulSteamIDOwner: number,
        m_rtimeCreated: number,
        m_rtimeUpdated: number,
        m_rtimeAddedToUserList: number,
        m_eVisibility: SteamWorksNS.Enums.ERemoteStoragePublishedFileVisibility,
        m_bBanned: boolean,
        m_bAcceptedForUse: boolean,
        m_bTagsTruncated: boolean,
        m_rgchTags: string,
        m_hFile: number,
        m_hPreviewFile: number,
        m_pchFileName: string,
        m_nFileSize: number,
        m_nPreviewFileSize: number,
        m_rgchURL: string,
        m_unVotesUp: number,
        m_unVotesDown: number,
        m_flScore: number,
        m_unNumChildren: number,
      },
      m_nPublishedFileId: number,
      m_eResult: SteamWorksNS.Enums.EResult,
      m_eFileType: SteamWorksNS.Enums.EWorkshopFileType,
      m_nCreatorAppID: number,
      m_nConsumerAppID: number,
      m_rgchTitle: string,
      m_rgchDescription: string,
      m_ulSteamIDOwner: number,
      m_rtimeCreated: number,
      m_rtimeUpdated: number,
      m_rtimeAddedToUserList: number,
      m_eVisibility: SteamWorksNS.Enums.ERemoteStoragePublishedFileVisibility,
      m_bBanned: boolean,
      m_bAcceptedForUse: boolean,
      m_bTagsTruncated: boolean,
      m_rgchTags: string,
      m_hFile: number,
      m_hPreviewFile: number,
      m_pchFileName: string,
      m_nFileSize: number,
      m_nPreviewFileSize: number,
      m_rgchURL: string,
      m_unVotesUp: number,
      m_unVotesDown: number,
      m_flScore: number,
      m_unNumChildren: number,
    };
    SteamItemDetails_t: {
      new (): {
        m_itemId: number,
        m_iDefinition: number,
        m_unQuantity: number,
        m_unFlags: number,
      },
      m_itemId: number,
      m_iDefinition: number,
      m_unQuantity: number,
      m_unFlags: number,
    };
    InputAnalogActionData_t: {
      new (): {
        eMode: SteamWorksNS.Enums.EInputSourceMode,
        x: number,
        y: number,
        bActive: boolean,
      },
      eMode: SteamWorksNS.Enums.EInputSourceMode,
      x: number,
      y: number,
      bActive: boolean,
    };
    InputDigitalActionData_t: {
      new (): {
        bState: boolean,
        bActive: boolean,
      },
      bState: boolean,
      bActive: boolean,
    };
    InputMotionData_t: {
      new (): {
        rotQuatX: number,
        rotQuatY: number,
        rotQuatZ: number,
        rotQuatW: number,
        posAccelX: number,
        posAccelY: number,
        posAccelZ: number,
        rotVelX: number,
        rotVelY: number,
        rotVelZ: number,
      },
      rotQuatX: number,
      rotQuatY: number,
      rotQuatZ: number,
      rotQuatW: number,
      posAccelX: number,
      posAccelY: number,
      posAccelZ: number,
      rotVelX: number,
      rotVelY: number,
      rotVelZ: number,
    };
    SteamInputActionEvent_t: {
      new (): {
        controllerHandle: number,
        eEventType: SteamWorksNS.Enums.ESteamInputActionEventType,
        analogAction: unknown,
      },
      controllerHandle: number,
      eEventType: SteamWorksNS.Enums.ESteamInputActionEventType,
      analogAction: unknown,
    };
    SteamNetworkingIdentityRender: {(/* Args Unknown */): unknown};
    SteamNetworkingIPAddrRender: {(/* Args Unknown */): unknown};
  }
  interface Enums {
    EDurationControlProgress: {
      k_EDurationControlProgress_Full: 0,
      k_EDurationControlProgress_Half: 1,
      k_EDurationControlProgress_None: 2,
      k_EDurationControl_ExitSoon_3h: 3,
      k_EDurationControl_ExitSoon_5h: 4,
      k_EDurationControl_ExitSoon_Night: 5,
    };
    EDurationControlNotification: {
      k_EDurationControlNotification_None: 0,
      k_EDurationControlNotification_1Hour: 1,
      k_EDurationControlNotification_3Hours: 2,
      k_EDurationControlNotification_HalfProgress: 3,
      k_EDurationControlNotification_NoProgress: 4,
      k_EDurationControlNotification_ExitSoon_3h: 5,
      k_EDurationControlNotification_ExitSoon_5h: 6,
      k_EDurationControlNotification_ExitSoon_Night: 7,
    };
    EDurationControlOnlineState: {
      k_EDurationControlOnlineState_Invalid: 0,
      k_EDurationControlOnlineState_Offline: 1,
      k_EDurationControlOnlineState_Online: 2,
      k_EDurationControlOnlineState_OnlineHighPri: 3,
    };
    ESteamIPv6ConnectivityProtocol: {
      k_ESteamIPv6ConnectivityProtocol_Invalid: 0,
      k_ESteamIPv6ConnectivityProtocol_HTTP: 1,
      k_ESteamIPv6ConnectivityProtocol_UDP: 2,
    };
    ESteamIPv6ConnectivityState: {
      k_ESteamIPv6ConnectivityState_Unknown: 0,
      k_ESteamIPv6ConnectivityState_Good: 1,
      k_ESteamIPv6ConnectivityState_Bad: 2,
    };
    EOverlayToStoreFlag: {
      k_EOverlayToStoreFlag_None: 0,
      k_EOverlayToStoreFlag_AddToCart: 1,
      k_EOverlayToStoreFlag_AddToCartAndShow: 2,
    };
    EActivateGameOverlayToWebPageMode: {
      k_EActivateGameOverlayToWebPageMode_Default: 0,
      k_EActivateGameOverlayToWebPageMode_Modal: 1,
    };
    ESteamPartyBeaconLocationType: {
      k_ESteamPartyBeaconLocationType_Invalid: 0,
      k_ESteamPartyBeaconLocationType_ChatGroup: 1,
      k_ESteamPartyBeaconLocationType_Max: 2,
    };
    ERemoteStorageLocalFileChange: {
      k_ERemoteStorageLocalFileChange_Invalid: 0,
      k_ERemoteStorageLocalFileChange_FileUpdated: 1,
      k_ERemoteStorageLocalFileChange_FileDeleted: 2,
    };
    ERemoteStorageFilePathType: {
      k_ERemoteStorageFilePathType_Invalid: 0,
      k_ERemoteStorageFilePathType_Absolute: 1,
      k_ERemoteStorageFilePathType_APIFilename: 2,
    };
    EVRScreenshotType: {
      k_EVRScreenshotType_None: 0,
      k_EVRScreenshotType_Mono: 1,
      k_EVRScreenshotType_Stereo: 2,
      k_EVRScreenshotType_MonoCubemap: 3,
      k_EVRScreenshotType_MonoPanorama: 4,
      k_EVRScreenshotType_StereoPanorama: 5,
    };
    ESteamControllerPad: {
      k_ESteamControllerPad_Left: 0,
      k_ESteamControllerPad_Right: 1,
    };
    EControllerActionOrigin: {
      k_EControllerActionOrigin_None: 0,
      k_EControllerActionOrigin_A: 1,
      k_EControllerActionOrigin_B: 2,
      k_EControllerActionOrigin_X: 3,
      k_EControllerActionOrigin_Y: 4,
      k_EControllerActionOrigin_LeftBumper: 5,
      k_EControllerActionOrigin_RightBumper: 6,
      k_EControllerActionOrigin_LeftGrip: 7,
      k_EControllerActionOrigin_RightGrip: 8,
      k_EControllerActionOrigin_Start: 9,
      k_EControllerActionOrigin_Back: 10,
      k_EControllerActionOrigin_LeftPad_Touch: 11,
      k_EControllerActionOrigin_LeftPad_Swipe: 12,
      k_EControllerActionOrigin_LeftPad_Click: 13,
      k_EControllerActionOrigin_LeftPad_DPadNorth: 14,
      k_EControllerActionOrigin_LeftPad_DPadSouth: 15,
      k_EControllerActionOrigin_LeftPad_DPadWest: 16,
      k_EControllerActionOrigin_LeftPad_DPadEast: 17,
      k_EControllerActionOrigin_RightPad_Touch: 18,
      k_EControllerActionOrigin_RightPad_Swipe: 19,
      k_EControllerActionOrigin_RightPad_Click: 20,
      k_EControllerActionOrigin_RightPad_DPadNorth: 21,
      k_EControllerActionOrigin_RightPad_DPadSouth: 22,
      k_EControllerActionOrigin_RightPad_DPadWest: 23,
      k_EControllerActionOrigin_RightPad_DPadEast: 24,
      k_EControllerActionOrigin_LeftTrigger_Pull: 25,
      k_EControllerActionOrigin_LeftTrigger_Click: 26,
      k_EControllerActionOrigin_RightTrigger_Pull: 27,
      k_EControllerActionOrigin_RightTrigger_Click: 28,
      k_EControllerActionOrigin_LeftStick_Move: 29,
      k_EControllerActionOrigin_LeftStick_Click: 30,
      k_EControllerActionOrigin_LeftStick_DPadNorth: 31,
      k_EControllerActionOrigin_LeftStick_DPadSouth: 32,
      k_EControllerActionOrigin_LeftStick_DPadWest: 33,
      k_EControllerActionOrigin_LeftStick_DPadEast: 34,
      k_EControllerActionOrigin_Gyro_Move: 35,
      k_EControllerActionOrigin_Gyro_Pitch: 36,
      k_EControllerActionOrigin_Gyro_Yaw: 37,
      k_EControllerActionOrigin_Gyro_Roll: 38,
      k_EControllerActionOrigin_PS4_X: 39,
      k_EControllerActionOrigin_PS4_Circle: 40,
      k_EControllerActionOrigin_PS4_Triangle: 41,
      k_EControllerActionOrigin_PS4_Square: 42,
      k_EControllerActionOrigin_PS4_LeftBumper: 43,
      k_EControllerActionOrigin_PS4_RightBumper: 44,
      k_EControllerActionOrigin_PS4_Options: 45,
      k_EControllerActionOrigin_PS4_Share: 46,
      k_EControllerActionOrigin_PS4_LeftPad_Touch: 47,
      k_EControllerActionOrigin_PS4_LeftPad_Swipe: 48,
      k_EControllerActionOrigin_PS4_LeftPad_Click: 49,
      k_EControllerActionOrigin_PS4_LeftPad_DPadNorth: 50,
      k_EControllerActionOrigin_PS4_LeftPad_DPadSouth: 51,
      k_EControllerActionOrigin_PS4_LeftPad_DPadWest: 52,
      k_EControllerActionOrigin_PS4_LeftPad_DPadEast: 53,
      k_EControllerActionOrigin_PS4_RightPad_Touch: 54,
      k_EControllerActionOrigin_PS4_RightPad_Swipe: 55,
      k_EControllerActionOrigin_PS4_RightPad_Click: 56,
      k_EControllerActionOrigin_PS4_RightPad_DPadNorth: 57,
      k_EControllerActionOrigin_PS4_RightPad_DPadSouth: 58,
      k_EControllerActionOrigin_PS4_RightPad_DPadWest: 59,
      k_EControllerActionOrigin_PS4_RightPad_DPadEast: 60,
      k_EControllerActionOrigin_PS4_CenterPad_Touch: 61,
      k_EControllerActionOrigin_PS4_CenterPad_Swipe: 62,
      k_EControllerActionOrigin_PS4_CenterPad_Click: 63,
      k_EControllerActionOrigin_PS4_CenterPad_DPadNorth: 64,
      k_EControllerActionOrigin_PS4_CenterPad_DPadSouth: 65,
      k_EControllerActionOrigin_PS4_CenterPad_DPadWest: 66,
      k_EControllerActionOrigin_PS4_CenterPad_DPadEast: 67,
      k_EControllerActionOrigin_PS4_LeftTrigger_Pull: 68,
      k_EControllerActionOrigin_PS4_LeftTrigger_Click: 69,
      k_EControllerActionOrigin_PS4_RightTrigger_Pull: 70,
      k_EControllerActionOrigin_PS4_RightTrigger_Click: 71,
      k_EControllerActionOrigin_PS4_LeftStick_Move: 72,
      k_EControllerActionOrigin_PS4_LeftStick_Click: 73,
      k_EControllerActionOrigin_PS4_LeftStick_DPadNorth: 74,
      k_EControllerActionOrigin_PS4_LeftStick_DPadSouth: 75,
      k_EControllerActionOrigin_PS4_LeftStick_DPadWest: 76,
      k_EControllerActionOrigin_PS4_LeftStick_DPadEast: 77,
      k_EControllerActionOrigin_PS4_RightStick_Move: 78,
      k_EControllerActionOrigin_PS4_RightStick_Click: 79,
      k_EControllerActionOrigin_PS4_RightStick_DPadNorth: 80,
      k_EControllerActionOrigin_PS4_RightStick_DPadSouth: 81,
      k_EControllerActionOrigin_PS4_RightStick_DPadWest: 82,
      k_EControllerActionOrigin_PS4_RightStick_DPadEast: 83,
      k_EControllerActionOrigin_PS4_DPad_North: 84,
      k_EControllerActionOrigin_PS4_DPad_South: 85,
      k_EControllerActionOrigin_PS4_DPad_West: 86,
      k_EControllerActionOrigin_PS4_DPad_East: 87,
      k_EControllerActionOrigin_PS4_Gyro_Move: 88,
      k_EControllerActionOrigin_PS4_Gyro_Pitch: 89,
      k_EControllerActionOrigin_PS4_Gyro_Yaw: 90,
      k_EControllerActionOrigin_PS4_Gyro_Roll: 91,
      k_EControllerActionOrigin_XBoxOne_A: 92,
      k_EControllerActionOrigin_XBoxOne_B: 93,
      k_EControllerActionOrigin_XBoxOne_X: 94,
      k_EControllerActionOrigin_XBoxOne_Y: 95,
      k_EControllerActionOrigin_XBoxOne_LeftBumper: 96,
      k_EControllerActionOrigin_XBoxOne_RightBumper: 97,
      k_EControllerActionOrigin_XBoxOne_Menu: 98,
      k_EControllerActionOrigin_XBoxOne_View: 99,
      k_EControllerActionOrigin_XBoxOne_LeftTrigger_Pull: 100,
      k_EControllerActionOrigin_XBoxOne_LeftTrigger_Click: 101,
      k_EControllerActionOrigin_XBoxOne_RightTrigger_Pull: 102,
      k_EControllerActionOrigin_XBoxOne_RightTrigger_Click: 103,
      k_EControllerActionOrigin_XBoxOne_LeftStick_Move: 104,
      k_EControllerActionOrigin_XBoxOne_LeftStick_Click: 105,
      k_EControllerActionOrigin_XBoxOne_LeftStick_DPadNorth: 106,
      k_EControllerActionOrigin_XBoxOne_LeftStick_DPadSouth: 107,
      k_EControllerActionOrigin_XBoxOne_LeftStick_DPadWest: 108,
      k_EControllerActionOrigin_XBoxOne_LeftStick_DPadEast: 109,
      k_EControllerActionOrigin_XBoxOne_RightStick_Move: 110,
      k_EControllerActionOrigin_XBoxOne_RightStick_Click: 111,
      k_EControllerActionOrigin_XBoxOne_RightStick_DPadNorth: 112,
      k_EControllerActionOrigin_XBoxOne_RightStick_DPadSouth: 113,
      k_EControllerActionOrigin_XBoxOne_RightStick_DPadWest: 114,
      k_EControllerActionOrigin_XBoxOne_RightStick_DPadEast: 115,
      k_EControllerActionOrigin_XBoxOne_DPad_North: 116,
      k_EControllerActionOrigin_XBoxOne_DPad_South: 117,
      k_EControllerActionOrigin_XBoxOne_DPad_West: 118,
      k_EControllerActionOrigin_XBoxOne_DPad_East: 119,
      k_EControllerActionOrigin_XBox360_A: 120,
      k_EControllerActionOrigin_XBox360_B: 121,
      k_EControllerActionOrigin_XBox360_X: 122,
      k_EControllerActionOrigin_XBox360_Y: 123,
      k_EControllerActionOrigin_XBox360_LeftBumper: 124,
      k_EControllerActionOrigin_XBox360_RightBumper: 125,
      k_EControllerActionOrigin_XBox360_Start: 126,
      k_EControllerActionOrigin_XBox360_Back: 127,
      k_EControllerActionOrigin_XBox360_LeftTrigger_Pull: 128,
      k_EControllerActionOrigin_XBox360_LeftTrigger_Click: 129,
      k_EControllerActionOrigin_XBox360_RightTrigger_Pull: 130,
      k_EControllerActionOrigin_XBox360_RightTrigger_Click: 131,
      k_EControllerActionOrigin_XBox360_LeftStick_Move: 132,
      k_EControllerActionOrigin_XBox360_LeftStick_Click: 133,
      k_EControllerActionOrigin_XBox360_LeftStick_DPadNorth: 134,
      k_EControllerActionOrigin_XBox360_LeftStick_DPadSouth: 135,
      k_EControllerActionOrigin_XBox360_LeftStick_DPadWest: 136,
      k_EControllerActionOrigin_XBox360_LeftStick_DPadEast: 137,
      k_EControllerActionOrigin_XBox360_RightStick_Move: 138,
      k_EControllerActionOrigin_XBox360_RightStick_Click: 139,
      k_EControllerActionOrigin_XBox360_RightStick_DPadNorth: 140,
      k_EControllerActionOrigin_XBox360_RightStick_DPadSouth: 141,
      k_EControllerActionOrigin_XBox360_RightStick_DPadWest: 142,
      k_EControllerActionOrigin_XBox360_RightStick_DPadEast: 143,
      k_EControllerActionOrigin_XBox360_DPad_North: 144,
      k_EControllerActionOrigin_XBox360_DPad_South: 145,
      k_EControllerActionOrigin_XBox360_DPad_West: 146,
      k_EControllerActionOrigin_XBox360_DPad_East: 147,
      k_EControllerActionOrigin_SteamV2_A: 148,
      k_EControllerActionOrigin_SteamV2_B: 149,
      k_EControllerActionOrigin_SteamV2_X: 150,
      k_EControllerActionOrigin_SteamV2_Y: 151,
      k_EControllerActionOrigin_SteamV2_LeftBumper: 152,
      k_EControllerActionOrigin_SteamV2_RightBumper: 153,
      k_EControllerActionOrigin_SteamV2_LeftGrip_Lower: 154,
      k_EControllerActionOrigin_SteamV2_LeftGrip_Upper: 155,
      k_EControllerActionOrigin_SteamV2_RightGrip_Lower: 156,
      k_EControllerActionOrigin_SteamV2_RightGrip_Upper: 157,
      k_EControllerActionOrigin_SteamV2_LeftBumper_Pressure: 158,
      k_EControllerActionOrigin_SteamV2_RightBumper_Pressure: 159,
      k_EControllerActionOrigin_SteamV2_LeftGrip_Pressure: 160,
      k_EControllerActionOrigin_SteamV2_RightGrip_Pressure: 161,
      k_EControllerActionOrigin_SteamV2_LeftGrip_Upper_Pressure: 162,
      k_EControllerActionOrigin_SteamV2_RightGrip_Upper_Pressure: 163,
      k_EControllerActionOrigin_SteamV2_Start: 164,
      k_EControllerActionOrigin_SteamV2_Back: 165,
      k_EControllerActionOrigin_SteamV2_LeftPad_Touch: 166,
      k_EControllerActionOrigin_SteamV2_LeftPad_Swipe: 167,
      k_EControllerActionOrigin_SteamV2_LeftPad_Click: 168,
      k_EControllerActionOrigin_SteamV2_LeftPad_Pressure: 169,
      k_EControllerActionOrigin_SteamV2_LeftPad_DPadNorth: 170,
      k_EControllerActionOrigin_SteamV2_LeftPad_DPadSouth: 171,
      k_EControllerActionOrigin_SteamV2_LeftPad_DPadWest: 172,
      k_EControllerActionOrigin_SteamV2_LeftPad_DPadEast: 173,
      k_EControllerActionOrigin_SteamV2_RightPad_Touch: 174,
      k_EControllerActionOrigin_SteamV2_RightPad_Swipe: 175,
      k_EControllerActionOrigin_SteamV2_RightPad_Click: 176,
      k_EControllerActionOrigin_SteamV2_RightPad_Pressure: 177,
      k_EControllerActionOrigin_SteamV2_RightPad_DPadNorth: 178,
      k_EControllerActionOrigin_SteamV2_RightPad_DPadSouth: 179,
      k_EControllerActionOrigin_SteamV2_RightPad_DPadWest: 180,
      k_EControllerActionOrigin_SteamV2_RightPad_DPadEast: 181,
      k_EControllerActionOrigin_SteamV2_LeftTrigger_Pull: 182,
      k_EControllerActionOrigin_SteamV2_LeftTrigger_Click: 183,
      k_EControllerActionOrigin_SteamV2_RightTrigger_Pull: 184,
      k_EControllerActionOrigin_SteamV2_RightTrigger_Click: 185,
      k_EControllerActionOrigin_SteamV2_LeftStick_Move: 186,
      k_EControllerActionOrigin_SteamV2_LeftStick_Click: 187,
      k_EControllerActionOrigin_SteamV2_LeftStick_DPadNorth: 188,
      k_EControllerActionOrigin_SteamV2_LeftStick_DPadSouth: 189,
      k_EControllerActionOrigin_SteamV2_LeftStick_DPadWest: 190,
      k_EControllerActionOrigin_SteamV2_LeftStick_DPadEast: 191,
      k_EControllerActionOrigin_SteamV2_Gyro_Move: 192,
      k_EControllerActionOrigin_SteamV2_Gyro_Pitch: 193,
      k_EControllerActionOrigin_SteamV2_Gyro_Yaw: 194,
      k_EControllerActionOrigin_SteamV2_Gyro_Roll: 195,
      k_EControllerActionOrigin_Switch_A: 196,
      k_EControllerActionOrigin_Switch_B: 197,
      k_EControllerActionOrigin_Switch_X: 198,
      k_EControllerActionOrigin_Switch_Y: 199,
      k_EControllerActionOrigin_Switch_LeftBumper: 200,
      k_EControllerActionOrigin_Switch_RightBumper: 201,
      k_EControllerActionOrigin_Switch_Plus: 202,
      k_EControllerActionOrigin_Switch_Minus: 203,
      k_EControllerActionOrigin_Switch_Capture: 204,
      k_EControllerActionOrigin_Switch_LeftTrigger_Pull: 205,
      k_EControllerActionOrigin_Switch_LeftTrigger_Click: 206,
      k_EControllerActionOrigin_Switch_RightTrigger_Pull: 207,
      k_EControllerActionOrigin_Switch_RightTrigger_Click: 208,
      k_EControllerActionOrigin_Switch_LeftStick_Move: 209,
      k_EControllerActionOrigin_Switch_LeftStick_Click: 210,
      k_EControllerActionOrigin_Switch_LeftStick_DPadNorth: 211,
      k_EControllerActionOrigin_Switch_LeftStick_DPadSouth: 212,
      k_EControllerActionOrigin_Switch_LeftStick_DPadWest: 213,
      k_EControllerActionOrigin_Switch_LeftStick_DPadEast: 214,
      k_EControllerActionOrigin_Switch_RightStick_Move: 215,
      k_EControllerActionOrigin_Switch_RightStick_Click: 216,
      k_EControllerActionOrigin_Switch_RightStick_DPadNorth: 217,
      k_EControllerActionOrigin_Switch_RightStick_DPadSouth: 218,
      k_EControllerActionOrigin_Switch_RightStick_DPadWest: 219,
      k_EControllerActionOrigin_Switch_RightStick_DPadEast: 220,
      k_EControllerActionOrigin_Switch_DPad_North: 221,
      k_EControllerActionOrigin_Switch_DPad_South: 222,
      k_EControllerActionOrigin_Switch_DPad_West: 223,
      k_EControllerActionOrigin_Switch_DPad_East: 224,
      k_EControllerActionOrigin_Switch_ProGyro_Move: 225,
      k_EControllerActionOrigin_Switch_ProGyro_Pitch: 226,
      k_EControllerActionOrigin_Switch_ProGyro_Yaw: 227,
      k_EControllerActionOrigin_Switch_ProGyro_Roll: 228,
      k_EControllerActionOrigin_Switch_RightGyro_Move: 229,
      k_EControllerActionOrigin_Switch_RightGyro_Pitch: 230,
      k_EControllerActionOrigin_Switch_RightGyro_Yaw: 231,
      k_EControllerActionOrigin_Switch_RightGyro_Roll: 232,
      k_EControllerActionOrigin_Switch_LeftGyro_Move: 233,
      k_EControllerActionOrigin_Switch_LeftGyro_Pitch: 234,
      k_EControllerActionOrigin_Switch_LeftGyro_Yaw: 235,
      k_EControllerActionOrigin_Switch_LeftGyro_Roll: 236,
      k_EControllerActionOrigin_Switch_LeftGrip_Lower: 237,
      k_EControllerActionOrigin_Switch_LeftGrip_Upper: 238,
      k_EControllerActionOrigin_Switch_RightGrip_Lower: 239,
      k_EControllerActionOrigin_Switch_RightGrip_Upper: 240,
      k_EControllerActionOrigin_PS4_DPad_Move: 241,
      k_EControllerActionOrigin_XBoxOne_DPad_Move: 242,
      k_EControllerActionOrigin_XBox360_DPad_Move: 243,
      k_EControllerActionOrigin_Switch_DPad_Move: 244,
      k_EControllerActionOrigin_PS5_X: 245,
      k_EControllerActionOrigin_PS5_Circle: 246,
      k_EControllerActionOrigin_PS5_Triangle: 247,
      k_EControllerActionOrigin_PS5_Square: 248,
      k_EControllerActionOrigin_PS5_LeftBumper: 249,
      k_EControllerActionOrigin_PS5_RightBumper: 250,
      k_EControllerActionOrigin_PS5_Option: 251,
      k_EControllerActionOrigin_PS5_Create: 252,
      k_EControllerActionOrigin_PS5_Mute: 253,
      k_EControllerActionOrigin_PS5_LeftPad_Touch: 254,
      k_EControllerActionOrigin_PS5_LeftPad_Swipe: 255,
      k_EControllerActionOrigin_PS5_LeftPad_Click: 256,
      k_EControllerActionOrigin_PS5_LeftPad_DPadNorth: 257,
      k_EControllerActionOrigin_PS5_LeftPad_DPadSouth: 258,
      k_EControllerActionOrigin_PS5_LeftPad_DPadWest: 259,
      k_EControllerActionOrigin_PS5_LeftPad_DPadEast: 260,
      k_EControllerActionOrigin_PS5_RightPad_Touch: 261,
      k_EControllerActionOrigin_PS5_RightPad_Swipe: 262,
      k_EControllerActionOrigin_PS5_RightPad_Click: 263,
      k_EControllerActionOrigin_PS5_RightPad_DPadNorth: 264,
      k_EControllerActionOrigin_PS5_RightPad_DPadSouth: 265,
      k_EControllerActionOrigin_PS5_RightPad_DPadWest: 266,
      k_EControllerActionOrigin_PS5_RightPad_DPadEast: 267,
      k_EControllerActionOrigin_PS5_CenterPad_Touch: 268,
      k_EControllerActionOrigin_PS5_CenterPad_Swipe: 269,
      k_EControllerActionOrigin_PS5_CenterPad_Click: 270,
      k_EControllerActionOrigin_PS5_CenterPad_DPadNorth: 271,
      k_EControllerActionOrigin_PS5_CenterPad_DPadSouth: 272,
      k_EControllerActionOrigin_PS5_CenterPad_DPadWest: 273,
      k_EControllerActionOrigin_PS5_CenterPad_DPadEast: 274,
      k_EControllerActionOrigin_PS5_LeftTrigger_Pull: 275,
      k_EControllerActionOrigin_PS5_LeftTrigger_Click: 276,
      k_EControllerActionOrigin_PS5_RightTrigger_Pull: 277,
      k_EControllerActionOrigin_PS5_RightTrigger_Click: 278,
      k_EControllerActionOrigin_PS5_LeftStick_Move: 279,
      k_EControllerActionOrigin_PS5_LeftStick_Click: 280,
      k_EControllerActionOrigin_PS5_LeftStick_DPadNorth: 281,
      k_EControllerActionOrigin_PS5_LeftStick_DPadSouth: 282,
      k_EControllerActionOrigin_PS5_LeftStick_DPadWest: 283,
      k_EControllerActionOrigin_PS5_LeftStick_DPadEast: 284,
      k_EControllerActionOrigin_PS5_RightStick_Move: 285,
      k_EControllerActionOrigin_PS5_RightStick_Click: 286,
      k_EControllerActionOrigin_PS5_RightStick_DPadNorth: 287,
      k_EControllerActionOrigin_PS5_RightStick_DPadSouth: 288,
      k_EControllerActionOrigin_PS5_RightStick_DPadWest: 289,
      k_EControllerActionOrigin_PS5_RightStick_DPadEast: 290,
      k_EControllerActionOrigin_PS5_DPad_Move: 291,
      k_EControllerActionOrigin_PS5_DPad_North: 292,
      k_EControllerActionOrigin_PS5_DPad_South: 293,
      k_EControllerActionOrigin_PS5_DPad_West: 294,
      k_EControllerActionOrigin_PS5_DPad_East: 295,
      k_EControllerActionOrigin_PS5_Gyro_Move: 296,
      k_EControllerActionOrigin_PS5_Gyro_Pitch: 297,
      k_EControllerActionOrigin_PS5_Gyro_Yaw: 298,
      k_EControllerActionOrigin_PS5_Gyro_Roll: 299,
      k_EControllerActionOrigin_XBoxOne_LeftGrip_Lower: 300,
      k_EControllerActionOrigin_XBoxOne_LeftGrip_Upper: 301,
      k_EControllerActionOrigin_XBoxOne_RightGrip_Lower: 302,
      k_EControllerActionOrigin_XBoxOne_RightGrip_Upper: 303,
      k_EControllerActionOrigin_XBoxOne_Share: 304,
      k_EControllerActionOrigin_SteamDeck_A: 305,
      k_EControllerActionOrigin_SteamDeck_B: 306,
      k_EControllerActionOrigin_SteamDeck_X: 307,
      k_EControllerActionOrigin_SteamDeck_Y: 308,
      k_EControllerActionOrigin_SteamDeck_L1: 309,
      k_EControllerActionOrigin_SteamDeck_R1: 310,
      k_EControllerActionOrigin_SteamDeck_Menu: 311,
      k_EControllerActionOrigin_SteamDeck_View: 312,
      k_EControllerActionOrigin_SteamDeck_LeftPad_Touch: 313,
      k_EControllerActionOrigin_SteamDeck_LeftPad_Swipe: 314,
      k_EControllerActionOrigin_SteamDeck_LeftPad_Click: 315,
      k_EControllerActionOrigin_SteamDeck_LeftPad_DPadNorth: 316,
      k_EControllerActionOrigin_SteamDeck_LeftPad_DPadSouth: 317,
      k_EControllerActionOrigin_SteamDeck_LeftPad_DPadWest: 318,
      k_EControllerActionOrigin_SteamDeck_LeftPad_DPadEast: 319,
      k_EControllerActionOrigin_SteamDeck_RightPad_Touch: 320,
      k_EControllerActionOrigin_SteamDeck_RightPad_Swipe: 321,
      k_EControllerActionOrigin_SteamDeck_RightPad_Click: 322,
      k_EControllerActionOrigin_SteamDeck_RightPad_DPadNorth: 323,
      k_EControllerActionOrigin_SteamDeck_RightPad_DPadSouth: 324,
      k_EControllerActionOrigin_SteamDeck_RightPad_DPadWest: 325,
      k_EControllerActionOrigin_SteamDeck_RightPad_DPadEast: 326,
      k_EControllerActionOrigin_SteamDeck_L2_SoftPull: 327,
      k_EControllerActionOrigin_SteamDeck_L2: 328,
      k_EControllerActionOrigin_SteamDeck_R2_SoftPull: 329,
      k_EControllerActionOrigin_SteamDeck_R2: 330,
      k_EControllerActionOrigin_SteamDeck_LeftStick_Move: 331,
      k_EControllerActionOrigin_SteamDeck_L3: 332,
      k_EControllerActionOrigin_SteamDeck_LeftStick_DPadNorth: 333,
      k_EControllerActionOrigin_SteamDeck_LeftStick_DPadSouth: 334,
      k_EControllerActionOrigin_SteamDeck_LeftStick_DPadWest: 335,
      k_EControllerActionOrigin_SteamDeck_LeftStick_DPadEast: 336,
      k_EControllerActionOrigin_SteamDeck_LeftStick_Touch: 337,
      k_EControllerActionOrigin_SteamDeck_RightStick_Move: 338,
      k_EControllerActionOrigin_SteamDeck_R3: 339,
      k_EControllerActionOrigin_SteamDeck_RightStick_DPadNorth: 340,
      k_EControllerActionOrigin_SteamDeck_RightStick_DPadSouth: 341,
      k_EControllerActionOrigin_SteamDeck_RightStick_DPadWest: 342,
      k_EControllerActionOrigin_SteamDeck_RightStick_DPadEast: 343,
      k_EControllerActionOrigin_SteamDeck_RightStick_Touch: 344,
      k_EControllerActionOrigin_SteamDeck_L4: 345,
      k_EControllerActionOrigin_SteamDeck_R4: 346,
      k_EControllerActionOrigin_SteamDeck_L5: 347,
      k_EControllerActionOrigin_SteamDeck_R5: 348,
      k_EControllerActionOrigin_SteamDeck_DPad_Move: 349,
      k_EControllerActionOrigin_SteamDeck_DPad_North: 350,
      k_EControllerActionOrigin_SteamDeck_DPad_South: 351,
      k_EControllerActionOrigin_SteamDeck_DPad_West: 352,
      k_EControllerActionOrigin_SteamDeck_DPad_East: 353,
      k_EControllerActionOrigin_SteamDeck_Gyro_Move: 354,
      k_EControllerActionOrigin_SteamDeck_Gyro_Pitch: 355,
      k_EControllerActionOrigin_SteamDeck_Gyro_Yaw: 356,
      k_EControllerActionOrigin_SteamDeck_Gyro_Roll: 357,
      k_EControllerActionOrigin_SteamDeck_Reserved1: 358,
      k_EControllerActionOrigin_SteamDeck_Reserved2: 359,
      k_EControllerActionOrigin_SteamDeck_Reserved3: 360,
      k_EControllerActionOrigin_SteamDeck_Reserved4: 361,
      k_EControllerActionOrigin_SteamDeck_Reserved5: 362,
      k_EControllerActionOrigin_SteamDeck_Reserved6: 363,
      k_EControllerActionOrigin_SteamDeck_Reserved7: 364,
      k_EControllerActionOrigin_SteamDeck_Reserved8: 365,
      k_EControllerActionOrigin_SteamDeck_Reserved9: 366,
      k_EControllerActionOrigin_SteamDeck_Reserved10: 367,
      k_EControllerActionOrigin_SteamDeck_Reserved11: 368,
      k_EControllerActionOrigin_SteamDeck_Reserved12: 369,
      k_EControllerActionOrigin_SteamDeck_Reserved13: 370,
      k_EControllerActionOrigin_SteamDeck_Reserved14: 371,
      k_EControllerActionOrigin_SteamDeck_Reserved15: 372,
      k_EControllerActionOrigin_SteamDeck_Reserved16: 373,
      k_EControllerActionOrigin_SteamDeck_Reserved17: 374,
      k_EControllerActionOrigin_SteamDeck_Reserved18: 375,
      k_EControllerActionOrigin_SteamDeck_Reserved19: 376,
      k_EControllerActionOrigin_SteamDeck_Reserved20: 377,
      k_EControllerActionOrigin_Count: 378,
      k_EControllerActionOrigin_MaximumPossibleValue: 32767,
    };
    EXboxOrigin: {
      k_EXboxOrigin_A: 0,
      k_EXboxOrigin_B: 1,
      k_EXboxOrigin_X: 2,
      k_EXboxOrigin_Y: 3,
      k_EXboxOrigin_LeftBumper: 4,
      k_EXboxOrigin_RightBumper: 5,
      k_EXboxOrigin_Menu: 6,
      k_EXboxOrigin_View: 7,
      k_EXboxOrigin_LeftTrigger_Pull: 8,
      k_EXboxOrigin_LeftTrigger_Click: 9,
      k_EXboxOrigin_RightTrigger_Pull: 10,
      k_EXboxOrigin_RightTrigger_Click: 11,
      k_EXboxOrigin_LeftStick_Move: 12,
      k_EXboxOrigin_LeftStick_Click: 13,
      k_EXboxOrigin_LeftStick_DPadNorth: 14,
      k_EXboxOrigin_LeftStick_DPadSouth: 15,
      k_EXboxOrigin_LeftStick_DPadWest: 16,
      k_EXboxOrigin_LeftStick_DPadEast: 17,
      k_EXboxOrigin_RightStick_Move: 18,
      k_EXboxOrigin_RightStick_Click: 19,
      k_EXboxOrigin_RightStick_DPadNorth: 20,
      k_EXboxOrigin_RightStick_DPadSouth: 21,
      k_EXboxOrigin_RightStick_DPadWest: 22,
      k_EXboxOrigin_RightStick_DPadEast: 23,
      k_EXboxOrigin_DPad_North: 24,
      k_EXboxOrigin_DPad_South: 25,
      k_EXboxOrigin_DPad_West: 26,
      k_EXboxOrigin_DPad_East: 27,
      k_EXboxOrigin_Count: 28,
    };
    ESteamInputType: {
      k_ESteamInputType_Unknown: 0,
      k_ESteamInputType_SteamController: 1,
      k_ESteamInputType_XBox360Controller: 2,
      k_ESteamInputType_XBoxOneController: 3,
      k_ESteamInputType_GenericGamepad: 4,
      k_ESteamInputType_PS4Controller: 5,
      k_ESteamInputType_AppleMFiController: 6,
      k_ESteamInputType_AndroidController: 7,
      k_ESteamInputType_SwitchJoyConPair: 8,
      k_ESteamInputType_SwitchJoyConSingle: 9,
      k_ESteamInputType_SwitchProController: 10,
      k_ESteamInputType_MobileTouch: 11,
      k_ESteamInputType_PS3Controller: 12,
      k_ESteamInputType_PS5Controller: 13,
      k_ESteamInputType_SteamDeckController: 14,
      k_ESteamInputType_Count: 15,
      k_ESteamInputType_MaximumPossibleValue: 255,
    };
    ESteamControllerLEDFlag: {
      k_ESteamControllerLEDFlag_SetColor: 0,
      k_ESteamControllerLEDFlag_RestoreUserDefault: 1,
    };
    EUGCMatchingUGCType: {
      k_EUGCMatchingUGCType_Items: 0,
      k_EUGCMatchingUGCType_Items_Mtx: 1,
      k_EUGCMatchingUGCType_Items_ReadyToUse: 2,
      k_EUGCMatchingUGCType_Collections: 3,
      k_EUGCMatchingUGCType_Artwork: 4,
      k_EUGCMatchingUGCType_Videos: 5,
      k_EUGCMatchingUGCType_Screenshots: 6,
      k_EUGCMatchingUGCType_AllGuides: 7,
      k_EUGCMatchingUGCType_WebGuides: 8,
      k_EUGCMatchingUGCType_IntegratedGuides: 9,
      k_EUGCMatchingUGCType_UsableInGame: 10,
      k_EUGCMatchingUGCType_ControllerBindings: 11,
      k_EUGCMatchingUGCType_GameManagedItems: 12,
      k_EUGCMatchingUGCType_All: -1,
    };
    EUserUGCList: {
      k_EUserUGCList_Published: 0,
      k_EUserUGCList_VotedOn: 1,
      k_EUserUGCList_VotedUp: 2,
      k_EUserUGCList_VotedDown: 3,
      k_EUserUGCList_WillVoteLater: 4,
      k_EUserUGCList_Favorited: 5,
      k_EUserUGCList_Subscribed: 6,
      k_EUserUGCList_UsedOrPlayed: 7,
      k_EUserUGCList_Followed: 8,
    };
    EUserUGCListSortOrder: {
      k_EUserUGCListSortOrder_CreationOrderDesc: 0,
      k_EUserUGCListSortOrder_CreationOrderAsc: 1,
      k_EUserUGCListSortOrder_TitleAsc: 2,
      k_EUserUGCListSortOrder_LastUpdatedDesc: 3,
      k_EUserUGCListSortOrder_SubscriptionDateDesc: 4,
      k_EUserUGCListSortOrder_VoteScoreDesc: 5,
      k_EUserUGCListSortOrder_ForModeration: 6,
    };
    EUGCQuery: {
      k_EUGCQuery_RankedByVote: 0,
      k_EUGCQuery_RankedByPublicationDate: 1,
      k_EUGCQuery_AcceptedForGameRankedByAcceptanceDate: 2,
      k_EUGCQuery_RankedByTrend: 3,
      k_EUGCQuery_FavoritedByFriendsRankedByPublicationDate: 4,
      k_EUGCQuery_CreatedByFriendsRankedByPublicationDate: 5,
      k_EUGCQuery_RankedByNumTimesReported: 6,
      k_EUGCQuery_CreatedByFollowedUsersRankedByPublicationDate: 7,
      k_EUGCQuery_NotYetRated: 8,
      k_EUGCQuery_RankedByTotalVotesAsc: 9,
      k_EUGCQuery_RankedByVotesUp: 10,
      k_EUGCQuery_RankedByTextSearch: 11,
      k_EUGCQuery_RankedByTotalUniqueSubscriptions: 12,
      k_EUGCQuery_RankedByPlaytimeTrend: 13,
      k_EUGCQuery_RankedByTotalPlaytime: 14,
      k_EUGCQuery_RankedByAveragePlaytimeTrend: 15,
      k_EUGCQuery_RankedByLifetimeAveragePlaytime: 16,
      k_EUGCQuery_RankedByPlaytimeSessionsTrend: 17,
      k_EUGCQuery_RankedByLifetimePlaytimeSessions: 18,
      k_EUGCQuery_RankedByLastUpdatedDate: 19,
    };
    EItemStatistic: {
      k_EItemStatistic_NumSubscriptions: 0,
      k_EItemStatistic_NumFavorites: 1,
      k_EItemStatistic_NumFollowers: 2,
      k_EItemStatistic_NumUniqueSubscriptions: 3,
      k_EItemStatistic_NumUniqueFavorites: 4,
      k_EItemStatistic_NumUniqueFollowers: 5,
      k_EItemStatistic_NumUniqueWebsiteViews: 6,
      k_EItemStatistic_ReportScore: 7,
      k_EItemStatistic_NumSecondsPlayed: 8,
      k_EItemStatistic_NumPlaytimeSessions: 9,
      k_EItemStatistic_NumComments: 10,
      k_EItemStatistic_NumSecondsPlayedDuringTimePeriod: 11,
      k_EItemStatistic_NumPlaytimeSessionsDuringTimePeriod: 12,
    };
    EItemPreviewType: {
      k_EItemPreviewType_Image: 0,
      k_EItemPreviewType_YouTubeVideo: 1,
      k_EItemPreviewType_Sketchfab: 2,
      k_EItemPreviewType_EnvironmentMap_HorizontalCross: 3,
      k_EItemPreviewType_EnvironmentMap_LatLong: 4,
      k_EItemPreviewType_ReservedMax: 255,
    };
    EInputSourceMode: {
      k_EInputSourceMode_None: 0,
      k_EInputSourceMode_Dpad: 1,
      k_EInputSourceMode_Buttons: 2,
      k_EInputSourceMode_FourButtons: 3,
      k_EInputSourceMode_AbsoluteMouse: 4,
      k_EInputSourceMode_RelativeMouse: 5,
      k_EInputSourceMode_JoystickMove: 6,
      k_EInputSourceMode_JoystickMouse: 7,
      k_EInputSourceMode_JoystickCamera: 8,
      k_EInputSourceMode_ScrollWheel: 9,
      k_EInputSourceMode_Trigger: 10,
      k_EInputSourceMode_TouchMenu: 11,
      k_EInputSourceMode_MouseJoystick: 12,
      k_EInputSourceMode_MouseRegion: 13,
      k_EInputSourceMode_RadialMenu: 14,
      k_EInputSourceMode_SingleButton: 15,
      k_EInputSourceMode_Switches: 16,
    };
    EInputActionOrigin: {
      k_EInputActionOrigin_None: 0,
      k_EInputActionOrigin_SteamController_A: 1,
      k_EInputActionOrigin_SteamController_B: 2,
      k_EInputActionOrigin_SteamController_X: 3,
      k_EInputActionOrigin_SteamController_Y: 4,
      k_EInputActionOrigin_SteamController_LeftBumper: 5,
      k_EInputActionOrigin_SteamController_RightBumper: 6,
      k_EInputActionOrigin_SteamController_LeftGrip: 7,
      k_EInputActionOrigin_SteamController_RightGrip: 8,
      k_EInputActionOrigin_SteamController_Start: 9,
      k_EInputActionOrigin_SteamController_Back: 10,
      k_EInputActionOrigin_SteamController_LeftPad_Touch: 11,
      k_EInputActionOrigin_SteamController_LeftPad_Swipe: 12,
      k_EInputActionOrigin_SteamController_LeftPad_Click: 13,
      k_EInputActionOrigin_SteamController_LeftPad_DPadNorth: 14,
      k_EInputActionOrigin_SteamController_LeftPad_DPadSouth: 15,
      k_EInputActionOrigin_SteamController_LeftPad_DPadWest: 16,
      k_EInputActionOrigin_SteamController_LeftPad_DPadEast: 17,
      k_EInputActionOrigin_SteamController_RightPad_Touch: 18,
      k_EInputActionOrigin_SteamController_RightPad_Swipe: 19,
      k_EInputActionOrigin_SteamController_RightPad_Click: 20,
      k_EInputActionOrigin_SteamController_RightPad_DPadNorth: 21,
      k_EInputActionOrigin_SteamController_RightPad_DPadSouth: 22,
      k_EInputActionOrigin_SteamController_RightPad_DPadWest: 23,
      k_EInputActionOrigin_SteamController_RightPad_DPadEast: 24,
      k_EInputActionOrigin_SteamController_LeftTrigger_Pull: 25,
      k_EInputActionOrigin_SteamController_LeftTrigger_Click: 26,
      k_EInputActionOrigin_SteamController_RightTrigger_Pull: 27,
      k_EInputActionOrigin_SteamController_RightTrigger_Click: 28,
      k_EInputActionOrigin_SteamController_LeftStick_Move: 29,
      k_EInputActionOrigin_SteamController_LeftStick_Click: 30,
      k_EInputActionOrigin_SteamController_LeftStick_DPadNorth: 31,
      k_EInputActionOrigin_SteamController_LeftStick_DPadSouth: 32,
      k_EInputActionOrigin_SteamController_LeftStick_DPadWest: 33,
      k_EInputActionOrigin_SteamController_LeftStick_DPadEast: 34,
      k_EInputActionOrigin_SteamController_Gyro_Move: 35,
      k_EInputActionOrigin_SteamController_Gyro_Pitch: 36,
      k_EInputActionOrigin_SteamController_Gyro_Yaw: 37,
      k_EInputActionOrigin_SteamController_Gyro_Roll: 38,
      k_EInputActionOrigin_SteamController_Reserved0: 39,
      k_EInputActionOrigin_SteamController_Reserved1: 40,
      k_EInputActionOrigin_SteamController_Reserved2: 41,
      k_EInputActionOrigin_SteamController_Reserved3: 42,
      k_EInputActionOrigin_SteamController_Reserved4: 43,
      k_EInputActionOrigin_SteamController_Reserved5: 44,
      k_EInputActionOrigin_SteamController_Reserved6: 45,
      k_EInputActionOrigin_SteamController_Reserved7: 46,
      k_EInputActionOrigin_SteamController_Reserved8: 47,
      k_EInputActionOrigin_SteamController_Reserved9: 48,
      k_EInputActionOrigin_SteamController_Reserved10: 49,
      k_EInputActionOrigin_PS4_X: 50,
      k_EInputActionOrigin_PS4_Circle: 51,
      k_EInputActionOrigin_PS4_Triangle: 52,
      k_EInputActionOrigin_PS4_Square: 53,
      k_EInputActionOrigin_PS4_LeftBumper: 54,
      k_EInputActionOrigin_PS4_RightBumper: 55,
      k_EInputActionOrigin_PS4_Options: 56,
      k_EInputActionOrigin_PS4_Share: 57,
      k_EInputActionOrigin_PS4_LeftPad_Touch: 58,
      k_EInputActionOrigin_PS4_LeftPad_Swipe: 59,
      k_EInputActionOrigin_PS4_LeftPad_Click: 60,
      k_EInputActionOrigin_PS4_LeftPad_DPadNorth: 61,
      k_EInputActionOrigin_PS4_LeftPad_DPadSouth: 62,
      k_EInputActionOrigin_PS4_LeftPad_DPadWest: 63,
      k_EInputActionOrigin_PS4_LeftPad_DPadEast: 64,
      k_EInputActionOrigin_PS4_RightPad_Touch: 65,
      k_EInputActionOrigin_PS4_RightPad_Swipe: 66,
      k_EInputActionOrigin_PS4_RightPad_Click: 67,
      k_EInputActionOrigin_PS4_RightPad_DPadNorth: 68,
      k_EInputActionOrigin_PS4_RightPad_DPadSouth: 69,
      k_EInputActionOrigin_PS4_RightPad_DPadWest: 70,
      k_EInputActionOrigin_PS4_RightPad_DPadEast: 71,
      k_EInputActionOrigin_PS4_CenterPad_Touch: 72,
      k_EInputActionOrigin_PS4_CenterPad_Swipe: 73,
      k_EInputActionOrigin_PS4_CenterPad_Click: 74,
      k_EInputActionOrigin_PS4_CenterPad_DPadNorth: 75,
      k_EInputActionOrigin_PS4_CenterPad_DPadSouth: 76,
      k_EInputActionOrigin_PS4_CenterPad_DPadWest: 77,
      k_EInputActionOrigin_PS4_CenterPad_DPadEast: 78,
      k_EInputActionOrigin_PS4_LeftTrigger_Pull: 79,
      k_EInputActionOrigin_PS4_LeftTrigger_Click: 80,
      k_EInputActionOrigin_PS4_RightTrigger_Pull: 81,
      k_EInputActionOrigin_PS4_RightTrigger_Click: 82,
      k_EInputActionOrigin_PS4_LeftStick_Move: 83,
      k_EInputActionOrigin_PS4_LeftStick_Click: 84,
      k_EInputActionOrigin_PS4_LeftStick_DPadNorth: 85,
      k_EInputActionOrigin_PS4_LeftStick_DPadSouth: 86,
      k_EInputActionOrigin_PS4_LeftStick_DPadWest: 87,
      k_EInputActionOrigin_PS4_LeftStick_DPadEast: 88,
      k_EInputActionOrigin_PS4_RightStick_Move: 89,
      k_EInputActionOrigin_PS4_RightStick_Click: 90,
      k_EInputActionOrigin_PS4_RightStick_DPadNorth: 91,
      k_EInputActionOrigin_PS4_RightStick_DPadSouth: 92,
      k_EInputActionOrigin_PS4_RightStick_DPadWest: 93,
      k_EInputActionOrigin_PS4_RightStick_DPadEast: 94,
      k_EInputActionOrigin_PS4_DPad_North: 95,
      k_EInputActionOrigin_PS4_DPad_South: 96,
      k_EInputActionOrigin_PS4_DPad_West: 97,
      k_EInputActionOrigin_PS4_DPad_East: 98,
      k_EInputActionOrigin_PS4_Gyro_Move: 99,
      k_EInputActionOrigin_PS4_Gyro_Pitch: 100,
      k_EInputActionOrigin_PS4_Gyro_Yaw: 101,
      k_EInputActionOrigin_PS4_Gyro_Roll: 102,
      k_EInputActionOrigin_PS4_DPad_Move: 103,
      k_EInputActionOrigin_PS4_Reserved1: 104,
      k_EInputActionOrigin_PS4_Reserved2: 105,
      k_EInputActionOrigin_PS4_Reserved3: 106,
      k_EInputActionOrigin_PS4_Reserved4: 107,
      k_EInputActionOrigin_PS4_Reserved5: 108,
      k_EInputActionOrigin_PS4_Reserved6: 109,
      k_EInputActionOrigin_PS4_Reserved7: 110,
      k_EInputActionOrigin_PS4_Reserved8: 111,
      k_EInputActionOrigin_PS4_Reserved9: 112,
      k_EInputActionOrigin_PS4_Reserved10: 113,
      k_EInputActionOrigin_XBoxOne_A: 114,
      k_EInputActionOrigin_XBoxOne_B: 115,
      k_EInputActionOrigin_XBoxOne_X: 116,
      k_EInputActionOrigin_XBoxOne_Y: 117,
      k_EInputActionOrigin_XBoxOne_LeftBumper: 118,
      k_EInputActionOrigin_XBoxOne_RightBumper: 119,
      k_EInputActionOrigin_XBoxOne_Menu: 120,
      k_EInputActionOrigin_XBoxOne_View: 121,
      k_EInputActionOrigin_XBoxOne_LeftTrigger_Pull: 122,
      k_EInputActionOrigin_XBoxOne_LeftTrigger_Click: 123,
      k_EInputActionOrigin_XBoxOne_RightTrigger_Pull: 124,
      k_EInputActionOrigin_XBoxOne_RightTrigger_Click: 125,
      k_EInputActionOrigin_XBoxOne_LeftStick_Move: 126,
      k_EInputActionOrigin_XBoxOne_LeftStick_Click: 127,
      k_EInputActionOrigin_XBoxOne_LeftStick_DPadNorth: 128,
      k_EInputActionOrigin_XBoxOne_LeftStick_DPadSouth: 129,
      k_EInputActionOrigin_XBoxOne_LeftStick_DPadWest: 130,
      k_EInputActionOrigin_XBoxOne_LeftStick_DPadEast: 131,
      k_EInputActionOrigin_XBoxOne_RightStick_Move: 132,
      k_EInputActionOrigin_XBoxOne_RightStick_Click: 133,
      k_EInputActionOrigin_XBoxOne_RightStick_DPadNorth: 134,
      k_EInputActionOrigin_XBoxOne_RightStick_DPadSouth: 135,
      k_EInputActionOrigin_XBoxOne_RightStick_DPadWest: 136,
      k_EInputActionOrigin_XBoxOne_RightStick_DPadEast: 137,
      k_EInputActionOrigin_XBoxOne_DPad_North: 138,
      k_EInputActionOrigin_XBoxOne_DPad_South: 139,
      k_EInputActionOrigin_XBoxOne_DPad_West: 140,
      k_EInputActionOrigin_XBoxOne_DPad_East: 141,
      k_EInputActionOrigin_XBoxOne_DPad_Move: 142,
      k_EInputActionOrigin_XBoxOne_LeftGrip_Lower: 143,
      k_EInputActionOrigin_XBoxOne_LeftGrip_Upper: 144,
      k_EInputActionOrigin_XBoxOne_RightGrip_Lower: 145,
      k_EInputActionOrigin_XBoxOne_RightGrip_Upper: 146,
      k_EInputActionOrigin_XBoxOne_Share: 147,
      k_EInputActionOrigin_XBoxOne_Reserved6: 148,
      k_EInputActionOrigin_XBoxOne_Reserved7: 149,
      k_EInputActionOrigin_XBoxOne_Reserved8: 150,
      k_EInputActionOrigin_XBoxOne_Reserved9: 151,
      k_EInputActionOrigin_XBoxOne_Reserved10: 152,
      k_EInputActionOrigin_XBox360_A: 153,
      k_EInputActionOrigin_XBox360_B: 154,
      k_EInputActionOrigin_XBox360_X: 155,
      k_EInputActionOrigin_XBox360_Y: 156,
      k_EInputActionOrigin_XBox360_LeftBumper: 157,
      k_EInputActionOrigin_XBox360_RightBumper: 158,
      k_EInputActionOrigin_XBox360_Start: 159,
      k_EInputActionOrigin_XBox360_Back: 160,
      k_EInputActionOrigin_XBox360_LeftTrigger_Pull: 161,
      k_EInputActionOrigin_XBox360_LeftTrigger_Click: 162,
      k_EInputActionOrigin_XBox360_RightTrigger_Pull: 163,
      k_EInputActionOrigin_XBox360_RightTrigger_Click: 164,
      k_EInputActionOrigin_XBox360_LeftStick_Move: 165,
      k_EInputActionOrigin_XBox360_LeftStick_Click: 166,
      k_EInputActionOrigin_XBox360_LeftStick_DPadNorth: 167,
      k_EInputActionOrigin_XBox360_LeftStick_DPadSouth: 168,
      k_EInputActionOrigin_XBox360_LeftStick_DPadWest: 169,
      k_EInputActionOrigin_XBox360_LeftStick_DPadEast: 170,
      k_EInputActionOrigin_XBox360_RightStick_Move: 171,
      k_EInputActionOrigin_XBox360_RightStick_Click: 172,
      k_EInputActionOrigin_XBox360_RightStick_DPadNorth: 173,
      k_EInputActionOrigin_XBox360_RightStick_DPadSouth: 174,
      k_EInputActionOrigin_XBox360_RightStick_DPadWest: 175,
      k_EInputActionOrigin_XBox360_RightStick_DPadEast: 176,
      k_EInputActionOrigin_XBox360_DPad_North: 177,
      k_EInputActionOrigin_XBox360_DPad_South: 178,
      k_EInputActionOrigin_XBox360_DPad_West: 179,
      k_EInputActionOrigin_XBox360_DPad_East: 180,
      k_EInputActionOrigin_XBox360_DPad_Move: 181,
      k_EInputActionOrigin_XBox360_Reserved1: 182,
      k_EInputActionOrigin_XBox360_Reserved2: 183,
      k_EInputActionOrigin_XBox360_Reserved3: 184,
      k_EInputActionOrigin_XBox360_Reserved4: 185,
      k_EInputActionOrigin_XBox360_Reserved5: 186,
      k_EInputActionOrigin_XBox360_Reserved6: 187,
      k_EInputActionOrigin_XBox360_Reserved7: 188,
      k_EInputActionOrigin_XBox360_Reserved8: 189,
      k_EInputActionOrigin_XBox360_Reserved9: 190,
      k_EInputActionOrigin_XBox360_Reserved10: 191,
      k_EInputActionOrigin_Switch_A: 192,
      k_EInputActionOrigin_Switch_B: 193,
      k_EInputActionOrigin_Switch_X: 194,
      k_EInputActionOrigin_Switch_Y: 195,
      k_EInputActionOrigin_Switch_LeftBumper: 196,
      k_EInputActionOrigin_Switch_RightBumper: 197,
      k_EInputActionOrigin_Switch_Plus: 198,
      k_EInputActionOrigin_Switch_Minus: 199,
      k_EInputActionOrigin_Switch_Capture: 200,
      k_EInputActionOrigin_Switch_LeftTrigger_Pull: 201,
      k_EInputActionOrigin_Switch_LeftTrigger_Click: 202,
      k_EInputActionOrigin_Switch_RightTrigger_Pull: 203,
      k_EInputActionOrigin_Switch_RightTrigger_Click: 204,
      k_EInputActionOrigin_Switch_LeftStick_Move: 205,
      k_EInputActionOrigin_Switch_LeftStick_Click: 206,
      k_EInputActionOrigin_Switch_LeftStick_DPadNorth: 207,
      k_EInputActionOrigin_Switch_LeftStick_DPadSouth: 208,
      k_EInputActionOrigin_Switch_LeftStick_DPadWest: 209,
      k_EInputActionOrigin_Switch_LeftStick_DPadEast: 210,
      k_EInputActionOrigin_Switch_RightStick_Move: 211,
      k_EInputActionOrigin_Switch_RightStick_Click: 212,
      k_EInputActionOrigin_Switch_RightStick_DPadNorth: 213,
      k_EInputActionOrigin_Switch_RightStick_DPadSouth: 214,
      k_EInputActionOrigin_Switch_RightStick_DPadWest: 215,
      k_EInputActionOrigin_Switch_RightStick_DPadEast: 216,
      k_EInputActionOrigin_Switch_DPad_North: 217,
      k_EInputActionOrigin_Switch_DPad_South: 218,
      k_EInputActionOrigin_Switch_DPad_West: 219,
      k_EInputActionOrigin_Switch_DPad_East: 220,
      k_EInputActionOrigin_Switch_ProGyro_Move: 221,
      k_EInputActionOrigin_Switch_ProGyro_Pitch: 222,
      k_EInputActionOrigin_Switch_ProGyro_Yaw: 223,
      k_EInputActionOrigin_Switch_ProGyro_Roll: 224,
      k_EInputActionOrigin_Switch_DPad_Move: 225,
      k_EInputActionOrigin_Switch_Reserved1: 226,
      k_EInputActionOrigin_Switch_Reserved2: 227,
      k_EInputActionOrigin_Switch_Reserved3: 228,
      k_EInputActionOrigin_Switch_Reserved4: 229,
      k_EInputActionOrigin_Switch_Reserved5: 230,
      k_EInputActionOrigin_Switch_Reserved6: 231,
      k_EInputActionOrigin_Switch_Reserved7: 232,
      k_EInputActionOrigin_Switch_Reserved8: 233,
      k_EInputActionOrigin_Switch_Reserved9: 234,
      k_EInputActionOrigin_Switch_Reserved10: 235,
      k_EInputActionOrigin_Switch_RightGyro_Move: 236,
      k_EInputActionOrigin_Switch_RightGyro_Pitch: 237,
      k_EInputActionOrigin_Switch_RightGyro_Yaw: 238,
      k_EInputActionOrigin_Switch_RightGyro_Roll: 239,
      k_EInputActionOrigin_Switch_LeftGyro_Move: 240,
      k_EInputActionOrigin_Switch_LeftGyro_Pitch: 241,
      k_EInputActionOrigin_Switch_LeftGyro_Yaw: 242,
      k_EInputActionOrigin_Switch_LeftGyro_Roll: 243,
      k_EInputActionOrigin_Switch_LeftGrip_Lower: 244,
      k_EInputActionOrigin_Switch_LeftGrip_Upper: 245,
      k_EInputActionOrigin_Switch_RightGrip_Lower: 246,
      k_EInputActionOrigin_Switch_RightGrip_Upper: 247,
      k_EInputActionOrigin_Switch_Reserved11: 248,
      k_EInputActionOrigin_Switch_Reserved12: 249,
      k_EInputActionOrigin_Switch_Reserved13: 250,
      k_EInputActionOrigin_Switch_Reserved14: 251,
      k_EInputActionOrigin_Switch_Reserved15: 252,
      k_EInputActionOrigin_Switch_Reserved16: 253,
      k_EInputActionOrigin_Switch_Reserved17: 254,
      k_EInputActionOrigin_Switch_Reserved18: 255,
      k_EInputActionOrigin_Switch_Reserved19: 256,
      k_EInputActionOrigin_Switch_Reserved20: 257,
      k_EInputActionOrigin_PS5_X: 258,
      k_EInputActionOrigin_PS5_Circle: 259,
      k_EInputActionOrigin_PS5_Triangle: 260,
      k_EInputActionOrigin_PS5_Square: 261,
      k_EInputActionOrigin_PS5_LeftBumper: 262,
      k_EInputActionOrigin_PS5_RightBumper: 263,
      k_EInputActionOrigin_PS5_Option: 264,
      k_EInputActionOrigin_PS5_Create: 265,
      k_EInputActionOrigin_PS5_Mute: 266,
      k_EInputActionOrigin_PS5_LeftPad_Touch: 267,
      k_EInputActionOrigin_PS5_LeftPad_Swipe: 268,
      k_EInputActionOrigin_PS5_LeftPad_Click: 269,
      k_EInputActionOrigin_PS5_LeftPad_DPadNorth: 270,
      k_EInputActionOrigin_PS5_LeftPad_DPadSouth: 271,
      k_EInputActionOrigin_PS5_LeftPad_DPadWest: 272,
      k_EInputActionOrigin_PS5_LeftPad_DPadEast: 273,
      k_EInputActionOrigin_PS5_RightPad_Touch: 274,
      k_EInputActionOrigin_PS5_RightPad_Swipe: 275,
      k_EInputActionOrigin_PS5_RightPad_Click: 276,
      k_EInputActionOrigin_PS5_RightPad_DPadNorth: 277,
      k_EInputActionOrigin_PS5_RightPad_DPadSouth: 278,
      k_EInputActionOrigin_PS5_RightPad_DPadWest: 279,
      k_EInputActionOrigin_PS5_RightPad_DPadEast: 280,
      k_EInputActionOrigin_PS5_CenterPad_Touch: 281,
      k_EInputActionOrigin_PS5_CenterPad_Swipe: 282,
      k_EInputActionOrigin_PS5_CenterPad_Click: 283,
      k_EInputActionOrigin_PS5_CenterPad_DPadNorth: 284,
      k_EInputActionOrigin_PS5_CenterPad_DPadSouth: 285,
      k_EInputActionOrigin_PS5_CenterPad_DPadWest: 286,
      k_EInputActionOrigin_PS5_CenterPad_DPadEast: 287,
      k_EInputActionOrigin_PS5_LeftTrigger_Pull: 288,
      k_EInputActionOrigin_PS5_LeftTrigger_Click: 289,
      k_EInputActionOrigin_PS5_RightTrigger_Pull: 290,
      k_EInputActionOrigin_PS5_RightTrigger_Click: 291,
      k_EInputActionOrigin_PS5_LeftStick_Move: 292,
      k_EInputActionOrigin_PS5_LeftStick_Click: 293,
      k_EInputActionOrigin_PS5_LeftStick_DPadNorth: 294,
      k_EInputActionOrigin_PS5_LeftStick_DPadSouth: 295,
      k_EInputActionOrigin_PS5_LeftStick_DPadWest: 296,
      k_EInputActionOrigin_PS5_LeftStick_DPadEast: 297,
      k_EInputActionOrigin_PS5_RightStick_Move: 298,
      k_EInputActionOrigin_PS5_RightStick_Click: 299,
      k_EInputActionOrigin_PS5_RightStick_DPadNorth: 300,
      k_EInputActionOrigin_PS5_RightStick_DPadSouth: 301,
      k_EInputActionOrigin_PS5_RightStick_DPadWest: 302,
      k_EInputActionOrigin_PS5_RightStick_DPadEast: 303,
      k_EInputActionOrigin_PS5_DPad_North: 304,
      k_EInputActionOrigin_PS5_DPad_South: 305,
      k_EInputActionOrigin_PS5_DPad_West: 306,
      k_EInputActionOrigin_PS5_DPad_East: 307,
      k_EInputActionOrigin_PS5_Gyro_Move: 308,
      k_EInputActionOrigin_PS5_Gyro_Pitch: 309,
      k_EInputActionOrigin_PS5_Gyro_Yaw: 310,
      k_EInputActionOrigin_PS5_Gyro_Roll: 311,
      k_EInputActionOrigin_PS5_DPad_Move: 312,
      k_EInputActionOrigin_PS5_Reserved1: 313,
      k_EInputActionOrigin_PS5_Reserved2: 314,
      k_EInputActionOrigin_PS5_Reserved3: 315,
      k_EInputActionOrigin_PS5_Reserved4: 316,
      k_EInputActionOrigin_PS5_Reserved5: 317,
      k_EInputActionOrigin_PS5_Reserved6: 318,
      k_EInputActionOrigin_PS5_Reserved7: 319,
      k_EInputActionOrigin_PS5_Reserved8: 320,
      k_EInputActionOrigin_PS5_Reserved9: 321,
      k_EInputActionOrigin_PS5_Reserved10: 322,
      k_EInputActionOrigin_PS5_Reserved11: 323,
      k_EInputActionOrigin_PS5_Reserved12: 324,
      k_EInputActionOrigin_PS5_Reserved13: 325,
      k_EInputActionOrigin_PS5_Reserved14: 326,
      k_EInputActionOrigin_PS5_Reserved15: 327,
      k_EInputActionOrigin_PS5_Reserved16: 328,
      k_EInputActionOrigin_PS5_Reserved17: 329,
      k_EInputActionOrigin_PS5_Reserved18: 330,
      k_EInputActionOrigin_PS5_Reserved19: 331,
      k_EInputActionOrigin_PS5_Reserved20: 332,
      k_EInputActionOrigin_SteamDeck_A: 333,
      k_EInputActionOrigin_SteamDeck_B: 334,
      k_EInputActionOrigin_SteamDeck_X: 335,
      k_EInputActionOrigin_SteamDeck_Y: 336,
      k_EInputActionOrigin_SteamDeck_L1: 337,
      k_EInputActionOrigin_SteamDeck_R1: 338,
      k_EInputActionOrigin_SteamDeck_Menu: 339,
      k_EInputActionOrigin_SteamDeck_View: 340,
      k_EInputActionOrigin_SteamDeck_LeftPad_Touch: 341,
      k_EInputActionOrigin_SteamDeck_LeftPad_Swipe: 342,
      k_EInputActionOrigin_SteamDeck_LeftPad_Click: 343,
      k_EInputActionOrigin_SteamDeck_LeftPad_DPadNorth: 344,
      k_EInputActionOrigin_SteamDeck_LeftPad_DPadSouth: 345,
      k_EInputActionOrigin_SteamDeck_LeftPad_DPadWest: 346,
      k_EInputActionOrigin_SteamDeck_LeftPad_DPadEast: 347,
      k_EInputActionOrigin_SteamDeck_RightPad_Touch: 348,
      k_EInputActionOrigin_SteamDeck_RightPad_Swipe: 349,
      k_EInputActionOrigin_SteamDeck_RightPad_Click: 350,
      k_EInputActionOrigin_SteamDeck_RightPad_DPadNorth: 351,
      k_EInputActionOrigin_SteamDeck_RightPad_DPadSouth: 352,
      k_EInputActionOrigin_SteamDeck_RightPad_DPadWest: 353,
      k_EInputActionOrigin_SteamDeck_RightPad_DPadEast: 354,
      k_EInputActionOrigin_SteamDeck_L2_SoftPull: 355,
      k_EInputActionOrigin_SteamDeck_L2: 356,
      k_EInputActionOrigin_SteamDeck_R2_SoftPull: 357,
      k_EInputActionOrigin_SteamDeck_R2: 358,
      k_EInputActionOrigin_SteamDeck_LeftStick_Move: 359,
      k_EInputActionOrigin_SteamDeck_L3: 360,
      k_EInputActionOrigin_SteamDeck_LeftStick_DPadNorth: 361,
      k_EInputActionOrigin_SteamDeck_LeftStick_DPadSouth: 362,
      k_EInputActionOrigin_SteamDeck_LeftStick_DPadWest: 363,
      k_EInputActionOrigin_SteamDeck_LeftStick_DPadEast: 364,
      k_EInputActionOrigin_SteamDeck_LeftStick_Touch: 365,
      k_EInputActionOrigin_SteamDeck_RightStick_Move: 366,
      k_EInputActionOrigin_SteamDeck_R3: 367,
      k_EInputActionOrigin_SteamDeck_RightStick_DPadNorth: 368,
      k_EInputActionOrigin_SteamDeck_RightStick_DPadSouth: 369,
      k_EInputActionOrigin_SteamDeck_RightStick_DPadWest: 370,
      k_EInputActionOrigin_SteamDeck_RightStick_DPadEast: 371,
      k_EInputActionOrigin_SteamDeck_RightStick_Touch: 372,
      k_EInputActionOrigin_SteamDeck_L4: 373,
      k_EInputActionOrigin_SteamDeck_R4: 374,
      k_EInputActionOrigin_SteamDeck_L5: 375,
      k_EInputActionOrigin_SteamDeck_R5: 376,
      k_EInputActionOrigin_SteamDeck_DPad_Move: 377,
      k_EInputActionOrigin_SteamDeck_DPad_North: 378,
      k_EInputActionOrigin_SteamDeck_DPad_South: 379,
      k_EInputActionOrigin_SteamDeck_DPad_West: 380,
      k_EInputActionOrigin_SteamDeck_DPad_East: 381,
      k_EInputActionOrigin_SteamDeck_Gyro_Move: 382,
      k_EInputActionOrigin_SteamDeck_Gyro_Pitch: 383,
      k_EInputActionOrigin_SteamDeck_Gyro_Yaw: 384,
      k_EInputActionOrigin_SteamDeck_Gyro_Roll: 385,
      k_EInputActionOrigin_SteamDeck_Reserved1: 386,
      k_EInputActionOrigin_SteamDeck_Reserved2: 387,
      k_EInputActionOrigin_SteamDeck_Reserved3: 388,
      k_EInputActionOrigin_SteamDeck_Reserved4: 389,
      k_EInputActionOrigin_SteamDeck_Reserved5: 390,
      k_EInputActionOrigin_SteamDeck_Reserved6: 391,
      k_EInputActionOrigin_SteamDeck_Reserved7: 392,
      k_EInputActionOrigin_SteamDeck_Reserved8: 393,
      k_EInputActionOrigin_SteamDeck_Reserved9: 394,
      k_EInputActionOrigin_SteamDeck_Reserved10: 395,
      k_EInputActionOrigin_SteamDeck_Reserved11: 396,
      k_EInputActionOrigin_SteamDeck_Reserved12: 397,
      k_EInputActionOrigin_SteamDeck_Reserved13: 398,
      k_EInputActionOrigin_SteamDeck_Reserved14: 399,
      k_EInputActionOrigin_SteamDeck_Reserved15: 400,
      k_EInputActionOrigin_SteamDeck_Reserved16: 401,
      k_EInputActionOrigin_SteamDeck_Reserved17: 402,
      k_EInputActionOrigin_SteamDeck_Reserved18: 403,
      k_EInputActionOrigin_SteamDeck_Reserved19: 404,
      k_EInputActionOrigin_SteamDeck_Reserved20: 405,
      k_EInputActionOrigin_Count: 406,
      k_EInputActionOrigin_MaximumPossibleValue: 32767,
    };
    EControllerHapticLocation: {
      k_EControllerHapticLocation_Left: 1,
      k_EControllerHapticLocation_Right: 2,
      k_EControllerHapticLocation_Both: 3,
    };
    EControllerHapticType: {
      k_EControllerHapticType_Off: 0,
      k_EControllerHapticType_Tick: 1,
      k_EControllerHapticType_Click: 2,
    };
    ESteamInputConfigurationEnableType: {
      k_ESteamInputConfigurationEnableType_None: 0,
      k_ESteamInputConfigurationEnableType_Playstation: 1,
      k_ESteamInputConfigurationEnableType_Xbox: 2,
      k_ESteamInputConfigurationEnableType_Generic: 4,
      k_ESteamInputConfigurationEnableType_Switch: 8,
    };
    ESteamInputLEDFlag: {
      k_ESteamInputLEDFlag_SetColor: 0,
      k_ESteamInputLEDFlag_RestoreUserDefault: 1,
    };
    ESteamInputGlyphSize: {
      k_ESteamInputGlyphSize_Small: 0,
      k_ESteamInputGlyphSize_Medium: 1,
      k_ESteamInputGlyphSize_Large: 2,
      k_ESteamInputGlyphSize_Count: 3,
    };
  }
  interface Uncategorized {
    AudioPlayback_Undefined: number;
    AudioPlayback_Playing: number;
    AudioPlayback_Paused: number;
    AudioPlayback_Idle: number;
    ESteamInputGlyphStyle_Knockout: number;
    ESteamInputGlyphStyle_Light: number;
    ESteamInputGlyphStyle_Dark: number;
    ESteamInputGlyphStyle_NeutralColorABXY: number;
    ESteamInputGlyphStyle_SolidABXY: number;
    ESteamInputActionEventType_DigitalAction: number;
    ESteamInputActionEventType_AnalogAction: number;
    SteamAppTicket: {(/* Args Unknown */): unknown};
    SteamGameCoordinator: {(/* Args Unknown */): unknown};
    SteamNetworkingConnectionSignaling: {(/* Args Unknown */): unknown};
    SteamNetworkingSignalingRecvContext: {(/* Args Unknown */): unknown};
    SteamNetworkingFakeUDPPort: {(/* Args Unknown */): unknown};
    CSteamID: {(/* Args Unknown */): unknown};
    CGameID: {(/* Args Unknown */): unknown};
    ValvePackingSentinel_t: {(/* Args Unknown */): unknown};
    CCallbackBase: {(/* Args Unknown */): unknown};
    CallbackMsg_t: {(/* Args Unknown */): unknown};
    CSteamAPIContext: {(/* Args Unknown */): unknown};
    ControllerAnalogActionData_t: {(/* Args Unknown */): unknown};
    ControllerDigitalActionData_t: {(/* Args Unknown */): unknown};
    ControllerMotionData_t: {(/* Args Unknown */): unknown};
  }
  interface SteamClient {
    CreateSteamPipe: {(): number}
    BReleaseSteamPipe: {(hSteamPipe: number): boolean}
    ConnectToGlobalUser: {(hSteamPipe: number): number}
    CreateLocalUser: {(phSteamPipe: unknown, eAccountType: SteamWorksNS.Enums.EAccountType): number}
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
  interface SteamUser {
    GetHSteamUser: {(): number}
    BLoggedOn: {(): boolean}
    GetSteamID: {(): unknown}
    InitiateGameConnection_DEPRECATED: {(pAuthBlob: unknown, cbMaxAuthBlob: number, steamIDGameServer: unknown, unIPServer: number, usPortServer: number, bSecure: boolean): number}
    TerminateGameConnection_DEPRECATED: {(unIPServer: number, usPortServer: number): undefined}
    TrackAppUsageEvent: {(gameID: unknown, eAppUsageEvent: number, pchExtraInfo: string): undefined}
    GetUserDataFolder: {(pchBuffer: string, cubBuffer: number): boolean}
    StartVoiceRecording: {(): undefined}
    StopVoiceRecording: {(): undefined}
    GetAvailableVoice: {(pcbCompressed: number, pcbUncompressed_Deprecated: number, nUncompressedVoiceDesiredSampleRate_Deprecated: number): SteamWorksNS.Enums.EVoiceResult}
    GetVoice: {(bWantCompressed: boolean, pDestBuffer: unknown, cbDestBufferSize: number, nBytesWritten: number, bWantUncompressed_Deprecated: boolean, pUncompressedDestBuffer_Deprecated: unknown, cbUncompressedDestBufferSize_Deprecated: number, nUncompressBytesWritten_Deprecated: number, nUncompressedVoiceDesiredSampleRate_Deprecated: number): SteamWorksNS.Enums.EVoiceResult}
    DecompressVoice: {(pCompressed: unknown, cbCompressed: number, pDestBuffer: unknown, cbDestBufferSize: number, nBytesWritten: number, nDesiredSampleRate: number): SteamWorksNS.Enums.EVoiceResult}
    GetVoiceOptimalSampleRate: {(): number}
    GetAuthSessionTicket: {(pTicket: unknown, cbMaxTicket: number, pcbTicket: number): number}
    BeginAuthSession: {(pAuthTicket: unknown, cbAuthTicket: number, steamID: unknown): SteamWorksNS.Enums.EBeginAuthSessionResult}
    EndAuthSession: {(steamID: unknown): undefined}
    CancelAuthTicket: {(hAuthTicket: number): undefined}
    UserHasLicenseForApp: {(steamID: unknown, appID: number): SteamWorksNS.Enums.EUserHasLicenseForAppResult}
    BIsBehindNAT: {(): boolean}
    AdvertiseGame: {(steamIDGameServer: unknown, unIPServer: number, usPortServer: number): undefined}
    RequestEncryptedAppTicket: {(pDataToInclude: unknown, cbDataToInclude: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult }>};
    GetEncryptedAppTicket: {(pTicket: unknown, cbMaxTicket: number, pcbTicket: number): boolean}
    GetGameBadgeLevel: {(nSeries: number, bFoil: boolean): number}
    GetPlayerSteamLevel: {(): number}
    RequestStoreAuthURL: {(pchRedirectURL: string): Promise<{ m_szURL: string }>};
    BIsPhoneVerified: {(): boolean}
    BIsTwoFactorEnabled: {(): boolean}
    BIsPhoneIdentifying: {(): boolean}
    BIsPhoneRequiringVerification: {(): boolean}
    GetMarketEligibility: {(): Promise<{ m_bAllowed: boolean, m_eNotAllowedReason: SteamWorksNS.Enums.EMarketNotAllowedReasonFlags, m_rtAllowedAtTime: number, m_cdaySteamGuardRequiredDays: number, m_cdayNewDeviceCooldown: number }>};
    GetDurationControl: {(): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_appid: number, m_bApplicable: boolean, m_csecsLast5h: number, m_progress: SteamWorksNS.Enums.EDurationControlProgress, m_notification: SteamWorksNS.Enums.EDurationControlNotification, m_csecsToday: number, m_csecsRemaining: number }>};
    BSetDurationControlOnlineState: {(eNewState: SteamWorksNS.Enums.EDurationControlOnlineState): boolean}
  }
  interface SteamFriends {
    GetPersonaName: {(): string}
    SetPersonaName: {(pchPersonaName: string): Promise<{ m_bSuccess: boolean, m_bLocalSuccess: boolean, m_result: SteamWorksNS.Enums.EResult }>};
    GetPersonaState: {(): SteamWorksNS.Enums.EPersonaState}
    GetFriendCount: {(iFriendFlags: number): number}
    GetFriendByIndex: {(iFriend: number, iFriendFlags: number): unknown}
    GetFriendRelationship: {(steamIDFriend: unknown): SteamWorksNS.Enums.EFriendRelationship}
    GetFriendPersonaState: {(steamIDFriend: unknown): SteamWorksNS.Enums.EPersonaState}
    GetFriendPersonaName: {(steamIDFriend: unknown): string}
    GetFriendGamePlayed: {(steamIDFriend: unknown, pFriendGameInfo: SteamWorksNS.Structs.FriendGameInfo_t): boolean}
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
    GetClanActivityCounts: {(steamIDClan: unknown, pnOnline: number, pnInGame: number, pnChatting: number): boolean}
    DownloadClanActivityCounts: {(psteamIDClans: unknown, cClansToRequest: number): Promise<{ m_bSuccess: boolean }>};
    GetFriendCountFromSource: {(steamIDSource: unknown): number}
    GetFriendFromSourceByIndex: {(steamIDSource: unknown, iFriend: number): unknown}
    IsUserInSource: {(steamIDUser: unknown, steamIDSource: unknown): boolean}
    SetInGameVoiceSpeaking: {(steamIDUser: unknown, bSpeaking: boolean): undefined}
    ActivateGameOverlay: {(pchDialog: string): undefined}
    ActivateGameOverlayToUser: {(pchDialog: string, steamID: unknown): undefined}
    ActivateGameOverlayToWebPage: {(pchURL: string, eMode: SteamWorksNS.Enums.EActivateGameOverlayToWebPageMode): undefined}
    ActivateGameOverlayToStore: {(nAppID: number, eFlag: SteamWorksNS.Enums.EOverlayToStoreFlag): undefined}
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
    JoinClanChatRoom: {(steamIDClan: unknown): Promise<{ m_steamIDClanChat: unknown, m_eChatRoomEnterResponse: SteamWorksNS.Enums.EChatRoomEnterResponse }>};
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
    GetFollowerCount: {(steamID: unknown): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_steamID: unknown, m_nCount: number }>};
    IsFollowing: {(steamID: unknown): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_steamID: unknown, m_bIsFollowing: boolean }>};
    EnumerateFollowingList: {(unStartIndex: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_rgSteamID: unknown, m_nResultsReturned: number, m_nTotalResultCount: number }>};
    IsClanPublic: {(steamIDClan: unknown): boolean}
    IsClanOfficialGameGroup: {(steamIDClan: unknown): boolean}
    GetNumChatsWithUnreadPriorityMessages: {(): number}
    ActivateGameOverlayRemotePlayTogetherInviteDialog: {(steamIDLobby: unknown): undefined}
    RegisterProtocolInOverlayBrowser: {(pchProtocol: string): boolean}
    ActivateGameOverlayInviteDialogConnectString: {(pchConnectString: string): undefined}
  }
  interface SteamUtils {
    GetSecondsSinceAppActive: {(): number}
    GetSecondsSinceComputerActive: {(): number}
    GetConnectedUniverse: {(): SteamWorksNS.Enums.EUniverse}
    GetServerRealTime: {(): number}
    GetIPCountry: {(): string}
    GetImageSize: {(iImage: number, pnWidth: number, pnHeight: number): boolean}
    GetImageRGBA: {(iImage: number, pubDest: number, nDestBufferSize: number): boolean}
    GetCurrentBatteryPower: {(): number}
    GetAppID: {(): number}
    SetOverlayNotificationPosition: {(eNotificationPosition: SteamWorksNS.Enums.ENotificationPosition): undefined}
    IsAPICallCompleted: {(hSteamAPICall: number, pbFailed: unknown): boolean}
    GetAPICallFailureReason: {(hSteamAPICall: number): SteamWorksNS.Enums.ESteamAPICallFailure}
    GetAPICallResult: {(hSteamAPICall: number, pCallback: unknown, cubCallback: number, iCallbackExpected: number, pbFailed: unknown): boolean}
    GetIPCCallCount: {(): number}
    SetWarningMessageHook: {(pFunction: unknown): undefined}
    IsOverlayEnabled: {(): boolean}
    BOverlayNeedsPresent: {(): boolean}
    CheckFileSignature: {(szFileName: string): Promise<{ m_eCheckFileSignature: SteamWorksNS.Enums.ECheckFileSignature }>};
    ShowGamepadTextInput: {(eInputMode: SteamWorksNS.Enums.EGamepadTextInputMode, eLineInputMode: SteamWorksNS.Enums.EGamepadTextInputLineMode, pchDescription: string, unCharMax: number, pchExistingText: string): boolean}
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
    FilterText: {(eContext: SteamWorksNS.Enums.ETextFilteringContext, sourceSteamID: unknown, pchInputMessage: string, pchOutFilteredText: string, nByteSizeOutFilteredText: number): number}
    GetIPv6ConnectivityState: {(eProtocol: SteamWorksNS.Enums.ESteamIPv6ConnectivityProtocol): SteamWorksNS.Enums.ESteamIPv6ConnectivityState}
    IsSteamRunningOnSteamDeck: {(): boolean}
    ShowFloatingGamepadTextInput: {(eKeyboardMode: SteamWorksNS.Enums.EFloatingGamepadTextInputMode, nTextFieldXPosition: number, nTextFieldYPosition: number, nTextFieldWidth: number, nTextFieldHeight: number): boolean}
    SetGameLauncherMode: {(bLauncherMode: boolean): undefined}
    DismissFloatingGamepadTextInput: {(): boolean}
  }
  interface SteamMatchmaking {
    GetFavoriteGameCount: {(): number}
    GetFavoriteGame: {(iGame: number, pnAppID: unknown, pnIP: number, pnConnPort: number, pnQueryPort: number, punFlags: number, pRTime32LastPlayedOnServer: number): boolean}
    AddFavoriteGame: {(nAppID: number, nIP: number, nConnPort: number, nQueryPort: number, unFlags: number, rTime32LastPlayedOnServer: number): number}
    RemoveFavoriteGame: {(nAppID: number, nIP: number, nConnPort: number, nQueryPort: number, unFlags: number): boolean}
    RequestLobbyList: {(): Promise<{ m_nLobbiesMatching: number }>};
    AddRequestLobbyListStringFilter: {(pchKeyToMatch: string, pchValueToMatch: string, eComparisonType: SteamWorksNS.Enums.ELobbyComparison): undefined}
    AddRequestLobbyListNumericalFilter: {(pchKeyToMatch: string, nValueToMatch: number, eComparisonType: SteamWorksNS.Enums.ELobbyComparison): undefined}
    AddRequestLobbyListNearValueFilter: {(pchKeyToMatch: string, nValueToBeCloseTo: number): undefined}
    AddRequestLobbyListFilterSlotsAvailable: {(nSlotsAvailable: number): undefined}
    AddRequestLobbyListDistanceFilter: {(eLobbyDistanceFilter: SteamWorksNS.Enums.ELobbyDistanceFilter): undefined}
    AddRequestLobbyListResultCountFilter: {(cMaxResults: number): undefined}
    AddRequestLobbyListCompatibleMembersFilter: {(steamIDLobby: unknown): undefined}
    GetLobbyByIndex: {(iLobby: number): unknown}
    CreateLobby: {(eLobbyType: SteamWorksNS.Enums.ELobbyType, cMaxMembers: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_ulSteamIDLobby: number }>};
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
    GetLobbyGameServer: {(steamIDLobby: unknown, punGameServerIP: number, punGameServerPort: number, psteamIDGameServer: unknown): boolean}
    SetLobbyMemberLimit: {(steamIDLobby: unknown, cMaxMembers: number): boolean}
    GetLobbyMemberLimit: {(steamIDLobby: unknown): number}
    SetLobbyType: {(steamIDLobby: unknown, eLobbyType: SteamWorksNS.Enums.ELobbyType): boolean}
    SetLobbyJoinable: {(steamIDLobby: unknown, bLobbyJoinable: boolean): boolean}
    GetLobbyOwner: {(steamIDLobby: unknown): unknown}
    SetLobbyOwner: {(steamIDLobby: unknown, steamIDNewOwner: unknown): boolean}
    SetLinkedLobby: {(steamIDLobby: unknown, steamIDLobbyDependent: unknown): boolean}
  }
  interface SteamMatchmakingServers {
    RequestInternetServerList: {(iApp: number, ppchFilters: unknown, nFilters: number, pRequestServersResponse: unknown): unknown}
    RequestLANServerList: {(iApp: number, pRequestServersResponse: unknown): unknown}
    RequestFriendsServerList: {(iApp: number, ppchFilters: unknown, nFilters: number, pRequestServersResponse: unknown): unknown}
    RequestFavoritesServerList: {(iApp: number, ppchFilters: unknown, nFilters: number, pRequestServersResponse: unknown): unknown}
    RequestHistoryServerList: {(iApp: number, ppchFilters: unknown, nFilters: number, pRequestServersResponse: unknown): unknown}
    RequestSpectatorServerList: {(iApp: number, ppchFilters: unknown, nFilters: number, pRequestServersResponse: unknown): unknown}
    ReleaseRequest: {(hServerListRequest: unknown): undefined}
    GetServerDetails: {(hRequest: unknown, iServer: number): SteamWorksNS.Structs.gameserveritem_t}
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
  interface SteamGameSearch {
    AddGameSearchParams: {(pchKeyToFind: string, pchValuesToFind: string): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    SearchForGameWithLobby: {(steamIDLobby: unknown, nPlayerMin: number, nPlayerMax: number): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    SearchForGameSolo: {(nPlayerMin: number, nPlayerMax: number): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    AcceptGame: {(): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    DeclineGame: {(): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    RetrieveConnectionDetails: {(steamIDHost: unknown, pchConnectionDetails: string, cubConnectionDetails: number): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    EndGameSearch: {(): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    SetGameHostParams: {(pchKey: string, pchValue: string): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    SetConnectionDetails: {(pchConnectionDetails: string, cubConnectionDetails: number): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    RequestPlayersForGame: {(nPlayerMin: number, nPlayerMax: number, nMaxTeamSize: number): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    HostConfirmGameStart: {(ullUniqueGameID: number): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    CancelRequestPlayersForGame: {(): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    SubmitPlayerResult: {(ullUniqueGameID: number, steamIDPlayer: unknown, EPlayerResult: SteamWorksNS.Enums.EPlayerResult_t): SteamWorksNS.Enums.EGameSearchErrorCode_t}
    EndGame: {(ullUniqueGameID: number): SteamWorksNS.Enums.EGameSearchErrorCode_t}
  }
  interface SteamParties {
    GetNumActiveBeacons: {(): number}
    GetBeaconByIndex: {(unIndex: number): number}
    GetBeaconDetails: {(ulBeaconID: number, pSteamIDBeaconOwner: unknown, pLocation: SteamWorksNS.Structs.SteamPartyBeaconLocation_t, pchMetadata: string, cchMetadata: number): boolean}
    JoinParty: {(ulBeaconID: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_ulBeaconID: number, m_SteamIDBeaconOwner: unknown, m_rgchConnectString: string }>};
    GetNumAvailableBeaconLocations: {(puNumLocations: number): boolean}
    GetAvailableBeaconLocations: {(pLocationList: SteamWorksNS.Structs.SteamPartyBeaconLocation_t, uMaxNumLocations: number): boolean}
    CreateBeacon: {(unOpenSlots: number, pBeaconLocation: SteamWorksNS.Structs.SteamPartyBeaconLocation_t, pchConnectString: string, pchMetadata: string): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_ulBeaconID: number }>};
    OnReservationCompleted: {(ulBeacon: number, steamIDUser: unknown): undefined}
    CancelReservation: {(ulBeacon: number, steamIDUser: unknown): undefined}
    ChangeNumOpenSlots: {(ulBeacon: number, unOpenSlots: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult }>};
    DestroyBeacon: {(ulBeacon: number): boolean}
    GetBeaconLocationData: {(BeaconLocation: SteamWorksNS.Structs.SteamPartyBeaconLocation_t, eData: SteamWorksNS.Enums.ESteamPartyBeaconLocationData, pchDataStringOut: string, cchDataStringOut: number): boolean}
  }
  interface SteamUserStats {
    RequestCurrentStats: {(): boolean}
    GetStat: {(pchName: string, pData: number): boolean}
    SetStat: {(pchName: string, nData: number): boolean}
    UpdateAvgRateStat: {(pchName: string, flCountThisSession: number, dSessionLength: number): boolean}
    GetAchievement: {(pchName: string, pbAchieved: unknown): boolean}
    SetAchievement: {(pchName: string): boolean}
    ClearAchievement: {(pchName: string): boolean}
    GetAchievementAndUnlockTime: {(pchName: string, pbAchieved: unknown, punUnlockTime: number): boolean}
    StoreStats: {(): boolean}
    GetAchievementIcon: {(pchName: string): number}
    GetAchievementDisplayAttribute: {(pchName: string, pchKey: string): string}
    IndicateAchievementProgress: {(pchName: string, nCurProgress: number, nMaxProgress: number): boolean}
    GetNumAchievements: {(): number}
    GetAchievementName: {(iAchievement: number): string}
    RequestUserStats: {(steamIDUser: unknown): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_steamIDUser: unknown }>};
    GetUserStat: {(steamIDUser: unknown, pchName: string, pData: number): boolean}
    GetUserAchievement: {(steamIDUser: unknown, pchName: string, pbAchieved: unknown): boolean}
    GetUserAchievementAndUnlockTime: {(steamIDUser: unknown, pchName: string, pbAchieved: unknown, punUnlockTime: number): boolean}
    ResetAllStats: {(bAchievementsToo: boolean): boolean}
    FindOrCreateLeaderboard: {(pchLeaderboardName: string, eLeaderboardSortMethod: SteamWorksNS.Enums.ELeaderboardSortMethod, eLeaderboardDisplayType: SteamWorksNS.Enums.ELeaderboardDisplayType): Promise<{ m_hSteamLeaderboard: number, m_bLeaderboardFound: number }>};
    FindLeaderboard: {(pchLeaderboardName: string): Promise<{ m_hSteamLeaderboard: number, m_bLeaderboardFound: number }>};
    GetLeaderboardName: {(hSteamLeaderboard: number): string}
    GetLeaderboardEntryCount: {(hSteamLeaderboard: number): number}
    GetLeaderboardSortMethod: {(hSteamLeaderboard: number): SteamWorksNS.Enums.ELeaderboardSortMethod}
    GetLeaderboardDisplayType: {(hSteamLeaderboard: number): SteamWorksNS.Enums.ELeaderboardDisplayType}
    DownloadLeaderboardEntries: {(hSteamLeaderboard: number, eLeaderboardDataRequest: SteamWorksNS.Enums.ELeaderboardDataRequest, nRangeStart: number, nRangeEnd: number): Promise<{ m_hSteamLeaderboard: number, m_hSteamLeaderboardEntries: number, m_cEntryCount: number }>};
    DownloadLeaderboardEntriesForUsers: {(hSteamLeaderboard: number, prgUsers: unknown, cUsers: number): Promise<{ m_hSteamLeaderboard: number, m_hSteamLeaderboardEntries: number, m_cEntryCount: number }>};
    GetDownloadedLeaderboardEntry: {(hSteamLeaderboardEntries: number, index: number, pLeaderboardEntry: SteamWorksNS.Structs.LeaderboardEntry_t, pDetails: number, cDetailsMax: number): boolean}
    UploadLeaderboardScore: {(hSteamLeaderboard: number, eLeaderboardUploadScoreMethod: SteamWorksNS.Enums.ELeaderboardUploadScoreMethod, nScore: number, pScoreDetails: number, cScoreDetailsCount: number): Promise<{ m_bSuccess: number, m_hSteamLeaderboard: number, m_nScore: number, m_bScoreChanged: number, m_nGlobalRankNew: number, m_nGlobalRankPrevious: number }>};
    AttachLeaderboardUGC: {(hSteamLeaderboard: number, hUGC: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_hSteamLeaderboard: number }>};
    GetNumberOfCurrentPlayers: {(): Promise<{ m_bSuccess: number, m_cPlayers: number }>};
    RequestGlobalAchievementPercentages: {(): Promise<{ m_nGameID: number, m_eResult: SteamWorksNS.Enums.EResult }>};
    GetMostAchievedAchievementInfo: {(pchName: string, unNameBufLen: number, pflPercent: number, pbAchieved: unknown): number}
    GetNextMostAchievedAchievementInfo: {(iIteratorPrevious: number, pchName: string, unNameBufLen: number, pflPercent: number, pbAchieved: unknown): number}
    GetAchievementAchievedPercent: {(pchName: string, pflPercent: number): boolean}
    RequestGlobalStats: {(nHistoryDays: number): Promise<{ m_nGameID: number, m_eResult: SteamWorksNS.Enums.EResult }>};
    GetGlobalStat: {(pchStatName: string, pData: number): boolean}
    GetGlobalStatHistory: {(pchStatName: string, pData: number, cubData: number): number}
    GetAchievementProgressLimits: {(pchName: string, pnMinProgress: number, pnMaxProgress: number): boolean}
  }
  interface SteamApps {
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
    GetInstalledDepots: {(appID: number, cMaxDepots: number): number}
    GetAppInstallDir: {(appID: number, pchFolder: string, cchFolderBufferSize: number): number}
    BIsAppInstalled: {(appID: number): boolean}
    GetAppOwner: {(): unknown}
    GetLaunchQueryParam: {(pchKey: string): string}
    GetDlcDownloadProgress: {(nAppID: number, punBytesDownloaded: number, punBytesTotal: number): boolean}
    GetAppBuildId: {(): number}
    RequestAllProofOfPurchaseKeys: {(): undefined}
    GetFileDetails: {(pszFileName: string): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_ulFileSize: number, m_FileSHA: number, m_unFlags: number }>};
    GetLaunchCommandLine: {(pszCommandLine: string, cubCommandLine: number): number}
    BIsSubscribedFromFamilySharing: {(): boolean}
    BIsTimedTrial: {(punSecondsAllowed: number, punSecondsPlayed: number): boolean}
  }
  interface SteamNetworking {
    SendP2PPacket: {(steamIDRemote: unknown, pubData: unknown, cubData: number, eP2PSendType: SteamWorksNS.Enums.EP2PSend, nChannel: number): boolean}
    IsP2PPacketAvailable: {(pcubMsgSize: number, nChannel: number): boolean}
    ReadP2PPacket: {(pubDest: unknown, cubDest: number, pcubMsgSize: number, psteamIDRemote: unknown, nChannel: number): boolean}
    AcceptP2PSessionWithUser: {(steamIDRemote: unknown): boolean}
    CloseP2PSessionWithUser: {(steamIDRemote: unknown): boolean}
    CloseP2PChannelWithUser: {(steamIDRemote: unknown, nChannel: number): boolean}
    GetP2PSessionState: {(steamIDRemote: unknown, pConnectionState: SteamWorksNS.Structs.P2PSessionState_t): boolean}
    AllowP2PPacketRelay: {(bAllow: boolean): boolean}
    CreateListenSocket: {(nVirtualP2PPort: number, nIP: SteamWorksNS.Structs.SteamIPAddress_t, nPort: number, bAllowUseOfPacketRelay: boolean): number}
    CreateP2PConnectionSocket: {(steamIDTarget: unknown, nVirtualPort: number, nTimeoutSec: number, bAllowUseOfPacketRelay: boolean): number}
    CreateConnectionSocket: {(nIP: SteamWorksNS.Structs.SteamIPAddress_t, nPort: number, nTimeoutSec: number): number}
    DestroySocket: {(hSocket: number, bNotifyRemoteEnd: boolean): boolean}
    DestroyListenSocket: {(hSocket: number, bNotifyRemoteEnd: boolean): boolean}
    SendDataOnSocket: {(hSocket: number, pubData: unknown, cubData: number, bReliable: boolean): boolean}
    IsDataAvailableOnSocket: {(hSocket: number, pcubMsgSize: number): boolean}
    RetrieveDataFromSocket: {(hSocket: number, pubDest: unknown, cubDest: number, pcubMsgSize: number): boolean}
    IsDataAvailable: {(hListenSocket: number, pcubMsgSize: number, phSocket: unknown): boolean}
    RetrieveData: {(hListenSocket: number, pubDest: unknown, cubDest: number, pcubMsgSize: number, phSocket: unknown): boolean}
    GetSocketInfo: {(hSocket: number, pSteamIDRemote: unknown, peSocketStatus: number, punIPRemote: SteamWorksNS.Structs.SteamIPAddress_t, punPortRemote: number): boolean}
    GetListenSocketInfo: {(hListenSocket: number, pnIP: SteamWorksNS.Structs.SteamIPAddress_t, pnPort: number): boolean}
    GetSocketConnectionType: {(hSocket: number): SteamWorksNS.Enums.ESNetSocketConnectionType}
    GetMaxPacketSize: {(hSocket: number): number}
  }
  interface SteamRemoteStorage {
    FileWrite: {(pchFile: string, pvData: unknown, cubData: number): boolean}
    FileRead: {(pchFile: string, pvData: unknown, cubDataToRead: number): number}
    FileWriteAsync: {(pchFile: string, pvData: unknown, cubData: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult }>};
    FileReadAsync: {(pchFile: string, nOffset: number, cubToRead: number): Promise<{ m_hFileReadAsync: number, m_eResult: SteamWorksNS.Enums.EResult, m_nOffset: number, m_cubRead: number }>};
    FileReadAsyncComplete: {(hReadCall: number, pvBuffer: unknown, cubToRead: number): boolean}
    FileForget: {(pchFile: string): boolean}
    FileDelete: {(pchFile: string): boolean}
    FileShare: {(pchFile: string): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_hFile: number, m_rgchFilename: string }>};
    SetSyncPlatforms: {(pchFile: string, eRemoteStoragePlatform: SteamWorksNS.Enums.ERemoteStoragePlatform): boolean}
    FileWriteStreamOpen: {(pchFile: string): number}
    FileWriteStreamWriteChunk: {(writeHandle: number, pvData: unknown, cubData: number): boolean}
    FileWriteStreamClose: {(writeHandle: number): boolean}
    FileWriteStreamCancel: {(writeHandle: number): boolean}
    FileExists: {(pchFile: string): boolean}
    FilePersisted: {(pchFile: string): boolean}
    GetFileSize: {(pchFile: string): number}
    GetFileTimestamp: {(pchFile: string): number}
    GetSyncPlatforms: {(pchFile: string): SteamWorksNS.Enums.ERemoteStoragePlatform}
    GetFileCount: {(): number}
    GetFileNameAndSize: {(iFile: number, pnFileSizeInBytes: number): string}
    GetQuota: {(pnTotalBytes: number, puAvailableBytes: number): boolean}
    IsCloudEnabledForAccount: {(): boolean}
    IsCloudEnabledForApp: {(): boolean}
    SetCloudEnabledForApp: {(bEnabled: boolean): undefined}
    UGCDownload: {(hContent: number, unPriority: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_hFile: number, m_nAppID: number, m_nSizeInBytes: number, m_pchFileName: string, m_ulSteamIDOwner: number }>};
    GetUGCDownloadProgress: {(hContent: number, pnBytesDownloaded: number, pnBytesExpected: number): boolean}
    GetUGCDetails: {(hContent: number, pnAppID: unknown, ppchName: unknown, pnFileSizeInBytes: number, pSteamIDOwner: unknown): boolean}
    UGCRead: {(hContent: number, pvData: unknown, cubDataToRead: number, cOffset: number, eAction: SteamWorksNS.Enums.EUGCReadAction): number}
    GetCachedUGCCount: {(): number}
    GetCachedUGCHandle: {(iCachedContent: number): number}
    PublishWorkshopFile: {(pchFile: string, pchPreviewFile: string, nConsumerAppId: number, pchTitle: string, pchDescription: string, eVisibility: SteamWorksNS.Enums.ERemoteStoragePublishedFileVisibility, pTags: SteamWorksNS.Structs.SteamParamStringArray_t, eWorkshopFileType: SteamWorksNS.Enums.EWorkshopFileType): Promise<{ m_dPercentFile: number, m_bPreview: boolean }>};
    CreatePublishedFileUpdateRequest: {(unPublishedFileId: number): number}
    UpdatePublishedFileFile: {(updateHandle: number, pchFile: string): boolean}
    UpdatePublishedFilePreviewFile: {(updateHandle: number, pchPreviewFile: string): boolean}
    UpdatePublishedFileTitle: {(updateHandle: number, pchTitle: string): boolean}
    UpdatePublishedFileDescription: {(updateHandle: number, pchDescription: string): boolean}
    UpdatePublishedFileVisibility: {(updateHandle: number, eVisibility: SteamWorksNS.Enums.ERemoteStoragePublishedFileVisibility): boolean}
    UpdatePublishedFileTags: {(updateHandle: number, pTags: SteamWorksNS.Structs.SteamParamStringArray_t): boolean}
    CommitPublishedFileUpdate: {(updateHandle: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number, m_bUserNeedsToAcceptWorkshopLegalAgreement: boolean }>};
    GetPublishedFileDetails: {(unPublishedFileId: number, unMaxSecondsOld: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number, m_nCreatorAppID: number, m_nConsumerAppID: number, m_rgchTitle: string, m_rgchDescription: string, m_hFile: number, m_hPreviewFile: number, m_ulSteamIDOwner: number, m_rtimeCreated: number, m_rtimeUpdated: number, m_eVisibility: SteamWorksNS.Enums.ERemoteStoragePublishedFileVisibility, m_bBanned: boolean, m_rgchTags: string, m_bTagsTruncated: boolean, m_pchFileName: string, m_nFileSize: number, m_nPreviewFileSize: number, m_rgchURL: string, m_eFileType: SteamWorksNS.Enums.EWorkshopFileType, m_bAcceptedForUse: boolean }>};
    DeletePublishedFile: {(unPublishedFileId: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number }>};
    EnumerateUserPublishedFiles: {(unStartIndex: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nResultsReturned: number, m_nTotalResultCount: number, m_rgPublishedFileId: number[] }>};
    SubscribePublishedFile: {(unPublishedFileId: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number }>};
    EnumerateUserSubscribedFiles: {(unStartIndex: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nResultsReturned: number, m_nTotalResultCount: number, m_rgPublishedFileId: number[], m_rgRTimeSubscribed: number }>};
    UnsubscribePublishedFile: {(unPublishedFileId: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number }>};
    UpdatePublishedFileSetChangeDescription: {(updateHandle: number, pchChangeDescription: string): boolean}
    GetPublishedItemVoteDetails: {(unPublishedFileId: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_unPublishedFileId: number, m_nVotesFor: number, m_nVotesAgainst: number, m_nReports: number, m_fScore: number }>};
    UpdateUserPublishedItemVote: {(unPublishedFileId: number, bVoteUp: boolean): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number }>};
    GetUserPublishedItemVoteDetails: {(unPublishedFileId: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_unPublishedFileId: number, m_nVotesFor: number, m_nVotesAgainst: number, m_nReports: number, m_fScore: number }>};
    EnumerateUserSharedWorkshopFiles: {(steamId: unknown, unStartIndex: number, pRequiredTags: SteamWorksNS.Structs.SteamParamStringArray_t, pExcludedTags: SteamWorksNS.Structs.SteamParamStringArray_t): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nResultsReturned: number, m_nTotalResultCount: number, m_rgPublishedFileId: number[] }>};
    PublishVideo: {(eVideoProvider: SteamWorksNS.Enums.EWorkshopVideoProvider, pchVideoAccount: string, pchVideoIdentifier: string, pchPreviewFile: string, nConsumerAppId: number, pchTitle: string, pchDescription: string, eVisibility: SteamWorksNS.Enums.ERemoteStoragePublishedFileVisibility, pTags: SteamWorksNS.Structs.SteamParamStringArray_t): Promise<{ m_dPercentFile: number, m_bPreview: boolean }>};
    SetUserPublishedFileAction: {(unPublishedFileId: number, eAction: SteamWorksNS.Enums.EWorkshopFileAction): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number, m_eAction: SteamWorksNS.Enums.EWorkshopFileAction }>};
    EnumeratePublishedFilesByUserAction: {(eAction: SteamWorksNS.Enums.EWorkshopFileAction, unStartIndex: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_eAction: SteamWorksNS.Enums.EWorkshopFileAction, m_nResultsReturned: number, m_nTotalResultCount: number, m_rgPublishedFileId: number[], m_rgRTimeUpdated: number }>};
    EnumeratePublishedWorkshopFiles: {(eEnumerationType: SteamWorksNS.Enums.EWorkshopEnumerationType, unStartIndex: number, unCount: number, unDays: number, pTags: SteamWorksNS.Structs.SteamParamStringArray_t, pUserTags: SteamWorksNS.Structs.SteamParamStringArray_t): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nResultsReturned: number, m_nTotalResultCount: number, m_rgPublishedFileId: number[], m_rgScore: number, m_nAppId: number, m_unStartIndex: number }>};
    UGCDownloadToLocation: {(hContent: number, pchLocation: string, unPriority: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_hFile: number, m_nAppID: number, m_nSizeInBytes: number, m_pchFileName: string, m_ulSteamIDOwner: number }>};
    GetLocalFileChangeCount: {(): number}
    GetLocalFileChange: {(iFile: number, pEChangeType: unknown, pEFilePathType: unknown): string}
    BeginFileWriteBatch: {(): boolean}
    EndFileWriteBatch: {(): boolean}
  }
  interface SteamScreenshots {
    WriteScreenshot: {(pubRGB: unknown, cubRGB: number, nWidth: number, nHeight: number): number}
    AddScreenshotToLibrary: {(pchFilename: string, pchThumbnailFilename: string, nWidth: number, nHeight: number): number}
    TriggerScreenshot: {(): undefined}
    HookScreenshots: {(bHook: boolean): undefined}
    SetLocation: {(hScreenshot: number, pchLocation: string): boolean}
    TagUser: {(hScreenshot: number, steamID: unknown): boolean}
    TagPublishedFile: {(hScreenshot: number, unPublishedFileID: number): boolean}
    IsScreenshotsHooked: {(): boolean}
    AddVRScreenshotToLibrary: {(eType: SteamWorksNS.Enums.EVRScreenshotType, pchFilename: string, pchVRFilename: string): number}
  }
  interface SteamMusic {
    BIsEnabled: {(): boolean}
    BIsPlaying: {(): boolean}
    GetPlaybackStatus: {(): SteamWorksNS.Enums.AudioPlayback_Status}
    Play: {(): undefined}
    Pause: {(): undefined}
    PlayPrevious: {(): undefined}
    PlayNext: {(): undefined}
    SetVolume: {(flVolume: number): undefined}
    GetVolume: {(): number}
  }
  interface SteamMusicRemote {
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
    UpdatePlaybackStatus: {(nStatus: SteamWorksNS.Enums.AudioPlayback_Status): boolean}
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
  interface SteamHTTP {
    CreateHTTPRequest: {(eHTTPRequestMethod: SteamWorksNS.Enums.EHTTPMethod, pchAbsoluteURL: string): number}
    SetHTTPRequestContextValue: {(hRequest: number, ulContextValue: number): boolean}
    SetHTTPRequestNetworkActivityTimeout: {(hRequest: number, unTimeoutSeconds: number): boolean}
    SetHTTPRequestHeaderValue: {(hRequest: number, pchHeaderName: string, pchHeaderValue: string): boolean}
    SetHTTPRequestGetOrPostParameter: {(hRequest: number, pchParamName: string, pchParamValue: string): boolean}
    SendHTTPRequest: {(hRequest: number, pCallHandle: unknown): boolean}
    SendHTTPRequestAndStreamResponse: {(hRequest: number, pCallHandle: unknown): boolean}
    DeferHTTPRequest: {(hRequest: number): boolean}
    PrioritizeHTTPRequest: {(hRequest: number): boolean}
    GetHTTPResponseHeaderSize: {(hRequest: number, pchHeaderName: string, unResponseHeaderSize: number): boolean}
    GetHTTPResponseHeaderValue: {(hRequest: number, pchHeaderName: string, pHeaderValueBuffer: number, unBufferSize: number): boolean}
    GetHTTPResponseBodySize: {(hRequest: number, unBodySize: number): boolean}
    GetHTTPResponseBodyData: {(hRequest: number, pBodyDataBuffer: number, unBufferSize: number): boolean}
    GetHTTPStreamingResponseBodyData: {(hRequest: number, cOffset: number, pBodyDataBuffer: number, unBufferSize: number): boolean}
    ReleaseHTTPRequest: {(hRequest: number): boolean}
    GetHTTPDownloadProgressPct: {(hRequest: number, pflPercentOut: number): boolean}
    SetHTTPRequestRawPostBody: {(hRequest: number, pchContentType: string, pubBody: number, unBodyLen: number): boolean}
    CreateCookieContainer: {(bAllowResponsesToModify: boolean): number}
    ReleaseCookieContainer: {(hCookieContainer: number): boolean}
    SetCookie: {(hCookieContainer: number, pchHost: string, pchUrl: string, pchCookie: string): boolean}
    SetHTTPRequestCookieContainer: {(hRequest: number, hCookieContainer: number): boolean}
    SetHTTPRequestUserAgentInfo: {(hRequest: number, pchUserAgentInfo: string): boolean}
    SetHTTPRequestRequiresVerifiedCertificate: {(hRequest: number, bRequireVerifiedCertificate: boolean): boolean}
    SetHTTPRequestAbsoluteTimeoutMS: {(hRequest: number, unMilliseconds: number): boolean}
    GetHTTPRequestWasTimedOut: {(hRequest: number, pbWasTimedOut: unknown): boolean}
  }
  interface SteamController {
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
    GetDigitalActionData: {(controllerHandle: number, digitalActionHandle: number): SteamWorksNS.Structs.InputDigitalActionData_t}
    GetDigitalActionOrigins: {(controllerHandle: number, actionSetHandle: number, digitalActionHandle: number, originsOut: unknown): number}
    GetAnalogActionHandle: {(pszActionName: string): number}
    GetAnalogActionData: {(controllerHandle: number, analogActionHandle: number): SteamWorksNS.Structs.InputAnalogActionData_t}
    GetAnalogActionOrigins: {(controllerHandle: number, actionSetHandle: number, analogActionHandle: number, originsOut: unknown): number}
    GetGlyphForActionOrigin: {(eOrigin: SteamWorksNS.Enums.EControllerActionOrigin): string}
    GetStringForActionOrigin: {(eOrigin: SteamWorksNS.Enums.EControllerActionOrigin): string}
    StopAnalogActionMomentum: {(controllerHandle: number, eAction: number): undefined}
    GetMotionData: {(controllerHandle: number): SteamWorksNS.Structs.InputMotionData_t}
    TriggerHapticPulse: {(controllerHandle: number, eTargetPad: SteamWorksNS.Enums.ESteamControllerPad, usDurationMicroSec: number): undefined}
    TriggerRepeatedHapticPulse: {(controllerHandle: number, eTargetPad: SteamWorksNS.Enums.ESteamControllerPad, usDurationMicroSec: number, usOffMicroSec: number, unRepeat: number, nFlags: number): undefined}
    TriggerVibration: {(controllerHandle: number, usLeftSpeed: number, usRightSpeed: number): undefined}
    SetLEDColor: {(controllerHandle: number, nColorR: number, nColorG: number, nColorB: number, nFlags: number): undefined}
    ShowBindingPanel: {(controllerHandle: number): boolean}
    GetInputTypeForHandle: {(controllerHandle: number): SteamWorksNS.Enums.ESteamInputType}
    GetControllerForGamepadIndex: {(nIndex: number): number}
    GetGamepadIndexForController: {(ulControllerHandle: number): number}
    GetStringForXboxOrigin: {(eOrigin: SteamWorksNS.Enums.EXboxOrigin): string}
    GetGlyphForXboxOrigin: {(eOrigin: SteamWorksNS.Enums.EXboxOrigin): string}
    GetActionOriginFromXboxOrigin: {(controllerHandle: number, eOrigin: SteamWorksNS.Enums.EXboxOrigin): SteamWorksNS.Enums.EControllerActionOrigin}
    TranslateActionOrigin: {(eDestinationInputType: SteamWorksNS.Enums.ESteamInputType, eSourceOrigin: SteamWorksNS.Enums.EControllerActionOrigin): SteamWorksNS.Enums.EControllerActionOrigin}
    GetControllerBindingRevision: {(controllerHandle: number, pMajor: number, pMinor: number): boolean}
  }
  interface SteamUGC {
    CreateQueryUserUGCRequest: {(unAccountID: number, eListType: SteamWorksNS.Enums.EUserUGCList, eMatchingUGCType: SteamWorksNS.Enums.EUGCMatchingUGCType, eSortOrder: SteamWorksNS.Enums.EUserUGCListSortOrder, nCreatorAppID: number, nConsumerAppID: number, unPage: number): number}
    CreateQueryAllUGCRequest: {(eQueryType: SteamWorksNS.Enums.EUGCQuery, eMatchingeMatchingUGCTypeFileType: SteamWorksNS.Enums.EUGCMatchingUGCType, nCreatorAppID: number, nConsumerAppID: number, unPage: number): number}
    CreateQueryUGCDetailsRequest: {(unNumPublishedFileIDs: number): number}
    SendQueryUGCRequest: {(handle: number): Promise<{ m_handle: number, m_eResult: SteamWorksNS.Enums.EResult, m_unNumResultsReturned: number, m_unTotalMatchingResults: number, m_bCachedData: boolean, m_rgchNextCursor: string }>};
    GetQueryUGCResult: {(handle: number, index: number, pDetails: SteamWorksNS.Structs.SteamUGCDetails_t): boolean}
    GetQueryUGCNumTags: {(handle: number, index: number): number}
    GetQueryUGCTag: {(handle: number, index: number, indexTag: number, pchValue: string, cchValueSize: number): boolean}
    GetQueryUGCTagDisplayName: {(handle: number, index: number, indexTag: number, pchValue: string, cchValueSize: number): boolean}
    GetQueryUGCPreviewURL: {(handle: number, index: number, pchURL: string, cchURLSize: number): boolean}
    GetQueryUGCMetadata: {(handle: number, index: number, pchMetadata: string, cchMetadatasize: number): boolean}
    GetQueryUGCChildren: {(handle: number, index: number, cMaxEntries: number): boolean}
    GetQueryUGCStatistic: {(handle: number, index: number, eStatType: SteamWorksNS.Enums.EItemStatistic, pStatValue: number): boolean}
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
    RequestUGCDetails: {(nPublishedFileID: number, unMaxAgeSeconds: number): Promise<{ m_details: SteamWorksNS.Structs.SteamUGCDetails_t, m_bCachedData: boolean }>};
    CreateItem: {(nConsumerAppId: number, eFileType: SteamWorksNS.Enums.EWorkshopFileType): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number, m_bUserNeedsToAcceptWorkshopLegalAgreement: boolean }>};
    StartItemUpdate: {(nConsumerAppId: number, nPublishedFileID: number): number}
    SetItemTitle: {(handle: number, pchTitle: string): boolean}
    SetItemDescription: {(handle: number, pchDescription: string): boolean}
    SetItemUpdateLanguage: {(handle: number, pchLanguage: string): boolean}
    SetItemMetadata: {(handle: number, pchMetaData: string): boolean}
    SetItemVisibility: {(handle: number, eVisibility: SteamWorksNS.Enums.ERemoteStoragePublishedFileVisibility): boolean}
    SetItemTags: {(updateHandle: number, pTags: unknown): boolean}
    SetItemContent: {(handle: number, pszContentFolder: string): boolean}
    SetItemPreview: {(handle: number, pszPreviewFile: string): boolean}
    SetAllowLegacyUpload: {(handle: number, bAllowLegacyUpload: boolean): boolean}
    RemoveAllItemKeyValueTags: {(handle: number): boolean}
    RemoveItemKeyValueTags: {(handle: number, pchKey: string): boolean}
    AddItemKeyValueTag: {(handle: number, pchKey: string, pchValue: string): boolean}
    AddItemPreviewFile: {(handle: number, pszPreviewFile: string, type: SteamWorksNS.Enums.EItemPreviewType): boolean}
    AddItemPreviewVideo: {(handle: number, pszVideoID: string): boolean}
    UpdateItemPreviewFile: {(handle: number, index: number, pszPreviewFile: string): boolean}
    UpdateItemPreviewVideo: {(handle: number, index: number, pszVideoID: string): boolean}
    RemoveItemPreview: {(handle: number, index: number): boolean}
    SubmitItemUpdate: {(handle: number, pchChangeNote: string): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_bUserNeedsToAcceptWorkshopLegalAgreement: boolean, m_nPublishedFileId: number }>};
    GetItemUpdateProgress: {(handle: number, punBytesProcessed: number, punBytesTotal: number): SteamWorksNS.Enums.EItemUpdateStatus}
    SetUserItemVote: {(nPublishedFileID: number, bVoteUp: boolean): Promise<{ m_nPublishedFileId: number, m_eResult: SteamWorksNS.Enums.EResult, m_bVoteUp: boolean }>};
    GetUserItemVote: {(nPublishedFileID: number): Promise<{ m_nPublishedFileId: number, m_eResult: SteamWorksNS.Enums.EResult, m_bVotedUp: boolean, m_bVotedDown: boolean, m_bVoteSkipped: boolean }>};
    AddItemToFavorites: {(nAppId: number, nPublishedFileID: number): Promise<{ m_nPublishedFileId: number, m_eResult: SteamWorksNS.Enums.EResult, m_bWasAddRequest: boolean }>};
    RemoveItemFromFavorites: {(nAppId: number, nPublishedFileID: number): Promise<{ m_nPublishedFileId: number, m_eResult: SteamWorksNS.Enums.EResult, m_bWasAddRequest: boolean }>};
    SubscribeItem: {(nPublishedFileID: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number }>};
    UnsubscribeItem: {(nPublishedFileID: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number }>};
    GetNumSubscribedItems: {(): number}
    GetSubscribedItems: {(cMaxEntries: number): number}
    GetItemState: {(nPublishedFileID: number): number}
    GetItemInstallInfo: {(nPublishedFileID: number, punSizeOnDisk: number, pchFolder: string, cchFolderSize: number, punTimeStamp: number): boolean}
    GetItemDownloadInfo: {(nPublishedFileID: number, punBytesDownloaded: number, punBytesTotal: number): boolean}
    DownloadItem: {(nPublishedFileID: number, bHighPriority: boolean): boolean}
    BInitWorkshopForGameServer: {(unWorkshopDepotID: number, pszFolder: string): boolean}
    SuspendDownloads: {(bSuspend: boolean): undefined}
    StartPlaytimeTracking: {(unNumPublishedFileIDs: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult }>};
    StopPlaytimeTracking: {(unNumPublishedFileIDs: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult }>};
    StopPlaytimeTrackingForAllItems: {(): Promise<{ m_eResult: SteamWorksNS.Enums.EResult }>};
    AddDependency: {(nParentPublishedFileID: number, nChildPublishedFileID: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number, m_nChildPublishedFileId: number }>};
    RemoveDependency: {(nParentPublishedFileID: number, nChildPublishedFileID: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number, m_nChildPublishedFileId: number }>};
    AddAppDependency: {(nPublishedFileID: number, nAppID: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number, m_nAppID: number }>};
    RemoveAppDependency: {(nPublishedFileID: number, nAppID: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number, m_nAppID: number }>};
    GetAppDependencies: {(nPublishedFileID: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number, m_rgAppIDs: unknown, m_nNumAppDependencies: number, m_nTotalNumAppDependencies: number }>};
    DeleteItem: {(nPublishedFileID: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nPublishedFileId: number }>};
    ShowWorkshopEULA: {(): boolean}
    GetWorkshopEULAStatus: {(): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_nAppID: number, m_unVersion: number, m_rtAction: number, m_bAccepted: boolean, m_bNeedsAction: boolean }>};
  }
  interface SteamAppList {
    GetNumInstalledApps: {(): number}
    GetInstalledApps: {(unMaxAppIDs: number): number}
    GetAppName: {(nAppID: number, pchName: string, cchNameMax: number): number}
    GetAppInstallDir: {(nAppID: number, pchDirectory: string, cchNameMax: number): number}
    GetAppBuildId: {(nAppID: number): number}
  }
  interface SteamHTMLSurface {
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
  interface SteamInventory {
    GetResultStatus: {(resultHandle: number): SteamWorksNS.Enums.EResult}
    GetResultItems: {(resultHandle: number, pOutItemsArray: SteamWorksNS.Structs.SteamItemDetails_t, punOutItemsArraySize: number): boolean}
    GetResultItemProperty: {(resultHandle: number, unItemIndex: number, pchPropertyName: string, pchValueBuffer: string, punValueBufferSizeOut: number): boolean}
    GetResultTimestamp: {(resultHandle: number): number}
    CheckResultSteamID: {(resultHandle: number, steamIDExpected: unknown): boolean}
    DestroyResult: {(resultHandle: number): undefined}
    GetAllItems: {(pResultHandle: unknown): boolean}
    GetItemsByID: {(pResultHandle: unknown, pInstanceIDs: unknown, unCountInstanceIDs: number): boolean}
    SerializeResult: {(resultHandle: number, pOutBuffer: unknown, punOutBufferSize: number): boolean}
    DeserializeResult: {(pOutResultHandle: unknown, pBuffer: unknown, unBufferSize: number, bRESERVED_MUST_BE_FALSE: boolean): boolean}
    GenerateItems: {(pResultHandle: unknown, pArrayItemDefs: unknown, punArrayQuantity: number, unArrayLength: number): boolean}
    GrantPromoItems: {(pResultHandle: unknown): boolean}
    AddPromoItem: {(pResultHandle: unknown, itemDef: number): boolean}
    AddPromoItems: {(pResultHandle: unknown, pArrayItemDefs: unknown, unArrayLength: number): boolean}
    ConsumeItem: {(pResultHandle: unknown, itemConsume: number, unQuantity: number): boolean}
    ExchangeItems: {(pResultHandle: unknown, pArrayGenerate: unknown, punArrayGenerateQuantity: number, unArrayGenerateLength: number, pArrayDestroy: unknown, punArrayDestroyQuantity: number, unArrayDestroyLength: number): boolean}
    TransferItemQuantity: {(pResultHandle: unknown, itemIdSource: number, unQuantity: number, itemIdDest: number): boolean}
    SendItemDropHeartbeat: {(): undefined}
    TriggerItemDrop: {(pResultHandle: unknown, dropListDefinition: number): boolean}
    TradeItems: {(pResultHandle: unknown, steamIDTradePartner: unknown, pArrayGive: unknown, pArrayGiveQuantity: number, nArrayGiveLength: number, pArrayGet: unknown, pArrayGetQuantity: number, nArrayGetLength: number): boolean}
    LoadItemDefinitions: {(): boolean}
    GetItemDefinitionIDs: {(pItemDefIDs: unknown, punItemDefIDsArraySize: number): boolean}
    GetItemDefinitionProperty: {(iDefinition: number, pchPropertyName: string, pchValueBuffer: string, punValueBufferSizeOut: number): boolean}
    RequestEligiblePromoItemDefinitionsIDs: {(steamID: unknown): Promise<{ m_result: SteamWorksNS.Enums.EResult, m_steamID: unknown, m_numEligiblePromoItemDefs: number, m_bCachedData: boolean }>};
    GetEligiblePromoItemDefinitionIDs: {(steamID: unknown, pItemDefIDs: unknown, punItemDefIDsArraySize: number): boolean}
    StartPurchase: {(pArrayItemDefs: unknown, punArrayQuantity: number, unArrayLength: number): Promise<{ m_result: SteamWorksNS.Enums.EResult, m_ulOrderID: number, m_ulTransID: number }>};
    RequestPrices: {(): Promise<{ m_result: SteamWorksNS.Enums.EResult, m_rgchCurrency: string }>};
    GetNumItemsWithPrices: {(): number}
    GetItemsWithPrices: {(pArrayItemDefs: unknown, pCurrentPrices: number, pBasePrices: number, unArrayLength: number): boolean}
    GetItemPrice: {(iDefinition: number, pCurrentPrice: number, pBasePrice: number): boolean}
    StartUpdateProperties: {(): number}
    RemoveProperty: {(handle: number, nItemID: number, pchPropertyName: string): boolean}
    SetProperty: {(handle: number, nItemID: number, pchPropertyName: string, pchPropertyValue: string): boolean}
    SubmitUpdateProperties: {(handle: number, pResultHandle: unknown): boolean}
    InspectItem: {(pResultHandle: unknown, pchItemToken: string): boolean}
  }
  interface SteamVideo {
    GetVideoURL: {(unVideoAppID: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_unVideoAppID: number, m_rgchURL: string }>};
    IsBroadcasting: {(pnNumViewers: number): boolean}
    GetOPFSettings: {(unVideoAppID: number): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_unVideoAppID: number }>};
    GetOPFStringForApp: {(unVideoAppID: number, pchBuffer: string, pnBufferSize: number): boolean}
  }
  interface SteamParentalSettings {
    BIsParentalLockEnabled: {(): boolean}
    BIsParentalLockLocked: {(): boolean}
    BIsAppBlocked: {(nAppID: number): boolean}
    BIsAppInBlockList: {(nAppID: number): boolean}
    BIsFeatureBlocked: {(eFeature: SteamWorksNS.Enums.EParentalFeature): boolean}
    BIsFeatureInBlockList: {(eFeature: SteamWorksNS.Enums.EParentalFeature): boolean}
  }
  interface SteamInput {
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
    GetDigitalActionData: {(inputHandle: number, digitalActionHandle: number): SteamWorksNS.Structs.InputDigitalActionData_t}
    GetDigitalActionOrigins: {(inputHandle: number, actionSetHandle: number, digitalActionHandle: number, originsOut: unknown): number}
    GetStringForDigitalActionName: {(eActionHandle: number): string}
    GetAnalogActionHandle: {(pszActionName: string): number}
    GetAnalogActionData: {(inputHandle: number, analogActionHandle: number): SteamWorksNS.Structs.InputAnalogActionData_t}
    GetAnalogActionOrigins: {(inputHandle: number, actionSetHandle: number, analogActionHandle: number, originsOut: unknown): number}
    GetGlyphPNGForActionOrigin: {(eOrigin: SteamWorksNS.Enums.EInputActionOrigin, eSize: SteamWorksNS.Enums.ESteamInputGlyphSize, unFlags: number): string}
    GetGlyphSVGForActionOrigin: {(eOrigin: SteamWorksNS.Enums.EInputActionOrigin, unFlags: number): string}
    GetGlyphForActionOrigin_Legacy: {(eOrigin: SteamWorksNS.Enums.EInputActionOrigin): string}
    GetStringForActionOrigin: {(eOrigin: SteamWorksNS.Enums.EInputActionOrigin): string}
    GetStringForAnalogActionName: {(eActionHandle: number): string}
    StopAnalogActionMomentum: {(inputHandle: number, eAction: number): undefined}
    GetMotionData: {(inputHandle: number): SteamWorksNS.Structs.InputMotionData_t}
    TriggerVibration: {(inputHandle: number, usLeftSpeed: number, usRightSpeed: number): undefined}
    TriggerVibrationExtended: {(inputHandle: number, usLeftSpeed: number, usRightSpeed: number, usLeftTriggerSpeed: number, usRightTriggerSpeed: number): undefined}
    TriggerSimpleHapticEvent: {(inputHandle: number, eHapticLocation: SteamWorksNS.Enums.EControllerHapticLocation, nIntensity: number, nGainDB: string, nOtherIntensity: number, nOtherGainDB: string): undefined}
    SetLEDColor: {(inputHandle: number, nColorR: number, nColorG: number, nColorB: number, nFlags: number): undefined}
    Legacy_TriggerHapticPulse: {(inputHandle: number, eTargetPad: SteamWorksNS.Enums.ESteamControllerPad, usDurationMicroSec: number): undefined}
    Legacy_TriggerRepeatedHapticPulse: {(inputHandle: number, eTargetPad: SteamWorksNS.Enums.ESteamControllerPad, usDurationMicroSec: number, usOffMicroSec: number, unRepeat: number, nFlags: number): undefined}
    ShowBindingPanel: {(inputHandle: number): boolean}
    GetInputTypeForHandle: {(inputHandle: number): SteamWorksNS.Enums.ESteamInputType}
    GetControllerForGamepadIndex: {(nIndex: number): number}
    GetGamepadIndexForController: {(ulinputHandle: number): number}
    GetStringForXboxOrigin: {(eOrigin: SteamWorksNS.Enums.EXboxOrigin): string}
    GetGlyphForXboxOrigin: {(eOrigin: SteamWorksNS.Enums.EXboxOrigin): string}
    GetActionOriginFromXboxOrigin: {(inputHandle: number, eOrigin: SteamWorksNS.Enums.EXboxOrigin): SteamWorksNS.Enums.EInputActionOrigin}
    TranslateActionOrigin: {(eDestinationInputType: SteamWorksNS.Enums.ESteamInputType, eSourceOrigin: SteamWorksNS.Enums.EInputActionOrigin): SteamWorksNS.Enums.EInputActionOrigin}
    GetDeviceBindingRevision: {(inputHandle: number, pMajor: number, pMinor: number): boolean}
    GetRemotePlaySessionID: {(inputHandle: number): number}
    GetSessionInputConfigurationSettings: {(): number}
  }
  interface SteamRemotePlay {
    GetSessionCount: {(): number}
    GetSessionID: {(iSessionIndex: number): number}
    GetSessionSteamID: {(unSessionID: number): unknown}
    GetSessionClientName: {(unSessionID: number): string}
    GetSessionClientFormFactor: {(unSessionID: number): SteamWorksNS.Enums.ESteamDeviceFormFactor}
    BGetSessionClientResolution: {(unSessionID: number, pnResolutionX: number, pnResolutionY: number): boolean}
    BSendRemotePlayTogetherInvite: {(steamIDFriend: unknown): boolean}
  }
}