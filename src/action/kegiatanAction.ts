"use server"

import { prisma } from "@/lib/Prisma";
import { KegiatanSchema } from "@/lib/validation/PostValidation";
import { z } from "zod";

type TagsArray = {
  id: number;
};

export const addKegiatan = async (data: z.infer<typeof KegiatanSchema>) => {
  const {
    nama,
    author,
    konten,
    gambarKegiatan,
    ringkasan,
    subUnit,
    tags,
    tanggal,
    unggulan,
  } = data;

  const isUnggulan = Boolean(unggulan)

  const tagsArray: TagsArray[] = tags.map(item => {
    return {
      id: item.value,
    };
  });

  return await prisma.kegiatan.create({
    data: {
      nama: nama,
      deskripsi: konten,
      keyword: ringkasan,
      gambar: gambarKegiatan,
      isUnggulan: isUnggulan,
      tanggal: tanggal,
      unggulanUpdate: unggulan? new Date() : null,
      author: {
        connect: { id: author },
      },
      subUnit: {
        connect: { id: subUnit },
      },
      tags: {
        connect: tagsArray,
      },
    },
  });
};

export const updateKegiatan = async ({
  id,
  data,
}: {
  id: number;
  data: z.infer<typeof KegiatanSchema>;
}) => {
  const {
    nama,
    author,
    konten,
    gambarKegiatan,
    ringkasan,
    subUnit,
    tags,
    tanggal,
    unggulan,
  } = data;

  const isUnggulan = Boolean(unggulan)

  const tagsArray: TagsArray[] = tags.map(item => {
    return {
      id: item.value,
    };
  });

  return await prisma.kegiatan.update({
    where: {
      id: id,
    },
    data: {
      nama: nama,
      deskripsi: konten,
      keyword: ringkasan,
      gambar: gambarKegiatan,
      isUnggulan: isUnggulan,
      tanggal: tanggal,
      unggulanUpdate: unggulan? new Date() : null,
      author: {
        connect: { id: author },
      },
      subUnit: {
        connect: { id: subUnit },
      },
      tags: {
        connect: tagsArray,
      },
    },
  });
};

export const deleteKegiatan = async (id: number) => {
  return await prisma.kegiatan.delete({
    where: {
      id: id,
    },
  });
};

export const deleteUnggulan = async ( id: number ) => {
  return await prisma.kegiatan.update({
    where: {
      id: id
    },
    data: {
      isUnggulan: false
    }
  })
}
