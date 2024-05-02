/*
  Warnings:

  - The values [Customer] on the enum `CustomerEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CustomerEnum_new" AS ENUM ('super_admin', 'admin', 'host', 'user');
ALTER TABLE "Customer" ALTER COLUMN "role" TYPE "CustomerEnum_new" USING ("role"::text::"CustomerEnum_new");
ALTER TYPE "CustomerEnum" RENAME TO "CustomerEnum_old";
ALTER TYPE "CustomerEnum_new" RENAME TO "CustomerEnum";
DROP TYPE "CustomerEnum_old";
COMMIT;
