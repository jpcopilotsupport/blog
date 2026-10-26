'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const yaml = require('js-yaml');
const Hexo = require('hexo');

test('renders optional covers above titles with resolved URLs and escaped attributes', async () => {
  const root = path.resolve(__dirname, '..');
  const temporary = fs.mkdtempSync(path.join(root, '.post-cover-rendering-'));
  let hexo;
  try {
    const source = path.join(temporary, 'source');
    const posts = path.join(source, '_posts');
    const output = path.join(temporary, 'public');
    fs.mkdirSync(posts, { recursive: true });
    const fixtures = [
      { slug: 'without-cover' },
      { slug: 'empty-cover', cover: '' },
      { slug: 'local-cover', cover: 'cover.svg', expected: '/blog/local-cover/cover.svg' },
      { slug: 'nested-cover', cover: 'images/cover.svg', expected: '/blog/nested-cover/images/cover.svg' },
      { slug: 'shared-cover', cover: '/images/cover.svg', expected: '/blog/images/cover.svg' },
      {
        slug: 'external-cover',
        cover: 'https://example.com/cover.png?a=1&b=2',
        cover_alt: 'Cover "description" <test>',
        expected: 'https://example.com/cover.png?a=1&amp;b=2'
      }
    ];
    for (const { slug, cover, cover_alt } of fixtures) {
      fs.writeFileSync(path.join(posts, `${slug}.md`),
        `---\n${yaml.dump({ title: slug, date: '2020-01-01 12:00', cover, cover_alt })}---\nCover test body.\n`);
    }
    for (const slug of ['local-cover', 'nested-cover']) {
      const asset = path.join(posts, slug, ...(slug === 'nested-cover' ? ['images'] : []));
      fs.mkdirSync(asset, { recursive: true });
      fs.writeFileSync(path.join(asset, 'cover.svg'),
        '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"></svg>');
    }
    fs.mkdirSync(path.join(source, 'images'));
    fs.writeFileSync(path.join(source, 'images', 'cover.svg'),
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"></svg>');

    const config = yaml.load(fs.readFileSync(path.join(root, '_config.yml'), 'utf8'));
    config.source_dir = source;
    config.public_dir = output;
    const configPath = path.join(temporary, 'config.yml');
    fs.writeFileSync(configPath, yaml.dump(config));
    hexo = new Hexo(root, { silent: true, config: configPath, output: temporary });
    await hexo.init();
    await hexo.call('generate');

    for (const { slug, expected, cover_alt } of fixtures) {
      const html = fs.readFileSync(path.join(output, slug, 'index.html'), 'utf8');
      assert.match(html, /Cover test body/);
      if (!expected) {
        assert.doesNotMatch(html, /class="article-cover"/);
        continue;
      }
      const cover = html.match(/<div class="article-cover">([\s\S]*?)<\/div>/);
      assert.ok(cover, `Missing cover for ${slug}`);
      assert.ok(cover[1].includes(`src="${expected}"`), `Unexpected cover URL for ${slug}`);
      assert.ok(html.indexOf(cover[0]) < html.indexOf('<header class="article-header-single">'));
      assert.equal((html.match(/class="article-cover"/g) || []).length, 1);
      assert.ok(cover[1].includes(cover_alt
        ? 'alt="Cover &#34;description&#34; &lt;test&gt;"'
        : 'alt=""'));
      if (expected.startsWith('/blog/')) {
        assert.ok(fs.existsSync(path.join(output, expected.slice('/blog/'.length))),
          `Missing asset for ${slug}: ${fs.readdirSync(path.join(output, slug)).join(', ')}`);
      }
    }
    for (const page of ['index.html', path.join('archives', 'index.html')]) {
      const html = fs.readFileSync(path.join(output, page), 'utf8');
      assert.doesNotMatch(html, /class="article-cover"/);
    }
    const css = fs.readFileSync(path.join(output, 'css', 'style.css'), 'utf8');
    assert.match(css, /\.article-cover img\s*\{[^}]*display:\s*block;[^}]*max-width:\s*100%;[^}]*height:\s*auto;/);
  } finally {
    if (hexo) await hexo.exit();
    fs.rmSync(temporary, { recursive: true, force: true });
  }
});
