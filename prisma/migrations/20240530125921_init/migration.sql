-- CreateTable
CREATE TABLE "Admin" (
    "adminid" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordhash" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("adminid")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryid" SERIAL NOT NULL,
    "categoryname" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryid")
);

-- CreateTable
CREATE TABLE "Product" (
    "productid" SERIAL NOT NULL,
    "productname" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryid" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productid")
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "imageid" SERIAL NOT NULL,
    "productid" INTEGER NOT NULL,
    "imageurl" TEXT NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("imageid")
);

-- CreateTable
CREATE TABLE "Bouquet" (
    "bouquetid" SERIAL NOT NULL,
    "bouquetname" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bouquet_pkey" PRIMARY KEY ("bouquetid")
);

-- CreateTable
CREATE TABLE "BouquetProduct" (
    "bouquetproductid" SERIAL NOT NULL,
    "bouquetid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "BouquetProduct_pkey" PRIMARY KEY ("bouquetproductid")
);

-- CreateTable
CREATE TABLE "BouquetImage" (
    "imageid" SERIAL NOT NULL,
    "bouquetid" INTEGER NOT NULL,
    "imageurl" TEXT NOT NULL,

    CONSTRAINT "BouquetImage_pkey" PRIMARY KEY ("imageid")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderid" SERIAL NOT NULL,
    "adminid" INTEGER NOT NULL,
    "totalamount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderid")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "orderitemid" SERIAL NOT NULL,
    "orderid" INTEGER NOT NULL,
    "productid" INTEGER,
    "bouquetid" INTEGER,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("orderitemid")
);

-- CreateTable
CREATE TABLE "AdminAction" (
    "actionid" SERIAL NOT NULL,
    "adminid" INTEGER NOT NULL,
    "actiontype" TEXT NOT NULL,
    "productid" INTEGER,
    "bouquetid" INTEGER,
    "actiontimestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminAction_pkey" PRIMARY KEY ("actionid")
);

-- CreateTable
CREATE TABLE "Blog" (
    "blogid" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorid" INTEGER NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("blogid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryname_key" ON "Category"("categoryname");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "Category"("categoryid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("productid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BouquetProduct" ADD CONSTRAINT "BouquetProduct_bouquetid_fkey" FOREIGN KEY ("bouquetid") REFERENCES "Bouquet"("bouquetid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BouquetProduct" ADD CONSTRAINT "BouquetProduct_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("productid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BouquetImage" ADD CONSTRAINT "BouquetImage_bouquetid_fkey" FOREIGN KEY ("bouquetid") REFERENCES "Bouquet"("bouquetid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_adminid_fkey" FOREIGN KEY ("adminid") REFERENCES "Admin"("adminid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "Order"("orderid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("productid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_bouquetid_fkey" FOREIGN KEY ("bouquetid") REFERENCES "Bouquet"("bouquetid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminAction" ADD CONSTRAINT "AdminAction_adminid_fkey" FOREIGN KEY ("adminid") REFERENCES "Admin"("adminid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminAction" ADD CONSTRAINT "AdminAction_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("productid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminAction" ADD CONSTRAINT "AdminAction_bouquetid_fkey" FOREIGN KEY ("bouquetid") REFERENCES "Bouquet"("bouquetid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "Admin"("adminid") ON DELETE RESTRICT ON UPDATE CASCADE;
