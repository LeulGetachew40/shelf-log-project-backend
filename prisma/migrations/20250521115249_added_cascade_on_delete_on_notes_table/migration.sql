-- DropForeignKey
ALTER TABLE "notes" DROP CONSTRAINT "notes_bookId_fkey";

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE;
