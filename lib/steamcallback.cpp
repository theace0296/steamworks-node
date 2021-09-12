
#include "steamcallback.h"
namespace CCallBacks {

  CGetVideoURLResult::CGetVideoURLResult(): CCallback<CGetVideoURLResult, GetVideoURLResult_t, false>(this, &CGetVideoURLResult::OnGetVideoURLResult) {
    memset(&m_result, 0, sizeof(m_result));
    m_isComplete = false;
  };

  bool CGetVideoURLResult::GetIsCompleted() {
    return m_isComplete;
  };

  GetVideoURLResult_t CGetVideoURLResult::GetResult() {
    return m_result;
  };

  void CGetVideoURLResult::OnGetVideoURLResult(GetVideoURLResult_t* result) {
    m_isComplete = true;
    if (result == nullptr) {
      return;
    }
    m_result = *result;
  };

  CGetOPFSettingsResult::CGetOPFSettingsResult(): CCallback<CGetOPFSettingsResult, GetOPFSettingsResult_t, false>(this, &CGetOPFSettingsResult::OnGetOPFSettingsResult) {
    memset(&m_result, 0, sizeof(m_result));
    m_isComplete = false;
  };

  bool CGetOPFSettingsResult::GetIsCompleted() {
    return m_isComplete;
  };

  GetOPFSettingsResult_t CGetOPFSettingsResult::GetResult() {
    return m_result;
  };

  void CGetOPFSettingsResult::OnGetOPFSettingsResult(GetOPFSettingsResult_t* result) {
    m_isComplete = true;
    if (result == nullptr) {
      return;
    }
    m_result = *result;
  };

};
