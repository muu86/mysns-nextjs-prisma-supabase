-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "address_id" INTEGER NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
