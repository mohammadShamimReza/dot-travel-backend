/*
  Warnings:

  - You are about to drop the column `image` on the `package` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `soloRoom` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "package" DROP COLUMN "image",
ADD COLUMN     "packageImage" TEXT;

-- AlterTable
ALTER TABLE "soloRoom" DROP COLUMN "image",
ADD COLUMN     "roomImage" TEXT;
