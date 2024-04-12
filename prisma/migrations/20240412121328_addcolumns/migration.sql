/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `address` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `c1` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `center_p` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `center_s` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `geo_s` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" ADD COLUMN     "c1" TEXT NOT NULL,
ADD COLUMN     "c2" TEXT,
ADD COLUMN     "c3" TEXT,
ADD COLUMN     "c4" TEXT,
ADD COLUMN     "center_p" geometry(Point, 5179) NOT NULL,
ADD COLUMN     "center_s" geometry(Point, 4326) NOT NULL,
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "geo_s" geometry(Geometry, 4326) NOT NULL,
ADD COLUMN     "meta_created_at" TIMESTAMP(3),
ADD COLUMN     "meta_deleted_at" TIMESTAMP(3),
ADD COLUMN     "meta_eng_name" TEXT,
ADD COLUMN     "meta_meta_name" TEXT,
ADD COLUMN     "meta_prev_code" TEXT,
ADD COLUMN     "order" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "address_code_key" ON "address"("code");
