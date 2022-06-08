{
  "targets": [{
    "target_name": "steamworks",
    "sources": [
      ".\\lib\\steam_api_wrap.cxx",
      ".\\lib\\steamcallresult.cpp",
      ".\\lib\\steamcallback.cpp"
    ],
    "include_dirs": [
      ".\\lib",
      ".\\steam"
    ],
    "libraries": [
      "..\\steam\\redistributable_bin\\win64\\steam_api64.lib",
      "..\\steam\\lib\\win64\\sdkencryptedappticket64.lib"
    ]
  }]
}