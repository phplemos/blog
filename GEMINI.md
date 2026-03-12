## Project Overview

This is a personal blog built with the [Hugo](https://gohugo.io/) static site generator and the [Hextra](https://github.com/imfing/hextra) theme. The content is written in Markdown and the project is set up for automated deployments to both Netlify and GitHub Pages.

The main configuration is in `hugo.yaml`, which defines the site's title, navigation menu, and theme-specific parameters. The theme itself is included as a Hugo module, as specified in `go.mod`.

Blog posts are located in the `content/posts/` directory as individual Markdown files.

## Building and Running

### Local Development

To run the blog locally for development, use the following commands:

1.  **Install dependencies:**
    ```shell
    hugo mod tidy
    ```

2.  **Run the development server:**
    ```shell
    hugo server -p 1313
    ```
    You can then access the site at `http://localhost:1313`.

### Production Build

To build the static site for production, run:

```shell
hugo --gc --minify
```

This will generate the static files in the `public/` directory. The deployment configurations in `netlify.toml` and `.github/workflows/pages.yaml` use this command.

## Development Conventions

-   **Content:** All blog posts are Markdown files located in `content/posts/`. To create a new post, add a new `.md` file to this directory.
-   **Theme:** The Hextra theme is managed as a Hugo module. To update the theme, you can run `hugo mod get -u`.
-   **Configuration:** The primary site configuration is in `hugo.yaml`. This file controls the site's title, menu structure, and other global settings.
-   **Deployment:** The project is configured for continuous deployment. Pushing to the `main` branch will trigger a deployment to GitHub Pages (via GitHub Actions) and Netlify.
