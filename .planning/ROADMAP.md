# Roadmap: Library Management System

## Overview

Build the Library Management System as a vertical MVP: first establish a working Next.js/PostgreSQL foundation with role-based access, then add librarian catalog management, student catalog discovery, the borrowing approval workflow, and finally return tracking, overdue visibility, and dashboard statistics. Each phase should leave the app more usable for students and librarians without waiting for all technical layers to be finished separately.

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: App Foundation & Roles** - Create the working app foundation, database baseline, and role-aware authentication. (completed 2026-06-11)
- [ ] **Phase 2: Librarian Catalog Management** - Let librarians create, update, and remove book records.
- [ ] **Phase 3: Student Catalog Discovery** - Let students browse, search, and filter the book catalog.
- [ ] **Phase 4: Borrow Request Workflow** - Let students request books and librarians approve or reject requests with due dates.
- [ ] **Phase 5: Returns, Overdue Tracking & Dashboard** - Let librarians record returns, see overdue borrowing records, and review borrowing stats.

## Phase Details

### Phase 1: App Foundation & Roles

**Goal**: Deliver a working Next.js/PostgreSQL application foundation with student registration, student login/logout, librarian login/logout, and role-aware access.
**Mode:** mvp
**Depends on**: Nothing (first phase)
**Requirements**: [AUTH-01, AUTH-02, AUTH-03, AUTH-04]
**UI hint**: yes
**Success Criteria** (what must be TRUE):

  1. Student can register an account and then log in.
  2. Student can log out after logging in.
  3. Librarian can log in and log out.
  4. Student and librarian users see only role-appropriate navigation and actions.
  5. Application data persists in PostgreSQL.

**Plans**: 3 plans
Plans:
**Wave 1**

- [x] 01-01: Scaffold Next.js app, PostgreSQL connection, and baseline project scripts

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 01-02: Implement user model, authentication, and session handling

**Wave 3** *(blocked on Wave 2 completion)*

- [x] 01-03: Implement role-based navigation, route protection, and auth verification

### Phase 2: Librarian Catalog Management

**Goal**: Let librarians maintain the physical book catalog through add, edit, and remove workflows.
**Mode:** mvp
**Depends on**: Phase 1
**Requirements**: [CAT-04, CAT-05, CAT-06]
**UI hint**: yes
**Success Criteria** (what must be TRUE):

  1. Librarian can add a book record with the fields needed for catalog search and availability.
  2. Librarian can edit an existing book record.
  3. Librarian can remove a book record.
  4. Student users cannot access librarian-only catalog management actions.

**Plans**: 2 plans

Plans:

- [ ] 02-01: Design book data model and librarian catalog CRUD backend
- [ ] 02-02: Build librarian catalog management UI and authorization checks

### Phase 3: Student Catalog Discovery

**Goal**: Let students browse the catalog and find physical books by title, author, category, and availability.
**Mode:** mvp
**Depends on**: Phase 2
**Requirements**: [CAT-01, CAT-02, CAT-03]
**UI hint**: yes
**Success Criteria** (what must be TRUE):

  1. Student can view the book catalog.
  2. Student can search books by title, author, or category.
  3. Student can filter books by availability.
  4. Catalog results reflect librarian-created book records.

**Plans**: 2 plans

Plans:

- [ ] 03-01: Implement catalog query/search/filter behavior
- [ ] 03-02: Build student catalog browsing UI and empty/loading states

### Phase 4: Borrow Request Workflow

**Goal**: Let students submit borrow requests and librarians approve or reject them with due-date tracking for approved borrowings.
**Mode:** mvp
**Depends on**: Phase 3
**Requirements**: [BORR-01, BORR-02, BORR-03, BORR-04, BORR-05]
**UI hint**: yes
**Success Criteria** (what must be TRUE):

  1. Student can submit a borrow request for an available book.
  2. Student can view the status of their borrow requests.
  3. Librarian can approve a pending borrow request.
  4. Librarian can reject a pending borrow request.
  5. Approved borrowing records include a due date and affect book availability.

**Plans**: 3 plans

Plans:

- [ ] 04-01: Design borrowing data model and request status transitions
- [ ] 04-02: Build student borrow request and request-status views
- [ ] 04-03: Build librarian approval workflow with due-date assignment

### Phase 5: Returns, Overdue Tracking & Dashboard

**Goal**: Let librarians close the borrowing lifecycle by recording returns, viewing overdue records, and monitoring borrowing statistics.
**Mode:** mvp
**Depends on**: Phase 4
**Requirements**: [RET-01, RET-02, RET-03, RET-04, DASH-01, DASH-02]
**UI hint**: yes
**Success Criteria** (what must be TRUE):

  1. Librarian can mark a borrowed book as returned.
  2. Student can view currently borrowed books and due dates.
  3. System identifies borrowed books past their due date.
  4. Librarian can view overdue borrowing records.
  5. Librarian dashboard shows counts for pending, approved, returned, and overdue borrowings.

**Plans**: 3 plans

Plans:

- [ ] 05-01: Implement return handling and active borrowing views
- [ ] 05-02: Implement overdue detection and librarian overdue list
- [ ] 05-03: Build librarian dashboard statistics

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. App Foundation & Roles | 3/3 | Complete    | 2026-06-11 |
| 2. Librarian Catalog Management | 0/2 | Not started | - |
| 3. Student Catalog Discovery | 0/2 | Not started | - |
| 4. Borrow Request Workflow | 0/3 | Not started | - |
| 5. Returns, Overdue Tracking & Dashboard | 0/3 | Not started | - |
