# Technology Stack

**Analysis Date:** 2026-06-11

## Languages

**Primary:**
- TypeScript - Next.js application, Prisma seed script, tests, and config.

**Secondary:**
- JSON - project metadata and lockfile in `package.json` and `package-lock.json`.
- Markdown - project documentation in `README.md`.
- CSS - global application styling in `src/styles/globals.css`.

## Runtime

**Environment:**
- Node.js with npm.
- Next.js App Router for the web application.
- PostgreSQL for persistence via Docker Compose.

**Package Manager:**
- npm - `package-lock.json` is present with lockfileVersion 3.
- `node_modules/` exists locally but is untracked and should not be treated as source.

## Frameworks

**Core:**
- Next.js `^16.0.7`
- React `^19.2.0`
- Prisma `^6.19.0`

**Testing:**
- Vitest `^4.0.14`
- Playwright `^1.57.0`

**Build/Dev:**
- `@opengsd/gsd-core` `^1.4.4` - development dependency used for GSD project planning workflows.
- TypeScript `^5.9.3`
- ESLint `^9.39.1` with `eslint-config-next`

## Key Dependencies

**Critical:**
- `next`, `react`, `react-dom` - web runtime.
- `@prisma/client`, `prisma` - database access and schema tooling.
- `bcryptjs` - password hashing.
- `jose` - signed session tokens.
- `zod` - auth form validation.
- `@opengsd/gsd-core` `^1.4.4` - local GSD workflow tooling.

**Infrastructure:**
- npm dependency resolution via `package-lock.json`.
- No database client, web server, UI library, AI SDK, or production runtime dependency is declared.

## Configuration

**Environment:**
- `.env.example` documents `DATABASE_URL`, `SESSION_SECRET`, and seeded librarian credentials.
- `.env` is local-only and gitignored.

**Build:**
- `npm run dev`, `npm run build`, `npm run lint`, `npm test`, `npm run test:e2e`.
- Database scripts: `db:generate`, `db:migrate`, `db:seed`, `db:reset`.

## Platform Requirements

**Development:**
- Node.js and npm are required to install and run the current tooling dependency.
- Windows is the observed local environment, but no project files constrain OS support.

**Production:**
- No production target is defined.
- No application artifact can be built or deployed from the current repo state.

---
*Stack analysis: 2026-06-11*
*Updated after Phase 1 application foundation*
