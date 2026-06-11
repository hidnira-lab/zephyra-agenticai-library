"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginUser, type AuthActionState } from "@/app/actions/auth";

const initialState: AuthActionState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginUser, initialState);

  return (
    <form action={formAction} className="auth-form">
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" autoComplete="email" required />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
      />

      {state.error ? <p className="form-error">{state.error}</p> : null}

      <button className="button primary" disabled={pending} type="submit">
        {pending ? "Logging in..." : "Log in"}
      </button>

      <p className="form-note">
        Students can <Link href="/register">create an account</Link>. Librarians use
        the seeded account from local setup.
      </p>
    </form>
  );
}
