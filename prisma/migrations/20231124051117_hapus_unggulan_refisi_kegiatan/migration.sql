/*
  Warnings:

  - You are about to drop the column `judul` on the `Kegiatan` table. All the data in the column will be lost.
  - You are about to drop the `Unggulan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nama` to the `Kegiatan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Unggulan" DROP CONSTRAINT "Unggulan_afiliasiId_fkey";

-- DropForeignKey
ALTER TABLE "Unggulan" DROP CONSTRAINT "Unggulan_authorId_fkey";

-- AlterTable
ALTER TABLE "Kegiatan" DROP COLUMN "judul",
ADD COLUMN     "isUnggulan" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "nama" TEXT NOT NULL,
ADD COLUMN     "unggulanUpdate" TIMESTAMP(3);

-- DropTable
DROP TABLE "Unggulan";

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_KegiatanToTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_KegiatanToTags_AB_unique" ON "_KegiatanToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_KegiatanToTags_B_index" ON "_KegiatanToTags"("B");

-- AddForeignKey
ALTER TABLE "_KegiatanToTags" ADD CONSTRAINT "_KegiatanToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Kegiatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KegiatanToTags" ADD CONSTRAINT "_KegiatanToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
