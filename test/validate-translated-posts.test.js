'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const yaml = require('js-yaml');
const { spawnSync } = require('node:child_process');
const {
  TRANSLATION_SUFFIX,
  changedPostFiles,
  isTranslationArticle,
  normalizeSourceUrl,
  parseFrontMatter,
  validateFile
} = require('../scripts/validate-translated-posts');

const SOURCE_URL = 'https://example.com/source/article/';

function article(overrides = {}) {
  const {
    title = 'テスト記事',
    date = '2026-09-11 11:00',
    lastupdate,
    tags = ['Microsoft 365 Copilot'],
    sourceTitle = 'Original article title',
    sourceUrl = SOURCE_URL,
    body = '正常な本文です。',
    note = `※ この記事は、[${sourceTitle}](${sourceUrl})${TRANSLATION_SUFFIX}`
  } = overrides;
  const tagsYaml = Array.isArray(tags)
    ? `tags:\n${tags.map((tag) => `- ${tag}`).join('\n')}`
    : `tags: ${tags}`;
  const editorial = Object.hasOwn(overrides, 'editorial') ? overrides.editorial : {
    authors: ['test-author'],
    type: 'translation',
    version: '1.0.0',
    source_url: sourceUrl
  };
  return [
    '---',
    `title: "${title}"`,
    `date: ${date}`,
    ...(lastupdate === undefined ? [] : [`lastupdate: ${lastupdate}`]),
    tagsYaml,
    ...(editorial === undefined ? [] : [yaml.dump({ editorial }).trimEnd()]),
    '---',
    note,
    '',
    body,
    ''
  ].join('\n');
}

const fixtureRoots = [];
test.after(() => {
  for (const root of fixtureRoots) {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'translation-validation-'));
  fixtureRoots.push(root);
  fs.mkdirSync(path.join(root, 'source', '_posts'), { recursive: true });
  return {
    root,
    write(file, content) {
      const absolutePath = path.join(root, ...file.split('/'));
      fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
      fs.writeFileSync(absolutePath, content);
      return file;
    }
  };
}

function messages(result) {
  return result.errors.map((error) => error.message);
}

test('accepts a valid translated article and its local image', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/valid-article.md',
    article({ body: '![説明](image.png)\n\n[Learn](https://learn.microsoft.com/copilot/)' })
  );
  site.write('source/_posts/valid-article/image.png', 'image');

  assert.deepEqual(validateFile(file, site.root), { checked: true, errors: [] });
});

test('accepts repeated hyphens in a URL-derived filename and a single scalar tag', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/microsoft-365-copilot--getting-started.md',
    article({ tags: 'Microsoft 365 Copilot' })
  );

  assert.deepEqual(validateFile(file, site.root), { checked: true, errors: [] });
});

test('rejects filenames with leading or trailing hyphens and unsupported characters', () => {
  for (const name of ['-leading-hyphen.md', 'trailing-hyphen-.md', 'invalid_name.md']) {
    const site = fixture();
    const file = site.write(`source/_posts/${name}`, article());

    assert.match(messages(validateFile(file, site.root)).join('\n'), /ファイル名/);
  }
});

test('validates original metadata without applying translation-only prose rules', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/ordinary-article.md',
    article({
      note: '', body: 'Azure AD（旧名称）を説明します。', tags: [],
      editorial: { authors: ['test-author'], type: 'original', version: '1.0.0' }
    })
  );

  assert.deepEqual(validateFile(file, site.root), { checked: true, errors: [] });
});

test('requires editorial metadata for original and translated articles', () => {
  for (const note of ['', `※ この記事は、[Original](${SOURCE_URL})${TRANSLATION_SUFFIX}`]) {
    const site = fixture();
    const file = site.write('source/_posts/missing-metadata.md', article({ editorial: undefined, note }));
    assert.match(messages(validateFile(file, site.root)).join('\n'), /editorial/);
  }
});

test('validates the editorial mapping, authors, type and article version', () => {
  const valid = { authors: ['test-author', 'another-author'], type: 'translation',
    version: '1.0.0', source_url: SOURCE_URL };
  for (const [field, values] of [
    ['authors', [undefined, [], 'test-author', [''], ['@test'], ['a@b.com'],
      ['a', 'A'], ['a--b'], ['a-'], ['a'.repeat(40)], [null], [123], [true]]],
    ['type', [undefined, '', 'draft']],
    ['version', [undefined, '', '1', '1.0', '01.0.0', '1.0.0-beta', 'v1.0.0', {}, 1, null]],
    ['source_url', [undefined, '', 'https://%', '/relative', 'ftp://example.com/',
      'https://user:pass@example.com/', ' https://example.com/', 'https:example.com',
      'https://example.com/a b']]
  ]) {
    for (const value of values) {
      const site = fixture();
      const editorial = { ...valid, [field]: value };
      const file = site.write('source/_posts/invalid-metadata.md', article({ editorial }));
      assert.match(messages(validateFile(file, site.root)).join('\n'),
        new RegExp(`editorial\\.${field}`), `${field}: ${JSON.stringify(value)}`);
    }
  }
  for (const editorial of [null, [], 'invalid']) {
    const site = fixture();
    const file = site.write('source/_posts/invalid-mapping.md', article({ editorial }));
    assert.match(messages(validateFile(file, site.root)).join('\n'), /editorial/);
  }
  const site = fixture();
  const file = site.write('source/_posts/multiple-authors.md', article({ editorial: valid }));
  assert.deepEqual(validateFile(file, site.root).errors, []);
});

test('checks source consistency and rejects translation metadata on an original', () => {
  const site = fixture();
  const editorial = { authors: ['test-author'], type: 'translation', version: '1.2.3',
    source_url: 'https://EXAMPLE.com/source/article' };
  const file = site.write('source/_posts/source-check.md', article({ editorial }));
  assert.deepEqual(validateFile(file, site.root).errors, []);
  site.write(file, article({ editorial: { ...editorial, source_url: `${SOURCE_URL}?v=2` } }));
  assert.match(messages(validateFile(file, site.root)).join('\n'), /一致しません/);
  site.write(file, article({ note: '', editorial: { ...editorial, type: 'original' } }));
  assert.match(messages(validateFile(file, site.root)).join('\n'), /source_url/);
  site.write(file, article({ editorial: { ...editorial, type: 'original' } }));
  assert.match(messages(validateFile(file, site.root)).join('\n'), /editorial.type/);
});

test('translation identity survives a removed note or a forced original type', () => {
  const site = fixture();
  const file = site.write('source/_posts/note-removed.md', article({ note: '' }));
  assert.equal(isTranslationArticle(fs.readFileSync(path.join(site.root, file), 'utf8')), true);
  assert.match(messages(validateFile(file, site.root)).join('\n'), /抄訳注釈/);
  site.write(file, article({ note: '', editorial: {
    authors: ['test-author'], type: 'original', version: '1.0.0'
  } }));
  const errors = messages(validateFile(file, site.root, { forceTranslation: true })).join('\n');
  assert.match(errors, /editorial.type/);
  assert.match(errors, /抄訳注釈/);
});

test('detects metadata-only duplicate sources and legacy attribution sources', () => {
  for (const editorial of [undefined, {
    authors: ['test-author'], type: 'translation', version: '1.0.0', source_url: SOURCE_URL
  }]) {
    const site = fixture();
    site.write('source/_posts/existing.md', article({
      editorial,
      note: editorial ? '' : `※ この記事は、[Legacy](${SOURCE_URL}) の抄訳です。`
    }));
    const file = site.write('source/_posts/new.md', article());
    assert.match(messages(validateFile(file, site.root)).join('\n'), /既に存在/);
  }
});

test('validates every article with --all and reports invalid CLI input', () => {
  const site = fixture();
  const script = path.resolve(__dirname, '..', 'scripts', 'validate-translated-posts.js');
  site.write('source/_posts/original.md', article({ note: '', editorial: {
    authors: ['test-author'], type: 'original', version: '1.0.0'
  } }));
  const run = (...args) => spawnSync(process.execPath, [script, ...args], {
    cwd: site.root, encoding: 'utf8'
  });

  assert.equal(run('--all').status, 0);
  site.write('source/_posts/original.md', article({ note: '', editorial: undefined }));
  const result = run('--all');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /editorial/);
  for (const args of [[], ['--unknown'], ['--all', '--base', 'HEAD']]) {
    assert.equal(run(...args).status, 2);
  }
});

test('reference examples validate and both article scaffolds include management fields', () => {
  const root = path.resolve(__dirname, '..');
  const reference = fs.readFileSync(path.join(root, 'docs', 'article-templates.md'), 'utf8');
  const examples = [...reference.matchAll(/```markdown\r?\n([\s\S]*?)\r?\n```/g)];
  assert.equal(examples.length, 2);
  for (const [index, example] of examples.entries()) {
    const site = fixture();
    const file = site.write(`source/_posts/example-${index}.md`, example[1]);
    assert.deepEqual(validateFile(file, site.root).errors, []);
  }
  for (const name of ['post', 'draft']) {
    const scaffold = fs.readFileSync(path.join(root, 'scaffolds', `${name}.md`), 'utf8')
      .replaceAll('{{ title }}', 'Test title').replaceAll('{{ date }}', '2026-10-23 13:00');
    const frontMatter = parseFrontMatter(scaffold);
    assert.equal(frontMatter.error, undefined);
    assert.deepEqual(frontMatter.data.editorial,
      { authors: [], type: 'original', version: '1.0.0' });
  }
});

test('validates a previously translated article after its note is removed', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/translated-before.md',
    article({ note: '', body: '注釈が削除された本文です。' })
  );
  const result = validateFile(file, site.root, { forceTranslation: true });

  assert.equal(result.checked, true);
  assert.match(messages(result).join('\n'), /抄訳注釈/);
});

test('reports malformed front matter and translation note without stopping early', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/Broken Article.md',
    ['---', 'title: [invalid', '---', `※ この記事は、[Original](${SOURCE_URL}) 不完全な注釈です。`, 'ﾃｽﾄ：Azure AD'].join('\n')
  );
  const result = validateFile(file, site.root);

  assert.equal(result.checked, true);
  assert.match(messages(result).join('\n'), /ファイル名/);
  assert.match(messages(result).join('\n'), /front matter を解析/);
  assert.match(messages(result).join('\n'), /抄訳注釈/);
  assert.match(messages(result).join('\n'), /半角カタカナ/);
  assert.match(messages(result).join('\n'), /Azure AD/);
  assert.match(messages(result).join('\n'), /全角記号/);
});

test('validates required front matter fields and exact dates', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/invalid-front-matter.md',
    article({ title: '', date: '2026-02-30', lastupdate: '2026/09/11', tags: [] })
  );
  const result = validateFile(file, site.root);

  assert.equal(result.errors.length, 4);
  assert.match(messages(result).join('\n'), /title/);
  assert.match(messages(result).join('\n'), /date/);
  assert.match(messages(result).join('\n'), /lastupdate/);
  assert.match(messages(result).join('\n'), /tags/);
});

test('rejects an empty scalar tag', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/empty-scalar-tag.md',
    article({ tags: '""' })
  );

  assert.match(messages(validateFile(file, site.root)).join('\n'), /tags/);
});

test('accepts lastupdate with an empty YAML value', () => {
  for (const [name, content] of [
    ['without-space', article({ lastupdate: '' }).replace('lastupdate: \n', 'lastupdate:\n')],
    ['with-space', article({ lastupdate: '' })]
  ]) {
    const site = fixture();
    const file = site.write(`source/_posts/empty-lastupdate-${name}.md`, content);

    assert.deepEqual(validateFile(file, site.root).errors, []);
  }
});

test('rejects a non-empty lastupdate with an invalid format', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/invalid-lastupdate.md',
    article({ lastupdate: '2026/09/11' })
  );
  const result = validateFile(file, site.root);

  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0].message, /lastupdate/);
});

test('accepts date with seconds for compatibility with existing articles', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/date-with-seconds.md',
    article({ date: '2026-09-11 11:00:30' })
  );

  assert.deepEqual(validateFile(file, site.root).errors, []);
});

test('rejects date with invalid seconds', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/invalid-date-seconds.md',
    article({ date: '2026-09-11 11:00:60' })
  );
  const result = validateFile(file, site.root);

  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0].message, /date/);
});

test('rejects date with slash separators', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/slash-date.md',
    article({ date: '2026/09/11 11:00' })
  );
  const result = validateFile(file, site.root);

  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0].message, /date/);
});

test('rejects lastupdate with a time', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/timed-lastupdate.md',
    article({ lastupdate: '2026-09-11 11:00' })
  );
  const result = validateFile(file, site.root);

  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0].message, /lastupdate/);
});

test('requires the complete note immediately after front matter', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/bad-note.md',
    article({ note: `※ この記事は、[Original](${SOURCE_URL}) の抄訳です。` })
  );

  assert.match(messages(validateFile(file, site.root)).join('\n'), /抄訳注釈/);
});

test('reports an invalid source URL without crashing duplicate detection', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/invalid-source-url.md',
    article({ sourceUrl: 'https://%' })
  );

  assert.match(messages(validateFile(file, site.root)).join('\n'), /原文 URL/);
});

test('reports missing and misplaced local images but ignores external media', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/image-check.md',
    article({
      body: [
        '![](missing.png)',
        '![](../shared/outside.png)',
        '![](https://example.com/image.png)',
        '<img src="//cdn.example.com/image.png">',
        '<iframe src="https://example.com/video"></iframe>',
        '[anchor](#section)'
      ].join('\n')
    })
  );
  const result = validateFile(file, site.root);

  assert.equal(result.errors.length, 2);
  assert.match(messages(result).join('\n'), /見つかりません/);
  assert.match(messages(result).join('\n'), /フォルダー外/);
});

test('only rejects locale segments on Microsoft Learn URLs', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/learn-links.md',
    article({
      body: [
        '[localized](https://learn.microsoft.com/ja-jp/copilot/)',
        '[other host](https://example.com/ja-jp/copilot/)',
        '`https://learn.microsoft.com/en-us/copilot/`'
      ].join('\n')
    })
  );
  const result = validateFile(file, site.root);

  assert.equal(result.errors.length, 1);
  assert.match(result.errors[0].message, /ロケール/);
});

test('prose checks ignore URLs, inline code, fenced code, HTML attributes, and source title', () => {
  const site = fixture();
  const file = site.write(
    'source/_posts/safe-exclusions.md',
    article({
      sourceTitle: 'Azure AD（original）：title',
      sourceUrl: 'https://example.com/Azure%20AD/%EF%BC%88source%EF%BC%89',
      body: [
        '`Azure AD（code）：value`',
        '`` `Azure AD（nested）` ``',
        '````text',
        '```',
        'Azure AD（still fenced）：value ﾃｽﾄ',
        '````',
        '```text',
        'Azure AD（fenced）：value ﾃｽﾄ',
        '```',
        '<span title="x > Azure AD（attribute）：value">正常</span>'
      ].join('\n')
    })
  );

  assert.deepEqual(validateFile(file, site.root).errors, []);
});

test('reports duplicate source URLs after safe trailing-slash normalization', () => {
  const site = fixture();
  site.write(
    'source/_posts/existing-article.md',
    article({
      sourceUrl: 'https://EXAMPLE.com/source/article',
      note: '※ この記事は、[Legacy article](https://EXAMPLE.com/source/article) の抄訳です。'
    })
  );
  const file = site.write('source/_posts/new-article.md', article());

  assert.match(messages(validateFile(file, site.root)).join('\n'), /既に存在/);
  assert.notEqual(
    normalizeSourceUrl('https://example.com/source/article?view=1'),
    normalizeSourceUrl('https://example.com/source/article?view=2')
  );
});

test('changedPostFiles includes additions, modifications, and renames but excludes deletions', () => {
  const site = fixture();
  const run = (...args) =>
    require('node:child_process').execFileSync('git', args, {
      cwd: site.root,
      stdio: 'ignore'
    });
  run('init');
  run('config', 'user.name', 'Test');
  run('config', 'user.email', 'test@example.com');
  site.write('source/_posts/modified.md', article());
  site.write('source/_posts/deleted.md', article());
  site.write('source/_posts/renamed-before.md', article());
  run('add', '.');
  run('commit', '-m', 'base');
  const base = require('node:child_process')
    .execFileSync('git', ['rev-parse', 'HEAD'], { cwd: site.root, encoding: 'utf8' })
    .trim();

  site.write('source/_posts/modified.md', article({ body: '変更後です。' }));
  fs.rmSync(path.join(site.root, 'source', '_posts', 'deleted.md'));
  fs.renameSync(
    path.join(site.root, 'source', '_posts', 'renamed-before.md'),
    path.join(site.root, 'source', '_posts', 'renamed-after.md')
  );
  site.write('source/_posts/path with spaces.md', article());
  run('add', '-A');
  run('commit', '-m', 'head');
  const head = require('node:child_process')
    .execFileSync('git', ['rev-parse', 'HEAD'], { cwd: site.root, encoding: 'utf8' })
    .trim();

  assert.deepEqual(changedPostFiles(base, head, site.root).sort(), [
    'source/_posts/modified.md',
    'source/_posts/path with spaces.md',
    'source/_posts/renamed-after.md'
  ]);
});
