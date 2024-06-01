import { AddBouquet } from "../types/index.dto";

// Function to create a bouquet along with its products and images
export default eventHandler(async (event) => {
  const body = await readBody<AddBouquet>(event);

  // Extract bouquet products and images from the request body
  const bouquetProducts = body.bouquetproducts;
  const bouquetImages = body.bouquetimages;

  // Create the bouquet
  const newBouquet = await prisma.bouquet.create({
    data: {
      bouquetname: body.bouquetname,
      description: body.description,
      price: body.price,
      stock: body.stock,
    },
  });

  // Create bouquet products and link them to the created bouquet
  for (const product of bouquetProducts) {
    await prisma.bouquetProduct.create({
      data: {
        quantity: product.quantity,
        bouquet: {
          connect: {
            bouquetid: newBouquet.bouquetid,
          },
        },
        product: {
          connect: {
            productid: product.productid,
          },
        },
      },
    });
  }

  // Create bouquet images and link them to the created bouquet
  for (const image of bouquetImages) {
    await prisma.bouquetImage.create({
      data: {
        imageurl: image.imageurl,
        bouquet: {
          connect: {
            bouquetid: newBouquet.bouquetid,
          },
        },
      },
    });
  }

  return { success: true, data: newBouquet };
});