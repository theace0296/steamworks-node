%module steamworks
%{
#include <iostream>
#include <chrono>
#include <thread>
#include "steamworks.h"
#include "steamcallresultfunctions.h"
#include "steamcallbackfunctions.h"
std::thread SteamCallbackThread;
bool applicationRunning = false;
bool callbackThreadRunning = false;
bool GetApplicationRunning() {
  return applicationRunning;
};
bool GetCallbackThreadRunning() {
  return callbackThreadRunning;
}

void RunSteamCallbacks() {
	while (applicationRunning)
	{
		SteamAPI_RunCallbacks();
		std::this_thread::sleep_for(std::chrono::milliseconds(100));
    callbackThreadRunning = true;
	}
  callbackThreadRunning = false;
};

bool Init() {
	applicationRunning = SteamAPI_Init();
	std::thread SteamCallbackThread = std::thread::thread(&RunSteamCallbacks);
	SteamCallbackThread.detach();
  return applicationRunning;
};

bool Shutdown() {
	applicationRunning = false;
	std::this_thread::sleep_for(std::chrono::milliseconds(100));
	if (&SteamCallbackThread != nullptr && SteamCallbackThread.joinable()) {
		SteamCallbackThread.join();
	}
	SteamAPI_Shutdown();
  return !applicationRunning;
};
%}

%include "windows.i"
%include "steamtypes.h"
%include "steamclientpublic.h"
%include "steam_api_common.h"
%include "steam_api_internal.h"
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
%include "steam_api.h"
%include "isteamgameserver.h"
%include "isteamgameserverstats.h"
%include "steamworks.h"
%include "steamcallresult.h"
%include "steamcallresultfunctions.h"
%include "steamcallback.h"
%include "steamcallbackfunctions.h"
bool Init();
bool Shutdown();
