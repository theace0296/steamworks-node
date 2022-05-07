
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(int)) HSteamPipe *phSteamPipe (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply HSteamPipe * INOUT {HSteamPipe *phSteamPipe};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned int)) AppId_t *pnAppID (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply AppId_t * INOUT {AppId_t *pnAppID};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned int)) AppId_t *pAppID (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply AppId_t * INOUT {AppId_t *pAppID};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned int)) AppId_t *pvecAppID (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply AppId_t * INOUT {AppId_t *pvecAppID};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned int)) DepotId_t *pvecDepots (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply DepotId_t * INOUT {DepotId_t *pvecDepots};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned int)) SNetSocket_t *phSocket (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply SNetSocket_t * INOUT {SNetSocket_t *phSocket};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned long long)) SteamAPICall_t *pCallHandle (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned long long)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply SteamAPICall_t * INOUT {SteamAPICall_t *pCallHandle};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned long long)) InputHandle_t *handlesOut (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned long long)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply InputHandle_t * INOUT {InputHandle_t *handlesOut};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned long long)) InputActionSetHandle_t *handlesOut (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned long long)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply InputActionSetHandle_t * INOUT {InputActionSetHandle_t *handlesOut};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned long long)) ControllerHandle_t *handlesOut (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned long long)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply ControllerHandle_t * INOUT {ControllerHandle_t *handlesOut};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned long long)) ControllerActionSetHandle_t *handlesOut (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned long long)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply ControllerActionSetHandle_t * INOUT {ControllerActionSetHandle_t *handlesOut};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned long long)) PublishedFileId_t *pvecPublishedFileID (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned long long)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply PublishedFileId_t * INOUT {PublishedFileId_t *pvecPublishedFileID};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(int)) SteamInventoryResult_t *pResultHandle (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply SteamInventoryResult_t * INOUT {SteamInventoryResult_t *pResultHandle};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(int)) SteamInventoryResult_t *pOutResultHandle (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply SteamInventoryResult_t * INOUT {SteamInventoryResult_t *pOutResultHandle};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(int)) SteamItemDef_t *pItemDefIDs (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply SteamItemDef_t * INOUT {SteamItemDef_t *pItemDefIDs};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(int)) SteamItemDef_t *pArrayItemDefs (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply SteamItemDef_t * INOUT {SteamItemDef_t *pArrayItemDefs};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned int)) HSteamNetConnection *pOutConnection1 (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply HSteamNetConnection * INOUT {HSteamNetConnection *pOutConnection1};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned int)) HSteamNetConnection *pOutConnection2 (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply HSteamNetConnection * INOUT {HSteamNetConnection *pOutConnection2};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned int)) SteamNetworkingPOPID *pViaRelayPoP (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply SteamNetworkingPOPID * INOUT {SteamNetworkingPOPID *pViaRelayPoP};
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
        SWIG_exception_fail(SWIG_ERROR, "Failed to convert $input to $ltype");
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
%typemap(argout, fragment=SWIG_From_frag(unsigned int)) SteamNetworkingPOPID *list (int length = 0, int i = 0) {
  length = sizeof($1) / sizeof($*1_ltype);
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), length);
  for (i = 0; i < length; i++)
  {
    array->Set(SWIGV8_CURRENT_CONTEXT(), i, SWIG_From(unsigned int)($1[i]));
  }
  $result = AppendToNonArrayTypeOutput($result, array);
}
%apply SteamNetworkingPOPID * INOUT {SteamNetworkingPOPID *list};