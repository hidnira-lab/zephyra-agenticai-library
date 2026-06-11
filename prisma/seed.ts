import { PrismaClient, Role } from "@prisma/client";
import { hashPassword } from "../src/lib/auth/password";
import { defaultLibrarian, sampleBooks } from "../src/lib/seed-data";

const prisma = new PrismaClient();

async function main() {
  const librarianEmail = process.env.LIBRARIAN_EMAIL ?? defaultLibrarian.email;
  const librarianName = process.env.LIBRARIAN_NAME ?? defaultLibrarian.name;
  const librarianPassword =
    process.env.LIBRARIAN_PASSWORD ?? defaultLibrarian.password;

  await prisma.user.upsert({
    where: { email: librarianEmail },
    update: {
      name: librarianName,
      role: Role.LIBRARIAN
    },
    create: {
      email: librarianEmail,
      name: librarianName,
      passwordHash: await hashPassword(librarianPassword),
      role: Role.LIBRARIAN
    }
  });

  for (const book of sampleBooks) {
    await prisma.book.upsert({
      where: { id: book.id },
      update: book,
      create: book
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
