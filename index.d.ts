
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
    k_EUserHasLicenseResultHasLicense: number;
    k_EUserHasLicenseResultDoesNotHaveLicense: number;
    k_EUserHasLicenseResultNoAuth: number;
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
    k_cchMaxFriendsGroupName: number;
    k_cFriendsGroupLimit: number;
    k_FriendsGroupID_Invalid: number;
    k_cEnumerateFollowersMax: number;
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
    STEAMUTILS_INTERFACE_VERSION: string;
    k_nMaxLobbyKeyLength: number;
    STEAMMATCHMAKING_INTERFACE_VERSION: string;
    HSERVERQUERY_INVALID: number;
    STEAMMATCHMAKINGSERVERS_INTERFACE_VERSION: string;
    k_unFavoriteFlagNone: number;
    k_unFavoriteFlagFavorite: number;
    k_unFavoriteFlagHistory: number;
    STEAMGAMESEARCH_INTERFACE_VERSION: string;
    STEAMPARTIES_INTERFACE_VERSION: string;
    k_cchStatNameMax: number;
    k_cchLeaderboardNameMax: number;
    k_cLeaderboardDetailsMax: number;
    STEAMUSERSTATS_INTERFACE_VERSION: string;
    k_cubAppProofOfPurchaseKeyMax: number;
    STEAMAPPS_INTERFACE_VERSION: string;
    k_ERegisterActivationCodeAlreadyOwned: number;
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
    ESteamIPType: {
      IPv4: 0,
      IPv6: 1,
    };
    EResult: {
      None: 0,
      OK: 1,
      Fail: 2,
      NoConnection: 3,
      InvalidPassword: 5,
      LoggedInElsewhere: 6,
      InvalidProtocolVer: 7,
      InvalidParam: 8,
      FileNotFound: 9,
      Busy: 10,
      InvalidState: 11,
      InvalidName: 12,
      InvalidEmail: 13,
      DuplicateName: 14,
      AccessDenied: 15,
      Timeout: 16,
      Banned: 17,
      AccountNotFound: 18,
      InvalidSteamID: 19,
      ServiceUnavailable: 20,
      NotLoggedOn: 21,
      Pending: 22,
      EncryptionFailure: 23,
      InsufficientPrivilege: 24,
      LimitExceeded: 25,
      Revoked: 26,
      Expired: 27,
      AlreadyRedeemed: 28,
      DuplicateRequest: 29,
      AlreadyOwned: 30,
      IPNotFound: 31,
      PersistFailed: 32,
      LockingFailed: 33,
      LogonSessionReplaced: 34,
      ConnectFailed: 35,
      HandshakeFailed: 36,
      IOFailure: 37,
      RemoteDisconnect: 38,
      ShoppingCartNotFound: 39,
      Blocked: 40,
      Ignored: 41,
      NoMatch: 42,
      AccountDisabled: 43,
      ServiceReadOnly: 44,
      AccountNotFeatured: 45,
      AdministratorOK: 46,
      ContentVersion: 47,
      TryAnotherCM: 48,
      PasswordRequiredToKickSession: 49,
      AlreadyLoggedInElsewhere: 50,
      Suspended: 51,
      Cancelled: 52,
      DataCorruption: 53,
      DiskFull: 54,
      RemoteCallFailed: 55,
      PasswordUnset: 56,
      ExternalAccountUnlinked: 57,
      PSNTicketInvalid: 58,
      ExternalAccountAlreadyLinked: 59,
      RemoteFileConflict: 60,
      IllegalPassword: 61,
      SameAsPreviousValue: 62,
      AccountLogonDenied: 63,
      CannotUseOldPassword: 64,
      InvalidLoginAuthCode: 65,
      AccountLogonDeniedNoMail: 66,
      HardwareNotCapableOfIPT: 67,
      IPTInitError: 68,
      ParentalControlRestricted: 69,
      FacebookQueryError: 70,
      ExpiredLoginAuthCode: 71,
      IPLoginRestrictionFailed: 72,
      AccountLockedDown: 73,
      AccountLogonDeniedVerifiedEmailRequired: 74,
      NoMatchingURL: 75,
      BadResponse: 76,
      RequirePasswordReEntry: 77,
      ValueOutOfRange: 78,
      UnexpectedError: 79,
      Disabled: 80,
      InvalidCEGSubmission: 81,
      RestrictedDevice: 82,
      RegionLocked: 83,
      RateLimitExceeded: 84,
      AccountLoginDeniedNeedTwoFactor: 85,
      ItemDeleted: 86,
      AccountLoginDeniedThrottle: 87,
      TwoFactorCodeMismatch: 88,
      TwoFactorActivationCodeMismatch: 89,
      AccountAssociatedToMultiplePartners: 90,
      NotModified: 91,
      NoMobileDevice: 92,
      TimeNotSynced: 93,
      SmsCodeFailed: 94,
      AccountLimitExceeded: 95,
      AccountActivityLimitExceeded: 96,
      PhoneActivityLimitExceeded: 97,
      RefundToWallet: 98,
      EmailSendFailure: 99,
      NotSettled: 100,
      NeedCaptcha: 101,
      GSLTDenied: 102,
      GSOwnerDenied: 103,
      InvalidItemType: 104,
      IPBanned: 105,
      GSLTExpired: 106,
      InsufficientFunds: 107,
      TooManyPending: 108,
      NoSiteLicensesFound: 109,
      WGNetworkSendExceeded: 110,
      AccountNotFriends: 111,
      LimitedUserAccount: 112,
      CantRemoveItem: 113,
      AccountDeleted: 114,
      ExistingUserCancelledLicense: 115,
      CommunityCooldown: 116,
      NoLauncherSpecified: 117,
      MustAgreeToSSA: 118,
      LauncherMigrated: 119,
      SteamRealmMismatch: 120,
      InvalidSignature: 121,
      ParseFailure: 122,
      NoVerifiedPhone: 123,
      InsufficientBattery: 124,
      ChargerRequired: 125,
      CachedCredentialInvalid: 126,
      PhoneNumberIsVOIP: 127,
    };
    EVoiceResult: {
      OK: 0,
      NotInitialized: 1,
      NotRecording: 2,
      NoData: 3,
      BufferTooSmall: 4,
      DataCorrupted: 5,
      Restricted: 6,
      UnsupportedCodec: 7,
      ReceiverOutOfDate: 8,
      ReceiverDidNotAnswer: 9,
    };
    EBeginAuthSessionResult: {
      OK: 0,
      InvalidTicket: 1,
      DuplicateRequest: 2,
      InvalidVersion: 3,
      GameMismatch: 4,
      ExpiredTicket: 5,
    };
    EAuthSessionResponse: {
      OK: 0,
      UserNotConnectedToSteam: 1,
      NoLicenseOrExpired: 2,
      VACBanned: 3,
      LoggedInElseWhere: 4,
      VACCheckTimedOut: 5,
      AuthTicketCanceled: 6,
      AuthTicketInvalidAlreadyUsed: 7,
      AuthTicketInvalid: 8,
      PublisherIssuedBan: 9,
    };
    EAccountType: {
      Invalid: 0,
      Individual: 1,
      Multiseat: 2,
      GameServer: 3,
      AnonGameServer: 4,
      Pending: 5,
      ContentServer: 6,
      Clan: 7,
      Chat: 8,
      ConsoleUser: 9,
      AnonUser: 10,
      Max: 11,
    };
    EChatEntryType: {
      Invalid: 0,
      ChatMsg: 1,
      Typing: 2,
      InviteGame: 3,
      Emote: 4,
      LeftConversation: 6,
      Entered: 7,
      WasKicked: 8,
      WasBanned: 9,
      Disconnected: 10,
      HistoricalChat: 11,
      LinkBlocked: 14,
    };
    EChatRoomEnterResponse: {
      Success: 1,
      DoesntExist: 2,
      NotAllowed: 3,
      Full: 4,
      Error: 5,
      Banned: 6,
      Limited: 7,
      ClanDisabled: 8,
      CommunityBan: 9,
      MemberBlockedYou: 10,
      YouBlockedMember: 11,
      RatelimitExceeded: 15,
    };
    EBroadcastUploadResult: {
      None: 0,
      OK: 1,
      InitFailed: 2,
      FrameFailed: 3,
      Timeout: 4,
      BandwidthExceeded: 5,
      LowFPS: 6,
      MissingKeyFrames: 7,
      NoConnection: 8,
      RelayFailed: 9,
      SettingsChanged: 10,
      MissingAudio: 11,
      TooFarBehind: 12,
      TranscodeBehind: 13,
      NotAllowedToPlay: 14,
      Busy: 15,
      Banned: 16,
      AlreadyActive: 17,
      ForcedOff: 18,
      AudioBehind: 19,
      Shutdown: 20,
      Disconnect: 21,
      VideoInitFailed: 22,
      AudioInitFailed: 23,
    };
    EDurationControlProgress: {
      Full: 0,
      Half: 1,
      None: 2,
      EDurationControl_ExitSoon_3h: 3,
      EDurationControl_ExitSoon_5h: 4,
      EDurationControl_ExitSoon_Night: 5,
    };
    EDurationControlNotification: {
      None: 0,
      '1Hour': 1,
      '3Hours': 2,
      HalfProgress: 3,
      NoProgress: 4,
      ExitSoon_3h: 5,
      ExitSoon_5h: 6,
      ExitSoon_Night: 7,
    };
    EDurationControlOnlineState: {
      Invalid: 0,
      Offline: 1,
      Online: 2,
      OnlineHighPri: 3,
    };
    ESteamIPv6ConnectivityProtocol: {
      Invalid: 0,
      HTTP: 1,
      UDP: 2,
    };
    ESteamIPv6ConnectivityState: {
      Unknown: 0,
      Good: 1,
      Bad: 2,
    };
    EFriendRelationship: {
      None: 0,
      Blocked: 1,
      RequestRecipient: 2,
      Friend: 3,
      RequestInitiator: 4,
      Ignored: 5,
      IgnoredFriend: 6,
      Suggested_DEPRECATED: 7,
      Max: 8,
    };
    EPersonaState: {
      Offline: 0,
      Online: 1,
      Busy: 2,
      Away: 3,
      Snooze: 4,
      LookingToTrade: 5,
      LookingToPlay: 6,
      Invisible: 7,
      Max: 8,
    };
    EOverlayToStoreFlag: {
      None: 0,
      AddToCart: 1,
      AddToCartAndShow: 2,
    };
    EActivateGameOverlayToWebPageMode: {
      Default: 0,
      Modal: 1,
    };
    ECommunityProfileItemType: {
      AnimatedAvatar: 0,
      AvatarFrame: 1,
      ProfileModifier: 2,
      ProfileBackground: 3,
      MiniProfileBackground: 4,
    };
    ECommunityProfileItemProperty: {
      ImageSmall: 0,
      ImageLarge: 1,
      InternalName: 2,
      Title: 3,
      Description: 4,
      AppID: 5,
      TypeID: 6,
      Class: 7,
      MovieWebM: 8,
      MovieMP4: 9,
      MovieWebMSmall: 10,
      MovieMP4Small: 11,
    };
    EPersonaChange: {
      Name: 1,
      Status: 2,
      ComeOnline: 4,
      GoneOffline: 8,
      GamePlayed: 16,
      GameServer: 32,
      Avatar: 64,
      JoinedSource: 128,
      LeftSource: 256,
      RelationshipChanged: 512,
      NameFirstSet: 1024,
      Broadcast: 2048,
      Nickname: 4096,
      SteamLevel: 8192,
      RichPresence: 16384,
    };
    ESteamAPICallFailure: {
      None: -1,
      SteamGone: 0,
      NetworkFailure: 1,
      InvalidHandle: 2,
      MismatchedCallback: 3,
    };
    EGamepadTextInputMode: {
      Normal: 0,
      Password: 1,
    };
    EGamepadTextInputLineMode: {
      SingleLine: 0,
      MultipleLines: 1,
    };
    EFloatingGamepadTextInputMode: {
      ModeSingleLine: 0,
      ModeMultipleLines: 1,
      ModeEmail: 2,
      ModeNumeric: 3,
    };
    ETextFilteringContext: {
      Unknown: 0,
      GameContent: 1,
      Chat: 2,
      Name: 3,
    };
    ECheckFileSignature: {
      InvalidSignature: 0,
      ValidSignature: 1,
      FileNotFound: 2,
      NoSignaturesFoundForThisApp: 3,
      NoSignaturesFoundForThisFile: 4,
    };
    ELobbyType: {
      Private: 0,
      FriendsOnly: 1,
      Public: 2,
      Invisible: 3,
      PrivateUnique: 4,
    };
    ELobbyComparison: {
      EqualToOrLessThan: -2,
      LessThan: -1,
      Equal: 0,
      GreaterThan: 1,
      EqualToOrGreaterThan: 2,
      NotEqual: 3,
    };
    ELobbyDistanceFilter: {
      Close: 0,
      Default: 1,
      Far: 2,
      Worldwide: 3,
    };
    EChatMemberStateChange: {
      Entered: 1,
      Left: 2,
      Disconnected: 4,
      Kicked: 8,
      Banned: 16,
    };
    ESteamPartyBeaconLocationType: {
      Invalid: 0,
      ChatGroup: 1,
      Max: 2,
    };
    ESteamPartyBeaconLocationData: {
      Invalid: 0,
      Name: 1,
      IconURLSmall: 2,
      IconURLMedium: 3,
      IconURLLarge: 4,
    };
    ELeaderboardDataRequest: {
      Global: 0,
      GlobalAroundUser: 1,
      Friends: 2,
      Users: 3,
    };
    ELeaderboardSortMethod: {
      None: 0,
      Ascending: 1,
      Descending: 2,
    };
    ELeaderboardDisplayType: {
      None: 0,
      Numeric: 1,
      TimeSeconds: 2,
      TimeMilliSeconds: 3,
    };
    ELeaderboardUploadScoreMethod: {
      None: 0,
      KeepBest: 1,
      ForceUpdate: 2,
    };
    ERegisterActivationCodeResult: {
      OK: 0,
      Fail: 1,
      AlreadyRegistered: 2,
      Timeout: 3,
      ERegisterActivationCodeAlreadyOwned: 4,
    };
    EP2PSessionError: {
      None: 0,
      NoRightsToApp: 2,
      Timeout: 4,
      NotRunningApp_DELETED: 1,
      DestinationNotLoggedIn_DELETED: 3,
      Max: 5,
    };
    EP2PSend: {
      Unreliable: 0,
      UnreliableNoDelay: 1,
      Reliable: 2,
      ReliableWithBuffering: 3,
    };
    ESNetSocketState: {
      Invalid: 0,
      Connected: 1,
      Initiated: 10,
      LocalCandidatesFound: 11,
      ReceivedRemoteCandidates: 12,
      ChallengeHandshake: 15,
      Disconnecting: 21,
      LocalDisconnect: 22,
      TimeoutDuringConnect: 23,
      RemoteEndDisconnected: 24,
      ConnectionBroken: 25,
    };
    ESNetSocketConnectionType: {
      NotConnected: 0,
      UDP: 1,
      UDPRelay: 2,
    };
    ERemoteStoragePlatform: {
      None: 0,
      Windows: 1,
      OSX: 2,
      PS3: 4,
      Linux: 8,
      Switch: 16,
      Android: 32,
      IOS: 64,
      All: -1,
    };
    ERemoteStoragePublishedFileVisibility: {
      Public: 0,
      FriendsOnly: 1,
      Private: 2,
      Unlisted: 3,
    };
    EWorkshopFileType: {
      First: 0,
      Community: 0,
      Microtransaction: 1,
      Collection: 2,
      Art: 3,
      Video: 4,
      Screenshot: 5,
      Game: 6,
      Software: 7,
      Concept: 8,
      WebGuide: 9,
      IntegratedGuide: 10,
      Merch: 11,
      ControllerBinding: 12,
      SteamworksAccessInvite: 13,
      SteamVideo: 14,
      GameManagedItem: 15,
      Max: 16,
    };
    EWorkshopVote: {
      Unvoted: 0,
      For: 1,
      Against: 2,
      Later: 3,
    };
    EWorkshopFileAction: {
      Played: 0,
      Completed: 1,
    };
    EWorkshopEnumerationType: {
      RankedByVote: 0,
      Recent: 1,
      Trending: 2,
      FavoritesOfFriends: 3,
      VotedByFriends: 4,
      ContentByFriends: 5,
      RecentFromFollowedUsers: 6,
    };
    EWorkshopVideoProvider: {
      None: 0,
      Youtube: 1,
    };
    ERemoteStorageLocalFileChange: {
      Invalid: 0,
      FileUpdated: 1,
      FileDeleted: 2,
    };
    ERemoteStorageFilePathType: {
      Invalid: 0,
      Absolute: 1,
      APIFilename: 2,
    };
    EVRScreenshotType: {
      None: 0,
      Mono: 1,
      Stereo: 2,
      MonoCubemap: 3,
      MonoPanorama: 4,
      StereoPanorama: 5,
    };
    ESteamControllerPad: {
      Left: 0,
      Right: 1,
    };
    EControllerActionOrigin: {
      None: 0,
      A: 1,
      B: 2,
      X: 3,
      Y: 4,
      LeftBumper: 5,
      RightBumper: 6,
      LeftGrip: 7,
      RightGrip: 8,
      Start: 9,
      Back: 10,
      LeftPad_Touch: 11,
      LeftPad_Swipe: 12,
      LeftPad_Click: 13,
      LeftPad_DPadNorth: 14,
      LeftPad_DPadSouth: 15,
      LeftPad_DPadWest: 16,
      LeftPad_DPadEast: 17,
      RightPad_Touch: 18,
      RightPad_Swipe: 19,
      RightPad_Click: 20,
      RightPad_DPadNorth: 21,
      RightPad_DPadSouth: 22,
      RightPad_DPadWest: 23,
      RightPad_DPadEast: 24,
      LeftTrigger_Pull: 25,
      LeftTrigger_Click: 26,
      RightTrigger_Pull: 27,
      RightTrigger_Click: 28,
      LeftStick_Move: 29,
      LeftStick_Click: 30,
      LeftStick_DPadNorth: 31,
      LeftStick_DPadSouth: 32,
      LeftStick_DPadWest: 33,
      LeftStick_DPadEast: 34,
      Gyro_Move: 35,
      Gyro_Pitch: 36,
      Gyro_Yaw: 37,
      Gyro_Roll: 38,
      PS4_X: 39,
      PS4_Circle: 40,
      PS4_Triangle: 41,
      PS4_Square: 42,
      PS4_LeftBumper: 43,
      PS4_RightBumper: 44,
      PS4_Options: 45,
      PS4_Share: 46,
      PS4_LeftPad_Touch: 47,
      PS4_LeftPad_Swipe: 48,
      PS4_LeftPad_Click: 49,
      PS4_LeftPad_DPadNorth: 50,
      PS4_LeftPad_DPadSouth: 51,
      PS4_LeftPad_DPadWest: 52,
      PS4_LeftPad_DPadEast: 53,
      PS4_RightPad_Touch: 54,
      PS4_RightPad_Swipe: 55,
      PS4_RightPad_Click: 56,
      PS4_RightPad_DPadNorth: 57,
      PS4_RightPad_DPadSouth: 58,
      PS4_RightPad_DPadWest: 59,
      PS4_RightPad_DPadEast: 60,
      PS4_CenterPad_Touch: 61,
      PS4_CenterPad_Swipe: 62,
      PS4_CenterPad_Click: 63,
      PS4_CenterPad_DPadNorth: 64,
      PS4_CenterPad_DPadSouth: 65,
      PS4_CenterPad_DPadWest: 66,
      PS4_CenterPad_DPadEast: 67,
      PS4_LeftTrigger_Pull: 68,
      PS4_LeftTrigger_Click: 69,
      PS4_RightTrigger_Pull: 70,
      PS4_RightTrigger_Click: 71,
      PS4_LeftStick_Move: 72,
      PS4_LeftStick_Click: 73,
      PS4_LeftStick_DPadNorth: 74,
      PS4_LeftStick_DPadSouth: 75,
      PS4_LeftStick_DPadWest: 76,
      PS4_LeftStick_DPadEast: 77,
      PS4_RightStick_Move: 78,
      PS4_RightStick_Click: 79,
      PS4_RightStick_DPadNorth: 80,
      PS4_RightStick_DPadSouth: 81,
      PS4_RightStick_DPadWest: 82,
      PS4_RightStick_DPadEast: 83,
      PS4_DPad_North: 84,
      PS4_DPad_South: 85,
      PS4_DPad_West: 86,
      PS4_DPad_East: 87,
      PS4_Gyro_Move: 88,
      PS4_Gyro_Pitch: 89,
      PS4_Gyro_Yaw: 90,
      PS4_Gyro_Roll: 91,
      XBoxOne_A: 92,
      XBoxOne_B: 93,
      XBoxOne_X: 94,
      XBoxOne_Y: 95,
      XBoxOne_LeftBumper: 96,
      XBoxOne_RightBumper: 97,
      XBoxOne_Menu: 98,
      XBoxOne_View: 99,
      XBoxOne_LeftTrigger_Pull: 100,
      XBoxOne_LeftTrigger_Click: 101,
      XBoxOne_RightTrigger_Pull: 102,
      XBoxOne_RightTrigger_Click: 103,
      XBoxOne_LeftStick_Move: 104,
      XBoxOne_LeftStick_Click: 105,
      XBoxOne_LeftStick_DPadNorth: 106,
      XBoxOne_LeftStick_DPadSouth: 107,
      XBoxOne_LeftStick_DPadWest: 108,
      XBoxOne_LeftStick_DPadEast: 109,
      XBoxOne_RightStick_Move: 110,
      XBoxOne_RightStick_Click: 111,
      XBoxOne_RightStick_DPadNorth: 112,
      XBoxOne_RightStick_DPadSouth: 113,
      XBoxOne_RightStick_DPadWest: 114,
      XBoxOne_RightStick_DPadEast: 115,
      XBoxOne_DPad_North: 116,
      XBoxOne_DPad_South: 117,
      XBoxOne_DPad_West: 118,
      XBoxOne_DPad_East: 119,
      XBox360_A: 120,
      XBox360_B: 121,
      XBox360_X: 122,
      XBox360_Y: 123,
      XBox360_LeftBumper: 124,
      XBox360_RightBumper: 125,
      XBox360_Start: 126,
      XBox360_Back: 127,
      XBox360_LeftTrigger_Pull: 128,
      XBox360_LeftTrigger_Click: 129,
      XBox360_RightTrigger_Pull: 130,
      XBox360_RightTrigger_Click: 131,
      XBox360_LeftStick_Move: 132,
      XBox360_LeftStick_Click: 133,
      XBox360_LeftStick_DPadNorth: 134,
      XBox360_LeftStick_DPadSouth: 135,
      XBox360_LeftStick_DPadWest: 136,
      XBox360_LeftStick_DPadEast: 137,
      XBox360_RightStick_Move: 138,
      XBox360_RightStick_Click: 139,
      XBox360_RightStick_DPadNorth: 140,
      XBox360_RightStick_DPadSouth: 141,
      XBox360_RightStick_DPadWest: 142,
      XBox360_RightStick_DPadEast: 143,
      XBox360_DPad_North: 144,
      XBox360_DPad_South: 145,
      XBox360_DPad_West: 146,
      XBox360_DPad_East: 147,
      SteamV2_A: 148,
      SteamV2_B: 149,
      SteamV2_X: 150,
      SteamV2_Y: 151,
      SteamV2_LeftBumper: 152,
      SteamV2_RightBumper: 153,
      SteamV2_LeftGrip_Lower: 154,
      SteamV2_LeftGrip_Upper: 155,
      SteamV2_RightGrip_Lower: 156,
      SteamV2_RightGrip_Upper: 157,
      SteamV2_LeftBumper_Pressure: 158,
      SteamV2_RightBumper_Pressure: 159,
      SteamV2_LeftGrip_Pressure: 160,
      SteamV2_RightGrip_Pressure: 161,
      SteamV2_LeftGrip_Upper_Pressure: 162,
      SteamV2_RightGrip_Upper_Pressure: 163,
      SteamV2_Start: 164,
      SteamV2_Back: 165,
      SteamV2_LeftPad_Touch: 166,
      SteamV2_LeftPad_Swipe: 167,
      SteamV2_LeftPad_Click: 168,
      SteamV2_LeftPad_Pressure: 169,
      SteamV2_LeftPad_DPadNorth: 170,
      SteamV2_LeftPad_DPadSouth: 171,
      SteamV2_LeftPad_DPadWest: 172,
      SteamV2_LeftPad_DPadEast: 173,
      SteamV2_RightPad_Touch: 174,
      SteamV2_RightPad_Swipe: 175,
      SteamV2_RightPad_Click: 176,
      SteamV2_RightPad_Pressure: 177,
      SteamV2_RightPad_DPadNorth: 178,
      SteamV2_RightPad_DPadSouth: 179,
      SteamV2_RightPad_DPadWest: 180,
      SteamV2_RightPad_DPadEast: 181,
      SteamV2_LeftTrigger_Pull: 182,
      SteamV2_LeftTrigger_Click: 183,
      SteamV2_RightTrigger_Pull: 184,
      SteamV2_RightTrigger_Click: 185,
      SteamV2_LeftStick_Move: 186,
      SteamV2_LeftStick_Click: 187,
      SteamV2_LeftStick_DPadNorth: 188,
      SteamV2_LeftStick_DPadSouth: 189,
      SteamV2_LeftStick_DPadWest: 190,
      SteamV2_LeftStick_DPadEast: 191,
      SteamV2_Gyro_Move: 192,
      SteamV2_Gyro_Pitch: 193,
      SteamV2_Gyro_Yaw: 194,
      SteamV2_Gyro_Roll: 195,
      Switch_A: 196,
      Switch_B: 197,
      Switch_X: 198,
      Switch_Y: 199,
      Switch_LeftBumper: 200,
      Switch_RightBumper: 201,
      Switch_Plus: 202,
      Switch_Minus: 203,
      Switch_Capture: 204,
      Switch_LeftTrigger_Pull: 205,
      Switch_LeftTrigger_Click: 206,
      Switch_RightTrigger_Pull: 207,
      Switch_RightTrigger_Click: 208,
      Switch_LeftStick_Move: 209,
      Switch_LeftStick_Click: 210,
      Switch_LeftStick_DPadNorth: 211,
      Switch_LeftStick_DPadSouth: 212,
      Switch_LeftStick_DPadWest: 213,
      Switch_LeftStick_DPadEast: 214,
      Switch_RightStick_Move: 215,
      Switch_RightStick_Click: 216,
      Switch_RightStick_DPadNorth: 217,
      Switch_RightStick_DPadSouth: 218,
      Switch_RightStick_DPadWest: 219,
      Switch_RightStick_DPadEast: 220,
      Switch_DPad_North: 221,
      Switch_DPad_South: 222,
      Switch_DPad_West: 223,
      Switch_DPad_East: 224,
      Switch_ProGyro_Move: 225,
      Switch_ProGyro_Pitch: 226,
      Switch_ProGyro_Yaw: 227,
      Switch_ProGyro_Roll: 228,
      Switch_RightGyro_Move: 229,
      Switch_RightGyro_Pitch: 230,
      Switch_RightGyro_Yaw: 231,
      Switch_RightGyro_Roll: 232,
      Switch_LeftGyro_Move: 233,
      Switch_LeftGyro_Pitch: 234,
      Switch_LeftGyro_Yaw: 235,
      Switch_LeftGyro_Roll: 236,
      Switch_LeftGrip_Lower: 237,
      Switch_LeftGrip_Upper: 238,
      Switch_RightGrip_Lower: 239,
      Switch_RightGrip_Upper: 240,
      PS4_DPad_Move: 241,
      XBoxOne_DPad_Move: 242,
      XBox360_DPad_Move: 243,
      Switch_DPad_Move: 244,
      PS5_X: 245,
      PS5_Circle: 246,
      PS5_Triangle: 247,
      PS5_Square: 248,
      PS5_LeftBumper: 249,
      PS5_RightBumper: 250,
      PS5_Option: 251,
      PS5_Create: 252,
      PS5_Mute: 253,
      PS5_LeftPad_Touch: 254,
      PS5_LeftPad_Swipe: 255,
      PS5_LeftPad_Click: 256,
      PS5_LeftPad_DPadNorth: 257,
      PS5_LeftPad_DPadSouth: 258,
      PS5_LeftPad_DPadWest: 259,
      PS5_LeftPad_DPadEast: 260,
      PS5_RightPad_Touch: 261,
      PS5_RightPad_Swipe: 262,
      PS5_RightPad_Click: 263,
      PS5_RightPad_DPadNorth: 264,
      PS5_RightPad_DPadSouth: 265,
      PS5_RightPad_DPadWest: 266,
      PS5_RightPad_DPadEast: 267,
      PS5_CenterPad_Touch: 268,
      PS5_CenterPad_Swipe: 269,
      PS5_CenterPad_Click: 270,
      PS5_CenterPad_DPadNorth: 271,
      PS5_CenterPad_DPadSouth: 272,
      PS5_CenterPad_DPadWest: 273,
      PS5_CenterPad_DPadEast: 274,
      PS5_LeftTrigger_Pull: 275,
      PS5_LeftTrigger_Click: 276,
      PS5_RightTrigger_Pull: 277,
      PS5_RightTrigger_Click: 278,
      PS5_LeftStick_Move: 279,
      PS5_LeftStick_Click: 280,
      PS5_LeftStick_DPadNorth: 281,
      PS5_LeftStick_DPadSouth: 282,
      PS5_LeftStick_DPadWest: 283,
      PS5_LeftStick_DPadEast: 284,
      PS5_RightStick_Move: 285,
      PS5_RightStick_Click: 286,
      PS5_RightStick_DPadNorth: 287,
      PS5_RightStick_DPadSouth: 288,
      PS5_RightStick_DPadWest: 289,
      PS5_RightStick_DPadEast: 290,
      PS5_DPad_Move: 291,
      PS5_DPad_North: 292,
      PS5_DPad_South: 293,
      PS5_DPad_West: 294,
      PS5_DPad_East: 295,
      PS5_Gyro_Move: 296,
      PS5_Gyro_Pitch: 297,
      PS5_Gyro_Yaw: 298,
      PS5_Gyro_Roll: 299,
      XBoxOne_LeftGrip_Lower: 300,
      XBoxOne_LeftGrip_Upper: 301,
      XBoxOne_RightGrip_Lower: 302,
      XBoxOne_RightGrip_Upper: 303,
      XBoxOne_Share: 304,
      SteamDeck_A: 305,
      SteamDeck_B: 306,
      SteamDeck_X: 307,
      SteamDeck_Y: 308,
      SteamDeck_L1: 309,
      SteamDeck_R1: 310,
      SteamDeck_Menu: 311,
      SteamDeck_View: 312,
      SteamDeck_LeftPad_Touch: 313,
      SteamDeck_LeftPad_Swipe: 314,
      SteamDeck_LeftPad_Click: 315,
      SteamDeck_LeftPad_DPadNorth: 316,
      SteamDeck_LeftPad_DPadSouth: 317,
      SteamDeck_LeftPad_DPadWest: 318,
      SteamDeck_LeftPad_DPadEast: 319,
      SteamDeck_RightPad_Touch: 320,
      SteamDeck_RightPad_Swipe: 321,
      SteamDeck_RightPad_Click: 322,
      SteamDeck_RightPad_DPadNorth: 323,
      SteamDeck_RightPad_DPadSouth: 324,
      SteamDeck_RightPad_DPadWest: 325,
      SteamDeck_RightPad_DPadEast: 326,
      SteamDeck_L2_SoftPull: 327,
      SteamDeck_L2: 328,
      SteamDeck_R2_SoftPull: 329,
      SteamDeck_R2: 330,
      SteamDeck_LeftStick_Move: 331,
      SteamDeck_L3: 332,
      SteamDeck_LeftStick_DPadNorth: 333,
      SteamDeck_LeftStick_DPadSouth: 334,
      SteamDeck_LeftStick_DPadWest: 335,
      SteamDeck_LeftStick_DPadEast: 336,
      SteamDeck_LeftStick_Touch: 337,
      SteamDeck_RightStick_Move: 338,
      SteamDeck_R3: 339,
      SteamDeck_RightStick_DPadNorth: 340,
      SteamDeck_RightStick_DPadSouth: 341,
      SteamDeck_RightStick_DPadWest: 342,
      SteamDeck_RightStick_DPadEast: 343,
      SteamDeck_RightStick_Touch: 344,
      SteamDeck_L4: 345,
      SteamDeck_R4: 346,
      SteamDeck_L5: 347,
      SteamDeck_R5: 348,
      SteamDeck_DPad_Move: 349,
      SteamDeck_DPad_North: 350,
      SteamDeck_DPad_South: 351,
      SteamDeck_DPad_West: 352,
      SteamDeck_DPad_East: 353,
      SteamDeck_Gyro_Move: 354,
      SteamDeck_Gyro_Pitch: 355,
      SteamDeck_Gyro_Yaw: 356,
      SteamDeck_Gyro_Roll: 357,
      SteamDeck_Reserved1: 358,
      SteamDeck_Reserved2: 359,
      SteamDeck_Reserved3: 360,
      SteamDeck_Reserved4: 361,
      SteamDeck_Reserved5: 362,
      SteamDeck_Reserved6: 363,
      SteamDeck_Reserved7: 364,
      SteamDeck_Reserved8: 365,
      SteamDeck_Reserved9: 366,
      SteamDeck_Reserved10: 367,
      SteamDeck_Reserved11: 368,
      SteamDeck_Reserved12: 369,
      SteamDeck_Reserved13: 370,
      SteamDeck_Reserved14: 371,
      SteamDeck_Reserved15: 372,
      SteamDeck_Reserved16: 373,
      SteamDeck_Reserved17: 374,
      SteamDeck_Reserved18: 375,
      SteamDeck_Reserved19: 376,
      SteamDeck_Reserved20: 377,
      Count: 378,
      MaximumPossibleValue: 32767,
    };
    EXboxOrigin: {
      A: 0,
      B: 1,
      X: 2,
      Y: 3,
      LeftBumper: 4,
      RightBumper: 5,
      Menu: 6,
      View: 7,
      LeftTrigger_Pull: 8,
      LeftTrigger_Click: 9,
      RightTrigger_Pull: 10,
      RightTrigger_Click: 11,
      LeftStick_Move: 12,
      LeftStick_Click: 13,
      LeftStick_DPadNorth: 14,
      LeftStick_DPadSouth: 15,
      LeftStick_DPadWest: 16,
      LeftStick_DPadEast: 17,
      RightStick_Move: 18,
      RightStick_Click: 19,
      RightStick_DPadNorth: 20,
      RightStick_DPadSouth: 21,
      RightStick_DPadWest: 22,
      RightStick_DPadEast: 23,
      DPad_North: 24,
      DPad_South: 25,
      DPad_West: 26,
      DPad_East: 27,
      Count: 28,
    };
    ESteamInputType: {
      Unknown: 0,
      SteamController: 1,
      XBox360Controller: 2,
      XBoxOneController: 3,
      GenericGamepad: 4,
      PS4Controller: 5,
      AppleMFiController: 6,
      AndroidController: 7,
      SwitchJoyConPair: 8,
      SwitchJoyConSingle: 9,
      SwitchProController: 10,
      MobileTouch: 11,
      PS3Controller: 12,
      PS5Controller: 13,
      SteamDeckController: 14,
      Count: 15,
      MaximumPossibleValue: 255,
    };
    ESteamControllerLEDFlag: {
      SetColor: 0,
      RestoreUserDefault: 1,
    };
    EUGCMatchingUGCType: {
      Items: 0,
      Items_Mtx: 1,
      Items_ReadyToUse: 2,
      Collections: 3,
      Artwork: 4,
      Videos: 5,
      Screenshots: 6,
      AllGuides: 7,
      WebGuides: 8,
      IntegratedGuides: 9,
      UsableInGame: 10,
      ControllerBindings: 11,
      GameManagedItems: 12,
      All: -1,
    };
    EUserUGCList: {
      Published: 0,
      VotedOn: 1,
      VotedUp: 2,
      VotedDown: 3,
      WillVoteLater: 4,
      Favorited: 5,
      Subscribed: 6,
      UsedOrPlayed: 7,
      Followed: 8,
    };
    EUserUGCListSortOrder: {
      CreationOrderDesc: 0,
      CreationOrderAsc: 1,
      TitleAsc: 2,
      LastUpdatedDesc: 3,
      SubscriptionDateDesc: 4,
      VoteScoreDesc: 5,
      ForModeration: 6,
    };
    EUGCQuery: {
      RankedByVote: 0,
      RankedByPublicationDate: 1,
      AcceptedForGameRankedByAcceptanceDate: 2,
      RankedByTrend: 3,
      FavoritedByFriendsRankedByPublicationDate: 4,
      CreatedByFriendsRankedByPublicationDate: 5,
      RankedByNumTimesReported: 6,
      CreatedByFollowedUsersRankedByPublicationDate: 7,
      NotYetRated: 8,
      RankedByTotalVotesAsc: 9,
      RankedByVotesUp: 10,
      RankedByTextSearch: 11,
      RankedByTotalUniqueSubscriptions: 12,
      RankedByPlaytimeTrend: 13,
      RankedByTotalPlaytime: 14,
      RankedByAveragePlaytimeTrend: 15,
      RankedByLifetimeAveragePlaytime: 16,
      RankedByPlaytimeSessionsTrend: 17,
      RankedByLifetimePlaytimeSessions: 18,
      RankedByLastUpdatedDate: 19,
    };
    EItemUpdateStatus: {
      Invalid: 0,
      PreparingConfig: 1,
      PreparingContent: 2,
      UploadingContent: 3,
      UploadingPreviewFile: 4,
      CommittingChanges: 5,
    };
    EItemState: {
      None: 0,
      Subscribed: 1,
      LegacyItem: 2,
      Installed: 4,
      NeedsUpdate: 8,
      Downloading: 16,
      DownloadPending: 32,
    };
    EItemStatistic: {
      NumSubscriptions: 0,
      NumFavorites: 1,
      NumFollowers: 2,
      NumUniqueSubscriptions: 3,
      NumUniqueFavorites: 4,
      NumUniqueFollowers: 5,
      NumUniqueWebsiteViews: 6,
      ReportScore: 7,
      NumSecondsPlayed: 8,
      NumPlaytimeSessions: 9,
      NumComments: 10,
      NumSecondsPlayedDuringTimePeriod: 11,
      NumPlaytimeSessionsDuringTimePeriod: 12,
    };
    EItemPreviewType: {
      Image: 0,
      YouTubeVideo: 1,
      Sketchfab: 2,
      EnvironmentMap_HorizontalCross: 3,
      EnvironmentMap_LatLong: 4,
      ReservedMax: 255,
    };
    EInputSourceMode: {
      None: 0,
      Dpad: 1,
      Buttons: 2,
      FourButtons: 3,
      AbsoluteMouse: 4,
      RelativeMouse: 5,
      JoystickMove: 6,
      JoystickMouse: 7,
      JoystickCamera: 8,
      ScrollWheel: 9,
      Trigger: 10,
      TouchMenu: 11,
      MouseJoystick: 12,
      MouseRegion: 13,
      RadialMenu: 14,
      SingleButton: 15,
      Switches: 16,
    };
    EInputActionOrigin: {
      None: 0,
      SteamController_A: 1,
      SteamController_B: 2,
      SteamController_X: 3,
      SteamController_Y: 4,
      SteamController_LeftBumper: 5,
      SteamController_RightBumper: 6,
      SteamController_LeftGrip: 7,
      SteamController_RightGrip: 8,
      SteamController_Start: 9,
      SteamController_Back: 10,
      SteamController_LeftPad_Touch: 11,
      SteamController_LeftPad_Swipe: 12,
      SteamController_LeftPad_Click: 13,
      SteamController_LeftPad_DPadNorth: 14,
      SteamController_LeftPad_DPadSouth: 15,
      SteamController_LeftPad_DPadWest: 16,
      SteamController_LeftPad_DPadEast: 17,
      SteamController_RightPad_Touch: 18,
      SteamController_RightPad_Swipe: 19,
      SteamController_RightPad_Click: 20,
      SteamController_RightPad_DPadNorth: 21,
      SteamController_RightPad_DPadSouth: 22,
      SteamController_RightPad_DPadWest: 23,
      SteamController_RightPad_DPadEast: 24,
      SteamController_LeftTrigger_Pull: 25,
      SteamController_LeftTrigger_Click: 26,
      SteamController_RightTrigger_Pull: 27,
      SteamController_RightTrigger_Click: 28,
      SteamController_LeftStick_Move: 29,
      SteamController_LeftStick_Click: 30,
      SteamController_LeftStick_DPadNorth: 31,
      SteamController_LeftStick_DPadSouth: 32,
      SteamController_LeftStick_DPadWest: 33,
      SteamController_LeftStick_DPadEast: 34,
      SteamController_Gyro_Move: 35,
      SteamController_Gyro_Pitch: 36,
      SteamController_Gyro_Yaw: 37,
      SteamController_Gyro_Roll: 38,
      SteamController_Reserved0: 39,
      SteamController_Reserved1: 40,
      SteamController_Reserved2: 41,
      SteamController_Reserved3: 42,
      SteamController_Reserved4: 43,
      SteamController_Reserved5: 44,
      SteamController_Reserved6: 45,
      SteamController_Reserved7: 46,
      SteamController_Reserved8: 47,
      SteamController_Reserved9: 48,
      SteamController_Reserved10: 49,
      PS4_X: 50,
      PS4_Circle: 51,
      PS4_Triangle: 52,
      PS4_Square: 53,
      PS4_LeftBumper: 54,
      PS4_RightBumper: 55,
      PS4_Options: 56,
      PS4_Share: 57,
      PS4_LeftPad_Touch: 58,
      PS4_LeftPad_Swipe: 59,
      PS4_LeftPad_Click: 60,
      PS4_LeftPad_DPadNorth: 61,
      PS4_LeftPad_DPadSouth: 62,
      PS4_LeftPad_DPadWest: 63,
      PS4_LeftPad_DPadEast: 64,
      PS4_RightPad_Touch: 65,
      PS4_RightPad_Swipe: 66,
      PS4_RightPad_Click: 67,
      PS4_RightPad_DPadNorth: 68,
      PS4_RightPad_DPadSouth: 69,
      PS4_RightPad_DPadWest: 70,
      PS4_RightPad_DPadEast: 71,
      PS4_CenterPad_Touch: 72,
      PS4_CenterPad_Swipe: 73,
      PS4_CenterPad_Click: 74,
      PS4_CenterPad_DPadNorth: 75,
      PS4_CenterPad_DPadSouth: 76,
      PS4_CenterPad_DPadWest: 77,
      PS4_CenterPad_DPadEast: 78,
      PS4_LeftTrigger_Pull: 79,
      PS4_LeftTrigger_Click: 80,
      PS4_RightTrigger_Pull: 81,
      PS4_RightTrigger_Click: 82,
      PS4_LeftStick_Move: 83,
      PS4_LeftStick_Click: 84,
      PS4_LeftStick_DPadNorth: 85,
      PS4_LeftStick_DPadSouth: 86,
      PS4_LeftStick_DPadWest: 87,
      PS4_LeftStick_DPadEast: 88,
      PS4_RightStick_Move: 89,
      PS4_RightStick_Click: 90,
      PS4_RightStick_DPadNorth: 91,
      PS4_RightStick_DPadSouth: 92,
      PS4_RightStick_DPadWest: 93,
      PS4_RightStick_DPadEast: 94,
      PS4_DPad_North: 95,
      PS4_DPad_South: 96,
      PS4_DPad_West: 97,
      PS4_DPad_East: 98,
      PS4_Gyro_Move: 99,
      PS4_Gyro_Pitch: 100,
      PS4_Gyro_Yaw: 101,
      PS4_Gyro_Roll: 102,
      PS4_DPad_Move: 103,
      PS4_Reserved1: 104,
      PS4_Reserved2: 105,
      PS4_Reserved3: 106,
      PS4_Reserved4: 107,
      PS4_Reserved5: 108,
      PS4_Reserved6: 109,
      PS4_Reserved7: 110,
      PS4_Reserved8: 111,
      PS4_Reserved9: 112,
      PS4_Reserved10: 113,
      XBoxOne_A: 114,
      XBoxOne_B: 115,
      XBoxOne_X: 116,
      XBoxOne_Y: 117,
      XBoxOne_LeftBumper: 118,
      XBoxOne_RightBumper: 119,
      XBoxOne_Menu: 120,
      XBoxOne_View: 121,
      XBoxOne_LeftTrigger_Pull: 122,
      XBoxOne_LeftTrigger_Click: 123,
      XBoxOne_RightTrigger_Pull: 124,
      XBoxOne_RightTrigger_Click: 125,
      XBoxOne_LeftStick_Move: 126,
      XBoxOne_LeftStick_Click: 127,
      XBoxOne_LeftStick_DPadNorth: 128,
      XBoxOne_LeftStick_DPadSouth: 129,
      XBoxOne_LeftStick_DPadWest: 130,
      XBoxOne_LeftStick_DPadEast: 131,
      XBoxOne_RightStick_Move: 132,
      XBoxOne_RightStick_Click: 133,
      XBoxOne_RightStick_DPadNorth: 134,
      XBoxOne_RightStick_DPadSouth: 135,
      XBoxOne_RightStick_DPadWest: 136,
      XBoxOne_RightStick_DPadEast: 137,
      XBoxOne_DPad_North: 138,
      XBoxOne_DPad_South: 139,
      XBoxOne_DPad_West: 140,
      XBoxOne_DPad_East: 141,
      XBoxOne_DPad_Move: 142,
      XBoxOne_LeftGrip_Lower: 143,
      XBoxOne_LeftGrip_Upper: 144,
      XBoxOne_RightGrip_Lower: 145,
      XBoxOne_RightGrip_Upper: 146,
      XBoxOne_Share: 147,
      XBoxOne_Reserved6: 148,
      XBoxOne_Reserved7: 149,
      XBoxOne_Reserved8: 150,
      XBoxOne_Reserved9: 151,
      XBoxOne_Reserved10: 152,
      XBox360_A: 153,
      XBox360_B: 154,
      XBox360_X: 155,
      XBox360_Y: 156,
      XBox360_LeftBumper: 157,
      XBox360_RightBumper: 158,
      XBox360_Start: 159,
      XBox360_Back: 160,
      XBox360_LeftTrigger_Pull: 161,
      XBox360_LeftTrigger_Click: 162,
      XBox360_RightTrigger_Pull: 163,
      XBox360_RightTrigger_Click: 164,
      XBox360_LeftStick_Move: 165,
      XBox360_LeftStick_Click: 166,
      XBox360_LeftStick_DPadNorth: 167,
      XBox360_LeftStick_DPadSouth: 168,
      XBox360_LeftStick_DPadWest: 169,
      XBox360_LeftStick_DPadEast: 170,
      XBox360_RightStick_Move: 171,
      XBox360_RightStick_Click: 172,
      XBox360_RightStick_DPadNorth: 173,
      XBox360_RightStick_DPadSouth: 174,
      XBox360_RightStick_DPadWest: 175,
      XBox360_RightStick_DPadEast: 176,
      XBox360_DPad_North: 177,
      XBox360_DPad_South: 178,
      XBox360_DPad_West: 179,
      XBox360_DPad_East: 180,
      XBox360_DPad_Move: 181,
      XBox360_Reserved1: 182,
      XBox360_Reserved2: 183,
      XBox360_Reserved3: 184,
      XBox360_Reserved4: 185,
      XBox360_Reserved5: 186,
      XBox360_Reserved6: 187,
      XBox360_Reserved7: 188,
      XBox360_Reserved8: 189,
      XBox360_Reserved9: 190,
      XBox360_Reserved10: 191,
      Switch_A: 192,
      Switch_B: 193,
      Switch_X: 194,
      Switch_Y: 195,
      Switch_LeftBumper: 196,
      Switch_RightBumper: 197,
      Switch_Plus: 198,
      Switch_Minus: 199,
      Switch_Capture: 200,
      Switch_LeftTrigger_Pull: 201,
      Switch_LeftTrigger_Click: 202,
      Switch_RightTrigger_Pull: 203,
      Switch_RightTrigger_Click: 204,
      Switch_LeftStick_Move: 205,
      Switch_LeftStick_Click: 206,
      Switch_LeftStick_DPadNorth: 207,
      Switch_LeftStick_DPadSouth: 208,
      Switch_LeftStick_DPadWest: 209,
      Switch_LeftStick_DPadEast: 210,
      Switch_RightStick_Move: 211,
      Switch_RightStick_Click: 212,
      Switch_RightStick_DPadNorth: 213,
      Switch_RightStick_DPadSouth: 214,
      Switch_RightStick_DPadWest: 215,
      Switch_RightStick_DPadEast: 216,
      Switch_DPad_North: 217,
      Switch_DPad_South: 218,
      Switch_DPad_West: 219,
      Switch_DPad_East: 220,
      Switch_ProGyro_Move: 221,
      Switch_ProGyro_Pitch: 222,
      Switch_ProGyro_Yaw: 223,
      Switch_ProGyro_Roll: 224,
      Switch_DPad_Move: 225,
      Switch_Reserved1: 226,
      Switch_Reserved2: 227,
      Switch_Reserved3: 228,
      Switch_Reserved4: 229,
      Switch_Reserved5: 230,
      Switch_Reserved6: 231,
      Switch_Reserved7: 232,
      Switch_Reserved8: 233,
      Switch_Reserved9: 234,
      Switch_Reserved10: 235,
      Switch_RightGyro_Move: 236,
      Switch_RightGyro_Pitch: 237,
      Switch_RightGyro_Yaw: 238,
      Switch_RightGyro_Roll: 239,
      Switch_LeftGyro_Move: 240,
      Switch_LeftGyro_Pitch: 241,
      Switch_LeftGyro_Yaw: 242,
      Switch_LeftGyro_Roll: 243,
      Switch_LeftGrip_Lower: 244,
      Switch_LeftGrip_Upper: 245,
      Switch_RightGrip_Lower: 246,
      Switch_RightGrip_Upper: 247,
      Switch_Reserved11: 248,
      Switch_Reserved12: 249,
      Switch_Reserved13: 250,
      Switch_Reserved14: 251,
      Switch_Reserved15: 252,
      Switch_Reserved16: 253,
      Switch_Reserved17: 254,
      Switch_Reserved18: 255,
      Switch_Reserved19: 256,
      Switch_Reserved20: 257,
      PS5_X: 258,
      PS5_Circle: 259,
      PS5_Triangle: 260,
      PS5_Square: 261,
      PS5_LeftBumper: 262,
      PS5_RightBumper: 263,
      PS5_Option: 264,
      PS5_Create: 265,
      PS5_Mute: 266,
      PS5_LeftPad_Touch: 267,
      PS5_LeftPad_Swipe: 268,
      PS5_LeftPad_Click: 269,
      PS5_LeftPad_DPadNorth: 270,
      PS5_LeftPad_DPadSouth: 271,
      PS5_LeftPad_DPadWest: 272,
      PS5_LeftPad_DPadEast: 273,
      PS5_RightPad_Touch: 274,
      PS5_RightPad_Swipe: 275,
      PS5_RightPad_Click: 276,
      PS5_RightPad_DPadNorth: 277,
      PS5_RightPad_DPadSouth: 278,
      PS5_RightPad_DPadWest: 279,
      PS5_RightPad_DPadEast: 280,
      PS5_CenterPad_Touch: 281,
      PS5_CenterPad_Swipe: 282,
      PS5_CenterPad_Click: 283,
      PS5_CenterPad_DPadNorth: 284,
      PS5_CenterPad_DPadSouth: 285,
      PS5_CenterPad_DPadWest: 286,
      PS5_CenterPad_DPadEast: 287,
      PS5_LeftTrigger_Pull: 288,
      PS5_LeftTrigger_Click: 289,
      PS5_RightTrigger_Pull: 290,
      PS5_RightTrigger_Click: 291,
      PS5_LeftStick_Move: 292,
      PS5_LeftStick_Click: 293,
      PS5_LeftStick_DPadNorth: 294,
      PS5_LeftStick_DPadSouth: 295,
      PS5_LeftStick_DPadWest: 296,
      PS5_LeftStick_DPadEast: 297,
      PS5_RightStick_Move: 298,
      PS5_RightStick_Click: 299,
      PS5_RightStick_DPadNorth: 300,
      PS5_RightStick_DPadSouth: 301,
      PS5_RightStick_DPadWest: 302,
      PS5_RightStick_DPadEast: 303,
      PS5_DPad_North: 304,
      PS5_DPad_South: 305,
      PS5_DPad_West: 306,
      PS5_DPad_East: 307,
      PS5_Gyro_Move: 308,
      PS5_Gyro_Pitch: 309,
      PS5_Gyro_Yaw: 310,
      PS5_Gyro_Roll: 311,
      PS5_DPad_Move: 312,
      PS5_Reserved1: 313,
      PS5_Reserved2: 314,
      PS5_Reserved3: 315,
      PS5_Reserved4: 316,
      PS5_Reserved5: 317,
      PS5_Reserved6: 318,
      PS5_Reserved7: 319,
      PS5_Reserved8: 320,
      PS5_Reserved9: 321,
      PS5_Reserved10: 322,
      PS5_Reserved11: 323,
      PS5_Reserved12: 324,
      PS5_Reserved13: 325,
      PS5_Reserved14: 326,
      PS5_Reserved15: 327,
      PS5_Reserved16: 328,
      PS5_Reserved17: 329,
      PS5_Reserved18: 330,
      PS5_Reserved19: 331,
      PS5_Reserved20: 332,
      SteamDeck_A: 333,
      SteamDeck_B: 334,
      SteamDeck_X: 335,
      SteamDeck_Y: 336,
      SteamDeck_L1: 337,
      SteamDeck_R1: 338,
      SteamDeck_Menu: 339,
      SteamDeck_View: 340,
      SteamDeck_LeftPad_Touch: 341,
      SteamDeck_LeftPad_Swipe: 342,
      SteamDeck_LeftPad_Click: 343,
      SteamDeck_LeftPad_DPadNorth: 344,
      SteamDeck_LeftPad_DPadSouth: 345,
      SteamDeck_LeftPad_DPadWest: 346,
      SteamDeck_LeftPad_DPadEast: 347,
      SteamDeck_RightPad_Touch: 348,
      SteamDeck_RightPad_Swipe: 349,
      SteamDeck_RightPad_Click: 350,
      SteamDeck_RightPad_DPadNorth: 351,
      SteamDeck_RightPad_DPadSouth: 352,
      SteamDeck_RightPad_DPadWest: 353,
      SteamDeck_RightPad_DPadEast: 354,
      SteamDeck_L2_SoftPull: 355,
      SteamDeck_L2: 356,
      SteamDeck_R2_SoftPull: 357,
      SteamDeck_R2: 358,
      SteamDeck_LeftStick_Move: 359,
      SteamDeck_L3: 360,
      SteamDeck_LeftStick_DPadNorth: 361,
      SteamDeck_LeftStick_DPadSouth: 362,
      SteamDeck_LeftStick_DPadWest: 363,
      SteamDeck_LeftStick_DPadEast: 364,
      SteamDeck_LeftStick_Touch: 365,
      SteamDeck_RightStick_Move: 366,
      SteamDeck_R3: 367,
      SteamDeck_RightStick_DPadNorth: 368,
      SteamDeck_RightStick_DPadSouth: 369,
      SteamDeck_RightStick_DPadWest: 370,
      SteamDeck_RightStick_DPadEast: 371,
      SteamDeck_RightStick_Touch: 372,
      SteamDeck_L4: 373,
      SteamDeck_R4: 374,
      SteamDeck_L5: 375,
      SteamDeck_R5: 376,
      SteamDeck_DPad_Move: 377,
      SteamDeck_DPad_North: 378,
      SteamDeck_DPad_South: 379,
      SteamDeck_DPad_West: 380,
      SteamDeck_DPad_East: 381,
      SteamDeck_Gyro_Move: 382,
      SteamDeck_Gyro_Pitch: 383,
      SteamDeck_Gyro_Yaw: 384,
      SteamDeck_Gyro_Roll: 385,
      SteamDeck_Reserved1: 386,
      SteamDeck_Reserved2: 387,
      SteamDeck_Reserved3: 388,
      SteamDeck_Reserved4: 389,
      SteamDeck_Reserved5: 390,
      SteamDeck_Reserved6: 391,
      SteamDeck_Reserved7: 392,
      SteamDeck_Reserved8: 393,
      SteamDeck_Reserved9: 394,
      SteamDeck_Reserved10: 395,
      SteamDeck_Reserved11: 396,
      SteamDeck_Reserved12: 397,
      SteamDeck_Reserved13: 398,
      SteamDeck_Reserved14: 399,
      SteamDeck_Reserved15: 400,
      SteamDeck_Reserved16: 401,
      SteamDeck_Reserved17: 402,
      SteamDeck_Reserved18: 403,
      SteamDeck_Reserved19: 404,
      SteamDeck_Reserved20: 405,
      Count: 406,
      MaximumPossibleValue: 32767,
    };
    EControllerHapticLocation: {
      Left: 1,
      Right: 2,
      Both: 3,
    };
    EControllerHapticType: {
      Off: 0,
      Tick: 1,
      Click: 2,
    };
    ESteamInputConfigurationEnableType: {
      None: 0,
      Playstation: 1,
      Xbox: 2,
      Generic: 4,
      Switch: 8,
    };
    ESteamInputLEDFlag: {
      SetColor: 0,
      RestoreUserDefault: 1,
    };
    ESteamInputGlyphSize: {
      Small: 0,
      Medium: 1,
      Large: 2,
      Count: 3,
    };
    ESteamDeviceFormFactor: {
      Unknown: 0,
      Phone: 1,
      Tablet: 2,
      Computer: 3,
      TV: 4,
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
    RequestEquippedProfileItems: {(steamID: unknown): Promise<{ m_eResult: SteamWorksNS.Enums.EResult, m_steamID: unknown, m_bHasAnimatedAvatar: boolean, m_bHasAvatarFrame: boolean, m_bHasProfileModifier: boolean, m_bHasProfileBackground: boolean, m_bHasMiniProfileBackground: boolean }>};
    BHasEquippedProfileItem: {(steamID: unknown, itemType: SteamWorksNS.Enums.ECommunityProfileItemType): boolean}
    GetProfileItemPropertyString: {(steamID: unknown, itemType: SteamWorksNS.Enums.ECommunityProfileItemType, prop: SteamWorksNS.Enums.ECommunityProfileItemProperty): string}
    GetProfileItemPropertyUint: {(steamID: unknown, itemType: SteamWorksNS.Enums.ECommunityProfileItemType, prop: SteamWorksNS.Enums.ECommunityProfileItemProperty): number}
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
    SetDlcContext: {(nAppID: number): boolean}
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
    SetDualSenseTriggerEffect: {(inputHandle: number, pParam: unknown): undefined}
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