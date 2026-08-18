# Repository Analysis — `phplemos/blog`

## 1. Overview

This repository is a personal blog built on **Hugo** (a Go-based static site generator), using **Notion as the CMS**. It is a fork/derivative of the open-source [`Notion-Hugo`](https://github.com/HEIGE-PCloud/Notion-Hugo) template (the `package.json` name is still `notion-doit`, pointing at the upstream `Hugo-DoIt/Notion-DoIt` project).

- **Site generator:** Hugo, active theme `hugo-coder`
- **CMS:** Notion, synced into the repo by a custom TypeScript script
- **License:** GPL-3.0-only (inherited from the upstream template)
- **Scale:** ~65 tracked files, ~1.3MB excluding theme submodules, 7 blog posts (~1,816 lines of Markdown) — a small, early-stage blog
- **Custom domain:** `phplemos.dev` (via `CNAME`)

## 2. Architecture

Content flows in one direction: **Notion → sync script → Hugo Markdown → Hugo build → static site**.

- `src/index.ts` is the CLI entry point for the sync. It uses the official `@notionhq/client` SDK to pull pages from a configured Notion database/page, and `src/markdown/` (`notion-to-md.ts`, `md.ts`, `notion.ts`) converts Notion blocks into GitHub-Flavored Markdown with YAML frontmatter, writing files into `content/posts/`.
- Synced post files carry a `MANAGED_BY_NOTION_HUGO: true` flag plus a `NOTION_METADATA` block (object id, created/edited timestamps and authors, cover image) — signaling these files are sync-owned and will be overwritten on the next run.
- `functions/api.ts` is a **Cloudflare Pages Function** that proxies and caches Notion-hosted file/cover-image URLs through a Cloudflare KV namespace, since Notion's asset URLs expire.
- `layouts/` holds small overrides on top of the `hugo-coder` theme: a custom footer partial, a posts list template, and two shortcodes (`math.html` for math rendering, `notion-unsupported-block.html` as a fallback for Notion block types the converter can't translate).

## 3. Content

`content/posts/` contains 7 posts, all in Portuguese, with auto-generated filenames of the form `[Title-with-dashes]-[NotionPageID].md`:

- Arquitetura de software
- Código Limpo
- Design Patterns
- Injeção de Dependência
- LifeOS: Meu Sistema de gestão pessoal
- Programação Orientada à Objetos
- SOLID (largest, 425 lines)

Non-post pages: `content/about.md`, `content/curriculum.md`, `content/projects.md`.

Frontmatter is YAML-based: `title`, `date`, `lastmod`, `draft`, `series`, `Status`, `authors`, `tags`, `categories`, `summary`, plus the `NOTION_METADATA` block described above.

## 4. CI/CD & Automation

Four workflows in `.github/workflows/`:

| Workflow | Trigger | Purpose |
|---|---|---|
| `cd.yml` | Daily cron (`0 0 * * *`), manual, repository_dispatch | Runs the Notion sync (`npm start`) and auto-commits any content changes with message "Sync content with Notion" |
| `deploy-gh-pages.yml` | Push to `main`, manual | Re-runs the Notion sync, auto-commits, builds with `hugo --gc --minify`, deploys to **GitHub Pages** |
| `ci.yml` | Push/PR to `main` | `npm install && npm run typecheck` — the only automated check in the repo |
| `automerge.yml` | Dependabot PRs | Auto-merge workflow scoped to `HEIGE-PCloud/Notion-Hugo` — a leftover from the upstream template that will not actually trigger in this fork |

This explains the recurring **"Sync content with Notion"** commits visible in `git log`: the blog is effectively headless, with content changes originating in Notion and flowing back into `main` automatically via CI.

**Deployment target:** the live site deploys to **GitHub Pages** (`actions/deploy-pages@v5`), not Cloudflare Pages — see Finding 1 below.

## 5. Tooling & Quality

- **Package manager:** npm (`engines`: node ≥16, npm ≥8)
- **Scripts:** `start` (run Notion sync), `server` (`hugo server -D`), `typecheck` (`tsc --noEmit`), `build` (`tsc`), `format` (`prettier --write`)
- **Linting/formatting:** Prettier only, with an empty `.prettierrc` (defaults). No ESLint.
- **Testing:** none — no test framework or config present.
- **Key dependencies:** `@notionhq/client`, `dotenv`, `front-matter`, `fs-extra`, `markdown-table`, `tsx`, `yaml`.

## 6. Findings & Recommendations

1. **README documents the wrong deploy target.** `README.md` walks through a Cloudflare Pages deployment (build command, KV binding, env vars), but the actual live pipeline (`deploy-gh-pages.yml`) deploys to GitHub Pages. Anyone onboarding from the README would set up the wrong thing. *Recommendation:* update the README to describe the GitHub Pages flow, or keep Cloudflare Pages instructions only if that's genuinely a supported secondary path.

2. **`GEMINI.md` describes a different repository entirely.** It documents a Hextra theme, Hugo Modules (`go.mod`), and Netlify deployment — none of which exist in this repo. This looks like stale or mistemplated AI-agent guidance and risks misleading any AI assistant (or human) that reads it before `MAINTAINER_AGENT.md`. *Recommendation:* delete `GEMINI.md` or rewrite it to match reality; treat `MAINTAINER_AGENT.md` (which is accurate and detailed, including a Mermaid architecture diagram) as the source of truth.

3. **Vestigial theme configuration and submodules.** `config/DoIt/` (Algolia search key, Disqus comments, Google Analytics settings) and the `themes/DoIt` / `themes/ananke` git submodules are not used by the active `hugo-coder` theme, yet are still tracked and receive Dependabot version bumps. *Recommendation:* remove the unused submodules and config directory to shrink the repo and stop unnecessary Dependabot churn — or document why they're being kept.

4. **Placeholder social links.** `config/_default/config.toml` has GitHub/LinkedIn URLs explicitly commented as placeholders. *Recommendation:* fill these in or remove them.

5. **No automated tests.** CI only runs `tsc --noEmit`. The sync engine (Notion block → Markdown conversion) is exactly the kind of logic that benefits from unit tests, since it silently reprocesses all content on every run. *Recommendation:* consider light unit coverage for `src/markdown/` conversion functions.

6. **Large tracked binary relative to repo size.** `static/images/phplemos.png` (~791KB) is the single largest file in the repo and dominates its footprint given how small the content currently is. Not urgent, but worth optimizing (compression/resizing) if repo size becomes a concern.

7. **`automerge.yml` is inert but misleading.** It's scoped to `HEIGE-PCloud/Notion-Hugo`, so it silently does nothing in this fork. *Recommendation:* either repoint it to this repo (if auto-merge for Dependabot is wanted) or delete it to avoid confusion.

### What's working well

- The Notion → Hugo automation is coherent and low-maintenance: content edits in Notion propagate to the live site without manual intervention.
- `MAINTAINER_AGENT.md` is a genuinely good operational document — it includes an architecture diagram, file-naming conventions, and a troubleshooting FAQ, and should be the canonical reference for maintaining this repo going forward.
