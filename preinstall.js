const fs = require('fs');
const path = require('path');

const steamRedisDir = path.join(__dirname, 'sdk', 'redistributable_bin');
const steamRedisFiles = (() => {
  switch (process.platform) {
    case 'win32':
      if (process.arch === 'x64') {
        return fs.readdirSync(path.join(steamRedisDir, 'win64')).map(file => path.join(steamRedisDir, 'win64', file));
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
      return fs.readdirSync(path.join(steamRedisDir, 'linux32')).map(file => path.join(steamRedisDir, 'linux32', file));
    case 'darwin':
      return fs.readdirSync(path.join(steamRedisDir, 'osx')).map(file => path.join(steamRedisDir, 'osx', file));
    default:
      throw new Error(`${process.platform} is not supported!`);
  }
})();

if (steamRedisFiles.length <= 0) {
  throw new Error('An unknown error has occured! (Perhaps the Steam SDK files are missing?)');
}

for (const steamRedisFile of steamRedisFiles) {
  fs.copyFileSync(steamRedisFile, path.join(__dirname, path.basename(steamRedisFile)));
  if (path.basename(steamRedisFile).includes('lib')) {
    const gypContent = fs.readFileSync(path.join(__dirname, 'binding.gyp'), 'utf-8');
    const gypObject = JSON.parse(gypContent);
    if (gypObject && gypObject?.targets?.length && gypObject?.targets[0]?.libraries) {
      gypObject.targets[0].libraries = [`..\\${path.basename(steamRedisFile)}`];
      fs.writeFileSync(path.join(__dirname, 'binding.gyp'), JSON.stringify(gypObject, null, 2));
    } else {
      throw new Error('bindings.gyp was unreadable or formatted incorrectly!');
    }
  }
}

const steamAuthlibDir = path.join(__dirname, 'sdk', 'lib');
const steamAuthlibFiles = (() => {
  switch (process.platform) {
    case 'win32':
      if (process.arch === 'x64') {
        return fs.readdirSync(path.join(steamAuthlibDir, 'win64')).map(file => path.join(steamAuthlibDir, 'win64', file));
      }
      return fs.readdirSync(path.join(steamAuthlibDir, 'win32')).map(file => path.join(steamAuthlibDir, 'win32', file));
    case 'linux':
      if (process.arch === 'x64') {
        return fs
          .readdirSync(path.join(steamAuthlibDir, 'linux64'))
          .map(file => path.join(steamAuthlibDir, 'linux64', file));
      }
      return fs.readdirSync(path.join(steamAuthlibDir, 'linux32')).map(file => path.join(steamAuthlibDir, 'linux32', file));
    case 'darwin':
      return fs.readdirSync(path.join(steamAuthlibDir, 'osx')).map(file => path.join(steamAuthlibDir, 'osx', file));
    default:
      throw new Error(`${process.platform} is not supported!`);
  }
})();

if (steamAuthlibFiles.length <= 0) {
  throw new Error('An unknown error has occured! (Perhaps the Steam SDK files are missing?)');
}

for (const steamAuthlibFile of steamAuthlibFiles) {
  fs.copyFileSync(steamAuthlibFile, path.join(__dirname, path.basename(steamAuthlibFile)));
  if (path.basename(steamAuthlibFile).includes('lib')) {
    const gypContent = fs.readFileSync(path.join(__dirname, 'binding.gyp'), 'utf-8');
    const gypObject = JSON.parse(gypContent);
    if (gypObject && gypObject?.targets?.length && gypObject?.targets[0]?.libraries) {
      gypObject.targets[0].libraries = [ ...gypObject.targets[0].libraries, `..\\${path.basename(steamAuthlibFile)}` ];
      fs.writeFileSync(path.join(__dirname, 'binding.gyp'), JSON.stringify(gypObject, null, 2));
    } else {
      throw new Error('bindings.gyp was unreadable or formatted incorrectly!');
    }
  }
}
