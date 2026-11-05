<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project

This file applies to any coding agent (Claude Code, Codex, etc.).

A personal "no hello" page that anyone can reuse: a single static page asking people not to send just "hi" in chat, but to
send the greeting and the question together. Inspired by [nohello-net/site](https://github.com/nohello-net/site).

The link is sent mainly on **WhatsApp**, so the audience is not technical and opens it on a phone. The name and photo URL come
from `NEXT_PUBLIC_OWNER_NAME` and `NEXT_PUBLIC_OWNER_PHOTO` (generic fallback), never hardcoded, and the GIFs from
`NEXT_PUBLIC_GIF_1_URL` and `NEXT_PUBLIC_GIF_2_URL`; the full name only appears in the header. The page serves only its owner:
no copy-link or share buttons, nothing that encourages sharing (except the discreet link to the code at the end), no contact
section, and it asks search engines not to index it.

## Principles

1. **Simple**: one page, static export (`output: "export"` → `out/`). No database, auth, API or server.
   The Docker image is built with no personal settings; `docker/apply-config.sh` applies the same `NEXT_PUBLIC_` variables when
   the container starts, in the HTML for link previews and in `window.__NOHELLO_CONFIG__` for the page. New settings need both.
2. **18 languages**: en, pt-BR, pt, es, fr, de, it, cs, pl, sv, tr, id, vi, ru, uk, fa, he, zh-CN, one file each in
   `src/i18n/locales/` (no text in the components; `fa` and `he` are right to left, so layouts use logical properties such as
   `ms-`, `ps-`, `start-` and `rounded-ss-`). `NEXT_PUBLIC_LANGUAGE`
   fixes the language at build time; empty, each visitor gets their browser's language and the prerendered HTML and link
   preview are in English. The whole repository is in English (README, changelog, code, comments, commits and this file); other languages only appear in
   their own locale files.
3. **Design**: the page is a chat conversation, mobile first, full width on desktop (no centered phone column), dark-only. Tokens in `src/app/globals.css` (`@theme`:
   `canvas`, `wall`, `bar`, `bubble-owner`, `bubble-you`, `bubble-wrong`, `wall-bad`, `wall-good`, `accent`, `bad`, `good`). Every animation respects
   `prefers-reduced-motion`.
4. **Accessible**: one `h1`, decorative elements `aria-hidden`, live regions for animated content.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript, `lucide-react`, `@vercel/analytics`, `@vercel/speed-insights`. Check `node_modules/next/dist/docs/`
before using a Next.js API from memory.

## Commands

```bash
npm run dev      # http://localhost:3000
npm run check    # lint + typecheck + prettier + markdownlint + tests
npm test         # language tests (the same rule exists in src/i18n/match-locale.ts and docker/apply-config.sh)
npm run build    # static site in out/ (site URL: NEXT_PUBLIC_SITE_URL, else Vercel production domain)
```

## Structure

```text
src/app/          layout, page (all sections), icon + opengraph-image (static files, from scripts/generate-images.mjs)
src/components/   avatar, bubble, chat-demo, greeting-typer, reveal, hello-easter-egg, meme, scroll-hint
src/i18n/         locales, language detection, useCopy
src/lib/          use-in-view, use-reduced-motion
src/config/       site.ts (URL, repository, photo, GIFs)
docker/           nginx config and the start script that applies the settings to the prebuilt pages (image: kimtiago/nohello)
public/           avatar.svg (generic avatar), electrician.jpg (AI-generated face for the example contact)
docs/             README screenshot
test/             language tests, with Node's test runner, and a check of the Docker image (docker-smoke.sh)
.github/          CI, and the workflow that publishes the image and the GitHub release when a version tag is pushed
```

## Workflow

- Line endings are LF, with 4 spaces of indentation (2 in YAML). The pre-commit hook formats staged files; `npm run format` does it by hand.
- Before finishing: `npm run check` and `npm run build`. CI (`.github/workflows/ci.yml`) runs the same, and also builds and checks the Docker image.
