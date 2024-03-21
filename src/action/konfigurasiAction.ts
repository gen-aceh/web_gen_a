"use server";

import { getConfig } from "@/lib/Config";
import { prisma } from "@/lib/Prisma";
import { ConfigSchema } from "@/lib/validation/ConfigValidation";
import { z } from "zod";

export const updateKonfigurasi = async ( data: z.infer<typeof ConfigSchema> ) => {

  const {
    keyword,
    metadata,
    namaOrganisasi,
    singkatan,
    motto1,
    motto2,
    website,
    deskripsiOrganisasi,
    deskripsiWeb,
    alamat,
    emaiOrganisasi,
    telephone,
    facebook,
    instagram,
    youtube,
    urlfacebook,
    urlinstagram,
    urlyoutube,
  } = data;

  const dataConfig = await getConfig()

  return await prisma.konfigurasi.update({
    where: {
      id: dataConfig?.id,
    },
    data: {
      keyword: keyword,
      metadata: metadata,
      namaOrganisasi: namaOrganisasi,
      singkatanOrganisasi: singkatan,
      motto: motto1,
      motto2: motto2,
      URLWebsite: website,
      deskripsiOrganisasi: deskripsiOrganisasi,
      deskripsiWeb: deskripsiWeb,
      alamatOrganisasi: alamat,
      emailOrganisasi: emaiOrganisasi,
      telOrganisasi: telephone,
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
      URLfacebook: urlfacebook,
      URLinstagram: urlinstagram,
      URLyoutube: urlyoutube,
    },
  });

};
