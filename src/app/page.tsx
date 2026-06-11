import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-shell">
      <section className="home-panel">
        <p className="eyebrow">Zephyra Library</p>
        <h1>Library Management System</h1>
        <p>
          A school-library workspace for students to access catalog and
          borrowing tools, and for librarians to manage library operations.
        </p>
        <div className="action-row">
          <Link className="button primary" href="/login">
            Log in
          </Link>
          <Link className="button secondary" href="/register">
            Student registration
          </Link>
        </div>
      </section>
    </main>
  );
}
