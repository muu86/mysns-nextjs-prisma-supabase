-- AlterTable
ALTER TABLE "address" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ;

-- CreateIndex
CREATE INDEX "address_center_p_idx" ON "address" USING GIST ("center_p");

-- CreateIndex
CREATE INDEX "address_center_s_idx" ON "address" USING GIST ("center_s");
