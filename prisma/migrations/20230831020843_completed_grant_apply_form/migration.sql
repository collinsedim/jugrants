-- AlterTable
ALTER TABLE "FundingStatus" ALTER COLUMN "title" DROP DEFAULT;

-- CreateTable
CREATE TABLE "ApprovalCriteria" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ApprovalCriteria_pkey" PRIMARY KEY ("id")
);
