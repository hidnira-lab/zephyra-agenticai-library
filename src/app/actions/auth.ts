"use server";

import { Role } from "@prisma/client";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getPostLoginRedirect } from "@/lib/auth/guards";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { clearSession, createSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";

export type AuthActionState = {
  error?: string;
};

const registerSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Enter a valid email address.").toLowerCase(),
  password: z.string().min(8, "Password must be at least 8 characters.")
});

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address.").toLowerCase(),
  password: z.string().min(1, "Password is required.")
});

export async function registerStudent(
  _previousState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const parsed = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Check your registration details." };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: parsed.data.email }
  });

  if (existingUser) {
    return { error: "An account with that email already exists." };
  }

  const user = await prisma.user.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      passwordHash: await hashPassword(parsed.data.password),
      role: Role.STUDENT
    }
  });

  await createSession(user);
  redirect("/catalog");
}

export async function loginUser(
  _previousState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Check your login details." };
  }

  const user = await prisma.user.findUnique({
    where: { email: parsed.data.email }
  });

  if (!user || !(await verifyPassword(parsed.data.password, user.passwordHash))) {
    return { error: "Email or password is incorrect." };
  }

  await createSession(user);
  redirect(getPostLoginRedirect(user.role));
}

export async function logoutUser(): Promise<void> {
  await clearSession();
  redirect("/login");
}
