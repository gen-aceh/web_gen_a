"use server";

import { prisma } from "@/lib/Prisma";
import { BeritaSchema } from "@/lib/validation/PostValidation";
import { z } from "zod";

type kategoriArray = {
  id: number;
};

export const addBerita = async (data: z.infer<typeof BeritaSchema>) => {
  const {
    judul,
    author,
    gambarBerita,
    kategori,
    konten,
    link,
    status,
    tanggal,
    editor,
  } = data;

  const kategoriArray: kategoriArray[] = kategori.map(item => {
    return {
      id: item.value,
    };
  });

  return await prisma.berita.create({
    data: {
      judul: judul,
      konten: konten,
      link: link,
      status: status,
      tanggal: tanggal,
      kategori: {
        connect: kategoriArray,
      },
      gambar: gambarBerita,
      editor: {
        connect: { id: editor },
      },
      author: {
        connect: { id: author },
      },
    },
  });
};


export const UpdateBerita = async ({
  id,
  data,
}: {
  id: number;
  data: z.infer<typeof BeritaSchema>;
}) => {
  const {
    judul,
    author,
    gambarBerita,
    kategori,
    konten,
    link,
    status,
    tanggal,
    editor,
  } = data;

  const kategoriArray: kategoriArray[] = kategori.map(item => {
    return {
      id: item.value,
    };
  });

  return await prisma.berita.update({
    where: {
      id: id,
    },
    data: {
      judul: judul,
      konten: konten,
      link: link,
      status: status,
      tanggal: tanggal,
      kategori: {
        connect: kategoriArray,
      },
      gambar: gambarBerita,
      editor: {
        connect: { id: editor },
      },
      author: {
        connect: { id: author },
      },
    },
  });
};

export const deleteBerita = async (id: number) => {
  await prisma.berita.delete({
    where: {
      id: id,
    },
  });
};
