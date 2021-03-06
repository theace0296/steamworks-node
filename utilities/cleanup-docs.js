const fs = require('fs-extra');

(async () => {
  await Promise.all(
    fs.readdirSync('./wiki').map(async wikiFile => {
      const content = await fs.readFile(`./wiki/${wikiFile}`, 'utf8');
      await fs.writeFile(
        `./wiki/${wikiFile.replace(/index\.index/g, 'index.SteamWorksClass')}`,
        content
          .replace(/(&lt;|<)internal(\\?>|\\?&gt;)/g, 'SteamWorksNamespace')
          .replace(/index\.index/g, 'index.SteamWorksClass')
          .replace(/\)\.index/g, ').SteamWorksClass')
          .replace(/# Class:\x20index/g, '# Class: SteamWorksClass')
          .replace(/# Module:\x20index/g, '# Module: Steamworks')
          .replace(/\[index\]\(\.\.\/wiki\/index\)/g, '[Steamworks](../wiki/index)')
          .replace(/\[index\]\(\.\.\/wiki\/index\.SteamWorksClass\)/g, '[SteamWorksClass](../wiki/index.SteamWorksClass)')
          .replace(/-1\)/g, ')'),
      );
      if (
        wikiFile.replace(/index\.index/g, 'index.SteamWorksClass') !== wikiFile
      ) {
        await fs.rm(`./wiki/${wikiFile}`);
      }
    }),
  );
})();
