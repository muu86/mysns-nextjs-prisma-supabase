/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Address";

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "geoG" geometry(Geometry, 4326) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);
