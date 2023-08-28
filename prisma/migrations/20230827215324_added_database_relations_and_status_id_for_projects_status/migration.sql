/*
  Warnings:

  - You are about to drop the column `category` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `grantStatus` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectId,title]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Project_title_key";

-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "category";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "category",
DROP COLUMN "grantStatus",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "projectId" INTEGER NOT NULL,
ADD COLUMN     "statusId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_CategoryToProject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BlogToBlogCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FundingStatusToProject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProject_AB_unique" ON "_CategoryToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProject_B_index" ON "_CategoryToProject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BlogToBlogCategory_AB_unique" ON "_BlogToBlogCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_BlogToBlogCategory_B_index" ON "_BlogToBlogCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FundingStatusToProject_AB_unique" ON "_FundingStatusToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_FundingStatusToProject_B_index" ON "_FundingStatusToProject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectId_title_key" ON "Project"("projectId", "title");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Grantee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProject" ADD CONSTRAINT "_CategoryToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProject" ADD CONSTRAINT "_CategoryToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogToBlogCategory" ADD CONSTRAINT "_BlogToBlogCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogToBlogCategory" ADD CONSTRAINT "_BlogToBlogCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "BlogCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FundingStatusToProject" ADD CONSTRAINT "_FundingStatusToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "FundingStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FundingStatusToProject" ADD CONSTRAINT "_FundingStatusToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
