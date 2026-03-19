-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "shortCode" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_shortCode_key" ON "Url"("shortCode");
