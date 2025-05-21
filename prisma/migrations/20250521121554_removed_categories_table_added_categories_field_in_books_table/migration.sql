/*
  Warnings:

  - You are about to drop the `_booksTocategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_booksTocategories" DROP CONSTRAINT "_booksTocategories_A_fkey";

-- DropForeignKey
ALTER TABLE "_booksTocategories" DROP CONSTRAINT "_booksTocategories_B_fkey";

-- AlterTable
ALTER TABLE "books" ADD COLUMN     "categories" TEXT[];

-- DropTable
DROP TABLE "_booksTocategories";

-- DropTable
DROP TABLE "categories";
