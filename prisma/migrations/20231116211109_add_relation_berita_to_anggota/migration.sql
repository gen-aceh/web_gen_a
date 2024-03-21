/*
  Warnings:

  - Added the required column `editorId` to the `Berita` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Berita" DROP CONSTRAINT "Berita_authorId_fkey";

-- AlterTable
ALTER TABLE "Berita" ADD COLUMN     "editorId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Berita" ADD CONSTRAINT "Berita_editorId_fkey" FOREIGN KEY ("editorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Berita" ADD CONSTRAINT "Berita_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Anggota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
