%include "windows.i"
%include "typemaps.i"

%typemap(out) SWIGTYPE {
  $result = SWIG_NewPointerObj(new $1_ltype(std::move($1)), $&1_descriptor, SWIG_POINTER_OWN | 0 );
}

%typemap(in) int* {
	if ($input->IsInt32Array()) {
    v8::Local<v8::Int32Array> myarr = $input.As<v8::Int32Array>();
    $1 = (int*)((int*)myarr->Buffer()->GetBackingStore()->Data() + myarr->ByteOffset());
  } else {
    SWIG_exception_fail(SWIG_ArgError(SWIG_TypeError), "Illegal argument '$argnum' must be of type '""Int32Array""'");
  }
}

%typemap(in) double* {
	if ($input->IsFloat64Array()) {
    v8::Local<v8::Float64Array> myarr = $input.As<v8::Float64Array>();
    $1 = (double*)((double*)myarr->Buffer()->GetBackingStore()->Data() + myarr->ByteOffset());
  } else {
    SWIG_exception_fail(SWIG_ArgError(SWIG_TypeError), "Illegal argument '$argnum' must be of type '""Float64Array""'");
  }
}

%typemap(in) long* {
	if ($input->IsBigInt64Array()) {
    v8::Local<v8::BigInt64Array> myarr = $input.As<v8::BigInt64Array>();
    $1 = (long*)((long*)myarr->Buffer()->GetBackingStore()->Data() + myarr->ByteOffset());
  } else {
    SWIG_exception_fail(SWIG_ArgError(SWIG_TypeError), "Illegal argument '$argnum' must be of type '""BigInt64Array""'");
  }
}

%typemap(in) unsigned long* {
	if ($input->IsBigInt64Array()) {
    v8::Local<v8::BigInt64Array> myarr = $input.As<v8::BigInt64Array>();
    $1 = (unsigned long*)((unsigned long*)myarr->Buffer()->GetBackingStore()->Data() + myarr->ByteOffset());
  } else {
    SWIG_exception_fail(SWIG_ArgError(SWIG_TypeError), "Illegal argument '$argnum' must be of type '""BigInt64Array""'");
  }
}

%typemap(in) unsigned char* {
	if ($input->IsUint8Array()) {
    v8::Local<v8::Uint8Array> myarr = $input.As<v8::Uint8Array>();
    $1 = (unsigned char*)((unsigned char*)myarr->Buffer()->GetBackingStore()->Data() + myarr->ByteOffset());
  } else {
    SWIG_exception_fail(SWIG_ArgError(SWIG_TypeError), "Illegal argument '$argnum' must be of type '""Uint8Array""'");
  }
}

%typemap(in) char** {
	if ($input->IsArray()) {
    SWIGV8_ARRAY array = SWIGV8_ARRAY::Cast($input);
    char** c_arr = new char*[array->Length()];
    v8::Isolate* isolate = v8::Isolate::GetCurrent();
    for (uint32_t i = 0; i < array->Length(); i++) {
      SWIGV8_VALUE jsvalue = SWIGV8_ARRAY_GET(array, i);
      if (jsvalue->IsString()) {
        v8::String::Utf8Value value(isolate, v8::Local<v8::String>::Cast(jsvalue));
        auto c_str = new char[value.length() + 1];
        strcpy(c_str, *value);
        c_arr[i] = c_str;
      } else {
        SWIG_exception_fail(SWIG_ArgError(SWIG_TypeError), "Illegal value type in Array");
      }
    }
    $1 = c_arr;
  } else {
    SWIG_exception_fail(SWIG_ArgError(SWIG_TypeError), "Illegal argument '$argnum' must be of type '""Array""'");
  }
}

%typemap(freearg) char** data {
  for (uint32_t i = 0; i < SWIGV8_ARRAY::Cast($input)->Length(); ++i) {
    delete[] $1[i];
  }
  delete[] $1;
}

%typemap(in) enum SWIGTYPE* {
	if ($input->IsInt32Array()) {
    v8::Local<v8::Int32Array> myarr = $input.As<v8::Int32Array>();
    $1 = ($1_ltype)((int*)myarr->Buffer()->GetBackingStore()->Data() + myarr->ByteOffset());
  } else {
    SWIG_exception_fail(SWIG_ArgError(SWIG_TypeError), "Illegal argument '$argnum' must be of type '""Int32Array""'");
  }
}

%fragment("SWIG_JSCGetIntProperty",    "header", fragment=SWIG_AsVal_frag(int)) {}
%fragment("SWIG_JSCGetNumberProperty", "header", fragment=SWIG_AsVal_frag(double)) {}

%define js_array_out(TYPE)
%typemap(in, fragment="SWIG_JSCGetIntProperty") TYPE[], TYPE[ANY]
    (int length = 0, SWIGV8_ARRAY array, SWIGV8_VALUE jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = SWIGV8_ARRAY::Cast($input);
    length = $1_dim0;
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      jsvalue = SWIGV8_ARRAY_GET(array, i);
      // Get primitive value from JSObject
      res = SWIG_AsVal(TYPE)(jsvalue, &temp);
      if (!SWIG_IsOK(res))
      {
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
      }
      arg$argnum[i] = temp;
    }
  }
  else
  {
    SWIG_exception_fail(SWIG_ERROR, "$input is not JSObjectRef");
  }
}

%typemap(freearg) TYPE[], TYPE[ANY] {
  free($1);
}

%typemap(out, fragment=SWIG_From_frag(TYPE)) TYPE[], TYPE[ANY] (int length = 0, int i = 0)
{
  length = $1_dim0;
  SWIGV8_ARRAY array = SWIGV8_ARRAY_NEW_SIZE(length);
  for (i = 0; i < length; i++)
  {
    SWIGV8_ARRAY_SET(array, i, SWIG_From(TYPE)($1[i]));
  }
  $result = array;
}
%enddef

js_array_out(int);
js_array_out(unsigned int);
js_array_out(short);
js_array_out(unsigned short);
js_array_out(long);
js_array_out(long long);
js_array_out(unsigned long);
js_array_out(unsigned long long);
js_array_out(float);
js_array_out(double);


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

#if (V8_MAJOR_VERSION-0) < 5
#define SWIGV8_MAYBE_CHECK(maybe) maybe
#elif (SWIG_V8_VERSION < 0x0704)
#define SWIGV8_MAYBE_CHECK(maybe) maybe.FromJust()
#else
#define SWIGV8_MAYBE_CHECK(maybe) maybe.Check()
#endif

#if (V8_MAJOR_VERSION-0) < 4 && (SWIG_V8_VERSION < 0x032318)
#define SWIGV8_VALUE v8::Handle<v8::Value>
#define SWIGV8_ARRAY v8::Handle<v8::Array>
#define SWIGV8_ARRAY_NEW_SIZE(size) v8::Array::New(size)
#define SWIGV8_ARRAY_GET(array, index) (array)->Get(index)
#define SWIGV8_ARRAY_SET(array, index, value) (array)->Set(index, value)
#else
#define SWIGV8_VALUE v8::Local<v8::Value>
#define SWIGV8_ARRAY v8::Local<v8::Array>
#define SWIGV8_ARRAY_NEW_SIZE(size) v8::Array::New(v8::Isolate::GetCurrent(), size)
#define SWIGV8_ARRAY_GET(array, index) (array)->Get(SWIGV8_CURRENT_CONTEXT(), index).ToLocalChecked()
#define SWIGV8_ARRAY_SET(array, index, value) SWIGV8_MAYBE_CHECK((array)->Set(SWIGV8_CURRENT_CONTEXT(), index, value))
#endif


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

SWIGV8_ARRAY AppendOutputToResult(SWIGV8_VALUE result, SWIGV8_VALUE output) {
  SWIGV8_ARRAY array;
  if (result->IsArray()) {
    array = SWIGV8_ARRAY::Cast(result);
    SWIGV8_ARRAY_SET(array, array->Length(), output);
    return array;
  }
  array = SWIGV8_ARRAY_NEW_SIZE(2);
  SWIGV8_ARRAY_SET(array, 0, result);
  SWIGV8_ARRAY_SET(array, 1, output);
  return array;
}
%}


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
