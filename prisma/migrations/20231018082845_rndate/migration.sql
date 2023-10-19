/*
  Warnings:

  - You are about to drop the column `packageImage` on the `package` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `package` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "bookedSoloRoom" ALTER COLUMN "Form" SET DATA TYPE TEXT,
ALTER COLUMN "to" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "package" DROP COLUMN "packageImage",
ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "from" SET DATA TYPE TEXT,
ALTER COLUMN "to" SET DATA TYPE TEXT;
