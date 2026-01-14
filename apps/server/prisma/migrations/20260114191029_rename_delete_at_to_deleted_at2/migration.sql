/*
  Warnings:

  - You are about to drop the column `delete_at` on the `notes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "notes" DROP COLUMN "delete_at",
ADD COLUMN     "deleted_at" TIMESTAMP(3);
