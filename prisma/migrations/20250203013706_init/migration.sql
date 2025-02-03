-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_nim_key" ON "Student"("nim");
