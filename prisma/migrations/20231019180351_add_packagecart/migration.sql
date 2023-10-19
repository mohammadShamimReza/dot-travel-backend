-- CreateTable
CREATE TABLE "addToCartPackage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,

    CONSTRAINT "addToCartPackage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "addToCartPackage" ADD CONSTRAINT "addToCartPackage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addToCartPackage" ADD CONSTRAINT "addToCartPackage_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
