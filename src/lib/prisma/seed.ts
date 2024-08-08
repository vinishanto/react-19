import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.user.create({
    data: {email: "alice@prisma.io",
    name: "Alice",
    age: 35,}
  });
  await prisma.user.create({
   data: { email: "bob@prisma.io",
    name: "Bob",
    age: 32,}
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
