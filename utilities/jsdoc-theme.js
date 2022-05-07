'use strict';
/**
 * This is a customized version of typedoc-github-wiki-theme,
 * the only difference is since we expose 'internal' methods,
 * we have to rename files to not have any illegal characters.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.load = void 0;
const fs = require('fs');
const typedoc_1 = require('typedoc');
const typedoc_plugin_markdown_1 = require('typedoc-plugin-markdown');
const PLURALS = {
  [typedoc_1.ReflectionKind.Class]     : 'Classes',
  [typedoc_1.ReflectionKind.Property]  : 'Properties',
  [typedoc_1.ReflectionKind.Enum]      : 'Enumerations',
  [typedoc_1.ReflectionKind.EnumMember]: 'Enumeration members',
  [typedoc_1.ReflectionKind.TypeAlias] : 'Type aliases',
};
function getKindString(kind) {
  let str = typedoc_1.ReflectionKind[kind];
  str = str.replace(/(.)([A-Z])/g, (_m, a, b) => a + ' ' + b.toLowerCase());
  return str;
}
function getKindPlural(kind) {
  if (kind in PLURALS) {
    return PLURALS[kind];
  }
  else {
    return getKindString(kind) + 's';
  }
}
class NavigationItem {
  constructor(title, url, parent, reflection) {
    this.title = (title === null || title === void 0 ? void 0 : title.replace(/(&lt;|<)?internal(\\?>|\\?&gt;)?/, 'SteamWorks')) || '';
    this.url = url || '';
    this.parent = parent;
    this.reflection = reflection;
    if (!url) {
      this.isLabel = true;
    }
    if (this.parent) {
      if (!this.parent.children) {
        this.parent.children = [];
      }
      this.parent.children.push(this);
    }
  }
  static create(reflection, parent, useShortNames) {
    let name;
    if (useShortNames || (parent && parent.parent)) {
      name = reflection.name;
    }
    else {
      name = reflection.getFullName();
    }
    name = name.replace(/(&lt;|<)?internal(\\?>|\\?&gt;)?/, 'SteamWorks').trim();
    return new NavigationItem(name, reflection.url, parent, reflection);
  }
}
class GithubWikiTheme extends typedoc_plugin_markdown_1.MarkdownTheme {
  constructor(renderer) {
    super(renderer);
    this.entryDocument = 'Home.md';
    this.hideBreadcrumbs = true;
    this.listenTo(this.owner, {
      [typedoc_1.RendererEvent.BEGIN]: this.writeSidebar,
    });
  }
  getRelativeUrl(url) {
    return encodeURI('../wiki/' + url.replace('.md', ''));
  }
  toUrl(mapping, reflection) {
    return `${reflection
      .getFullName()
      .replace(/[<>]/g, '')
      .replace(/(&lt;|<)?internal(\\?>|\\?&gt;)?/, 'SteamWorks')
      .replace(/\//g, '.')}.md`;
  }
  writeSidebar(renderer) {
    var _a;
    const parseUrl = (url) => '../wiki/' + url.replace('.md', '');
    const navigation = this.getNavigation(renderer.project);
    const navJson = [
      `## ${renderer.project.name.replace(/(&lt;|<)?internal(\\?>|\\?&gt;)?/, 'SteamWorks')}\n`,
    ];
    const allowedSections = ['Home', 'Modules', 'Namespaces'];
    (_a = navigation.children) === null || _a === void 0 ? void 0 : _a.filter((navItem) => !navItem.isLabel || allowedSections.includes(navItem.title)).forEach((navItem) => {
      var _a;
      if (navItem.isLabel) {
        navJson.push(`\n### ${navItem.title.replace(/(&lt;|<)?internal(\\?>|\\?&gt;)?/, 'SteamWorks')}\n`);
        (_a = navItem.children) === null || _a === void 0 ? void 0 : _a.forEach((navItemChild) => {
          const longTitle = navItemChild.title.split('.');
          const shortTitle = longTitle[longTitle.length - 1];
          navJson.push(`- [${shortTitle.replace(/(&lt;|<)?internal(\\?>|\\?&gt;)?/, 'SteamWorks')}](${parseUrl(encodeURI(navItemChild.url))})`);
        });
      }
      else {
        const title = navItem.url === this.entryDocument ? 'Home' : navItem.title;
        navJson.push(`- [${title.replace(/(&lt;|<)?internal(\\?>|\\?&gt;)?/, 'SteamWorks')}](${parseUrl(navItem.url)})`);
      }
    });
    fs.writeFileSync(renderer.outputDirectory + '/_Sidebar.md', navJson.join('\n') + '\n');
  }
  getNavigation(project) {
    var _a, _b;
    const urls = this.getUrls(project);
    const getUrlMapping = (name) => {
      if (!name) {
        return '';
      }
      return urls.find((url) => url.model.name === name);
    };
    const createNavigationItem = (title, url, isLabel, children = []) => {
      const navigationItem = new NavigationItem(title, url);
      navigationItem.isLabel = isLabel;
      navigationItem.children = children;
      // eslint-disable-next-line no-unused-vars
      const { reflection: _reflection, parent: _parent, ...filteredNavigationItem } = navigationItem;
      return filteredNavigationItem;
    };
    const navigation = createNavigationItem(project.name.replace(/(&lt;|<)?internal(\\?>|\\?&gt;)?/, 'SteamWorks'), undefined, false);
    const hasReadme = !this.readme.endsWith('none');
    if (hasReadme) {
      (_a = navigation.children) === null || _a === void 0 ? void 0 : _a.push(createNavigationItem('Readme', this.entryDocument, false));
    }
    if (this.entryPoints.length === 1) {
      (_b = navigation.children) === null || _b === void 0 ? void 0 : _b.push(createNavigationItem('Exports', hasReadme ? this.globalsFile : this.entryDocument, false));
    }
    this.mappings.forEach((mapping) => {
      var _a;
      const kind = mapping.kind[0];
      const items = project.getReflectionsByKind(kind);
      if (items.length > 0) {
        const children = items
          .map((item) => {
            var _a;
            return createNavigationItem(item
              .getFullName()
              .replace(/(&lt;|<)?internal(\\?>|\\?&gt;)?/, 'SteamWorks'), (_a = getUrlMapping(item.name)) === null || _a === void 0 ? void 0 : _a.url, true);
          })
          .sort((a, b) => (a.title > b.title ? 1 : -1));
        const group = createNavigationItem(getKindPlural(kind), undefined, true, children);
        (_a = navigation.children) === null || _a === void 0 ? void 0 : _a.push(group);
      }
    });
    return navigation;
  }
  get globalsFile() {
    return this.entryPoints.length > 1 ? 'Modules.md' : 'Exports.md';
  }
}
function load(app) {
  app.renderer.defineTheme('github-wiki-custom', GithubWikiTheme);
}
exports.load = load;
