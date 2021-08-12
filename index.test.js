const steamworks = require('.');

if (steamworks.SteamAPI_Init() || steamworks.SteamAPI_IsSteamRunning()) {
  console.log('Steamworks API Initialized! Test passed!');
  process.exit(0);
}
console.error('Steamworks API failed to Initialize! Test failed!');
process.exit(1);
