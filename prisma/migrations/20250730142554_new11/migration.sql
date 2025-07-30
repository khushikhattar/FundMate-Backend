/*
  Warnings:

  - The values [PENDING,SUBMITTED,APPROVED,REJECTED,PAID] on the enum `MilestoneStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `approved` on the `MilestoneVote` table. All the data in the column will be lost.
  - Added the required column `vote` to the `MilestoneVote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MilestoneStatus_new" AS ENUM ('COMPLETED', 'NOTSTARTED', 'INPROGRESS');
ALTER TABLE "Milestone" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Milestone" ALTER COLUMN "status" TYPE "MilestoneStatus_new" USING ("status"::text::"MilestoneStatus_new");
ALTER TYPE "MilestoneStatus" RENAME TO "MilestoneStatus_old";
ALTER TYPE "MilestoneStatus_new" RENAME TO "MilestoneStatus";
DROP TYPE "MilestoneStatus_old";
ALTER TABLE "Milestone" ALTER COLUMN "status" SET DEFAULT 'NOTSTARTED';
COMMIT;

-- AlterTable
ALTER TABLE "Milestone" ALTER COLUMN "status" SET DEFAULT 'NOTSTARTED';

-- AlterTable
ALTER TABLE "MilestoneVote" DROP COLUMN "approved",
ADD COLUMN     "vote" BOOLEAN NOT NULL;
