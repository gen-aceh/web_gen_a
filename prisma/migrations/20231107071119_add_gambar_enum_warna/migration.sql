/*
  Warnings:

  - You are about to alter the column `nama` on the `Afiliasi` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `singkatan` on the `Afiliasi` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(5)`.
  - The `warna` column on the `Afiliasi` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `image` on the `Galleri` table. All the data in the column will be lost.
  - You are about to alter the column `username` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.
  - Added the required column `gambar` to the `Berita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gambar` to the `Galleri` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gambar` to the `Kegiatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gambar` to the `Unggulan` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Warna" AS ENUM ('black', 'white', 'slate', 'gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'teal', 'cyan', 'blue', 'indigo', 'violet', 'purple', 'fuchsia');

-- AlterTable
ALTER TABLE "Afiliasi" ALTER COLUMN "nama" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "singkatan" SET DATA TYPE VARCHAR(5),
DROP COLUMN "warna",
ADD COLUMN     "warna" "Warna" NOT NULL DEFAULT 'amber';

-- AlterTable
ALTER TABLE "Berita" ADD COLUMN     "gambar" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Galleri" DROP COLUMN "image",
ADD COLUMN     "gambar" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Kegiatan" ADD COLUMN     "gambar" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Unggulan" ADD COLUMN     "gambar" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DATA TYPE VARCHAR(30);
