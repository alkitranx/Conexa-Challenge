/*
  Warnings:

  - Added the required column `created` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `edited` to the `Film` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Film" ADD COLUMN     "created" DATE NOT NULL,
ADD COLUMN     "edited" DATE NOT NULL;
