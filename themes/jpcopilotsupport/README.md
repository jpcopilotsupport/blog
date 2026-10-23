# Japan Copilot Support Blog theme

This is the locally maintained Hexo theme for
[Japan Copilot Support Blog](https://jpcopilotsupport.github.io/blog/).
It is derived from [Hexo Landscape](https://github.com/hexojs/hexo-theme-landscape).

## Usage

The site's root `_config.yml` selects this theme:

```yaml
theme: jpcopilotsupport
```

Run the following commands from the repository root, not this theme directory:

```powershell
npm ci
npm run build
npm run server
```

The local site is available at <http://localhost:4000/blog/>.
Dependencies and build commands are managed by the root `package.json`.
Legacy Grunt tasks are not used; the required web fonts are bundled with the theme.
Changes to this theme are maintained in this repository; do not replace it with
an unmodified Landscape checkout or update it from the original blog repository.

## Configuration

Edit this theme's [`_config.yml`](_config.yml):

- `menu`: shared links for the header and collapsible navigation.
- `rss`: feed URL, currently `/atom.xml`.
- `noindex`: currently `true`, temporarily emitting
  `<meta name="robots" content="noindex, nofollow">` in all theme-rendered HTML
  pages. To allow search indexing again, set this to `false`, clean, build,
  and redeploy. Use YAML booleans, not quoted strings. This does not block
  crawling or public access, does not apply to XML feeds or other non-HTML
  files, and does not immediately remove previously indexed pages.
- `excerpt_link`: label for the article excerpt link.
- `sidebar`: `left`, `right`, `bottom`, or `false`.
- `widgets`: sidebar widgets. Available names are `category`, `tag`, `tagcloud`,
  `archive`, and `recent_posts`.
- `index_widgets`: widgets shown on subsequent index pages.
- `archive_type` and `show_count`: archive widget grouping and counts.
- `favicon`: icon paths relative to the site's source directory.

The favicon configuration uses a mapping, not a single file path:

```yaml
favicon:
  ico: icons/favicon.ico
  small: icons/favicon-16x16.png
  medium: icons/favicon-32x32.png
  apple_touch_icon: icons/apple-touch-icon.png
  webmanifest: icons/site.webmanifest
  safari_pinned_tab: icons/safari-pinned-tab.svg
  ms_browserconfig: icons/browserconfig.xml
```

The referenced assets are maintained in the site's `source\icons` directory.
The Safari pinned-tab icon is a monochrome Copilot silhouette derived from the
[official Copilot favicon](https://copilot.microsoft.com/static/cmc/favicon.svg).
Manifest and Windows tile URLs include the site's `/blog/` base path; update
those URLs as well if the site root changes.

## Appearance and article metadata

- [Color variables](source/css/_variables.styl) define Copilot-inspired header
  and footer gradients and dark text colors.
- Header links collapse into a menu below 960px.
- Article front matter uses `date` for publication and `lastupdate` for the
  visible last-update label. The sitemap also uses `lastupdate` when present,
  falling back to Hexo's standard `updated` field or the publication date.
- Japanese and English UI translations are retained in `languages\ja.yml` and
  `languages\default.yml` (the English fallback), respectively.
- Google Analytics and Gaug.es Analytics are not integrated or enabled.

## Upstream attribution and license

The original Landscape theme is Copyright (c) 2013 Tommy Chen and is distributed
under the MIT license. The original copyright notice, permission notice, and
disclaimer are preserved without modification in [LICENSE](LICENSE).

Keep that license when redistributing this theme. The upstream name and
attribution identify its origin; they do not select the active theme or connect
this repository to an upstream repository.
