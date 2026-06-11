import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="auth-shell">
      <section className="auth-panel">
        <p className="eyebrow">Library Access</p>
        <h1>Log in</h1>
        <p>Use your student account or the seeded librarian account.</p>
        <LoginForm />
      </section>
    </main>
  );
}
