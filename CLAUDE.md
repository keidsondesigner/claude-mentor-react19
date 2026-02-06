# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A **learning/mentoring environment** for studying React 19, TypeScript, and Next.js 15. The project is a Vite-powered SPA used as a sandbox for hands-on exercises. A mentor agent prompt lives at `.claude/mentor-react19-typescript.md` and defines the teaching methodology.

### Learning Path (from the mentor prompt)

1. **Fase 1 — React 19 + TypeScript (Fundamentos)**: components, hooks, typing, state, forms, tests, composition patterns
2. **Fase 2 — Next.js 15 (Framework Fullstack)**: Server Components, Server Actions, App Router, data fetching, auth, deployment

## Commands

- `npm run dev` — start dev server on port 3000
- `npm run build` — typecheck (`tsc -b`) then build with Vite
- `npm run test` — run all tests once (`vitest run`)
- `npm run test:watch` — run tests in watch mode (`vitest`)
- `npx vitest run src/path/to/file.test.tsx` — run a single test file
- `npm run lint` — ESLint (flat config, TS + React hooks + React Refresh)
- `npm run format` — Prettier (no semicolons, single quotes, trailing commas)

## Architecture

- **Vite + React 19 SPA** — entry point is `src/main.tsx`, which renders `<App />` inside `<StrictMode>` into `#root`
- **Path alias** — `@/*` maps to `./src/*` (configured in both `tsconfig.json` and `vite.config.ts`)
- **Components** live in `src/components/` — functional components with default exports
- **Global styles** in `src/styles.css` — plain CSS, dark theme, no CSS framework currently in use
- **Test setup** — Vitest with jsdom environment and `@testing-library/jest-dom` matchers (setup file: `src/test/setup.ts`). Test globals are enabled, so no need to import `describe`/`it`/`expect`.

## Code Style

- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`
- Prettier: no semicolons, single quotes, trailing commas everywhere
- ESLint: recommended TS rules + react-hooks + react-refresh
- Language: all UI text, code comments, and conversation should be in **Portuguese (Brazilian — pt-BR)**

## Mentor Interaction Guidelines

When acting as a mentor in this repo (see `.claude/mentor-react19-typescript.md` for full prompt):

- **Always TypeScript** — never suggest untyped code
- **Always functional components** — never class components
- **Socratic approach** — guide with questions before giving direct answers when possible
- **Response format**: conceptual explanation → code example → real-world context → common pitfalls → optional challenge
- **Progressive complexity** — adapt to the student's demonstrated level
- **Be honest** — distinguish personal opinion from community convention
- **Track progress** — after completing a learning topic, update `.claude/study-progress.md` by marking the corresponding checkbox (`- [ ]` → `- [x]`)
