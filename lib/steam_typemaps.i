
%typemap(in, fragment="SWIG_JSCGetIntProperty") HSteamPipe *phSteamPipe (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(int)(jsvalue, &temp);
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
%typemap(freearg) HSteamPipe *phSteamPipe {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") AppId_t *pnAppID (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned int)(jsvalue, &temp);
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
%typemap(freearg) AppId_t *pnAppID {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") AppId_t *pAppID (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned int)(jsvalue, &temp);
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
%typemap(freearg) AppId_t *pAppID {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") AppId_t *pvecAppID (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned int)(jsvalue, &temp);
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
%typemap(freearg) AppId_t *pvecAppID {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") DepotId_t *pvecDepots (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned int)(jsvalue, &temp);
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
%typemap(freearg) DepotId_t *pvecDepots {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") SNetSocket_t *phSocket (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned int)(jsvalue, &temp);
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
%typemap(freearg) SNetSocket_t *phSocket {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") SteamAPICall_t *pCallHandle (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned long long)(jsvalue, &temp);
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
%typemap(freearg) SteamAPICall_t *pCallHandle {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") InputHandle_t *handlesOut (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned long long)(jsvalue, &temp);
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
%typemap(freearg) InputHandle_t *handlesOut {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") InputActionSetHandle_t *handlesOut (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned long long)(jsvalue, &temp);
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
%typemap(freearg) InputActionSetHandle_t *handlesOut {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") ControllerHandle_t *handlesOut (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned long long)(jsvalue, &temp);
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
%typemap(freearg) ControllerHandle_t *handlesOut {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") ControllerActionSetHandle_t *handlesOut (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned long long)(jsvalue, &temp);
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
%typemap(freearg) ControllerActionSetHandle_t *handlesOut {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") PublishedFileId_t *pvecPublishedFileID (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned long long)(jsvalue, &temp);
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
%typemap(freearg) PublishedFileId_t *pvecPublishedFileID {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") SteamInventoryResult_t *pResultHandle (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(int)(jsvalue, &temp);
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
%typemap(freearg) SteamInventoryResult_t *pResultHandle {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") SteamInventoryResult_t *pOutResultHandle (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(int)(jsvalue, &temp);
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
%typemap(freearg) SteamInventoryResult_t *pOutResultHandle {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") SteamItemDef_t *pItemDefIDs (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(int)(jsvalue, &temp);
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
%typemap(freearg) SteamItemDef_t *pItemDefIDs {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") SteamItemDef_t *pArrayItemDefs (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(int)(jsvalue, &temp);
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
%typemap(freearg) SteamItemDef_t *pArrayItemDefs {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") HSteamNetConnection *pOutConnection1 (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned int)(jsvalue, &temp);
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
%typemap(freearg) HSteamNetConnection *pOutConnection1 {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") HSteamNetConnection *pOutConnection2 (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned int)(jsvalue, &temp);
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
%typemap(freearg) HSteamNetConnection *pOutConnection2 {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") SteamNetworkingPOPID *pViaRelayPoP (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned int)(jsvalue, &temp);
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
%typemap(freearg) SteamNetworkingPOPID *pViaRelayPoP {
  free($1);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty") SteamNetworkingPOPID *list (int length = 0, v8::Local<v8::Array> array, v8::Local<v8::Value> jsvalue, int i = 0, int res = 0, $*1_ltype temp) {
  if ($input->IsArray())
  {
    // Convert into Array
    array = v8::Local<v8::Array>::Cast($input);
    length = array->Length();
    $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * length);
    // Get each element from array
    for (i = 0; i < length; i++)
    {
      if (!array->Get(SWIGV8_CURRENT_CONTEXT(), i).ToLocal(&jsvalue)) {
        SWIG_exception_fail(SWIG_ERROR, "Failed to get item from $input");
      }
      // Get primitive value from JSObject
      res = SWIG_AsVal(unsigned int)(jsvalue, &temp);
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
%typemap(freearg) SteamNetworkingPOPID *list {
  free($1);
}