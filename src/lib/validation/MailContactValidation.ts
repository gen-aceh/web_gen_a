import { z } from "zod";

export const ContactMailSchema = z.object({
  nama: z
    .string()
    .min(1, { message: "mohon isikan nama anda terlebih dahulu" }),
  email: z.string().min(1, { message : "mohon isi email anda terlebih dahulu" }).email({ message: "yang bener dong emailnya" }),
  subjek: z.string().min(1, { message : "mohon masukkan subjek pesan anda" }),
  pesan: z.string().min(1, { message : "masukkan pesan anda" })
});
