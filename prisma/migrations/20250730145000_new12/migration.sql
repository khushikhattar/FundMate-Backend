/*
  Warnings:

  - You are about to drop the column `goalAmount` on the `Milestone` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Milestone` table. All the data in the column will be lost.
  - You are about to drop the column `proofUrl` on the `Milestone` table. All the data in the column will be lost.
  - The `status` column on the `Milestone` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[milestoneId,userId]` on the table `MilestoneVote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dueDate` to the `Milestone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Milestone` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Milestone` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "WorkStatus" AS ENUM ('NOTSTARTED', 'INPROGRESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- DropIndex
DROP INDEX "MilestoneVote_userId_milestoneId_key";

-- AlterTable
ALTER TABLE "Milestone" DROP COLUMN "goalAmount",
DROP COLUMN "isActive",
DROP COLUMN "proofUrl",
ADD COLUMN     "approvalStatus" "ApprovalStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION,
DROP COLUMN "status",
ADD COLUMN     "status" "WorkStatus" NOT NULL DEFAULT 'NOTSTARTED';

-- AlterTable
ALTER TABLE "MilestoneVote" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropEnum
DROP TYPE "MilestoneStatus";

-- CreateIndex
CREATE UNIQUE INDEX "MilestoneVote_milestoneId_userId_key" ON "MilestoneVote"("milestoneId", "userId");
