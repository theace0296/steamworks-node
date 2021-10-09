import SteamEnums from './steamApiEnums';

export = SteamStructs;
declare namespace SteamStructs {
  export interface SteamIPAddress_t {
    m_rgubIPv6: number,
    m_eType: SteamEnums.ESteamIPType,
    IsSet: {(): boolean},
  }

  export interface FriendGameInfo_t {
    m_gameID: unknown,
    m_unGameIP: number,
    m_usGamePort: number,
    m_usQueryPort: number,
    m_steamIDLobby: unknown,
  }

  export class MatchMakingKeyValuePair_t {
    m_szKey: string;
    m_szValue: string;
    constructor();
  }

  export class servernetadr_t {
    m_usConnectionPort: number;
    m_usQueryPort: number;
    m_unIP: number;
    constructor();
    Init: {(ip: number, usQueryPort: number, usConnectionPort: number): undefined};
    GetQueryPort: {(): number};
    SetQueryPort: {(usPort: number): undefined};
    GetConnectionPort: {(): number};
    SetConnectionPort: {(usPort: number): undefined};
    GetIP: {(): number};
    SetIP: {(unIP: number): undefined};
    GetConnectionAddressString: {(): string};
    GetQueryAddressString: {(): string};
  }

  export class gameserveritem_t {
    m_NetAdr: SteamStructs.servernetadr_t;
    m_nPing: number;
    m_bHadSuccessfulResponse: boolean;
    m_bDoNotRefresh: boolean;
    m_szGameDir: string;
    m_szMap: string;
    m_szGameDescription: string;
    m_nAppID: number;
    m_nPlayers: number;
    m_nMaxPlayers: number;
    m_nBotPlayers: number;
    m_bPassword: boolean;
    m_bSecure: boolean;
    m_ulTimeLastPlayed: number;
    m_nServerVersion: number;
    m_szServerName: string;
    m_szGameTags: string;
    m_steamID: unknown;
    constructor();
    GetName: {(): string};
    SetName: {(pName: string): undefined};
  }

  export interface SteamPartyBeaconLocation_t {
    m_eType: SteamEnums.ESteamPartyBeaconLocationType,
    m_ulLocationID: number,
  }

  export interface SteamParamStringArray_t {
    m_ppStrings: unknown,
    m_nNumStrings: number,
  }

  export interface LeaderboardEntry_t {
    m_steamIDUser: unknown,
    m_nGlobalRank: number,
    m_nScore: number,
    m_cDetails: number,
    m_hUGC: number,
  }

  export interface P2PSessionState_t {
    m_bConnectionActive: number,
    m_bConnecting: number,
    m_eP2PSessionError: number,
    m_bUsingRelay: number,
    m_nBytesQueuedForSend: number,
    m_nPacketsQueuedForSend: number,
    m_nRemoteIP: number,
    m_nRemotePort: number,
  }

  export interface InputAnalogActionData_t {
    eMode: SteamEnums.EInputSourceMode,
    x: number,
    y: number,
    bActive: boolean,
  }

  export interface InputDigitalActionData_t {
    bState: boolean,
    bActive: boolean,
  }

  export interface InputMotionData_t {
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
  }

  export interface SteamUGCDetails_t {
    m_nPublishedFileId: number,
    m_eResult: SteamEnums.EResult,
    m_eFileType: SteamEnums.EWorkshopFileType,
    m_nCreatorAppID: number,
    m_nConsumerAppID: number,
    m_rgchTitle: string,
    m_rgchDescription: string,
    m_ulSteamIDOwner: number,
    m_rtimeCreated: number,
    m_rtimeUpdated: number,
    m_rtimeAddedToUserList: number,
    m_eVisibility: SteamEnums.ERemoteStoragePublishedFileVisibility,
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
  }

  export interface SteamItemDetails_t {
    m_itemId: number,
    m_iDefinition: number,
    m_unQuantity: number,
    m_unFlags: number,
  }

  export interface SteamNetworkingIPAddr {
    k_cchMaxString: number,
    m_ipv6: number,
    m_port: number,
    Clear: {(): undefined},
    IsIPv6AllZeros: {(): boolean},
    SetIPv6: {(ipv6: unknown, nPort: number): undefined},
    SetIPv4: {(nIP: number, nPort: number): undefined},
    IsIPv4: {(): boolean},
    GetIPv4: {(): number},
    SetIPv6LocalHost: {(nPort: number): undefined},
    IsLocalHost: {(): boolean},
    ToString: {(buf: string, cbBuf: number, bWithPort: boolean): undefined},
    ParseString: {(pszStr: string): boolean},
  }

  export interface SteamNetworkingIdentity {
    k_cchMaxString: number,
    k_cchMaxGenericString: number,
    k_cchMaxXboxPairwiseID: number,
    k_cbMaxGenericBytes: number,
    m_eType: SteamEnums.ESteamNetworkingIdentityType,
    m_cbSize: number,
    m_szUnknownRawString: string,
    Clear: {(): undefined},
    IsInvalid: {(): boolean},
    SetSteamID: {(steamID: unknown): undefined},
    GetSteamID: {(): unknown},
    SetSteamID64: {(steamID: number): undefined},
    GetSteamID64: {(): number},
    SetXboxPairwiseID: {(pszString: string): boolean},
    GetXboxPairwiseID: {(): string},
    SetPSNID: {(id: number): undefined},
    GetPSNID: {(): number},
    SetStadiaID: {(id: number): undefined},
    GetStadiaID: {(): number},
    SetIPAddr: {(addr: unknown): undefined},
    GetIPAddr: {(): unknown},
    SetLocalHost: {(): undefined},
    IsLocalHost: {(): boolean},
    SetGenericString: {(pszString: string): boolean},
    GetGenericString: {(): string},
    SetGenericBytes: {(data: unknown, cbLen: number): boolean},
    GetGenericBytes: {(cbLen: unknown): unknown},
    ToString: {(buf: string, cbBuf: number): undefined},
    ParseString: {(pszStr: string): boolean},
  }

  export interface SteamNetConnectionInfo_t {
    m_identityRemote: SteamStructs.SteamNetworkingIdentity,
    m_nUserData: number,
    m_hListenSocket: number,
    m_addrRemote: SteamStructs.SteamNetworkingIPAddr,
    m__pad1: number,
    m_idPOPRemote: number,
    m_idPOPRelay: number,
    m_eState: SteamEnums.ESteamNetworkingConnectionState,
    m_eEndReason: number,
    m_szEndDebug: string,
    m_szConnectionDescription: string,
    m_eTransportKind: SteamEnums.ESteamNetTransportKind,
    reserved: number,
  }

  export interface SteamNetworkingQuickConnectionStatus {
    m_eState: SteamEnums.ESteamNetworkingConnectionState,
    m_nPing: number,
    m_flConnectionQualityLocal: number,
    m_flConnectionQualityRemote: number,
    m_flOutPacketsPerSec: number,
    m_flOutBytesPerSec: number,
    m_flInPacketsPerSec: number,
    m_flInBytesPerSec: number,
    m_nSendRateBytesPerSecond: number,
    m_cbPendingUnreliable: number,
    m_cbPendingReliable: number,
    m_cbSentUnackedReliable: number,
    m_usecQueueTime: number,
    reserved: number,
  }

  export interface SteamNetworkingMessage_t {
    m_pData: unknown,
    m_cbSize: number,
    m_conn: number,
    m_identityPeer: SteamStructs.SteamNetworkingIdentity,
    m_nConnUserData: number,
    m_usecTimeReceived: number,
    m_nMessageNumber: number,
    m_pfnFreeData: unknown,
    m_pfnRelease: unknown,
    m_nChannel: number,
    m_nFlags: number,
    m_nUserData: number,
    Release: {(): undefined},
  }

  export interface SteamNetworkPingLocation_t {
    m_data: number,
  }

  export interface SteamNetworkingConfigValue_t {
    m_eValue: SteamEnums.ESteamNetworkingConfigValue,
    m_eDataType: SteamEnums.ESteamNetworkingConfigDataType,
    m_int64: number,
    SetInt32: {(eVal: SteamEnums.ESteamNetworkingConfigValue, data: number): undefined},
    SetInt64: {(eVal: SteamEnums.ESteamNetworkingConfigValue, data: number): undefined},
    SetFloat: {(eVal: SteamEnums.ESteamNetworkingConfigValue, data: number): undefined},
    SetPtr: {(eVal: SteamEnums.ESteamNetworkingConfigValue, data: unknown): undefined},
    SetString: {(eVal: SteamEnums.ESteamNetworkingConfigValue, data: string): undefined},
  }

  export interface SteamNetworkingPOPIDRender {
    buf: string,
    c_str: {(): string},
  }

  export interface SteamNetworkingIdentityRender {
    buf: string,
    c_str: {(): string},
  }

  export interface SteamNetworkingIPAddrRender {
    buf: string,
    c_str: {(): string},
  }

  export interface SteamDatagramHostedAddress {
    m_cbSize: number,
    m_data: string,
    Clear: {(): undefined},
    GetPopID: {(): number},
    SetDevAddress: {(nIP: number, nPort: number, popid: number): undefined},
  }

  export interface SteamDatagramGameCoordinatorServerLogin {
    m_identity: SteamStructs.SteamNetworkingIdentity,
    m_routing: SteamStructs.SteamDatagramHostedAddress,
    m_nAppID: number,
    m_rtime: number,
    m_cbAppData: number,
    m_appData: string,
  }

}