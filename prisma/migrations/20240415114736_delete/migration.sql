/*
  Warnings:

  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `email_verified` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `first` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `iss` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `last` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `sub` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_iss_sub_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "email",
DROP COLUMN "email_verified",
DROP COLUMN "first",
DROP COLUMN "iss",
DROP COLUMN "last",
DROP COLUMN "sub";
