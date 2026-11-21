-- CreateTable
CREATE TABLE "Restaurant" (
    "id" INTEGER NOT NULL,
    "restaurant_id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_restaurant_id_key" ON "Restaurant"("restaurant_id");
