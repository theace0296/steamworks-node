const fs = require('fs');
const path = require('path');

const modulePath = path.join(__dirname, 'build', 'Release', 'steamworks.node');
fs.copyFileSync(modulePath, path.join(__dirname, 'steamworks.node'));

const steamRedisDir = path.join(__dirname, 'sdk', 'redistributable_bin')