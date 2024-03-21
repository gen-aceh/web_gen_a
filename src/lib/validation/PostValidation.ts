import { z } from "zod";
import {
  JabatanAnggota,
  Pendidikan,
  kumpulanWarna,
  status,
} from "../Constant";

const kategoriSchema = z.object({
  value: z.number()
})

const TagSchema = z.object({
  value: z.number()
})

export const BeritaSchema = z.object({
  judul: z.string().min(1, { message: "Judul Harus diisi" }),
  kategori: z.array(kategoriSchema),
  gambarBerita: z.any().optional(),
  konten: z.string().optional(),
  link: z
    .string()
    .min(1, { message: "harus diisi sahabat!!" })
    .url({ message: "formatnya kurang sesuai (https://det...)" }),
  tanggal: z.date(),
  status: z.enum(status),
  author: z.string({ required_error: "Penulis harus diisi" }),
  editor: z.string()
});

export const KegiatanSchema = z.object({
  nama: z.string().min(1, { message: "harus ada namanya dong" }),
  ringkasan: z.string().min(1, { message: "isi aja lah" }),
  tags: z.array(TagSchema),
  gambarKegiatan: z.any().optional(),
  konten: z.string().min(1, { message: "jelaskan sikit wahai temanku" }),
  tanggal: z.date(),
  unggulan: z.string(),
  tanggalUnggulan: z.date().optional(),
  subUnit: z.string().min(1, { message: "Harus diisi brayy!!" }),
  author: z.string(),
});

export const AnggotaSchema = z.object({
  nama: z
    .string()
    .min(1, { message: "Nama di-isi dong, dia hantu ya?" })
    .max(40, { message: "Panjang banget bah namanya, pendekkan !!!" }),
  jabatan: z.enum(JabatanAnggota),
  tanggalLahir: z.date().optional(),
  gender: z.enum(["L", "P"]),
  subUnit: z.string({ required_error: "bagian ini harus diisi bos!" }),
  pendidikan: z.enum(Pendidikan),
  bidang: z.string().optional(),
  ahli: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "Harus diisi" })
    .email()
    .refine(val => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"), {
      message: "Emailnya yang bener dong (...@gmail.com) atau (...@yahoo.com)",
    }),
  instagram: z.string().optional(),
  telephon: z.string().optional(),
  gambar: z.any().optional(),
  status: z.enum(["Aktif", "TidakAktif"]).optional(),
  deskripsi: z.string().optional(),
});

export const AfiliasiSchema = z.object({
  nama: z.string().min(1, { message: "Harus ada nama dong!" }),
  singkatan: z
    .string()
    .min(1, { message: "Masak nggak ada singkatan?" })
    .max(15, { message: "Yakin nggak kepanjangan?" }),
  logo: z.any(),
  deskripsi: z
    .string()
    .min(1, { message: "Jelaskanlah sikit..." })
    .min(20, { message: "Jangan pendek amat dah, panjang sikit lagi" }),
  warna: z.string().refine(warna => Object.keys(kumpulanWarna).includes(warna)),
  urutan: z.number()
});
