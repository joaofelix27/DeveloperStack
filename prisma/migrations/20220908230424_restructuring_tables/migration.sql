/*
  Warnings:

  - You are about to drop the column `askedById` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `answeredById` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `askedBy` to the `question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answeredBy` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_askedById_fkey";

-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_answeredById_fkey";

-- AlterTable
ALTER TABLE "question" DROP COLUMN "askedById",
ADD COLUMN     "askedBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "answeredById",
ADD COLUMN     "answeredBy" TEXT NOT NULL;

-- DropTable
DROP TABLE "users";
