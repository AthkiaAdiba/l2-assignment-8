/*
  Warnings:

  - You are about to drop the column `status` on the `serviceRecords` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "serviceRecords" DROP COLUMN "status";

-- DropEnum
DROP TYPE "ServiceStatus";
