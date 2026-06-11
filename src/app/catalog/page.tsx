import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { getCurrentUser } from "@/lib/auth/session";

type CatalogPageProps = {
  searchParams?: Promise<{
    access?: string;
  }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "STUDENT") {
    redirect("/librarian/dashboard");
  }

  const params = await searchParams;
  const accessDenied = params?.access === "denied";

  return (
    <AppShell user={user}>
      <header className="workspace-header">
        <p className="eyebrow">Student Area</p>
        <h1>Catalog</h1>
        <p>
          Browse and borrowing tools will build from this student landing page
          in later phases.
        </p>
      </header>
      {accessDenied ? (
        <div className="notice" role="alert">
          Access denied. Librarian tools are only available to librarian users.
        </div>
      ) : null}
      <section className="grid-two">
        <article className="surface">
          <h2>Catalog</h2>
          <p>Book browsing, search, and availability filters arrive in Phase 3.</p>
        </article>
        <article className="surface">
          <h2>My Borrowings</h2>
          <p>Borrowed books, due dates, and request status arrive in later phases.</p>
        </article>
      </section>
    </AppShell>
  );
}
