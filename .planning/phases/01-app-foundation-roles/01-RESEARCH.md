# Phase 1 Research: App Foundation & Roles

**Phase:** 1 - App Foundation & Roles
**Generated:** 2026-06-11
**Mode:** MVP, walking skeleton

## Recommended Approach

Build a conventional Next.js App Router application with TypeScript, Prisma, PostgreSQL, signed HTTP-only session cookies, and focused auth/role tests. This fits the project because the repository has no application source yet, the user selected Next.js/PostgreSQL, and the student team needs a foundation that is easy to run locally and explain.

Recommended stack:

- Next.js App Router with TypeScript under `src/app`.
- Prisma ORM with PostgreSQL for schema, migrations, seed data, and typed data access.
- `bcryptjs` for password hashing.
- `jose` for signed session tokens stored in HTTP-only cookies.
- Zod for form/input validation.
- Docker Compose for local PostgreSQL.
- Vitest for auth/data helper tests and Playwright for focused browser auth/role flows.

Avoid adding a hosted auth provider in Phase 1. It would add dashboard setup and external secrets that are not needed for the school project MVP. A small local auth layer is enough for email/password registration, seeded librarian login, logout, and role-aware routing.

## Auth and Session Design

Use a `User` table with `role` constrained to `STUDENT` or `LIBRARIAN`. Students self-register through `/register`; librarian accounts are seeded through `prisma/seed.ts`.

Session shape:

```ts
type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: "STUDENT" | "LIBRARIAN";
};
```

After successful login or registration:

1. Verify or create the `User` row.
2. Sign a compact JWT-style token with `jose` using `SESSION_SECRET`.
3. Store it in an HTTP-only, same-site cookie named `library_session`.
4. Redirect students to `/catalog` and librarians to `/librarian/dashboard`.

Access helpers should live in `src/lib/auth/`:

- `password.ts` for hash/verify functions.
- `session.ts` for sign, read, and clear session cookie helpers.
- `guards.ts` for role checks and redirect targets.

Use server actions for registration, login, and logout so the initial app avoids unnecessary API surface. Playwright can still test the browser flows end to end.

## Minimal Data Model

Prisma models for Phase 1:

- `User`
  - `id`
  - `email` unique
  - `name`
  - `passwordHash`
  - `role`
  - timestamps

- `Book`
  - `id`
  - `title`
  - `author`
  - `category`
  - `availableCopies`
  - `totalCopies`
  - timestamps

The `Book` model is included only as seed/catalog placeholder support. Full CRUD, search, filters, borrowing, returns, and dashboards remain in later phases.

Seed data:

- One librarian demo account.
- A few sample books for catalog placeholders and later catalog phases.

## Project Structure

Use a restrained, framework-native structure:

```text
src/
  app/
    (auth)/
      login/page.tsx
      register/page.tsx
    catalog/page.tsx
    librarian/dashboard/page.tsx
    layout.tsx
    page.tsx
  components/
    app-shell.tsx
    auth/
      login-form.tsx
      register-form.tsx
  lib/
    auth/
      guards.ts
      password.ts
      session.ts
    db.ts
    seed-data.ts
  styles/
    globals.css
prisma/
  schema.prisma
  seed.ts
tests/
  auth/
  e2e/
```

Scripts to establish:

- `dev`
- `build`
- `lint`
- `test`
- `test:e2e`
- `db:generate`
- `db:migrate`
- `db:seed`
- `db:reset`

Environment contract:

- `DATABASE_URL`
- `SESSION_SECRET`
- `LIBRARIAN_EMAIL`
- `LIBRARIAN_PASSWORD`
- `LIBRARIAN_NAME`

## Testing Strategy

Use Vitest for deterministic helper and data tests:

- password hashing verifies correct and incorrect passwords.
- role guard helpers return the correct redirect destinations.
- seed data exports valid librarian and book defaults.

Use Playwright for the Phase 1 user-visible flows:

- student can register, land on `/catalog`, logout, and log back in.
- seeded librarian can log in, land on `/librarian/dashboard`, and logout.
- student direct navigation to `/librarian/dashboard` redirects to `/catalog?access=denied` or shows an access message.

Tests should run against the local app and local PostgreSQL. Keep them focused on auth/role access instead of broad visual testing.

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Auth implementation becomes too custom | Keep the session module small, cookie-based, and covered by tests. |
| Student team struggles with PostgreSQL setup | Provide Docker Compose, `.env.example`, and explicit db scripts. |
| Role checks are only hidden links, not enforced | Add server-side route guards and Playwright direct-navigation tests. |
| Phase 1 leaks later catalog/borrowing scope | Only seed books and placeholders; do not implement catalog CRUD/search/borrow logic. |
| UI polish delays the foundation | Establish simple school-library dashboard styling and defer advanced UI states. |

## Plan Implications

The roadmap's three plans should run sequentially:

1. `01-01` scaffolds the app, database, scripts, seed data, and walking skeleton proof.
2. `01-02` implements user registration, login, logout, sessions, and seeded librarian login.
3. `01-03` implements role-aware navigation, route protection, access messaging, and auth/role tests.

`SKELETON.md` should record the architectural choices above so later phases build on the same Next.js, Prisma, auth, and directory layout decisions.

## RESEARCH COMPLETE
