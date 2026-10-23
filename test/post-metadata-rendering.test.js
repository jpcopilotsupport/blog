'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const yaml = require('js-yaml');
const Hexo = require('hexo');
const { TRANSLATION_SUFFIX, validateFile } = require('../scripts/validate-translated-posts');

async function verifyRendering(noindex) {
  const root = path.resolve(__dirname, '..');
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'post-metadata-rendering-'));
  let hexo;
  try {
    const source = path.join(temporary, 'source');
    const posts = path.join(source, '_posts');
    const output = path.join(temporary, 'public');
    fs.mkdirSync(posts, { recursive: true });
    const sourceUrl = 'https://example.com/public-attribution-only/';
    for (const type of ['original', 'translation']) {
      const metadata = {
        title: `${type} article`,
        date: '2020-01-01 12:00',
        tags: ['Metadata test'],
        editorial: {
          authors: ['hidden-author-one', 'hidden-author-two'],
          type,
          version: '71.82.93',
          ...(type === 'translation' ? { source_url: sourceUrl } : {})
        }
      };
      const note = type === 'translation'
        ? `※ この記事は、[Original source](${sourceUrl})${TRANSLATION_SUFFIX}\n\n` : '';
      fs.writeFileSync(path.join(posts, `${type}.md`),
        `---\n${yaml.dump(metadata)}---\n${note}Test article body.\n`);
      assert.deepEqual(validateFile(`source/_posts/${type}.md`, temporary).errors, []);
    }
    const config = yaml.load(fs.readFileSync(path.join(root, '_config.yml'), 'utf8'));
    config.source_dir = source;
    config.public_dir = output;
    config.theme_config = { ...config.theme_config, noindex };
    const configPath = path.join(temporary, 'config.yml');
    fs.writeFileSync(configPath, yaml.dump(config));
    hexo = new Hexo(root, { silent: true, config: configPath, output: temporary });
    await hexo.init();
    await hexo.call('generate');

    for (const file of fs.readdirSync(output, { recursive: true })) {
      if (!/\.(html|xml)$/.test(file)) continue;
      const content = fs.readFileSync(path.join(output, file), 'utf8');
      if (file.endsWith('.html')) {
        const head = content.match(/<head>([\s\S]*?)<\/head>/);
        assert.ok(head, `Missing HTML head in ${file}`);
        const robotsTags = head[1].match(/<meta name="robots" content="noindex, nofollow">/g) || [];
        assert.equal(robotsTags.length, noindex ? 1 : 0, `Unexpected robots directive in ${file}`);
      }
      assert.doesNotMatch(content,
        /hidden-author-one|hidden-author-two|71\.82\.93|editorial|source_url/,
        `Management metadata leaked into ${file}`);
    }
    const original = fs.readFileSync(path.join(output, 'original', 'index.html'), 'utf8');
    const translation = fs.readFileSync(path.join(output, 'translation', 'index.html'), 'utf8');
    const feed = fs.readFileSync(path.join(output, 'atom.xml'), 'utf8');
    const sitemap = fs.readFileSync(path.join(output, 'sitemap.xml'), 'utf8');
    assert.match(original, /Test article body/);
    assert.match(translation, /Test article body/);
    assert.equal(translation.split(sourceUrl).length - 1, 1);
    assert.equal(feed.split(sourceUrl).length - 1, 2);
    for (const element of ['content', 'summary']) {
      const sections = feed.match(new RegExp(`<${element} type="html">[\\s\\S]*?</${element}>`, 'g'));
      assert.ok(sections, `Missing Atom ${element}`);
      assert.equal(sections.join('').split(sourceUrl).length - 1, 1);
    }
    assert.equal(original.includes(sourceUrl), false);
    assert.equal(sitemap.includes(sourceUrl), false);
    assert.match(feed, /original article/);
    assert.match(feed, /translation article/);
  } finally {
    if (hexo) await hexo.exit();
    fs.rmSync(temporary, { recursive: true, force: true });
  }
}

for (const noindex of [true, false]) {
  test(`renders public attribution without editorial metadata with noindex=${noindex}`,
    () => verifyRendering(noindex));
}
