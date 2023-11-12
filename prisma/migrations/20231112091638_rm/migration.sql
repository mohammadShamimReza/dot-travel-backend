/*
  Warnings:

  - Made the column `profileImage` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "profileImage" SET NOT NULL;
