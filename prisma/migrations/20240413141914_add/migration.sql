-- CreateEnum
CREATE TYPE "FileStorageType" AS ENUM ('S3');

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "type" "FileStorageType" NOT NULL DEFAULT 'S3',

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);
