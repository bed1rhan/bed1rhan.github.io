# Bedirhan Bayram — Personal Portfolio

Minimal, bilingual (English/Türkçe) engineering portfolio built with Next.js, TypeScript, Tailwind CSS and MDX. Designed for static GitHub Pages hosting.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

1. Create a **public** repository named `bed1rhan.github.io` under `bed1rhan`.
2. Push this project's contents to its `main` branch.
3. In GitHub **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
4. The included workflow builds and publishes to `https://bed1rhan.github.io`.

## Update content

- `src/lib/data.ts`: navigation text, projects, technology registry, translations.
- `content/projects/<slug>/en.mdx` and `tr.mdx`: project case studies.
- `public/images/`: profile, project logos and screenshots (create folders as needed).
- `public/documents/resume.pdf`: add your real CV and then enable the download link in the resume page.

Do not publish private details, private project documentation or unverifiable credentials. The `Albasti` repository is not accessed or modified by this project.

## Limitations

GitHub Pages hosts static files only. The contact form and future CMS require an external backend or separate hosting. Placeholder portrait, resume, email and LinkedIn must be replaced with verified assets/details before claiming those features are live.
