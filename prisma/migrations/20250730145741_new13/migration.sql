/*
  Warnings:

  - You are about to alter the column `amount` on the `Milestone` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.

*/
-- AlterTable
ALTER TABLE "Milestone" ALTER COLUMN "amount" SET DATA TYPE BIGINT;
