/*
  Warnings:

  - You are about to drop the `Links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GranteeToLinks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GranteeToLinks" DROP CONSTRAINT "_GranteeToLinks_A_fkey";

-- DropForeignKey
ALTER TABLE "_GranteeToLinks" DROP CONSTRAINT "_GranteeToLinks_B_fkey";

-- AlterTable
ALTER TABLE "Grantee" ADD COLUMN     "github" TEXT NOT NULL DEFAULT '#',
ADD COLUMN     "linkedin" TEXT NOT NULL DEFAULT '#',
ADD COLUMN     "twitter" TEXT NOT NULL DEFAULT '#',
ADD COLUMN     "website" TEXT NOT NULL DEFAULT '#';

-- DropTable
DROP TABLE "Links";

-- DropTable
DROP TABLE "_GranteeToLinks";
