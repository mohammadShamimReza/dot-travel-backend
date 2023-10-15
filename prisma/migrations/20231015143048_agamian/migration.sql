/*
  Warnings:

  - The values [customer] on the enum `UserEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserEnum_new" AS ENUM ('super_admin', 'admin', 'client', 'host');
ALTER TABLE "user" ALTER COLUMN "role" TYPE "UserEnum_new" USING ("role"::text::"UserEnum_new");
ALTER TYPE "UserEnum" RENAME TO "UserEnum_old";
ALTER TYPE "UserEnum_new" RENAME TO "UserEnum";
DROP TYPE "UserEnum_old";
COMMIT;
