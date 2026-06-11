
<div align="center">

```
███████╗███████╗██████╗ ██╗  ██╗██╗   ██╗██████╗  █████╗
╚══███╔╝██╔════╝██╔══██╗██║  ██║╚██╗ ██╔╝██╔══██╗██╔══██╗
  ███╔╝ █████╗  ██████╔╝███████║ ╚████╔╝ ██████╔╝███████║
 ███╔╝  ██╔══╝  ██╔═══╝ ██╔══██║  ╚██╔╝  ██╔══██╗██╔══██║
███████╗███████╗██║     ██║  ██║   ██║   ██║  ██║██║  ██║
╚══════╝╚══════╝╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
```

### **Library Management System**
*Zephyra Team — ISD Project Assignment*

![Status](https://img.shields.io/badge/status-in%20development-yellow?style=flat-square)
![Phase](https://img.shields.io/badge/phase-1%20of%205-blue?style=flat-square)
![Stack](https://img.shields.io/badge/stack-Next.js%20%2B%20PostgreSQL-black?style=flat-square)
![Version](https://img.shields.io/badge/version-v1.0--milestone-orange?style=flat-square)

</div>

---

## 📖 What This Is

**Zephyra Library** is a web-based Library Management System for school and campus use. It replaces manual, spreadsheet-driven library operations with a clean digital workflow.

- **Students** can search the book catalog, submit borrow requests, and track their loans and due dates.
- **Librarians** can manage the book catalog, approve or reject borrow requests, record returns, flag overdue books, and view borrowing statistics on a dashboard.

> Built as part of the **ISD (Information Systems Development)** course project by the Zephyra Team.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend & Backend | [Next.js](https://nextjs.org/) (App Router) |
| Database | [PostgreSQL](https://www.postgresql.org/) |
| Planning Tooling | [@opengsd/gsd-core](https://www.npmjs.com/package/@opengsd/gsd-core) |

---

## ✨ Features (v1 Scope)

### 👤 Student
- Register an account and log in / log out
- Browse the book catalog
- Search books by **title**, **author**, or **category**
- Filter books by **availability**
- Submit a borrow request for an available book
- View borrow request statuses
- View currently borrowed books and their due dates

### 🗂 Librarian
- Log in / log out with librarian role
- Add, edit, and remove book records
- Approve or reject student borrow requests (with due-date assignment)
- Record book returns
- View overdue borrowing records
- Access a dashboard with borrowing statistics

> **Out of scope for v1:** payment/fine integration · e-book reading · mobile app

---

## 🗺 Development Roadmap

```
  Phase 1   ──►  Phase 2   ──►  Phase 3   ──►  Phase 4   ──►  Phase 5
─────────────────────────────────────────────────────────────────────────
  App          Librarian      Student        Borrow          Returns,
  Foundation   Catalog        Catalog        Request         Overdue &
  & Roles      Management     Discovery      Workflow        Dashboard
─────────────────────────────────────────────────────────────────────────
 [In Progress]  [Pending]      [Pending]      [Pending]       [Pending]
  AUTH-01~04    CAT-04~06      CAT-01~03      BORR-01~05      RET-01~04
  3 plans       2 plans        2 plans        3 plans         DASH-01~02
                                                              3 plans
```

### Current Progress

| Phase | Description | Plans | Status |
|-------|-------------|-------|--------|
| 1 | App Foundation & Roles | 0 / 3 | 🟡 In Progress |
| 2 | Librarian Catalog Management | 0 / 2 | ⚪ Not Started |
| 3 | Student Catalog Discovery | 0 / 2 | ⚪ Not Started |
| 4 | Borrow Request Workflow | 0 / 3 | ⚪ Not Started |
| 5 | Returns, Overdue Tracking & Dashboard | 0 / 3 | ⚪ Not Started |

---

## 🚀 Getting Started

> ⚠️ **Note:** The application scaffold is not yet set up. Phase 1 establishes the Next.js + PostgreSQL foundation. These steps will be updated once the setup plan (`01-01`) is complete.

### Prerequisites

- Node.js `>=18`
- PostgreSQL `>=14`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/zephyra-agenticai-library.git
cd zephyra-agenticai-library

# Install dependencies
npm install
```

### Environment Setup

```bash
# Copy the environment template (will be added in Phase 1)
cp .env.example .env.local
# Fill in your PostgreSQL connection string and other secrets
```

### Running the App

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

---

## 📁 Project Structure

> Structure below reflects the **planned** layout. The current repo contains only the scaffold (`README.md`, `package.json`). Source directories will be created during Phase 1.

```
zephyra-agenticai-library/
├── .planning/              # GSD planning files (codebase map, phase contexts)
│   ├── PROJECT.md
│   ├── REQUIREMENTS.md
│   ├── ROADMAP.md
│   └── STATE.md
├── src/
│   ├── app/                # Next.js App Router pages & layouts
│   ├── components/         # Shared UI components
│   ├── lib/                # DB client, utilities, helpers
│   └── types/              # TypeScript type definitions
├── prisma/ (or /db)        # PostgreSQL schema & migrations
├── public/                 # Static assets
├── package.json
└── README.md
```

---

## 👥 Team

**Zephyra Team** — ISD Project Assignment

| Role | Responsibility |
|------|---------------|
| Team Lead | Project coordination, architecture decisions |
| Developer | Feature implementation |
| Developer | Feature implementation |
| Developer | UI/UX & frontend implementation |

> ✏️ *Update this table with actual names and roles.*

---

## 📋 Requirements Traceability

All 21 v1 requirements are documented and mapped to phases. See [`REQUIREMENTS.md`](.planning/REQUIREMENTS.md) for the full traceability matrix.

**v2 (deferred):**
- `NOTF-01` — Email alerts for overdue books
- `NOTF-02` — Push / real-time in-app notifications

---

## 📄 License

This project is an academic assignment and is not licensed for commercial use.

---

<div align="center">
  <sub>Built with 💙 by the Zephyra Team · ISD Course · 2026</sub>
</div>
