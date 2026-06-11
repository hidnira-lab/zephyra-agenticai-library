import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { getCurrentUser } from "@/lib/auth/session";

export default async function LibrarianDashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "LIBRARIAN") {
    redirect("/catalog?access=denied");
  }

  return (
    <AppShell user={user}>
      <header className="workspace-header">
        <p className="eyebrow">Librarian Area</p>
        <h1>Dashboard</h1>
        <p>
          Operational catalog and borrowing controls will build from this
          librarian landing page.
        </p>
      </header>
      <section className="grid-three">
        <article className="surface">
          <h2>Dashboard</h2>
          <p>Borrowing statistics arrive in Phase 5.</p>
        </article>
        <article className="surface">
          <h2>Catalog Management</h2>
          <p>Add, edit, and remove book records in Phase 2.</p>
        </article>
        <article className="surface">
          <h2>Borrow Requests</h2>
          <p>Approve and reject student requests in Phase 4.</p>
        </article>
      </section>
    </AppShell>
  );
}
