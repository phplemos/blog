# phplemos.dev

Source of [phplemos.dev](https://phplemos.dev), a bilingual (PT-BR/EN) blog built with [Hugo](https://gohugo.io/) and the [hugo-coder](https://github.com/luizdepra/hugo-coder) theme, using [Notion](https://www.notion.so/) as the CMS. The Notion sync is based on [Notion-Hugo](https://github.com/HEIGE-PCloud/Notion-Hugo).

## How it works

```
Notion database ──npm start──▶ content/posts/*.md ──hugo──▶ public/ ──▶ GitHub Pages
                     │
                     └──────▶ static/notion/ (files uploaded to Notion)
```

- Posts are written in Notion. `npm start` (`src/index.ts`) converts every page of the databases under the root page set in [`notion-hugo.config.ts`](notion-hugo.config.ts) to Markdown, and deletes the files of pages removed from Notion.
- Files uploaded to Notion (images, PDFs, videos, covers) are hosted on signed URLs that expire after an hour, so the sync downloads them to `static/notion/<block-id>.<ext>`.
- Synced files have `MANAGED_BY_NOTION_HUGO: true` in their front matter and are overwritten by the next sync: edit them in Notion, not here.
- English translations are written by hand next to the original, as `<same-file-name>.en.md`, without `NOTION_METADATA`, so the sync leaves them alone. They can reference images uploaded to Notion by block id alone, `![](/notion/<block-id>)`, and [`layouts/_markup/render-image.html`](layouts/_markup/render-image.html) resolves the downloaded file.

## Development

Requires Node.js (see [`.nvmrc`](.nvmrc)) and Hugo extended (the version is pinned in the workflows).

```bash
git submodule update --init --recursive   # theme
npm install
echo "NOTION_TOKEN=secret_xxx" > .env     # Notion integration token
npm start                                 # sync content from Notion
npm run server                            # http://localhost:1313
```

Before committing changes to `src/`:

```bash
npm run typecheck
npm test
npm run format
```

## Deployment

[`deploy-gh-pages.yml`](.github/workflows/deploy-gh-pages.yml) syncs with Notion, commits any content changes, builds the site and deploys it to GitHub Pages. It runs on every push to `main`, every day at 00:00 UTC, and on demand (**Actions → Deploy to GitHub Pages → Run workflow**, or a `repository_dispatch` event). It needs the `NOTION_TOKEN` repository secret, and **Settings → Pages → Source** set to **GitHub Actions**.

[`ci.yml`](.github/workflows/ci.yml) typechecks, tests and format-checks the sync script and builds the site on pushes and pull requests.

## License

[GPL-3.0](LICENSE), inherited from Notion-Hugo.
