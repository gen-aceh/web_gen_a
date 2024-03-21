/*
  Warnings:

  - The primary key for the `Afiliasi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Afiliasi` table. All the data in the column will be lost.
  - The primary key for the `Anggota` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `areaKerja` on the `Anggota` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `Anggota` table. All the data in the column will be lost.
  - You are about to drop the column `fotoProfil` on the `Anggota` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Kegiatan` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Kegiatan` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Kegiatan` table. All the data in the column will be lost.
  - The primary key for the `Konfigurasi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Gallery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Karya` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Page` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Anggota` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `deskripsi` to the `Afiliasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Afiliasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `Afiliasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `singkatan` to the `Afiliasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Afiliasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warna` to the `Afiliasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `about` to the `Anggota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `afiliasiId` to the `Anggota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Anggota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keahlian` to the `Anggota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pendidikan` to the `Anggota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Anggota` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `jabatan` on the `Anggota` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `authorId` to the `Kegiatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `judul` to the `Kegiatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keyword` to the `Kegiatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `konten` to the `Kegiatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Kegiatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashedPassword` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Jabatan" AS ENUM ('Ketua', 'Anggota');

-- CreateEnum
CREATE TYPE "Pendidikan" AS ENUM ('SD', 'SMP', 'SMA', 'D3', 'S1');

-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Karya" DROP CONSTRAINT "Karya_anggotaId_fkey";

-- DropForeignKey
ALTER TABLE "Kegiatan" DROP CONSTRAINT "Kegiatan_afiliasiId_fkey";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Afiliasi" DROP CONSTRAINT "Afiliasi_pkey",
DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deskripsi" TEXT NOT NULL,
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "nama" TEXT NOT NULL,
ADD COLUMN     "singkatan" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "warna" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Afiliasi_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Afiliasi_id_seq";

-- AlterTable
ALTER TABLE "Anggota" DROP CONSTRAINT "Anggota_pkey",
DROP COLUMN "areaKerja",
DROP COLUMN "bio",
DROP COLUMN "fotoProfil",
ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "afiliasiId" TEXT NOT NULL,
ADD COLUMN     "bidang" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "keahlian" TEXT NOT NULL,
ADD COLUMN     "pendidikan" "Pendidikan" NOT NULL,
ADD COLUMN     "status" "StatusAnggota" NOT NULL DEFAULT 'Aktif',
ADD COLUMN     "telephone" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "jabatan",
ADD COLUMN     "jabatan" "Jabatan" NOT NULL,
ADD CONSTRAINT "Anggota_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Anggota_id_seq";

-- AlterTable
ALTER TABLE "Kegiatan" DROP COLUMN "date",
DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "authorId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "judul" TEXT NOT NULL,
ADD COLUMN     "keyword" TEXT NOT NULL,
ADD COLUMN     "konten" TEXT NOT NULL,
ADD COLUMN     "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "afiliasiId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Konfigurasi" DROP CONSTRAINT "Konfigurasi_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "motto2" DROP NOT NULL,
ALTER COLUMN "telOrganisasi" SET DATA TYPE TEXT,
ADD CONSTRAINT "Konfigurasi_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Konfigurasi_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "password",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hashedPassword" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "Blog";

-- DropTable
DROP TABLE "Gallery";

-- DropTable
DROP TABLE "Karya";

-- DropTable
DROP TABLE "Page";

-- CreateTable
CREATE TABLE "Berita" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "konten" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "StatusBlog" NOT NULL DEFAULT 'pending',
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Berita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kategori" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Kategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unggulan" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "konten" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "afiliasiId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unggulan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "karyaTulisan" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "karyaTulisan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Galleri" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Galleri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BeritaToKategori" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Kategori_nama_key" ON "Kategori"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "_BeritaToKategori_AB_unique" ON "_BeritaToKategori"("A", "B");

-- CreateIndex
CREATE INDEX "_BeritaToKategori_B_index" ON "_BeritaToKategori"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Anggota_email_key" ON "Anggota"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Anggota" ADD CONSTRAINT "Anggota_afiliasiId_fkey" FOREIGN KEY ("afiliasiId") REFERENCES "Afiliasi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Berita" ADD CONSTRAINT "Berita_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kegiatan" ADD CONSTRAINT "Kegiatan_afiliasiId_fkey" FOREIGN KEY ("afiliasiId") REFERENCES "Afiliasi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kegiatan" ADD CONSTRAINT "Kegiatan_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unggulan" ADD CONSTRAINT "Unggulan_afiliasiId_fkey" FOREIGN KEY ("afiliasiId") REFERENCES "Afiliasi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unggulan" ADD CONSTRAINT "Unggulan_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BeritaToKategori" ADD CONSTRAINT "_BeritaToKategori_A_fkey" FOREIGN KEY ("A") REFERENCES "Berita"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BeritaToKategori" ADD CONSTRAINT "_BeritaToKategori_B_fkey" FOREIGN KEY ("B") REFERENCES "Kategori"("id") ON DELETE CASCADE ON UPDATE CASCADE;
