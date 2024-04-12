/*
  Warnings:

  - Made the column `order` on table `address` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "address" ALTER COLUMN "order" SET NOT NULL,
ALTER COLUMN "order" SET DATA TYPE DOUBLE PRECISION;
