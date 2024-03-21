import { PrismaClient } from "@prisma/client";
import { dataConfig } from "../data/dataConfig";
import { dataUser } from "../data/dataUser";
import { dataAfiliasi } from "../data/dataAfiliasi";
import { dataAnggota } from "../data/dataAnggota";
import { dataKategori } from "../data/dataKategori";
import { dataTags } from "../data/dataTags";
import { dataBerita } from "../data/dataBerita";
import { dataKegiatan } from "../data/dataKegiatan";

const prisma = new PrismaClient();

async function main() {
  const konfigurasi = await prisma.konfigurasi.create({
    data: dataConfig,
  });
  console.log("seed konfigurasi selesai")

  const user = await prisma.user.create({
    data : dataUser
  })
  console.log("seed User selesai");

  const afiliasi = await prisma.afiliasi.createMany({
    data : dataAfiliasi
  })
  console.log("seed Afiliasi selesai");

  const anggota = await prisma.anggota.createMany({
    data : dataAnggota
  })
  console.log("seed Anggota selesai");

  const kategori = await prisma.kategori.createMany({
    data: dataKategori
  })
  console.log("seed Kategori selesai");

  const tags = await prisma.tags.createMany({
    data: dataTags
  })
  console.log("seed Tags selesai");

  const berita = await prisma.berita.createMany({
    data: dataBerita
  })
  console.log("seed Berita selesai");

  console.log("seeding berhasil");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
