/* eslint-disable no-unused-vars */
const steamworks = require('.');
const SteamWorks = new steamworks();
const {
  SteamAPI,
  Constants,
  Enums,
  Structs,
  Uncategorized,
} = SteamWorks;

if (SteamAPI.IsSteamRunning()) {
  console.log('Steamworks API Initialized! Test passed!');
  SteamWorks.Shutdown();
  process.exit(0);
}
console.error('Steamworks API failed to Initialize! Test failed!');
process.exit(1);
