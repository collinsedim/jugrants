/*
  Warnings:

  - You are about to drop the column `github` on the `Grantee` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `Grantee` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `Grantee` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Grantee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Grantee" DROP COLUMN "github",
DROP COLUMN "linkedin",
DROP COLUMN "twitter",
DROP COLUMN "website";

-- CreateTable
CREATE TABLE "Links" (
    "id" SERIAL NOT NULL,
    "twitter" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GranteeToLinks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_twitter_github_website_linkedin_key" ON "Links"("twitter", "github", "website", "linkedin");

-- CreateIndex
CREATE UNIQUE INDEX "_GranteeToLinks_AB_unique" ON "_GranteeToLinks"("A", "B");

-- CreateIndex
CREATE INDEX "_GranteeToLinks_B_index" ON "_GranteeToLinks"("B");

-- AddForeignKey
ALTER TABLE "_GranteeToLinks" ADD CONSTRAINT "_GranteeToLinks_A_fkey" FOREIGN KEY ("A") REFERENCES "Grantee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GranteeToLinks" ADD CONSTRAINT "_GranteeToLinks_B_fkey" FOREIGN KEY ("B") REFERENCES "Links"("id") ON DELETE CASCADE ON UPDATE CASCADE;
