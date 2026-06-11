# Codebase Structure

**Analysis Date:** 2026-06-11

## Directory Layout

```text
zephyra-agenticai-library/
|-- .codex/              # Local Codex/GSD skills, agents, workflows, templates
|-- .git/                # Git repository metadata
|-- .idea/               # JetBrains IDE project metadata, currently untracked
|-- .planning/           # GSD planning artifacts and phase execution records
|-- prisma/              # Prisma schema and seed script
|-- scripts/             # Local automation such as the e2e runner
|-- src/                 # Next.js application source
|-- tests/               # Vitest unit tests and Playwright e2e tests
|-- package.json         # npm manifest with app, test, and database scripts
|-- package-lock.json    # npm lockfile
`-- README.md            # Minimal repository description
```

## Directory Purposes

**.codex/**
- Purpose: Local agent runtime configuration and GSD workflow assets.
- Contains: Skills, agents, core workflows, templates, and file manifest data.
- Key files: `.codex/skills/gsd-new-project/SKILL.md`, `.codex/gsd-core/workflows/new-project.md`.
- Subdirectories: `.codex/skills/`, `.codex/agents/`, `.codex/gsd-core/`.

**.planning/**
- Purpose: GSD project planning and codebase intelligence.
- Contains: This codebase map under `.planning/codebase/`.
- Key files: `.planning/codebase/STACK.md`, `.planning/codebase/ARCHITECTURE.md`.
- Subdirectories: `.planning/codebase/` now; project, requirements, roadmap, and state files will be added by `$gsd-new-project`.

**src/**
- Purpose: Product application source.
- Contains: Next.js App Router pages, auth server actions, shared components, Prisma client helper, and styles.
- Key files: `src/app/actions/auth.ts`, `src/lib/auth/session.ts`, `src/components/app-shell.tsx`.
- Subdirectories: `src/app/`, `src/components/`, `src/lib/`, `src/styles/`.

**prisma/**
- Purpose: Database schema and seed data entrypoint.
- Contains: `schema.prisma` and `seed.ts`.

**tests/**
- Purpose: Automated verification.
- Contains: `tests/auth/*.test.ts` for unit coverage and `tests/e2e/auth-role-access.spec.ts` for browser auth flows.

## Key File Locations

**Entry Points:**
- `src/app/page.tsx` - Root application page.
- `src/app/(auth)/login/page.tsx` - Login route.
- `src/app/(auth)/register/page.tsx` - Student registration route.
- `src/app/catalog/page.tsx` - Student landing route.
- `src/app/librarian/dashboard/page.tsx` - Librarian landing route.
- `.codex/skills/gsd-new-project/SKILL.md` - GSD project initialization skill.
- `.codex/skills/gsd-map-codebase/SKILL.md` - GSD codebase mapping skill.

**Configuration:**
- `package.json` - npm manifest; currently only declares `@opengsd/gsd-core` as a dev dependency.
- `package-lock.json` - npm lockfile for reproducible dependency installation.

**Core Logic:**
- `src/app/actions/auth.ts` - Registration, login, and logout server actions.
- `src/lib/auth/password.ts` - Password hashing and verification.
- `src/lib/auth/session.ts` - Signed session token and cookie helpers.
- `src/lib/auth/guards.ts` - Role redirect and path-access helpers.
- `src/middleware.ts` - Protected-route middleware.

**Testing:**
- `npm test` - Vitest unit tests.
- `npm run test:e2e` - Playwright browser tests through `scripts/run-e2e.mjs`.
- `npm run lint` and `npm run build` - Static verification.

**Documentation:**
- `README.md` - minimal repository description.
- `.planning/codebase/*.md` - generated codebase map references.

## Naming Conventions

**Files:**
- Uppercase markdown for top-level docs: `README.md`.
- npm metadata uses standard lowercase names: `package.json`, `package-lock.json`.
- No source-file naming convention is established yet.

**Directories:**
- Dot-prefixed directories for tooling and metadata: `.codex/`, `.git/`, `.idea/`, `.planning/`.
- No application directory naming convention is established yet.

**Special Patterns:**
- GSD skills use `SKILL.md` inside skill-specific directories.
- GSD planning docs use uppercase descriptive markdown filenames.

## Where to Add New Code

**New Feature:**
- Primary code: not established; choose during project initialization and early roadmap planning.
- Tests: not established; add test structure alongside the selected stack.
- Config if needed: project root for package and tool configuration.

**New Component/Module:**
- Implementation: not established.
- Types: not established.
- Tests: not established.

**New Route/Command:**
- Definition: not established for application code.
- Handler: not established.
- Tests: not established.

**Utilities:**
- Shared helpers: not established.
- Type definitions: not established.

## Special Directories

**.codex/**
- Purpose: Agent and GSD runtime assets.
- Source: Local project tooling configuration.
- Committed: Mixed; existing `.codex/gsd-file-manifest.json` is modified in the working tree.

**node_modules/**
- Purpose: Generated package installation output.
- Source: npm install.
- Committed: No; currently untracked and should normally remain untracked.

**.idea/**
- Purpose: JetBrains IDE metadata.
- Source: WebStorm/IntelliJ project configuration.
- Committed: Currently untracked.

---
*Structure analysis: 2026-06-11*
*Updated after Phase 1 added the Next.js, Prisma, auth, and test structure*
