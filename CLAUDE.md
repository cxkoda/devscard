# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

DevsCard -- an Astro 2 static site that generates a developer CV as both a web page and a PDF from a single TypeScript data source. Based on [KonradSzwarc/devscard](https://github.com/KonradSzwarc/devscard).

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server (port 3000) |
| `npm run build` | Full build: install, generate PDF, hide pdf route, `astro build` |
| `npm run check` | All checks concurrently (prettier, tsc, astro) |
| `npm run prettier:write` | Auto-format |
| `npm run generate-pdf` | Puppeteer screenshots `/pdf` route to `public/cv.pdf` |
| `npm run generate-favicons` | Writes `public/favicons/` and generates `src/web/head/favicons.generated.astro` |

Package manager is npm only (yarn/pnpm rejected via `engines`).

## Architecture

**Dual rendering**: Web (`src/web/`) and PDF (`src/pdf/`) both consume the same typed data from `src/data/`. The `/pdf` route is hidden during production build (renamed to `_pdf.astro`) so it only exists in dev.

**Data layer** (`src/data/`):
- `config.ts` -- i18n, meta, PDF footer config
- `sections/*.data.ts` -- one file per CV section, all content lives here
- `_internals/` -- framework plumbing (not user-editable)
- Data files use `as const satisfies ReadonlyDeep<T>` to preserve literal types while validating against schemas
- `description` fields accept Markdown (multi-line template literals); `marked` parses them at build time

**Factory patterns**:
- `createLinkFactory` / `createSkillFactory` produce typed builders (e.g., `github({ url })`, `solidity({ level: 4 })`) that enforce consistent icons/names across sections

**Transformers** (Immer-based):
- `getCvData()` returns full data; pass transformer functions like `hideSection('testimonials')` to produce modified variants without touching source files

**PDF generation**: Puppeteer (`scripts/generate-pdf.ts`) spins up the dev server, captures `/pdf` as A4 PDF via `puppeteer-report`. Supports AWS Lambda via `@sparticuz/chromium`.

## Key Conventions

- TypeScript strict mode with `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess`, `noImplicitReturns`
- Tailwind CSS with dark mode (class strategy), primary color = indigo
- Prettier with astro + tailwindcss plugins; 2-space indent, single quotes, 120 char lines
- Heavy dependencies (PhotoSwipe, floating-ui) are lazy-loaded via dynamic import
- Sidebar tracks scroll position via hash-state (`replaceState`, no reloads)
