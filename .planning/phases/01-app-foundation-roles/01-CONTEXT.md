# Phase 1: App Foundation & Roles - Context

**Gathered:** 2026-06-11
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver the first usable Next.js/PostgreSQL application foundation for the Library Management System. This phase covers student registration, student login/logout, librarian login/logout, seeded librarian access, role-aware navigation, route protection, starter UI conventions, local database setup, and baseline project scripts/tests.

It does not implement full catalog management, student catalog discovery, borrow request processing, returns, overdue tracking, dashboards with real statistics, notifications, payments, e-book reading, or a mobile app.

</domain>

<decisions>
## Implementation Decisions

### Auth Model
- **D-01:** Students self-register in v1.
- **D-02:** Librarian accounts are seeded or admin-created, not publicly self-registered.
- **D-03:** Students register and log in with email and password.
- **D-04:** Email verification is not required for v1.
- **D-05:** Seed one default librarian account for development and demo use.

### Role Access
- **D-06:** After login, students land on the catalog and librarians land on the dashboard.
- **D-07:** If a student opens a librarian-only page directly, redirect them to the student catalog with an access message.
- **D-08:** Student navigation in Phase 1 should show Catalog, My Borrowings placeholder, and Logout.
- **D-09:** Librarian navigation in Phase 1 should show Dashboard, Catalog Management placeholder, Borrow Requests placeholder, and Logout.

### App Base
- **D-10:** Seed one librarian and a few sample books.
- **D-11:** Establish a clean school-library dashboard style for the starter UI.
- **D-12:** Include dev, build, and lint scripts plus focused auth/role-access tests.
- **D-13:** Local PostgreSQL should run through Docker Compose for consistent team setup.

### the agent's Discretion
No areas were explicitly delegated to the agent. Planner may choose implementation details that satisfy the decisions above and stay within the project constraints.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Scope
- `.planning/PROJECT.md` - project context, core value, constraints, and v1 out-of-scope boundaries.
- `.planning/REQUIREMENTS.md` - Phase 1 requirements AUTH-01 through AUTH-04 and traceability.
- `.planning/ROADMAP.md` - Phase 1 goal, success criteria, MVP mode, and planned work breakdown.
- `.planning/STATE.md` - current project state and deferred items.

### Codebase Baseline
- `.planning/codebase/STACK.md` - confirms no application framework, scripts, runtime, database client, test framework, linter, or formatter exists yet.
- `.planning/codebase/ARCHITECTURE.md` - confirms the application layer is not present and must be created in this phase.
- `.planning/codebase/CONVENTIONS.md` - confirms no source conventions exist yet and recommends adding formatter/lint/project scripts with the application stack.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- No application components, hooks, utilities, schemas, or auth helpers exist yet.
- Existing reusable assets are planning references only: `.planning/PROJECT.md`, `.planning/REQUIREMENTS.md`, `.planning/ROADMAP.md`, and `.planning/codebase/*.md`.

### Established Patterns
- No application source conventions exist yet.
- npm is already present via `package.json` and `package-lock.json`.
- GSD planning artifacts are tracked under `.planning/`.

### Integration Points
- Create the application layer from scratch.
- Add Next.js source structure, PostgreSQL configuration, Docker Compose database setup, package scripts, linting, and focused tests as part of Phase 1 planning.
- Update codebase maps after representative source files and conventions exist.

</code_context>

<specifics>
## Specific Ideas

- Starter UI should feel like a clean school-library dashboard rather than an unstyled prototype or heavy SaaS product.
- Placeholder navigation items are acceptable in Phase 1 when they communicate later workflow destinations without implementing later-phase features.
- Seed data should support demos now and make later catalog phases easier: one librarian plus a few sample books.

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope.

</deferred>

---

*Phase: 1-App Foundation & Roles*
*Context gathered: 2026-06-11*
