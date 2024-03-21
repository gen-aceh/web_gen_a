/*
  Warnings:

  - You are about to drop the column `konten` on the `Kegiatan` table. All the data in the column will be lost.
  - Added the required column `deskripsi` to the `Kegiatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Kegiatan" DROP COLUMN "konten",
ADD COLUMN     "deskripsi" TEXT NOT NULL;
