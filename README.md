# Mountain Run Winery — portfolio demo

An independent, unofficial website concept inspired by Mountain Run Winery in
Culpeper, Virginia. This project is not affiliated with or endorsed by the winery.
The official business website is https://www.mountainrunwinery.com/.

## Current scope

A responsive homepage with real farm photography, Fraunces and Source Sans 3
typography, a dated event snapshot, farm and wine introductions, and visitor links.
Built with **Astro, TypeScript, and plain CSS**. No React, Tailwind, CMS,
checkout, or AI backend is included. Official services handle purchases and inquiries.

The design uses parchment, forest green, and wine red. A small barn mark and
slatted section divider reference the real corn crib instead of generic wine imagery.
Fonts are self-hosted. Astro creates responsive WebP images during the build.

## Run on Windows

Install Node.js 24 LTS (includes npm) and Git. Open a **new** PowerShell window
after installing Node.js so Windows picks up the updated PATH.

Open this folder in your editor, then run these commands from this folder:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local address shown in the terminal (normally http://localhost:4321).
Saving a source file updates the local preview. Press **Ctrl+C** to stop a
foreground server. If Astro reports that it started a background server, use
`npm.cmd exec astro -- dev stop` to stop it, or
`npm.cmd exec astro -- dev status` to check it.
Using `npm.cmd` avoids PowerShell's script-execution-policy issue with `npm.ps1`.

## The few files to know

| File | Purpose |
| --- | --- |
| `src/pages/index.astro` | Homepage content; maps to `/` |
| `src/layouts/BaseLayout.astro` | Shared HTML document, metadata, and TypeScript props |
| `src/styles/global.css` | All styling for this starter |
| `src/data/site.ts` | Featured event details and official links |
| `src/assets/` | Original photos that Astro optimizes during the build |
| `public/` | Files copied directly to the published website |
| `astro.config.mjs` | Astro configuration; generates a static site |
| `netlify.toml` | Build command, output folder, and Node version for Netlify |
| `package.json` | Dependencies and commands |
| `package-lock.json` | Exact dependency versions, committed for repeatable builds |

`node_modules`, `.astro`, and `dist` are generated folders. Git ignores them.
Edit source files, never the generated `dist` files.

## Check the publishable site

```powershell
npm.cmd run build
npm.cmd run preview
```

The build first checks Astro/TypeScript, then creates the static site in `dist`.
The preview command serves that production build locally.

## GitHub and Netlify

Repository: https://github.com/izzaak2003/mountain-run-winery

Live demo: https://mountain-run-winery-demo.netlify.app/

Netlify dashboard: https://app.netlify.com/projects/mountain-run-winery-demo

The repository is connected to Netlify. The deployment settings are:

- Production branch: `main`
- Base directory: leave blank (the repository root is the website project)
- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: `24` (already set in `netlify.toml`)
- No environment variables or paid features are needed.

After the GitHub connection is active, the workflow is:

**Edit locally → check the build → commit → push → Netlify automatically publishes.**

```powershell
npm.cmd run build
git add .
git commit -m "Describe what changed"
git push
```

Netlify provides the free `*.netlify.app` URL and HTTPS. The public site continues
working after you close your computer. The local preview only works while your
development server is running.

## Demo labeling

The page clearly identifies itself as an unofficial portfolio demo and links to
the real business. A robots directive and Netlify response header request that
search engines not index the demo; these are not access controls.

## Later

Refine this homepage before adding dedicated wine, visit, or event pages.
The event section is explicitly a September 2026 snapshot, not a live calendar.
Update the dates, links, and visible snapshot label together when refreshing it.
Business information and photo provenance are recorded in `CONTENT-SOURCES.md`.
Any future wine
concierge needs a server-side function; API secrets must never go into browser
code. A self-hosted model would be an external endpoint, set up separately.
