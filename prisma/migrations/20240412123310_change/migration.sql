/*
  Warnings:

  - You are about to drop the column `meta_meta_name` on the `address` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "address" DROP COLUMN "meta_meta_name",
ADD COLUMN     "meta_name" TEXT;
