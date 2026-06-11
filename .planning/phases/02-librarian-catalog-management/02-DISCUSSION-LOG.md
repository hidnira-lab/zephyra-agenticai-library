# Phase 2: Librarian Catalog Management - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md - this log preserves the alternatives considered.

**Date:** 2026-06-11
**Phase:** 2-Librarian Catalog Management
**Areas discussed:** Book Fields, Catalog Workflow, Delete Behavior, Inventory Rules

---

## Book Fields

| Option | Description | Selected |
|--------|-------------|----------|
| Core + ISBN | Title, author, category, total copies, available copies, plus ISBN for future search and dedupe. | x |
| Core only | Title, author, category, total copies, available copies. Fastest and closest to current schema. | |
| Rich details | Add ISBN, shelf/location, description, publisher, and publication year. | |

**User's choice:** Core + ISBN.
**Notes:** User initially entered multiple options, then confirmed option 1 as the intended field set.

---

## Catalog Workflow

| Option | Description | Selected |
|--------|-------------|----------|
| One table page + modal forms | Fast librarian workflow; add/edit without leaving the catalog management page. | x |
| Separate add/edit pages | Simpler routing and browser history, but slower repeated data entry. | |
| Inline table editing | Fast for small edits, but more validation complexity and less clear add/delete flows. | |

**User's choice:** One table page with modal forms.
**Notes:** Add and edit should be modal-based from the librarian catalog management page.

---

## Delete Behavior

| Option | Description | Selected |
|--------|-------------|----------|
| Hard delete for now | Permanently delete the book record; later borrowing phases can add restrictions. | x |
| Soft archive | Hide the book from active catalog while preserving the database record. | |
| Confirm-only delete | Hard delete with a confirmation dialog naming the book. | |

**User's choice:** Hard delete for now.
**Notes:** Use a confirmation step, but do not add archive/status modeling in Phase 2.

---

## Inventory Rules

| Option | Description | Selected |
|--------|-------------|----------|
| Strict counts | `totalCopies >= 0`, `availableCopies >= 0`, and `availableCopies <= totalCopies`. | x |
| Simple non-negative | Both counts must be zero or greater, but no relationship check. | |
| Total only | Librarians enter total copies; available copies defaults to total and is adjusted later. | |

**User's choice:** Strict counts.
**Notes:** Librarians should enter both total and available copies, with impossible counts rejected.

---

## the agent's Discretion

- Exact component split.
- Server action names and validation module shape.
- Modal implementation details.

## Deferred Ideas

- Richer catalog metadata: shelf/location, description, publisher, and publication year.
- Soft archive/status behavior.
- Student catalog browsing/search/filtering.
