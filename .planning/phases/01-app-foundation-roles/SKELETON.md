# Walking Skeleton - Library Management System

**Phase:** 1
**Generated:** 2026-06-11

## Capability Proven End-to-End

A user can run the local Next.js app, connect to PostgreSQL, load seeded library data, create or use an account, and reach the correct role-specific starting page through real UI interactions.

## Architectural Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Next.js App Router with TypeScript | Matches the requested stack, supports server actions and route-level layout composition, and is common enough for a student team. |
| Data layer | PostgreSQL with Prisma | Gives typed schema, migrations, and seed data while keeping SQL setup approachable. |
| Auth | Email/password users with bcrypt password hashes and signed HTTP-only session cookies | Satisfies Phase 1 without external auth services or email-provider setup. |
| Local database | Docker Compose PostgreSQL | Gives all team members a consistent local database setup. |
| Testing | Vitest for helpers and Playwright for auth/role browser flows | Covers the risky Phase 1 behavior without creating a large test suite too early. |
| Directory layout | `src/app`, `src/components`, `src/lib`, `prisma`, and `tests` | Stays close to Next.js conventions and leaves clear locations for later phases. |

## Stack Touched in Phase 1

- [ ] Project scaffold: Next.js, TypeScript, lint, tests, and package scripts.
- [ ] Routing: public auth routes, student catalog placeholder, librarian dashboard placeholder.
- [ ] Database: Prisma schema, migration workflow, seed data, and at least one real read/write.
- [ ] UI: registration, login, logout, role-specific navigation, and access-denied messaging.
- [ ] Local run path: Docker Compose PostgreSQL plus documented dev commands.

## Out of Scope (Deferred to Later Slices)

- Public librarian self-registration.
- Email verification and password reset.
- Full librarian catalog CRUD.
- Student catalog search and filtering.
- Borrow requests, approvals, returns, overdue tracking, and dashboard statistics.
- Payments, e-book reading, mobile app, and notifications.

## Subsequent Slice Plan

- Phase 2: Librarians create, update, and remove physical book records.
- Phase 3: Students browse, search, and filter the catalog.
- Phase 4: Students request books and librarians approve or reject requests with due dates.
- Phase 5: Librarians record returns, review overdue records, and monitor borrowing statistics.
