/*
  Warnings:

  - You are about to drop the column `geoG` on the `address` table. All the data in the column will be lost.
  - Added the required column `geo_g` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" DROP COLUMN "geoG",
ADD COLUMN     "geo_g" geometry(Geometry, 4326) NOT NULL;
