#!/usr/bin/env node
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

if (!fs.existsSync(path.join(process.cwd(), 'node_modules/@theace0296/steamworks'))) {
  console.error('=====================================================');
  console.error('@theace0296/steamworks: Init must be run from your project\'s root directory (directory containing node_modules folder)!');
  console.error('=====================================================');
  process.exit(1);
}

execSync('npm run preinstall-steam', { stdio: 'inherit', cwd: path.join(process.cwd(), 'node_modules/@theace0296/steamworks') });
execSync('npm run swig', { stdio: 'inherit', cwd: path.join(process.cwd(), 'node_modules/@theace0296/steamworks') });
execSync('npm run node-gyp', { stdio: 'inherit', cwd: path.join(process.cwd(), 'node_modules/@theace0296/steamworks') });
execSync('npm run copy-bin', { stdio: 'inherit', cwd: path.join(process.cwd(), 'node_modules/@theace0296/steamworks') });
execSync('npm run generate-types', { stdio: 'inherit', cwd: path.join(process.cwd(), 'node_modules/@theace0296/steamworks') });

console.log('=====================================================');
console.log('@theace0296/steamworks: Init Complete, Steamworks is ready to use!');
console.log('=====================================================');