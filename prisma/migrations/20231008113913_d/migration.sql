/*
  Warnings:

  - You are about to alter the column `max_atmosphering_speed` on the `Starship` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE "Starship" ALTER COLUMN "manufacturer" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "max_atmosphering_speed" SET DATA TYPE VARCHAR(50);
