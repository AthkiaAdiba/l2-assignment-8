/*
  Warnings:

  - Added the required column `status` to the `serviceRecords` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('pending', 'in-progress', 'done');

-- AlterTable
ALTER TABLE "serviceRecords" ADD COLUMN     "status" "ServiceStatus" NOT NULL;
