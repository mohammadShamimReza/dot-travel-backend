/*
  Warnings:

  - You are about to drop the column `descripton` on the `package` table. All the data in the column will be lost.
  - Added the required column `description` to the `package` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "package" DROP COLUMN "descripton",
ADD COLUMN     "description" TEXT NOT NULL;
