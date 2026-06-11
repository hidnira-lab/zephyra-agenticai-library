import type { SessionRole, SessionUser } from "@/lib/auth/session";
import { logoutUser } from "@/app/actions/auth";

const navItems: Record<SessionRole, string[]> = {
  STUDENT: ["Catalog", "My Borrowings"],
  LIBRARIAN: ["Dashboard", "Catalog Management", "Borrow Requests"]
};

export function AppShell({
  user,
  children
}: {
  user: SessionUser;
  children: React.ReactNode;
}) {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">Zephyra Library</p>
          <h1>{user.role === "LIBRARIAN" ? "Librarian" : "Student"}</h1>
        </div>
        <nav aria-label="Primary navigation" className="nav-list">
          {navItems[user.role].map((item) => (
            <span className="nav-item" key={item}>
              {item}
            </span>
          ))}
        </nav>
        <form action={logoutUser}>
          <button className="button secondary full-width" type="submit">
            Logout
          </button>
        </form>
      </aside>
      <section className="content-shell">
        <header className="user-strip">
          <span>{user.name}</span>
          <span>{user.email}</span>
        </header>
        {children}
      </section>
    </main>
  );
}
