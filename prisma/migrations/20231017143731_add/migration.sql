-- CreateEnum
CREATE TYPE "UserEnum" AS ENUM ('super_admin', 'admin', 'host', 'user');

-- CreateEnum
CREATE TYPE "SoloRoomEnum" AS ENUM ('available', 'unavailable');

-- CreateEnum
CREATE TYPE "PackageStatusEnum" AS ENUM ('inprogress', 'ongoing', 'ended');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" "UserEnum" NOT NULL,
    "address" TEXT NOT NULL,
    "profileImg" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "package" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "status" "PackageStatusEnum" NOT NULL,
    "packageImage" TEXT,
    "maxUser" INTEGER NOT NULL,
    "destination" TEXT NOT NULL,
    "packageCategoryId" TEXT NOT NULL,

    CONSTRAINT "package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookedPackage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
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
    "Form" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "soloRoomId" TEXT NOT NULL,

    CONSTRAINT "bookedSoloRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "packageReviewAndRating" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,

    CONSTRAINT "packageReviewAndRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soloReviewAndRating" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "soloRoomId" TEXT NOT NULL,

    CONSTRAINT "soloReviewAndRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- AddForeignKey
ALTER TABLE "package" ADD CONSTRAINT "package_packageCategoryId_fkey" FOREIGN KEY ("packageCategoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookedPackage" ADD CONSTRAINT "bookedPackage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookedPackage" ADD CONSTRAINT "bookedPackage_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookedSoloRoom" ADD CONSTRAINT "bookedSoloRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookedSoloRoom" ADD CONSTRAINT "bookedSoloRoom_soloRoomId_fkey" FOREIGN KEY ("soloRoomId") REFERENCES "soloRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "packageReviewAndRating" ADD CONSTRAINT "packageReviewAndRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "packageReviewAndRating" ADD CONSTRAINT "packageReviewAndRating_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "soloReviewAndRating" ADD CONSTRAINT "soloReviewAndRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "soloReviewAndRating" ADD CONSTRAINT "soloReviewAndRating_soloRoomId_fkey" FOREIGN KEY ("soloRoomId") REFERENCES "soloRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
