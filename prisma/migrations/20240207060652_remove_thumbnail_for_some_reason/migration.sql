/*
  Warnings:

  - You are about to drop the column `thumbnail` on the `Afiliasi` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `Anggota` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `Berita` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Afiliasi" DROP COLUMN "thumbnail";

-- AlterTable
ALTER TABLE "Anggota" DROP COLUMN "thumbnail";

-- AlterTable
ALTER TABLE "Berita" DROP COLUMN "thumbnail";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "thumbnail";
