/*
  Warnings:

  - You are about to drop the column `links` on the `Grantee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Grantee" DROP COLUMN "links",
ADD COLUMN     "joinedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "grantStatus" TEXT NOT NULL DEFAULT 'Open',
ADD COLUMN     "submitted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
