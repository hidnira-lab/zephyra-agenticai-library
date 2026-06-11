# Requirements: Library Management System

**Defined:** 2026-06-11
**Core Value:** Students and librarians can reliably manage the full book borrowing lifecycle from catalog search through approval, due-date tracking, return, and overdue follow-up.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Authentication & Roles

- [x] **AUTH-01**: Student can register an account.
- [x] **AUTH-02**: Student can log in and log out.
- [x] **AUTH-03**: Librarian can log in and log out.
- [x] **AUTH-04**: User sees only actions allowed for their role.

### Book Catalog

- [ ] **CAT-01**: Student can view the book catalog.
- [ ] **CAT-02**: Student can search books by title, author, or category.
- [ ] **CAT-03**: Student can filter books by availability.
- [ ] **CAT-04**: Librarian can add a book record.
- [ ] **CAT-05**: Librarian can edit a book record.
- [ ] **CAT-06**: Librarian can remove a book record.

### Borrowing

- [ ] **BORR-01**: Student can submit a borrow request for an available book.
- [ ] **BORR-02**: Student can view the status of their borrow requests.
- [ ] **BORR-03**: Librarian can approve a borrow request.
- [ ] **BORR-04**: Librarian can reject a borrow request.
- [ ] **BORR-05**: Approved borrowing records include a due date.

### Returns & Overdue

- [ ] **RET-01**: Librarian can mark a borrowed book as returned.
- [ ] **RET-02**: Student can view currently borrowed books and due dates.
- [ ] **RET-03**: System identifies borrowed books past their due date.
- [ ] **RET-04**: Librarian can view overdue borrowing records.

### Dashboard

- [ ] **DASH-01**: Librarian can view borrowing statistics.
- [ ] **DASH-02**: Librarian can see counts for pending, approved, returned, and overdue borrowings.

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Notifications

- **NOTF-01**: User receives email alerts for overdue borrowed books.
- **NOTF-02**: User receives push or real-time in-app notifications for borrowing status changes.

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Payment integration | Fine/payment workflows are excluded from v1 to keep scope realistic for a 4-person student team. |
| E-book reading | The system manages physical library borrowing, not digital reading. |
| Mobile app | v1 is web-based only. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| AUTH-01 | Phase 1 | Complete |
| AUTH-02 | Phase 1 | Complete |
| AUTH-03 | Phase 1 | Complete |
| AUTH-04 | Phase 1 | Complete |
| CAT-01 | Phase 3 | Pending |
| CAT-02 | Phase 3 | Pending |
| CAT-03 | Phase 3 | Pending |
| CAT-04 | Phase 2 | Pending |
| CAT-05 | Phase 2 | Pending |
| CAT-06 | Phase 2 | Pending |
| BORR-01 | Phase 4 | Pending |
| BORR-02 | Phase 4 | Pending |
| BORR-03 | Phase 4 | Pending |
| BORR-04 | Phase 4 | Pending |
| BORR-05 | Phase 4 | Pending |
| RET-01 | Phase 5 | Pending |
| RET-02 | Phase 5 | Pending |
| RET-03 | Phase 5 | Pending |
| RET-04 | Phase 5 | Pending |
| DASH-01 | Phase 5 | Pending |
| DASH-02 | Phase 5 | Pending |
| NOTF-01 | v2 | Deferred |
| NOTF-02 | v2 | Deferred |

**Coverage:**

- v1 requirements: 21 total
- Mapped to phases: 21
- Unmapped: 0

---
*Requirements defined: 2026-06-11*
*Last updated: 2026-06-11 after roadmap creation*
