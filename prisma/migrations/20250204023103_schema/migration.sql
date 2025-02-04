/*
  Warnings:

  - You are about to drop the column `age` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `nim` on the `Student` table. All the data in the column will be lost.
  - Added the required column `birth_date` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Student_nim_key";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "age",
DROP COLUMN "fullName",
DROP COLUMN "nim",
ADD COLUMN     "birth_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL;
