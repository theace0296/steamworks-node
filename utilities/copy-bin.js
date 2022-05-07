const fs = require('fs-extra');
const path = require('path');

const modulePath = path.join('./lib/build', process.argv[process.argv.length - 1] === 'debug' ? 'Debug' : 'Release', 'steamworks.node');
if (!fs.existsSync('./bin')) {
  fs.mkdirSync('./bin');
}
fs.copyFileSync(modulePath, path.join('./bin', 'steamworks.node'));

const defaultSteamSdkBinPath = './sdk';
const steamSdkBasePath =
  process?.env?.STEAMWORKS_SDK_PATH ?? defaultSteamSdkBinPath;

try {
  if (!fs.existsSync(steamSdkBasePath)) {
    throw new Error(
      'The Steamworks SDK directory was not found or is invalid!\nThe default location should be [program_dir]/steam.\nYou can also point to a custom directory using a \'STEAMWORKS_SDK_PATH\' environment variable.',
    );
  }

  const steamRedisDir = './steam/redistributable_bin';
  const steamRedisFiles = (() => {
    switch (process.platform) {
    case 'win32':
      if (process.arch === 'x64') {
        return fs
          .readdirSync(path.join(steamRedisDir, 'win64'))
          .map(file => path.join(steamRedisDir, 'win64', file));
      }
      return fs
        .readdirSync(path.join(steamRedisDir))
        .filter(file => fs.statSync(path.join(steamRedisDir, file)).isFile())
        .map(file => path.join(steamRedisDir, file));
    case 'linux':
      if (process.arch === 'x64') {
        return fs
          .readdirSync(path.join(steamRedisDir, 'linux64'))
          .map(file => path.join(steamRedisDir, 'linux64', file));
      }
      return fs
        .readdirSync(path.join(steamRedisDir, 'linux32'))
        .map(file => path.join(steamRedisDir, 'linux32', file));
    case 'darwin':
      return fs
        .readdirSync(path.join(steamRedisDir, 'osx'))
        .map(file => path.join(steamRedisDir, 'osx', file));
    default:
      throw new Error(`${process.platform} is not supported!`);
    }
  })();

  if (steamRedisFiles.length <= 0) {
    throw new Error(
      'An unknown error has occured! (Perhaps the Steam SDK files are missing?)',
    );
  }

  for (const steamRedisFile of steamRedisFiles) {
    fs.copyFileSync(
      steamRedisFile,
      path.join('./bin', path.basename(steamRedisFile)),
    );
  }

  const steamAuthlibDir = './steam/lib';
  const steamAuthlibFiles = (() => {
    switch (process.platform) {
    case 'win32':
      if (process.arch === 'x64') {
        return fs
          .readdirSync(path.join(steamAuthlibDir, 'win64'))
          .map(file => path.join(steamAuthlibDir, 'win64', file));
      }
      return fs
        .readdirSync(path.join(steamAuthlibDir, 'win32'))
        .map(file => path.join(steamAuthlibDir, 'win32', file));
    case 'linux':
      if (process.arch === 'x64') {
        return fs
          .readdirSync(path.join(steamAuthlibDir, 'linux64'))
          .map(file => path.join(steamAuthlibDir, 'linux64', file));
      }
      return fs
        .readdirSync(path.join(steamAuthlibDir, 'linux32'))
        .map(file => path.join(steamAuthlibDir, 'linux32', file));
    case 'darwin':
      return fs
        .readdirSync(path.join(steamAuthlibDir, 'osx'))
        .map(file => path.join(steamAuthlibDir, 'osx', file));
    default:
      throw new Error(`${process.platform} is not supported!`);
    }
  })();

  if (steamAuthlibFiles.length <= 0) {
    throw new Error(
      'An unknown error has occured! (Perhaps the Steam SDK files are missing?)',
    );
  }

  for (const steamAuthlibFile of steamAuthlibFiles) {
    fs.copyFileSync(
      steamAuthlibFile,
      path.join('./bin', path.basename(steamAuthlibFile)),
    );
  }
} catch (error) {
  console.error('=====================================================');
  console.error('An error occured during install:');
  console.error(error.message);
  console.error('=====================================================');
  process.exit(1);
}
