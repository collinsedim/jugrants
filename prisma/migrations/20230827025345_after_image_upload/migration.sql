/*
  Warnings:

  - Added the required column `github` to the `Grantee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedin` to the `Grantee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `Grantee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `twitter` to the `Grantee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `Grantee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grantee" ADD COLUMN     "github" TEXT NOT NULL,
ADD COLUMN     "linkedin" TEXT NOT NULL,
ADD COLUMN     "photo" TEXT NOT NULL,
ADD COLUMN     "twitter" TEXT NOT NULL,
ADD COLUMN     "website" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "BlogCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BlogCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "blogRound" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FAQ" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id")
);
