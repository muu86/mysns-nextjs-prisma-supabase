/*
  Warnings:

  - You are about to drop the column `order` on the `address` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "address" DROP COLUMN "order",
ADD COLUMN     "orders" TEXT;
