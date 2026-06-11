# Phase 2: Librarian Catalog Management - Context

**Gathered:** 2026-06-11
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver librarian-only management of physical book records. This phase covers creating, editing, listing, and removing books from the catalog management area using the existing Next.js, Prisma, PostgreSQL, and role-protected librarian foundation.

This phase does not implement student catalog browsing/search/filtering, borrow requests, due-date tracking, returns, overdue behavior, dashboard statistics, notifications, payments, e-book reading, or a mobile app.

</domain>

<decisions>
## Implementation Decisions

### Book Fields
- **D-01:** Librarians should manage the core book fields plus ISBN: title, author, category, ISBN, total copies, and available copies.
- **D-02:** Do not add shelf/location, description, publisher, or publication year in Phase 2.

### Catalog Workflow
- **D-03:** Catalog management should use one librarian table page.
- **D-04:** Adding a book should happen through an "Add book" modal from the catalog management page.
- **D-05:** Editing a book should happen through an "Edit book" modal opened from the relevant table row.
- **D-06:** Each table row should expose a remove action for that book.

### Delete Behavior
- **D-07:** Removing a book in Phase 2 should hard-delete the record.
- **D-08:** The hard-delete action should still require a confirmation step.
- **D-09:** Do not add archive/status modeling yet; later borrowing phases can add restrictions once borrow records exist.

### Inventory Rules
- **D-10:** Copy counts should use strict validation: `totalCopies >= 0`, `availableCopies >= 0`, and `availableCopies <= totalCopies`.
- **D-11:** Librarians should enter both total and available copies in Phase 2 rather than deriving available copies automatically.

### the agent's Discretion
Planner may decide the exact component split, server action names, validation library shape, and modal implementation details, as long as the decisions above and existing Phase 1 patterns are preserved.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Scope
- `.planning/PROJECT.md` - project context, constraints, validated Phase 1 stack/auth foundation, and active catalog requirements.
- `.planning/REQUIREMENTS.md` - Phase 2 requirements CAT-04, CAT-05, and CAT-06.
- `.planning/ROADMAP.md` - Phase 2 goal, MVP mode, success criteria, and planned two-plan breakdown.
- `.planning/STATE.md` - current project state and deferred items.

### Prior Phase Foundation
- `.planning/phases/01-app-foundation-roles/01-CONTEXT.md` - locked decisions for roles, auth, UI direction, and seeded book data.
- `.planning/phases/01-app-foundation-roles/01-VERIFICATION.md` - verified Phase 1 behavior and artifacts.
- `.planning/phases/01-app-foundation-roles/01-01-SUMMARY.md` - Next.js, PostgreSQL, Prisma, seed data, and role landing placeholders.
- `.planning/phases/01-app-foundation-roles/01-02-SUMMARY.md` - auth server actions, password/session helpers, and authenticated role pages.
- `.planning/phases/01-app-foundation-roles/01-03-SUMMARY.md` - role-aware shell, route protection, and e2e auth coverage.

### Codebase Map
- `.planning/codebase/STACK.md` - current framework, database, test, and script stack.
- `.planning/codebase/ARCHITECTURE.md` - current app/auth/persistence layers and integration points.
- `.planning/codebase/STRUCTURE.md` - current source, Prisma, script, and test layout.
- `.planning/codebase/TESTING.md` - test commands and current Vitest/Playwright layout.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `prisma/schema.prisma` - currently has `Book` with title, author, category, availableCopies, and totalCopies; Phase 2 should add ISBN.
- `src/lib/db.ts` - shared Prisma client for server actions and database access.
- `src/components/app-shell.tsx` - role-aware librarian shell already includes a "Catalog Management" navigation label.
- `src/app/librarian/dashboard/page.tsx` - current librarian landing page marks Catalog Management as the Phase 2 placeholder.
- `src/lib/auth/guards.ts` and `src/middleware.ts` - librarian routes are protected for `LIBRARIAN` users.
- `src/styles/globals.css` - existing restrained dashboard styling should be reused for the table and modal UI.

### Established Patterns
- Use Next.js App Router server components and server actions for mutations.
- Use Prisma as the persistence layer.
- Use zod-style validation in server actions, following `src/app/actions/auth.ts`.
- Keep role checks server-side, not only hidden navigation.
- Verify with `npm run lint`, `npm run build`, `npm test`, and focused Playwright e2e tests when browser flows are added.

### Integration Points
- Add or replace the librarian catalog management destination under `/librarian`.
- Wire the existing "Catalog Management" navigation placeholder to the Phase 2 management page.
- Extend `Book` schema and seed/test data without implementing Phase 3 student search/filtering.
- Keep hard delete simple in Phase 2; later borrowing phases can constrain deletion once borrow records exist.

</code_context>

<specifics>
## Specific Ideas

- The librarian workflow should be efficient for repeated book entry: one table page with modal add/edit forms.
- The form should remain focused on fields librarians need now: title, author, category, ISBN, total copies, and available copies.
- Delete should be permanent for now but protected by confirmation.
- Inventory validation should prevent impossible counts before data reaches later borrowing phases.

</specifics>

<deferred>
## Deferred Ideas

- Shelf/location, description, publisher, and publication year are deferred until the project needs richer catalog metadata.
- Soft archive/status behavior is deferred until borrowing/history requirements make deletion constraints necessary.
- Student catalog viewing, search, and availability filtering remain Phase 3.

</deferred>

---

*Phase: 2-Librarian Catalog Management*
*Context gathered: 2026-06-11*
