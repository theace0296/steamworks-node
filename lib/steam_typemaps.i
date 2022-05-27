
%typemap(in, fragment="SWIG_JSCGetIntProperty", numinputs=1) (DepotId_t * pvecDepots, uint32 cMaxDepots) (unsigned int val, int ecode) {
  ecode = SWIG_AsVal(unsigned int)($input, &val);
  if (!SWIG_IsOK(ecode)) {
    %argument_fail(ecode, "uint32", $symname, $argnum);
  }
  $2 = %static_cast(val,uint32);
  $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * $2);
}
%typemap(freearg) (DepotId_t * pvecDepots, uint32 cMaxDepots) {
  free($1);
}
%typemap(argout, fragment=SWIG_From_frag(unsigned int)) (DepotId_t * pvecDepots, uint32 cMaxDepots) (unsigned int i = 0)
{
  SWIGV8_ARRAY array = SWIGV8_ARRAY_NEW_SIZE($2);
  for (i = 0; i < $2; i++)
  {
    SWIGV8_ARRAY_SET(array, i, SWIG_From(unsigned int)($1[i]));
  }
  $result = AppendOutputToResult($result, array);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty", numinputs=1) (PublishedFileId_t * pvecPublishedFileID, uint32 unNumPublishedFileIDs) (unsigned int val, int ecode) {
  ecode = SWIG_AsVal(unsigned int)($input, &val);
  if (!SWIG_IsOK(ecode)) {
    %argument_fail(ecode, "uint32", $symname, $argnum);
  }
  $2 = %static_cast(val,uint32);
  $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * $2);
}
%typemap(freearg) (PublishedFileId_t * pvecPublishedFileID, uint32 unNumPublishedFileIDs) {
  free($1);
}
%typemap(argout, fragment=SWIG_From_frag(unsigned long long)) (PublishedFileId_t * pvecPublishedFileID, uint32 unNumPublishedFileIDs) (unsigned int i = 0)
{
  SWIGV8_ARRAY array = SWIGV8_ARRAY_NEW_SIZE($2);
  for (i = 0; i < $2; i++)
  {
    SWIGV8_ARRAY_SET(array, i, SWIG_From(unsigned long long)($1[i]));
  }
  $result = AppendOutputToResult($result, array);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty", numinputs=1) (PublishedFileId_t * pvecPublishedFileID, uint32 cMaxEntries) (unsigned int val, int ecode) {
  ecode = SWIG_AsVal(unsigned int)($input, &val);
  if (!SWIG_IsOK(ecode)) {
    %argument_fail(ecode, "uint32", $symname, $argnum);
  }
  $2 = %static_cast(val,uint32);
  $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * $2);
}
%typemap(freearg) (PublishedFileId_t * pvecPublishedFileID, uint32 cMaxEntries) {
  free($1);
}
%typemap(argout, fragment=SWIG_From_frag(unsigned long long)) (PublishedFileId_t * pvecPublishedFileID, uint32 cMaxEntries) (unsigned int i = 0)
{
  SWIGV8_ARRAY array = SWIGV8_ARRAY_NEW_SIZE($2);
  for (i = 0; i < $2; i++)
  {
    SWIGV8_ARRAY_SET(array, i, SWIG_From(unsigned long long)($1[i]));
  }
  $result = AppendOutputToResult($result, array);
}
%typemap(in, fragment="SWIG_JSCGetIntProperty", numinputs=1) (AppId_t * pvecAppID, uint32 unMaxAppIDs) (unsigned int val, int ecode) {
  ecode = SWIG_AsVal(unsigned int)($input, &val);
  if (!SWIG_IsOK(ecode)) {
    %argument_fail(ecode, "uint32", $symname, $argnum);
  }
  $2 = %static_cast(val,uint32);
  $1  = ($*1_ltype *)malloc(sizeof($*1_ltype) * $2);
}
%typemap(freearg) (AppId_t * pvecAppID, uint32 unMaxAppIDs) {
  free($1);
}
%typemap(argout, fragment=SWIG_From_frag(unsigned int)) (AppId_t * pvecAppID, uint32 unMaxAppIDs) (unsigned int i = 0)
{
  SWIGV8_ARRAY array = SWIGV8_ARRAY_NEW_SIZE($2);
  for (i = 0; i < $2; i++)
  {
    SWIGV8_ARRAY_SET(array, i, SWIG_From(unsigned int)($1[i]));
  }
  $result = AppendOutputToResult($result, array);
}