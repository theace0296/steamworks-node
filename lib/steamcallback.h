
  #include <stdio.h>
  #include "steam_api.h"
  #include "isteamgameserver.h"
  #include "isteamgameserverstats.h"
  namespace CCallBacks {
  
    class CGetVideoURLResult: CCallback<CGetVideoURLResult, GetVideoURLResult_t, false> {
      public:
        CGetVideoURLResult();
        bool GetIsCompleted();
        GetVideoURLResult_t GetResult();
      private:
        void OnGetVideoURLResult(GetVideoURLResult_t* result);
        GetVideoURLResult_t m_result;
        bool m_isComplete;
    };
  
    class CGetOPFSettingsResult: CCallback<CGetOPFSettingsResult, GetOPFSettingsResult_t, false> {
      public:
        CGetOPFSettingsResult();
        bool GetIsCompleted();
        GetOPFSettingsResult_t GetResult();
      private:
        void OnGetOPFSettingsResult(GetOPFSettingsResult_t* result);
        GetOPFSettingsResult_t m_result;
        bool m_isComplete;
    };
  
  };
  