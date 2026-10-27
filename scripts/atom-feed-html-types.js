'use strict';

/* global hexo */

// hexo-generator-feed 4.0.0 emits HTML payloads without Atom's required HTML type.
hexo.extend.filter.register('after_generate', async function() {
  const { feed } = this.config;
  if (!feed?.enable || this.locals.get('posts').length === 0) return;

  const types = Array.isArray(feed.type) ? feed.type : [feed.type];
  const paths = Array.isArray(feed.path) ? feed.path : [feed.path];
  for (const [index, type] of types.entries()) {
    if (type !== 'atom') continue;
    const stream = this.route.get(paths[index]);
    if (!stream) throw new Error(`Generated Atom feed is missing: ${paths[index]}`);
    const chunks = [];
    for await (const chunk of stream) chunks.push(Buffer.from(chunk));
    const xml = Buffer.concat(chunks).toString('utf8');
    const normalized = xml.replace(/<!\[CDATA\[[\s\S]*?\]\]>|<(content|summary)>/g,
      (match, element) => element ? `<${element} type="html">` : match);
    if (normalized !== xml) this.route.set(paths[index], normalized);
  }
});
