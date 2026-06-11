# Architecture

**Analysis Date:** 2026-06-11

## Pattern Overview

**Overall:** Next.js App Router application with Prisma-backed auth foundation

**Key Characteristics:**
- Next.js pages and server actions live under `src/app/`.
- Authentication helpers are isolated under `src/lib/auth/`.
- Prisma owns persistence through `prisma/schema.prisma` and `src/lib/db.ts`.
- Role navigation is centralized in `src/components/app-shell.tsx`.

## Layers

**Project Metadata Layer:**
- Purpose: Defines npm dependency state and project identity.
- Contains: `package.json`, `package-lock.json`, and `README.md`.
- Depends on: npm package resolution.
- Used by: GSD setup and future development workflows.

**Planning Tooling Layer:**
- Purpose: Provides local GSD workflow definitions, templates, skills, and agents.
- Contains: `.codex/gsd-core/`, `.codex/skills/`, and `.codex/agents/`.
- Depends on: `@opengsd/gsd-core` and local Codex configuration files.
- Used by: GSD commands such as `$gsd-new-project` and `$gsd-map-codebase`.

**Application Layer:**
- Purpose: Render auth, student, and librarian pages.
- Contains: `src/app/`, `src/components/`, `src/styles/`.
- Depends on: auth helpers and Prisma-backed user data.
- Used by: Students and librarians through browser routes.

**Auth Layer:**
- Purpose: Register users, authenticate credentials, manage signed sessions, and enforce role access.
- Contains: `src/app/actions/auth.ts`, `src/lib/auth/*.ts`, `src/middleware.ts`.
- Depends on: Prisma, bcryptjs, jose, Next.js cookies.

**Persistence Layer:**
- Purpose: Store users and books in PostgreSQL.
- Contains: `prisma/schema.prisma`, `prisma/seed.ts`, `src/lib/db.ts`.

## Data Flow

**Current Workflow Execution:**

1. User invokes a GSD command in the repository.
2. Local GSD workflow files under `.codex/gsd-core/` guide the planning process.
3. Planning artifacts are written under `.planning/`.
4. No application request, command, or event flow exists yet.

**State Management:**
- Planning state will live in `.planning/`.
- npm dependency state is captured in `package-lock.json`.
- No application state store, database, cache, or persistent domain model exists.

## Key Abstractions

**GSD Workflow:**
- Purpose: Encapsulates multi-step planning and execution procedures.
- Examples: `.codex/gsd-core/workflows/new-project.md`, `.codex/gsd-core/workflows/map-codebase.md`.
- Pattern: Markdown workflow instructions consumed by the agent runtime.

**GSD Skill:**
- Purpose: Declares command-specific instructions and runtime adapter behavior.
- Examples: `.codex/skills/gsd-new-project/SKILL.md`, `.codex/skills/gsd-map-codebase/SKILL.md`.
- Pattern: Skill metadata plus process contract.

**Application Module:**
- Purpose: Pending - no application modules exist yet.
- Examples: none.
- Pattern: To be defined by the new-project and roadmap phases.

## Entry Points

**Repository Planning Entry:**
- Location: `.codex/skills/gsd-new-project/SKILL.md`.
- Triggers: User invokes `$gsd-new-project`.
- Responsibilities: Initialize `.planning/PROJECT.md`, requirements, roadmap, and state.

**Codebase Mapping Entry:**
- Location: `.codex/skills/gsd-map-codebase/SKILL.md`.
- Triggers: User invokes `$gsd-map-codebase` or chooses codebase mapping during new-project.
- Responsibilities: Write `.planning/codebase/*.md` reference documents.

**Application Entry:**
- Location: `src/app/page.tsx`, `src/app/(auth)/*`, `src/app/catalog/page.tsx`, `src/app/librarian/dashboard/page.tsx`.
- Triggers: Browser requests handled by Next.js.
- Responsibilities: route rendering, auth forms, role landing pages.

## Error Handling

**Strategy:** Not established for application code.

**Patterns:**
- GSD workflow errors are handled by the workflow tooling and surfaced in command output.
- No application-level exception, validation, or error response pattern exists yet.

## Cross-Cutting Concerns

**Logging:**
- No application logging layer exists.

**Validation:**
- No application validation layer exists.

**Authentication:**
- Student registration and student/librarian login are server actions.
- Sessions are signed with jose and stored in the `library_session` HTTP-only cookie.
- Route access is enforced by shared guard helpers and middleware.

**Configuration:**
- npm metadata exists in `package.json`; application configuration is not yet defined.

---
*Architecture analysis: 2026-06-11*
*Updated after Phase 1 application source and auth layers*
