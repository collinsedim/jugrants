/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `FundingStatus` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FundingStatus_title_key" ON "FundingStatus"("title");
