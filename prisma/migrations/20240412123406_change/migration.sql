/*
  Warnings:

  - You are about to drop the column `geo_g` on the `address` table. All the data in the column will be lost.
  - Added the required column `geo_p` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" DROP COLUMN "geo_g",
ADD COLUMN     "geo_p" geometry(Geometry, 5179) NOT NULL;
