/*
  Warnings:

  - You are about to drop the `BookedPackage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BookedSoloRoom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookedPackage" DROP CONSTRAINT "BookedPackage_soloRoomId_fkey";

-- DropForeignKey
ALTER TABLE "BookedPackage" DROP CONSTRAINT "BookedPackage_userId_fkey";

-- DropForeignKey
ALTER TABLE "BookedSoloRoom" DROP CONSTRAINT "BookedSoloRoom_soloRoomId_fkey";

-- DropForeignKey
ALTER TABLE "BookedSoloRoom" DROP CONSTRAINT "BookedSoloRoom_userId_fkey";

-- DropTable
DROP TABLE "BookedPackage";

-- DropTable
DROP TABLE "BookedSoloRoom";

-- CreateTable
CREATE TABLE "bookedPackage" (
    "id" TEXT NOT NULL,
    "Form" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "soloRoomId" TEXT NOT NULL,

    CONSTRAINT "bookedPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookedSoloRoom" (
    "id" TEXT NOT NULL,
    "Form" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "soloRoomId" TEXT NOT NULL,

    CONSTRAINT "bookedSoloRoom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bookedPackage" ADD CONSTRAINT "bookedPackage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookedPackage" ADD CONSTRAINT "bookedPackage_soloRoomId_fkey" FOREIGN KEY ("soloRoomId") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookedSoloRoom" ADD CONSTRAINT "bookedSoloRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookedSoloRoom" ADD CONSTRAINT "bookedSoloRoom_soloRoomId_fkey" FOREIGN KEY ("soloRoomId") REFERENCES "soloRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
