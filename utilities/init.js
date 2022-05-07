#!/usr/bin/env node
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

if (!fs.existsSync(path.join(process.cwd(), 'node_modules/steamworks-node'))) {
  console.error('=====================================================');
  console.error('steamworks-node: Init must be run from your project\'s root directory (directory containing node_modules folder)!');
  console.error('=====================================================');
  process.exit(1);
}

execSync('npm run preinstall-steam', { stdio: 'inherit', cwd: path.join(process.cwd(), 'node_modules/steamworks-node') });
execSync('npm run swig', { stdio: 'inherit', cwd: path.join(process.cwd(), 'node_modules/steamworks-node') });
execSync('npm run node-gyp', { stdio: 'inherit', cwd: path.join(process.cwd(), 'node_modules/steamworks-node') });
execSync('npm run copy-bin', { stdio: 'inherit', cwd: path.join(process.cwd(), 'node_modules/steamworks-node') });
execSync('npm run generate-types', { stdio: 'inherit', cwd: path.join(process.cwd(), 'node_modules/steamworks-node') });

console.log('=====================================================');
console.log('steamworks-node: Init Complete, Steamworks-Node is ready to use!');
console.log('=====================================================');