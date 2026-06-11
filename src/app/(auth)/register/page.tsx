import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <main className="auth-shell">
      <section className="auth-panel">
        <p className="eyebrow">Student Access</p>
        <h1>Create an account</h1>
        <p>Student accounts can use the catalog and borrowing workspace.</p>
        <RegisterForm />
      </section>
    </main>
  );
}
