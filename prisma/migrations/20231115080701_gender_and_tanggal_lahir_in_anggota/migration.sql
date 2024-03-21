/*
  Warnings:

  - The values [SD,SMP] on the enum `Pendidikan` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `gender` to the `Anggota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_lahir` to the `Anggota` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('L', 'P');

-- AlterEnum
BEGIN;
CREATE TYPE "Pendidikan_new" AS ENUM ('SMA', 'KULIAH', 'D3', 'S1', 'S2', 'S3');
ALTER TABLE "Anggota" ALTER COLUMN "pendidikan" TYPE "Pendidikan_new" USING ("pendidikan"::text::"Pendidikan_new");
ALTER TYPE "Pendidikan" RENAME TO "Pendidikan_old";
ALTER TYPE "Pendidikan_new" RENAME TO "Pendidikan";
DROP TYPE "Pendidikan_old";
COMMIT;

-- AlterTable
ALTER TABLE "Afiliasi" ALTER COLUMN "singkatan" SET DATA TYPE VARCHAR(15);

-- AlterTable
ALTER TABLE "Anggota" ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "tanggal_lahir" TIMESTAMP(3) NOT NULL;
