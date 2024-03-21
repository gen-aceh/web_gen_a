-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'Admin');

-- CreateEnum
CREATE TYPE "StatusBlog" AS ENUM ('pending', 'publish');

-- CreateEnum
CREATE TYPE "StatusAnggota" AS ENUM ('Aktif', 'TidakAktif');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'User',
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" "StatusBlog" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Karya" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "anggotaId" INTEGER NOT NULL,

    CONSTRAINT "Karya_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "deskripsi" TEXT,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Afiliasi" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Afiliasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kegiatan" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "afiliasiId" INTEGER NOT NULL,

    CONSTRAINT "Kegiatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anggota" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "fotoProfil" TEXT,
    "areaKerja" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "bio" TEXT NOT NULL,

    CONSTRAINT "Anggota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Konfigurasi" (
    "id" SERIAL NOT NULL,
    "keyword" TEXT NOT NULL,
    "metadata" TEXT NOT NULL,
    "namaOrganisasi" TEXT NOT NULL,
    "singkatanOrganisasi" TEXT NOT NULL,
    "motto" TEXT NOT NULL,
    "motto2" TEXT NOT NULL,
    "deskripsiOrganisasi" TEXT NOT NULL,
    "deskripsiWeb" TEXT NOT NULL,
    "URLWebsite" TEXT NOT NULL,
    "emailOrganisasi" TEXT NOT NULL,
    "telOrganisasi" INTEGER NOT NULL,
    "alamatOrganisasi" TEXT NOT NULL,
    "facebook" TEXT,
    "instagram" TEXT,
    "linkedIn" TEXT,
    "URLfacebook" TEXT,
    "URLinstagram" TEXT,
    "URLlinkedIn" TEXT,

    CONSTRAINT "Konfigurasi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Karya" ADD CONSTRAINT "Karya_anggotaId_fkey" FOREIGN KEY ("anggotaId") REFERENCES "Anggota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kegiatan" ADD CONSTRAINT "Kegiatan_afiliasiId_fkey" FOREIGN KEY ("afiliasiId") REFERENCES "Afiliasi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
