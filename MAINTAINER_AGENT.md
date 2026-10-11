# Notion-Hugo Blog Maintainer Agent (Operational Playbook)

This document defines the role, architecture, commands, and troubleshooting guides for the AI/Human developer acting as the **Maintainer Agent** for this codebase. Refer to this document whenever modifying, scaling, or troubleshooting the blog system.

---

## 1. Role & Objectives

The **Maintainer Agent** is a specialized persona responsible for:
- Ensuring seamless content synchronization between Notion (the CMS) and Hugo (the Static Site Generator).
- Maintaining and updating the TypeScript synchronization script under `src/`.
- Managing configuration, layouts, and templates for the Hugo static site.
- Ensuring healthy CI/CD pipelines (GitHub Actions) for automatic content sync and static site deployment.

---

## 2. Project Architecture Overview

The system uses a **headless CMS pattern** where content is written in Notion, converted to Hugo Markdown via a Node/TypeScript CLI, and built/deployed using GitHub Actions.

```mermaid
graph TD
    A[Notion Workspace / DB] -->|Notion API| B[Node.js TypeScript Script / src]
    B -->|Generates Hugo Markdown| C[content/posts/]
    B -->|Downloads Notion-hosted files| F[static/notion/]
    C -->|Hugo Compiler| D[Static Assets / public]
    F -->|Hugo Compiler| D
    D -->|GitHub Pages Deploy| E[GitHub Pages Web Host]
```

### Key Components

1. **Configuration**:
   - `notion-hugo.config.ts`: Defines where pages and databases are mounted. With `manual: false` (current setting), every database and child page of `page_url` (`https://www.notion.so/phplemos-dev/PHPLEMOS-Blog-6c7b8e18e88b8226948b81a8a160da54`) is synced: databases into `content/<database title>`, pages into `content/`.
   - `config/_default/config.toml`: Current active Hugo website configuration, setting the theme to `hugo-coder`.

2. **Sync Logic (`src/`)**:
   - `src/index.ts`: The main CLI runner. Orchestrates Notion Client queries, database page parsing, and deleting files locally that are no longer present in Notion.
   - `src/render.ts`: Handles property mapping. Converts Notion database columns (like select tags, checkboxes, dates) to front matter keys and writes the files. Pages are only re-rendered when edited in Notion or when `RENDER_VERSION` changes.
   - `src/assets.ts`: Downloads Notion-hosted files (images, PDFs, videos, covers) to `static/notion/<block-id>.<ext>`, since their signed URLs expire after an hour, and deletes the files no content references anymore.
   - `src/markdown/`: Converts rich-text blocks and pages to GitHub Flavored Markdown (GFM).
     - `notion-to-md.ts`: Maps block objects (quotes, bullet lists, files, videos) into GFM.
     - `md.ts`: Output generator string helpers (images, links, bold, code-blocks).

3. **Pipelines (`.github/workflows/`)**:
   - `deploy-gh-pages.yml`: Runs on pushes to `main`, daily at midnight UTC, and on demand. Synchronizes content with `npm start`, auto-commits any changes back to `main`, runs `hugo --gc --minify`, and deploys `public/` to GitHub Pages. The sync must stay in this workflow: commits pushed with `GITHUB_TOKEN` don't trigger other workflows, so a separate sync workflow would never redeploy the site.
   - `ci.yml`: Runs on pushes and pull requests. Typechecks, tests and format-checks `src/`, and builds the Hugo site.

---

## 3. Core Development Conventions

When maintaining this code, always adhere to the following rules:

### A. Content File Naming & Ownership
- Sync files are saved to `content/` with names structured as: `[Title-with-dashes]-[NotionPageIdWithoutDashes].md`.
- These markdown files contain a custom front matter attribute `MANAGED_BY_NOTION_HUGO: true`.
- **Warning**: Do not modify synchronized files manually in `content/` as they will be overwritten or removed on the next sync if they don't match the remote Notion records. Create non-synchronized pages or modify content inside Notion.

### B. Translations
- English translations are hand-written files named `<same-file-name>.en.md`, without `NOTION_METADATA`, so the sync never touches them. Hugo pairs them with the Portuguese original by file name.
- To show an image uploaded to Notion, reference it by block id alone: `![](/notion/<block-id>)`. `layouts/_markup/render-image.html` resolves it to the file downloaded by the sync.

### C. Changing the Markdown Output
- Bump `RENDER_VERSION` in `src/render.ts` whenever a change in `src/` alters the generated Markdown, so the next sync re-renders every page instead of only those edited in Notion.

### D. TypeScript & Formatting Check
- Before committing any code changes in `src/`, always run the same checks as CI:
  ```bash
  npm run typecheck # Compiles TypeScript with --noEmit
  npm test          # Unit tests (node:test via tsx)
  npm run format    # Runs Prettier over all TypeScript files
  ```

---

## 4. Operational Playbook & Commands

Use these commands for local development and testing:

| Action | Command | Explanation |
|---|---|---|
| **Install Dependencies** | `npm install` | Installs the required npm packages (including Notion SDK). |
| **Local Sync** | `npm start` | Executes the sync script. Requires `NOTION_TOKEN` environment variable. |
| **Run Dev Server** | `npm run server` | Starts local Hugo server at `http://localhost:1313` with draft rendering and no caching. |
| **Typecheck** | `npm run typecheck` | Validates TypeScript compilation rules without outputting code. |
| **Test** | `npm test` | Runs the unit tests in `src/**/*.test.ts`. |
| **Format** | `npm run format` | Reformats TypeScript code according to project `.prettierrc`. |
| **Static Build** | `hugo --gc --minify` | Bundles static files into `./public/` for production. |

---

## 5. Troubleshooting & FAQs

### Q1: Sync fails due to credential issues
- **Symptoms**: Script errors out with `The NOTION_TOKEN environment variable is not set` or `401 Unauthorized`.
- **Solution**: Create a `.env` file at the root containing `NOTION_TOKEN=secret_xxx`. Verify the token in Notion Integrations settings and ensure the page is shared with the integration connection.

### Q2: TypeScript compile error TS2345 regarding `CalloutIcon`
- **Symptoms**: Build fails on `block.callout.icon` mismatch.
- **Solution**: The Notion SDK defines icons using a union that sometimes lacks custom emoji types present in local types. Always typecast the callout block icon as `CalloutIcon` (from `src/markdown/types.ts`) when passing to formatting helpers.

### Q3: Content isn't syncing or deleting
- **Symptoms**: Deleted pages in Notion are still showing up in local `content/`.
- **Solution**: Check `src/index.ts` deletion pass. The cleanup algorithm searches files in `content/` with `MANAGED_BY_NOTION_HUGO: true`. Make sure custom pages do not have this key set. Ensure the page ID format in the sync log matches what is being scanned.

### Q4: Images are broken or the build warns "has not been downloaded yet"
- **Symptoms**: An image points to `/notion/<block-id>` but no file exists in `static/notion/`.
- **Solution**: Run `npm start` to download it, and check that the id is the one in the Portuguese post's `/notion/<block-id>.<ext>` reference. Downloaded files are kept as long as any content file references them.

### Q5: Hugo theme is not rendering properly
- **Symptoms**: Broken layouts, styling, or unrendered widgets.
- **Solution**: Verify the theme configured in `config/_default/config.toml` matches the folder name in `themes/`. Ensure submodules are checked out correctly: `git submodule update --init --recursive`.
