
#include "steam_api_common.h"
#include "steam_api.h"

#include "isteamappticket.h"
#include "isteamgamecoordinator.h"
#include "isteammatchmaking.h"
#include "isteamnetworkingsockets.h"
#include "steamnetworkingfakeip.h"


// Global interface accessor for ISteamAppTicket
inline ISteamAppTicket *SteamAppTicket();
#ifndef STEAMAPPTICKET_INTERFACE_VERSION
#define STEAMAPPTICKET_INTERFACE_VERSION "SteamAppTicket001"
#endif
STEAM_DEFINE_USER_INTERFACE_ACCESSOR( ISteamAppTicket *, SteamAppTicket, STEAMAPPTICKET_INTERFACE_VERSION );

// Global interface accessor for ISteamGameCoordinator
inline ISteamGameCoordinator *SteamGameCoordinator();
#ifndef STEAMGAMECOORDINATOR_INTERFACE_VERSION
#define STEAMGAMECOORDINATOR_INTERFACE_VERSION "SteamGameCoordinator001"
#endif
STEAM_DEFINE_USER_INTERFACE_ACCESSOR( ISteamGameCoordinator *, SteamGameCoordinator, STEAMGAMECOORDINATOR_INTERFACE_VERSION );

// Global interface accessor for ISteamMatchmakingServerListResponse
inline ISteamMatchmakingServerListResponse *SteamMatchmakingServerListResponse();
#ifndef STEAMMATCHMAKINGSERVERLISTRESPONSE_INTERFACE_VERSION
#define STEAMMATCHMAKINGSERVERLISTRESPONSE_INTERFACE_VERSION "SteamMatchmakingServerListResponse001"
#endif
STEAM_DEFINE_USER_INTERFACE_ACCESSOR( ISteamMatchmakingServerListResponse *, SteamMatchmakingServerListResponse, STEAMMATCHMAKINGSERVERLISTRESPONSE_INTERFACE_VERSION );

// Global interface accessor for ISteamMatchmakingPingResponse
inline ISteamMatchmakingPingResponse *SteamMatchmakingPingResponse();
#ifndef STEAMMATCHMAKINGPINGRESPONSE_INTERFACE_VERSION
#define STEAMMATCHMAKINGPINGRESPONSE_INTERFACE_VERSION "SteamMatchmakingPingResponse001"
#endif
STEAM_DEFINE_USER_INTERFACE_ACCESSOR( ISteamMatchmakingPingResponse *, SteamMatchmakingPingResponse, STEAMMATCHMAKINGPINGRESPONSE_INTERFACE_VERSION );

// Global interface accessor for ISteamMatchmakingPlayersResponse
inline ISteamMatchmakingPlayersResponse *SteamMatchmakingPlayersResponse();
#ifndef STEAMMATCHMAKINGPLAYERSRESPONSE_INTERFACE_VERSION
#define STEAMMATCHMAKINGPLAYERSRESPONSE_INTERFACE_VERSION "SteamMatchmakingPlayersResponse001"
#endif
STEAM_DEFINE_USER_INTERFACE_ACCESSOR( ISteamMatchmakingPlayersResponse *, SteamMatchmakingPlayersResponse, STEAMMATCHMAKINGPLAYERSRESPONSE_INTERFACE_VERSION );

// Global interface accessor for ISteamMatchmakingRulesResponse
inline ISteamMatchmakingRulesResponse *SteamMatchmakingRulesResponse();
#ifndef STEAMMATCHMAKINGRULESRESPONSE_INTERFACE_VERSION
#define STEAMMATCHMAKINGRULESRESPONSE_INTERFACE_VERSION "SteamMatchmakingRulesResponse001"
#endif
STEAM_DEFINE_USER_INTERFACE_ACCESSOR( ISteamMatchmakingRulesResponse *, SteamMatchmakingRulesResponse, STEAMMATCHMAKINGRULESRESPONSE_INTERFACE_VERSION );

// Global interface accessor for ISteamNetworkingConnectionSignaling
inline ISteamNetworkingConnectionSignaling *SteamNetworkingConnectionSignaling();
#ifndef STEAMNETWORKINGCONNECTIONSIGNALING_INTERFACE_VERSION
#define STEAMNETWORKINGCONNECTIONSIGNALING_INTERFACE_VERSION "SteamNetworkingConnectionSignaling001"
#endif
STEAM_DEFINE_USER_INTERFACE_ACCESSOR( ISteamNetworkingConnectionSignaling *, SteamNetworkingConnectionSignaling, STEAMNETWORKINGCONNECTIONSIGNALING_INTERFACE_VERSION );

// Global interface accessor for ISteamNetworkingSignalingRecvContext
inline ISteamNetworkingSignalingRecvContext *SteamNetworkingSignalingRecvContext();
#ifndef STEAMNETWORKINGSIGNALINGRECVCONTEXT_INTERFACE_VERSION
#define STEAMNETWORKINGSIGNALINGRECVCONTEXT_INTERFACE_VERSION "SteamNetworkingSignalingRecvContext001"
#endif
STEAM_DEFINE_USER_INTERFACE_ACCESSOR( ISteamNetworkingSignalingRecvContext *, SteamNetworkingSignalingRecvContext, STEAMNETWORKINGSIGNALINGRECVCONTEXT_INTERFACE_VERSION );

// Global interface accessor for ISteamNetworkingFakeUDPPort
inline ISteamNetworkingFakeUDPPort *SteamNetworkingFakeUDPPort();
#ifndef STEAMNETWORKINGFAKEUDPPORT_INTERFACE_VERSION
#define STEAMNETWORKINGFAKEUDPPORT_INTERFACE_VERSION "SteamNetworkingFakeUDPPort001"
#endif
STEAM_DEFINE_USER_INTERFACE_ACCESSOR( ISteamNetworkingFakeUDPPort *, SteamNetworkingFakeUDPPort, STEAMNETWORKINGFAKEUDPPORT_INTERFACE_VERSION );
