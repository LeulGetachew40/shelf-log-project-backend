/*
  Warnings:

  - The values [ToRead,Reading,Completed] on the enum `ReadStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ReadStatus_new" AS ENUM ('toRead', 'reading', 'completed');
ALTER TABLE "books" ALTER COLUMN "readStatus" DROP DEFAULT;
ALTER TABLE "books" ALTER COLUMN "readStatus" TYPE "ReadStatus_new" USING ("readStatus"::text::"ReadStatus_new");
ALTER TYPE "ReadStatus" RENAME TO "ReadStatus_old";
ALTER TYPE "ReadStatus_new" RENAME TO "ReadStatus";
DROP TYPE "ReadStatus_old";
ALTER TABLE "books" ALTER COLUMN "readStatus" SET DEFAULT 'toRead';
COMMIT;

-- AlterTable
ALTER TABLE "books" ALTER COLUMN "readStatus" SET DEFAULT 'toRead';
