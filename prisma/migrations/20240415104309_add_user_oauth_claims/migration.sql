/*
  Warnings:

  - A unique constraint covering the columns `[iss,sub]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `iss` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sub` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "email" TEXT,
ADD COLUMN     "email_verified" TEXT,
ADD COLUMN     "first" TEXT,
ADD COLUMN     "iss" TEXT NOT NULL,
ADD COLUMN     "last" TEXT,
ADD COLUMN     "sub" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_iss_sub_key" ON "users"("iss", "sub");
