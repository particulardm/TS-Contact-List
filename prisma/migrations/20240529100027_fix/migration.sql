-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_authorId_fkey";

-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
