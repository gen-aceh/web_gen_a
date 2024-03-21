"use server"

import { prisma } from "@/lib/Prisma";
import { AnggotaSchema } from "@/lib/validation/PostValidation";
import { z } from "zod";

export const addAnggota = async (data: z.infer<typeof AnggotaSchema>) => {
  const {
    nama,
    jabatan,
    subUnit,
    pendidikan,
    ahli,
    bidang,
    deskripsi,
    email,
    gambar,
    instagram,
    telephon,
    gender,
    tanggalLahir,
  } = data;

  return await prisma.anggota.create({
    data: {
      nama: nama,
      pendidikan: pendidikan,
      jabatan: jabatan,
      about: deskripsi,
      email: email,
      gender: gender,
      tanggalLahir: tanggalLahir,
      keahlian: ahli,
      bidang: bidang,
      telephone: telephon,
      instagram: instagram,
      profile: gambar,
      afiliasi: {
        connect: {
          id: subUnit,
        },
      },
    },
  });
};

export const updateAnggota = async ({
  id,
  data,
}: {
  id: string;
  data: z.infer<typeof AnggotaSchema>;
}) => {
  const {
    nama,
    jabatan,
    subUnit,
    pendidikan,
    ahli,
    bidang,
    deskripsi,
    email,
    gambar,
    instagram,
    telephon,
    gender,
    tanggalLahir,
    status,
  } = data;

  return await prisma.anggota.update({
    where: {
      id: id,
    },
    data: {
      nama: nama,
      pendidikan: pendidikan,
      jabatan: jabatan,
      about: deskripsi,
      email: email,
      gender: gender,
      tanggalLahir: tanggalLahir,
      keahlian: ahli,
      bidang: bidang,
      telephone: telephon,
      instagram: instagram,
      profile: gambar,
      status: status,
      afiliasi: {
        connect: {
          id: subUnit,
        },
      },
    },
  });
};

export const deleteAnggota = async (id: string) => {
  return await prisma.anggota.delete({
    where: {
      id: id,
    },
  });
};
