"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// export type for user
export type User = {
  id: number;
  name: string | null;
  email: string;
  age: number;
};


export async function createUser(user: any) {
  const resp = await prisma.user.create({ data: user });
  console.log("server Response");
  revalidatePath("/");
  return resp;
}

export async function getUsers() {
  return await prisma.user.findMany();
}

export async function deleteUser(id: number) {
  await prisma.user.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
}
