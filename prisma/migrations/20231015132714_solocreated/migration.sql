/*
  Warnings:

  - You are about to drop the column `userId` on the `package` table. All the data in the column will be lost.
  - You are about to drop the `Solo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reviewAndRating` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[phone]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `from` on the `package` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `to` on the `package` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `phone` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SoloRoomEnum" AS ENUM ('available', 'unavailable');

-- AlterEnum
ALTER TYPE "UserEnum" ADD VALUE 'host';

-- DropForeignKey
ALTER TABLE "package" DROP CONSTRAINT "package_userId_fkey";

-- DropForeignKey
ALTER TABLE "reviewAndRating" DROP CONSTRAINT "reviewAndRating_packageId_fkey";

-- DropForeignKey
ALTER TABLE "reviewAndRating" DROP CONSTRAINT "reviewAndRating_userId_fkey";

-- AlterTable
ALTER TABLE "package" DROP COLUMN "userId",
ADD COLUMN     "image" JSONB[],
DROP COLUMN "from",
ADD COLUMN     "from" TIMESTAMP(3) NOT NULL,
DROP COLUMN "to",
ADD COLUMN     "to" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "phone" TEXT NOT NULL;

-- DropTable
DROP TABLE "Solo";

-- DropTable
DROP TABLE "reviewAndRating";

-- CreateTable
CREATE TABLE "BookedPackage" (
    "id" TEXT NOT NULL,
    "Form" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "soloRoomId" TEXT NOT NULL,

    CONSTRAINT "BookedPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soloRoom" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "descripton" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "numberOfRooms" INTEGER NOT NULL,
    "image" JSONB[],
    "district" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "roadNumber" TEXT,
    "status" "SoloRoomEnum" NOT NULL,

    CONSTRAINT "soloRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookedSoloRoom" (
    "id" TEXT NOT NULL,
    "Form" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "soloRoomId" TEXT NOT NULL,

    CONSTRAINT "BookedSoloRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "packageReviewAndRating" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,

    CONSTRAINT "packageReviewAndRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soloReviewAndRating" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "soloRoomId" TEXT NOT NULL,

    CONSTRAINT "soloReviewAndRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- AddForeignKey
ALTER TABLE "BookedPackage" ADD CONSTRAINT "BookedPackage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookedPackage" ADD CONSTRAINT "BookedPackage_soloRoomId_fkey" FOREIGN KEY ("soloRoomId") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookedSoloRoom" ADD CONSTRAINT "BookedSoloRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookedSoloRoom" ADD CONSTRAINT "BookedSoloRoom_soloRoomId_fkey" FOREIGN KEY ("soloRoomId") REFERENCES "soloRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "packageReviewAndRating" ADD CONSTRAINT "packageReviewAndRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "packageReviewAndRating" ADD CONSTRAINT "packageReviewAndRating_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "soloReviewAndRating" ADD CONSTRAINT "soloReviewAndRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "soloReviewAndRating" ADD CONSTRAINT "soloReviewAndRating_soloRoomId_fkey" FOREIGN KEY ("soloRoomId") REFERENCES "soloRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
