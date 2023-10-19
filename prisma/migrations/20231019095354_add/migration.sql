/*
  Warnings:

  - You are about to drop the column `packageCategoryId` on the `package` table. All the data in the column will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "package" DROP CONSTRAINT "package_packageCategoryId_fkey";

-- AlterTable
ALTER TABLE "package" DROP COLUMN "packageCategoryId";

-- DropTable
DROP TABLE "category";
