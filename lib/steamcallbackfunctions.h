
#include "steamcallback.h"
namespace CCallBacks {

    CGetVideoURLResult* GetVideoURL(AppId_t unVideoAppID) {
      SteamVideo()->GetVideoURL(unVideoAppID);
      CGetVideoURLResult* GetVideoURLResult = new CGetVideoURLResult();
      return GetVideoURLResult;
    };
  
    CGetOPFSettingsResult* GetOPFSettings(AppId_t unVideoAppID) {
      SteamVideo()->GetOPFSettings(unVideoAppID);
      CGetOPFSettingsResult* GetOPFSettingsResult = new CGetOPFSettingsResult();
      return GetOPFSettingsResult;
    };
  
};
