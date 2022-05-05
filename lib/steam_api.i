%module steamworks
#pragma SWIG nowarn=302
#pragma SWIG nowarn=451
%{
#include <iostream>
#include <chrono>
#include <thread>
#include "steam_api.h"
#include "isteamgameserver.h"
#include "isteamgameserverstats.h"

#include "steamcallresultfunctions.h"
#include "steamcallbackfunctions.h"
#include "steaminterfaces.h"
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

v8::Local<v8::Value> AppendToNonArrayTypeOutput(v8::Local<v8::Value> result, v8::Local<v8::Value> obj) {
  v8::EscapableHandleScope scope(v8::Isolate::GetCurrent());
  v8::Local<v8::Array> arr = v8::Array::New(v8::Isolate::GetCurrent());
  arr->Set(v8::Isolate::GetCurrent()->GetCurrentContext(), arr->Length(), result);
  arr->Set(v8::Isolate::GetCurrent()->GetCurrentContext(), arr->Length(), obj);
  return scope.Escape(arr);
}
%}

%include "windows.i"
%include "typemaps.i"

%rename(__add__) operator+;
%rename(__subract__) operator-;
%rename(__multiply__) operator*;
%rename(__divide__) operator/;
%rename(__mod__) operator%;
%rename(__inc__) operator++;
%rename(__dec__) operator--;
%rename(__assign__) operator=;
%rename(__add_assign__) operator+=;
%rename(__subtract_assign__) operator-=;
%rename(__multiply_assign__) operator*=;
%rename(__divide_assign__) operator/=;
%rename(__mod_assign__) operator%=;
%rename(__equals__) operator==;
%rename(__notequals__) operator!=;
%rename(__greaterthan__) operator>;
%rename(__lessthan__) operator<;
%rename(__greaterthanequal__) operator>=;
%rename(__lessthanequal__) operator<=;
%rename(__and__) operator&&;
%rename(__or__) operator||;
%rename(__not__) operator!;
%rename(__binary_and__) operator&;
%rename(__binary_or__) operator|;
%rename(__binary_xor__) operator^;
%rename(__binary_comp__) operator~;
%rename(__binary_shiftleft__) operator<<;
%rename(__binary_shiftright__) operator>>;

%include "steam_typemaps.i"
%typemap(out) SWIGTYPE
{
  $result = SWIG_NewPointerObj(new $1_ltype(std::move($1)), $&1_descriptor, SWIG_POINTER_OWN | 0 );
}

%include "steamtypes.h"
%include "steamclientpublic.h"
%include "steam_api_common.h"
%include "steam_api_internal.h"
// %include "steamnetworkingtypes.h"
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
%include "steamcallresult.h"
%include "steamcallresultfunctions.h"
%include "steamcallback.h"
%include "steamcallbackfunctions.h"
%include "steaminterfaces.h"

bool Init();
bool Shutdown();
