/*
  Warnings:

  - Changed the type of `warna` on the `Afiliasi` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Afiliasi" DROP COLUMN "warna",
ADD COLUMN     "warna" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Warna";
