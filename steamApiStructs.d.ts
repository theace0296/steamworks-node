
export interface SteamIPAddress_t {
  m_rgubIPv6: number,
  m_eType: ESteamIPType,
  IsSet: {(): bool},
};

export interface FriendGameInfo_t {
  m_gameID: unknown,
  m_unGameIP: number,
  m_usGamePort: number,
  m_usQueryPort: number,
  m_steamIDLobby: unknown,
};

export class MatchMakingKeyValuePair_t {
  m_szKey: string;
  m_szValue: string;
  constructor();
};

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
};

export class gameserveritem_t {
  m_NetAdr: servernetadr_t;
  m_nPing: number;
  m_bHadSuccessfulResponse: bool;
  m_bDoNotRefresh: bool;
  m_szGameDir: string;
  m_szMap: string;
  m_szGameDescription: string;
  m_nAppID: number;
  m_nPlayers: number;
  m_nMaxPlayers: number;
  m_nBotPlayers: number;
  m_bPassword: bool;
  m_bSecure: bool;
  m_ulTimeLastPlayed: number;
  m_nServerVersion: number;
  m_szServerName: string;
  m_szGameTags: string;
  m_steamID: unknown;
  constructor();
  GetName: {(): string};
  SetName: {(pName: string): undefined};
};

export interface SteamPartyBeaconLocation_t {
  m_eType: ESteamPartyBeaconLocationType,
  m_ulLocationID: number,
};

export interface SteamParamStringArray_t {
  m_ppStrings: unknown,
  m_nNumStrings: number,
};

export interface LeaderboardEntry_t {
  m_steamIDUser: unknown,
  m_nGlobalRank: number,
  m_nScore: number,
  m_cDetails: number,
  m_hUGC: number,
};

export interface P2PSessionState_t {
  m_bConnectionActive: number,
  m_bConnecting: number,
  m_eP2PSessionError: number,
  m_bUsingRelay: number,
  m_nBytesQueuedForSend: number,
  m_nPacketsQueuedForSend: number,
  m_nRemoteIP: number,
  m_nRemotePort: number,
};

export interface InputAnalogActionData_t {
  eMode: EInputSourceMode,
  x: number,
  y: number,
  bActive: bool,
};

export interface InputDigitalActionData_t {
  bState: bool,
  bActive: bool,
};

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
};

export interface SteamUGCDetails_t {
  m_nPublishedFileId: number,
  m_eResult: EResult,
  m_eFileType: EWorkshopFileType,
  m_nCreatorAppID: number,
  m_nConsumerAppID: number,
  m_rgchTitle: string,
  m_rgchDescription: string,
  m_ulSteamIDOwner: number,
  m_rtimeCreated: number,
  m_rtimeUpdated: number,
  m_rtimeAddedToUserList: number,
  m_eVisibility: ERemoteStoragePublishedFileVisibility,
  m_bBanned: bool,
  m_bAcceptedForUse: bool,
  m_bTagsTruncated: bool,
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

export interface SteamItemDetails_t {
  m_itemId: number,
  m_iDefinition: number,
  m_unQuantity: number,
  m_unFlags: number,
};

export interface SteamNetworkingIPAddr {
  k_cchMaxString: number = 48,
  m_ipv6: number,
  m_port: number,
  Clear: {(): undefined},
  IsIPv6AllZeros: {(): bool},
  SetIPv6: {(ipv6: unknown, nPort: number): undefined},
  SetIPv4: {(nIP: number, nPort: number): undefined},
  IsIPv4: {(): bool},
  GetIPv4: {(): number},
  SetIPv6LocalHost: {(nPort: number): undefined},
  IsLocalHost: {(): bool},
  ToString: {(buf: string, cbBuf: number, bWithPort: bool): undefined},
  ParseString: {(pszStr: string): bool},
};

export interface SteamNetworkingIdentity {
  k_cchMaxString: number = 128,
  k_cchMaxGenericString: number = 32,
  k_cchMaxXboxPairwiseID: number = 33,
  k_cbMaxGenericBytes: number = 32,
  m_eType: ESteamNetworkingIdentityType,
  m_cbSize: number,
  m_szUnknownRawString: string,
  Clear: {(): undefined},
  IsInvalid: {(): bool},
  SetSteamID: {(steamID: unknown): undefined},
  GetSteamID: {(): unknown},
  SetSteamID64: {(steamID: number): undefined},
  GetSteamID64: {(): number},
  SetXboxPairwiseID: {(pszString: string): bool},
  GetXboxPairwiseID: {(): string},
  SetPSNID: {(id: number): undefined},
  GetPSNID: {(): number},
  SetStadiaID: {(id: number): undefined},
  GetStadiaID: {(): number},
  SetIPAddr: {(addr: unknown): undefined},
  GetIPAddr: {(): unknown},
  SetLocalHost: {(): undefined},
  IsLocalHost: {(): bool},
  SetGenericString: {(pszString: string): bool},
  GetGenericString: {(): string},
  SetGenericBytes: {(data: unknown, cbLen: number): bool},
  GetGenericBytes: {(cbLen: unknown): unknown},
  ToString: {(buf: string, cbBuf: number): undefined},
  ParseString: {(pszStr: string): bool},
};

export interface SteamNetConnectionInfo_t {
  m_identityRemote: SteamNetworkingIdentity,
  m_nUserData: number,
  m_hListenSocket: number,
  m_addrRemote: SteamNetworkingIPAddr,
  m__pad1: number,
  m_idPOPRemote: number,
  m_idPOPRelay: number,
  m_eState: ESteamNetworkingConnectionState,
  m_eEndReason: number,
  m_szEndDebug: string,
  m_szConnectionDescription: string,
  m_eTransportKind: ESteamNetTransportKind,
  reserved: number,
};

export interface SteamNetworkingQuickConnectionStatus {
  m_eState: ESteamNetworkingConnectionState,
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
};

export interface SteamNetworkingMessage_t {
  m_pData: unknown,
  m_cbSize: number,
  m_conn: number,
  m_identityPeer: SteamNetworkingIdentity,
  m_nConnUserData: number,
  m_usecTimeReceived: number,
  m_nMessageNumber: number,
  m_pfnFreeData: unknown,
  m_pfnRelease: unknown,
  m_nChannel: number,
  m_nFlags: number,
  m_nUserData: number,
  Release: {(): undefined},
};

export interface SteamNetworkPingLocation_t {
  m_data: number,
};

export interface SteamNetworkingConfigValue_t {
  m_eValue: ESteamNetworkingConfigValue,
  m_eDataType: ESteamNetworkingConfigDataType,
  m_int64: number,
  SetInt32: {(eVal: ESteamNetworkingConfigValue, data: number): undefined},
  SetInt64: {(eVal: ESteamNetworkingConfigValue, data: number): undefined},
  SetFloat: {(eVal: ESteamNetworkingConfigValue, data: number): undefined},
  SetPtr: {(eVal: ESteamNetworkingConfigValue, data: unknown): undefined},
  SetString: {(eVal: ESteamNetworkingConfigValue, data: string): undefined},
};

export interface SteamNetworkingPOPIDRender {
  buf: string,
  c_str: {(): string},
};

export interface SteamNetworkingIdentityRender {
  buf: string,
  c_str: {(): string},
};

export interface SteamNetworkingIPAddrRender {
  buf: string,
  c_str: {(): string},
};

export interface SteamDatagramHostedAddress {
  m_cbSize: number,
  m_data: string,
  Clear: {(): undefined},
  GetPopID: {(): number},
  SetDevAddress: {(nIP: number, nPort: number, popid: number): undefined},
};

export interface SteamDatagramGameCoordinatorServerLogin {
  m_identity: SteamNetworkingIdentity,
  m_routing: SteamDatagramHostedAddress,
  m_nAppID: number,
  m_rtime: number,
  m_cbAppData: number,
  m_appData: string,
};
