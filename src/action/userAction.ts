"use server";

import { LoginSchema, RegisterSchema } from "@/lib/validation/AuthValidation";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/Prisma";

export const addUser = async (data: z.infer<typeof RegisterSchema>) => {
  const { nama, password, role, username, email, profil } = data;

  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.user.create({
    data: {
      nama: nama,
      email: email,
      hashedPassword: hashedPassword,
      username: username,
      role: role,
      profile: profil,
    },
  });
};

export const checkUser = async (data: z.infer<typeof LoginSchema>) => {};

export const deleteUser = async (id: string) => {
  return await prisma.user.delete({
    where: {
      id: id,
    },
  });
};

export const UpdateUser = async ({
  id,
  data,
}: {
  id: string;
  data: z.infer<typeof RegisterSchema>;
}) => {
  const { nama, role, username, email, profil } = data;

  // const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      nama: nama,
      email: email,
      username: username,
      role: role,
      profile: profil,
    },
  });
};
