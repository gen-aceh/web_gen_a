/*
  Warnings:

  - You are about to drop the column `URLlinkedIn` on the `Konfigurasi` table. All the data in the column will be lost.
  - You are about to drop the column `linkedIn` on the `Konfigurasi` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Konfigurasi" DROP COLUMN "URLlinkedIn",
DROP COLUMN "linkedIn",
ADD COLUMN     "URLyoutube" TEXT,
ADD COLUMN     "youtube" TEXT;
