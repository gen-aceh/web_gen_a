import { Gender, Jabatan, Pendidikan, StatusAnggota } from "@prisma/client";

export const dataAnggota = {
  id: "clp19icru000014usub5oo41s",
  nama: "Admin",
  about:
    "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque nulla nam, tempora totam vero voluptatum consectetur ut, quo maiores perspiciatis suscipit labore ipsam in! Voluptas consequuntur adipisci voluptate ipsam, totam perspiciatis deleniti eos a! Ipsa dolorem mollitia eius molestias veritatis.</p>",
  afiliasiId: "clp18yzx6000008juf1m990ue",
  bidang: "Keperawatan",
  // createdAt: "2023-11-16 14:04:03.498",
  email: "admin@gmail.com",
  instagram: "@akuDisana",
  keahlian: "Software dev",
  pendidikan: Pendidikan.KULIAH,
  status: StatusAnggota.Aktif,
  telephone: "085282728022",
  // updatedAt: "2023-11-17 06:54:44.854",
  jabatan: Jabatan.Ketua,
  profile: "",
  gender: Gender.L,
  tanggalLahir: "2002-08-01T17:00:00.000Z",
};