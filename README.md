# jpcopilotsupport blog site

Go to the [blog site](https://jpcopilotsupport.github.io/blog/).

## Writing articles

Use the [article templates and metadata guide](docs/article-templates.md) for
original and translated posts. Every article requires `editorial.authors`,
`editorial.type`, and an article `editorial.version` such as `"1.0.0"`.
Translations also require `editorial.source_url`, matching the public attribution.
Editorial fields are not rendered in the site or feed, but remain readable in
this public repository: never put confidential information in them. Reviews
are tracked in pull requests, not article metadata.

Run `npm run validate:translations -- --all` to validate all articles and
`npm run test:translation-validation` to run validator and public-output tests.
The existing command names are retained, but original posts are also validated.
In Windows PowerShell, use `npm.cmd run validate:translations -- --all` to
ensure the argument is passed through to the validator.

### Translation commands in VS Code

The commands are available as workspace skills in skills-compatible environments
such as Copilot CLI / SDK, and as prompt files in the VS Code Chat view's Local
harness:

- `/translate <URL>`: create a Japanese summary translation of an English article
  with the [translation skill](.github/skills/translate/SKILL.md) or
  [translation prompt](.github/prompts/translate.prompt.md).
- `/update <URL>`: find the existing Japanese translation by its source URL,
  compare it with the current original, update the relevant content and metadata,
  validate it, and open a local preview with the
  [update skill](.github/skills/update/SKILL.md) or
  [update prompt](.github/prompts/update.prompt.md).

The skills read the existing prompt bodies as shared workflow instructions, so
versioning and review behavior stay consistent without requiring prompt-file
support in the selected environment. Run them from this repository. Start a new
session after adding the skills if the current session does not list them yet.
If both a skill and a prompt appear with the same name in Local chat, either
entry uses the same workflow.

The update command preserves the article's filename and initial publication date.
Both commands first validate the draft and open a local preview, then include a
sentence-by-sentence review against the full original. They show the preview URL,
coverage, and a comparison table of
wording, omissions, and differences in certainty or obligation, then wait for
the operator to choose expressions while viewing the preview. The preview stays
available during selection; adopted changes are revalidated, rebuilt, and checked
in the refreshed preview. See the
[review procedure](docs/article-templates.md#原文との逐文レビュー).
If no update is needed, it leaves the article unchanged. Neither an update Issue
nor a pull request is required for this interactive workflow. Confirm when the
preview server can be stopped after reviewing the result.

## Deployment

Pushes to `main` run validator tests, build the site with Node.js 22, and deploy
the generated `public` directory using the official GitHub Pages actions in
[the deployment workflow](.github/workflows/deploy-github-pages.yml).
The workflow can also be started manually.

Set the repository's Pages source to **GitHub Actions** and allow `main` to
deploy to the `github-pages` environment. The workflow requests `contents: read`,
`pages: write`, and `id-token: write`; no personal access token or additional
secret is required. It does not push build output to a `gh-pages` branch.
The existing `npm run deploy` script is a legacy Git deployment command and is
not used by this workflow.

## Launch and sitemap

The Copilot support team was established on October 1, 2026. The blog launched
on October 23, 2026.

`npm run build` generates `public/sitemap.xml` using `hexo-generator-sitemap`.
Do not add a static `source/sitemap.xml`, which would conflict with the generated
sitemap. The sitemap uses an article's `lastupdate` date (`YYYY-MM-DD`) when
present, matching the visible last-update label. Otherwise it uses Hexo's
standard `updated` timestamp, which defaults to the publication date with
`updated_option: date`.
The [sitemap template](sitemap-template.xml) preserves the configured timezone
in article timestamps, so a publication date at midnight in Japan is not
truncated to the preceding UTC date.

Google Analytics is not integrated or enabled. Any future adoption requires a
new integration and a measurement ID owned by this blog.

## Theme colors

The header uses a cyan-blue-green gradient (`#3DCBFF`, `#1AA1F0`, `#52B471`),
and the footer uses a purple-pink-orange gradient (`#B484EA`, `#F276A0`, `#FFB152`)
inspired by the Copilot icon. The purple and pink are lightened to keep dark text
(`#1F2937`) readable throughout the gradient. Solid background colors remain as
fallbacks. These colors and gradients are defined in
[`_variables.styl`](themes/jpcopilotsupport/source/css/_variables.styl).

## Navigation

Header and mobile links share the `menu` setting in the
[theme configuration](themes/jpcopilotsupport/_config.yml). The header switches
to the collapsible menu at widths below 960px to keep the links on one row.

See the [theme documentation](themes/jpcopilotsupport/README.md) for configuration
and the preserved upstream license.