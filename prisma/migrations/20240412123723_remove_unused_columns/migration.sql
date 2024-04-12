/*
  Warnings:

  - You are about to drop the column `meta_created_at` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `meta_deleted_at` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `meta_eng_name` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `meta_name` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `meta_prev_code` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `orders` on the `address` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "address" DROP COLUMN "meta_created_at",
DROP COLUMN "meta_deleted_at",
DROP COLUMN "meta_eng_name",
DROP COLUMN "meta_name",
DROP COLUMN "meta_prev_code",
DROP COLUMN "orders";
