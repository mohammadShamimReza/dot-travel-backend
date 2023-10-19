/*
  Warnings:

  - You are about to drop the column `status` on the `package` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "package" DROP COLUMN "status";

-- DropEnum
DROP TYPE "PackageStatusEnum";
