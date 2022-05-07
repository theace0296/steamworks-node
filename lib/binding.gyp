{
  "targets": [
    {
      "target_name": "steamworks",
      "sources": [
        ".\\steam_api_wrap.cxx",
        ".\\steamcallresult.cpp",
        ".\\steamcallback.cpp"
      ],
      "include_dirs": [
        ".",
        "..\\steam"
      ],
      "libraries": [
        "..\\..\\steam\\redistributable_bin\\win64\\steam_api64.lib",
        "..\\..\\steam\\lib\\win64\\sdkencryptedappticket64.lib"
      ]
    }
  ]
}