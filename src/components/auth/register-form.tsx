"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerStudent, type AuthActionState } from "@/app/actions/auth";

const initialState: AuthActionState = {};

export function RegisterForm() {
  const [state, formAction, pending] = useActionState(registerStudent, initialState);

  return (
    <form action={formAction} className="auth-form">
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" autoComplete="email" required />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="new-password"
        minLength={8}
        required
      />

      {state.error ? <p className="form-error">{state.error}</p> : null}

      <button className="button primary" disabled={pending} type="submit">
        {pending ? "Creating account..." : "Create student account"}
      </button>

      <p className="form-note">
        Already registered? <Link href="/login">Log in</Link>.
      </p>
    </form>
  );
}
