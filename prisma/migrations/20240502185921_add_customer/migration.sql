-- CreateEnum
CREATE TYPE "CustomerEnum" AS ENUM ('super_admin', 'admin', 'host', 'Customer');

-- CreateEnum
CREATE TYPE "SoloRoomEnum" AS ENUM ('available', 'unavailable');

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" "CustomerEnum" NOT NULL,
    "profileImage" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "package" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "maxCustomer" INTEGER NOT NULL,
    "packageImage" TEXT,
    "destination" TEXT NOT NULL,

    CONSTRAINT "package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookedPackage" (
    "id" TEXT NOT NULL,
    "CustomerId" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,

    CONSTRAINT "bookedPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soloRoom" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "numberOfRooms" INTEGER NOT NULL,
    "roomImage" TEXT,
    "district" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "roadNumber" TEXT,
    "status" "SoloRoomEnum" NOT NULL,

    CONSTRAINT "soloRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookedSoloRoom" (
    "id" TEXT NOT NULL,
    "Form" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "CustomerId" TEXT NOT NULL,
    "soloRoomId" TEXT NOT NULL,

    CONSTRAINT "bookedSoloRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "packageReviewAndRating" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "CustomerId" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,

    CONSTRAINT "packageReviewAndRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faq" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addToCartPackage" (
    "id" TEXT NOT NULL,
    "CustomerId" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,

    CONSTRAINT "addToCartPackage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phone_key" ON "Customer"("phone");

-- AddForeignKey
ALTER TABLE "bookedPackage" ADD CONSTRAINT "bookedPackage_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookedPackage" ADD CONSTRAINT "bookedPackage_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookedSoloRoom" ADD CONSTRAINT "bookedSoloRoom_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookedSoloRoom" ADD CONSTRAINT "bookedSoloRoom_soloRoomId_fkey" FOREIGN KEY ("soloRoomId") REFERENCES "soloRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "packageReviewAndRating" ADD CONSTRAINT "packageReviewAndRating_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "packageReviewAndRating" ADD CONSTRAINT "packageReviewAndRating_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addToCartPackage" ADD CONSTRAINT "addToCartPackage_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addToCartPackage" ADD CONSTRAINT "addToCartPackage_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
