import { z } from "zod";

export const ConfigSchema = z.object({
  keyword: z.string({ required_error: "Keyword Harus di Isi !" }),
  metadata: z.string({ required_error: "Metadata Harus di Isi !" }),
  namaOrganisasi: z.string({
    required_error: "Nama Organisasi Harus di Isi !",
  }),
  singkatan: z.string({
    required_error: "Singkatan Harus ada (karang aja dah) !",
  }),
  motto1: z.string({ required_error: "Harus punya Motto dong !" }),
  motto2: z.string().nullable(),
  deskripsiOrganisasi: z.string({
    required_error: "Harus jelaskan sedikit tentang kamu",
  }),
  deskripsiWeb: z.string({
    required_error: "Harus jelaskan sedikit tentang web ini",
  }),
  website: z.string().url({message: "url tidak valid"}),
  emaiOrganisasi: z
    .string({ required_error: "Demi Kedamaian bersama, isilah !" })
    .email("email tidak valid"),
  telephone: z
    .string({ required_error: "Demi Info bersama, isilah !" }),
  alamat: z.string({ required_error: "Demi Kedamaian bersama, diisi ya" }),
  instagram : z.string().nullable(),
  facebook : z.string().nullable(),
  youtube : z.string().nullable(),
  urlinstagram : z.string().url({message : "url tidak valid"}).nullable(),
  urlfacebook : z.string().url({message : "url tidak valid"}).nullable(),
  urlyoutube : z.string().url({message : "url tidak valid"}).nullable()
});
