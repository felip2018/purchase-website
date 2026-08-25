# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is a fresh Vite + React + TypeScript scaffold (the default `npm create vite` template, React 19). `src/App.tsx` still contains the template's placeholder "Get started" content — no actual purchase-website features have been built yet.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check via project references (`tsc -b`) then production-build with Vite
- `npm run lint` — run ESLint over the repo
- `npm run preview` — serve the production build locally

There is no test runner configured in this project yet.

## Architecture

- Entry point: `src/main.tsx` mounts `<App />` from `src/App.tsx` into `#root` (defined in `index.html`) inside `React.StrictMode`.
- `src/App.tsx` / `src/App.css` — main app component and its styles.
- `src/index.css` — global styles.
- `src/assets/` — static assets imported directly into components (e.g. `hero.png`).
- `public/` — static files served as-is (e.g. `icons.svg`, referenced via `<use href="/icons.svg#...">`).

### TypeScript project structure

TS config is split via project references (`tsconfig.json` references both):
- `tsconfig.app.json` — app source (`src/`), target `es2023`, bundler module resolution, `noEmit` (Vite handles emission), strict unused-locals/params checks enabled.
- `tsconfig.node.json` — config files (e.g. `vite.config.ts`) that run under Node rather than the browser.

### ESLint

`eslint.config.js` uses the flat-config format (`typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`). Only `js.configs.recommended` and `tseslint.configs.recommended` are enabled — not the type-aware rule sets (`recommendedTypeChecked`/`strictTypeChecked`), and no React-specific lint plugins (`eslint-plugin-react-x`/`react-dom`) are installed.
