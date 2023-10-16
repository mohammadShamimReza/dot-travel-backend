/*
  Warnings:

  - You are about to drop the column `Form` on the `bookedPackage` table. All the data in the column will be lost.
  - You are about to drop the column `soloRoomId` on the `bookedPackage` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `bookedPackage` table. All the data in the column will be lost.
  - Added the required column `packageId` to the `bookedPackage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bookedPackage" DROP CONSTRAINT "bookedPackage_soloRoomId_fkey";

-- AlterTable
ALTER TABLE "bookedPackage" DROP COLUMN "Form",
DROP COLUMN "soloRoomId",
DROP COLUMN "to",
ADD COLUMN     "packageId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "bookedPackage" ADD CONSTRAINT "bookedPackage_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
