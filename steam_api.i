%module steamworks
%{
#include "steamworks.h"
%}

%include "windows.i"
%include "steamtypes.h"
%include "steamclientpublic.h"
%include "steam_api_common.h"
%include "steam_api_internal.h"
%include "steam_gameserver.h"
%include "isteamclient.h"
%include "isteamuser.h"
%include "isteamfriends.h"
%include "isteamutils.h"
%include "isteammatchmaking.h"
%include "isteamuserstats.h"
%include "isteamapps.h"
%include "isteamnetworking.h"
%include "isteamremotestorage.h"
%include "isteamscreenshots.h"
%include "isteammusic.h"
%include "isteammusicremote.h"
%include "isteamhttp.h"
%include "isteamcontroller.h"
%include "isteamugc.h"
%include "isteamapplist.h"
%include "isteamhtmlsurface.h"
%include "isteaminventory.h"
%include "isteamvideo.h"
%include "isteamparentalsettings.h"
%include "isteaminput.h"
%include "isteamremoteplay.h"
%include "isteamnetworkingmessages.h"
%include "isteamnetworkingsockets.h"
%include "isteamnetworkingutils.h"
%include "steamworks.h"