/*
  Warnings:

  - Added the required column `maxUser` to the `package` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "package" ADD COLUMN     "maxUser" INTEGER NOT NULL;
