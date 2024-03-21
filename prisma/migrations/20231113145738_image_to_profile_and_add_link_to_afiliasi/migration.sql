/*
  Warnings:

  - You are about to drop the column `image` on the `Anggota` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - Added the required column `link` to the `Afiliasi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Afiliasi" ADD COLUMN     "link" TEXT NOT NULL,
ALTER COLUMN "singkatan" SET DATA TYPE VARCHAR(10);

-- AlterTable
ALTER TABLE "Anggota" DROP COLUMN "image",
ADD COLUMN     "profile" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
ADD COLUMN     "profile" TEXT;
