-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis" WITH VERSION "3.4.2";

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "geoG" geometry(Geometry, 4326) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);
