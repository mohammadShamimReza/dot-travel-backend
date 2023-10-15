/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `book` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `district` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `division` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `village` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserEnum" AS ENUM ('super_admin', 'admin', 'customer');

-- CreateEnum
CREATE TYPE "PackageStatusEnum" AS ENUM ('inprogress', 'ongoing', 'ended');

-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "reviewAndRating" DROP CONSTRAINT "reviewAndRating_packageId_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "name",
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "division" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "role" "UserEnum" NOT NULL,
ADD COLUMN     "village" TEXT NOT NULL;

-- DropTable
DROP TABLE "book";

-- DropEnum
DROP TYPE "OrderStatusEnum";

-- CreateTable
CREATE TABLE "package" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "descripton" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "status" "PackageStatusEnum" NOT NULL,
    "packageCategoryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Solo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "package" ADD CONSTRAINT "package_packageCategoryId_fkey" FOREIGN KEY ("packageCategoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "package" ADD CONSTRAINT "package_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviewAndRating" ADD CONSTRAINT "reviewAndRating_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
