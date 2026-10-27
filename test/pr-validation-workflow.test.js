'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const yaml = require('js-yaml');

const workflow = yaml.load(fs.readFileSync(
  path.join(__dirname, '..', '.github', 'workflows', 'validate-translated-posts.yml'), 'utf8'
));

test('PR validation runs regardless of changed files', () => {
  const trigger = workflow.on.pull_request;
  for (const event of ['opened', 'synchronize', 'reopened', 'ready_for_review']) {
    assert.ok(trigger.types.includes(event), `Missing pull request event: ${event}`);
  }
  assert.equal(trigger.paths, undefined);
  assert.equal(trigger['paths-ignore'], undefined);
});

test('PR validation runs the build, tests, and changed-article validator', () => {
  for (const [jobName, commands] of Object.entries({
    'hexo-build': ['npm run build'],
    'translated-posts': [
      'npm run test:translation-validation',
      'npm run validate:translations -- --base "$BASE_SHA" --head "$HEAD_SHA"'
    ]
  })) {
    const job = workflow.jobs[jobName];
    assert.equal(job.if, undefined);
    for (const command of commands) {
      assert.ok(job.steps.some((step) => step.run === command && step.if === undefined),
        `Missing unconditional command in ${jobName}: ${command}`);
    }
  }
});
