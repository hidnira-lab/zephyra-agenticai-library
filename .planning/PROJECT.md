# Library Management System

## What This Is

A web-based Library Management System for a school or campus library. Students use it to search the book catalog, request borrowing, return books, and see due dates; librarians use it to manage books, approve borrowing requests, track overdue books, and monitor borrowing activity.

The system replaces manual spreadsheet-based library operations with a digital workflow built by the Zephyra Team as an ISD project assignment.

## Core Value

Students and librarians can reliably manage the full book borrowing lifecycle from catalog search through approval, due-date tracking, return, and overdue follow-up.

## Requirements

### Validated

- [x] Repository has npm project metadata and GSD planning tooling installed - existing
- [x] Codebase map exists under `.planning/codebase/` - existing
- [x] Students can register and log in with a Student role. Validated in Phase 1.
- [x] Librarians can log in with a Librarian role. Validated in Phase 1.
- [x] Users can access role-appropriate screens and actions. Validated in Phase 1.
- [x] The application uses Next.js for the web app. Validated in Phase 1.
- [x] The application uses PostgreSQL for persistent data. Validated in Phase 1.

### Active

- [ ] Students can search and filter the book catalog.
- [ ] Librarians can add, edit, and remove book records.
- [ ] Students can submit borrow requests for available books.
- [ ] Librarians can approve or reject borrow requests.
- [ ] Students can view borrowed books and due dates.
- [ ] Librarians can record and track book returns.
- [ ] The system can identify overdue borrowed books.
- [ ] Librarians can view overdue alerts.
- [ ] Librarians can view a dashboard with borrowing statistics.

### Out of Scope

- Payment integration - library fines or online payment workflows are not part of v1.
- E-book reading - the system manages physical library borrowing, not digital book consumption.
- Mobile app - v1 is web-based only.

## Context

Students currently cannot easily find or borrow books, and librarians manage catalog and borrowing data manually in spreadsheets. That makes search, approval, return tracking, overdue visibility, and reporting slow and error-prone.

Primary users:

- Students need to search the catalog, request to borrow books, return books, and see due dates.
- Librarians need to maintain the book catalog, approve borrowing requests, track overdue books, and see borrowing statistics.

Current codebase state:

- Phase 1 is complete: the repository now contains a Next.js App Router application under `src/`.
- PostgreSQL persistence is configured through Docker Compose and Prisma.
- `User`, `Role`, and `Book` are defined in `prisma/schema.prisma`; seed data creates one librarian and sample books.
- Student registration, student login/logout, librarian login/logout, signed session cookies, role-aware navigation, and protected routes are implemented.
- Unit tests and focused Playwright e2e tests verify Phase 1 auth and role access.

## Constraints

- **Team**: Built by a 4-person student team, Zephyra Team - planning should favor clear ownership boundaries and simple implementation slices.
- **Timeline**: Strict project timeline - v1 should prioritize the core borrowing workflow over optional enhancements.
- **Tech Stack**: Next.js and PostgreSQL are preferred - architecture and phases should align with this stack unless a later decision explicitly changes it.
- **Scope**: Web app only - no mobile app, payment integration, or e-book reading in v1.
- **Current Codebase**: No application skeleton exists yet - early phases must establish the app, database, auth, and baseline testing before feature expansion.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Build a web-based library management system | Students need easier discovery and borrowing, and librarians need to replace spreadsheet-based workflows | Phase 1 foundation delivered |
| Use Student and Librarian roles | The two primary user groups need different permissions and workflows | Phase 1 auth and role access delivered |
| Prefer Next.js with PostgreSQL | User specified the desired stack for the project | Phase 1 stack implemented |
| Exclude payments, e-book reading, and mobile app from v1 | Keeps scope realistic for a 4-person student team with a strict timeline | Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `$gsd-transition`):
1. Requirements invalidated? Move to Out of Scope with reason
2. Requirements validated? Move to Validated with phase reference
3. New requirements emerged? Add to Active
4. Decisions to log? Add to Key Decisions
5. "What This Is" still accurate? Update if drifted

**After each milestone** (via `$gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check - still the right priority?
3. Audit Out of Scope - reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-11 after Phase 1 completion*
