/*
  Warnings:

  - You are about to drop the column `keyword` on the `Berita` table. All the data in the column will be lost.
  - Added the required column `link` to the `Berita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Berita" DROP COLUMN "keyword",
ADD COLUMN     "link" TEXT NOT NULL;
