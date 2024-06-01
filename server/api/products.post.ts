import { AddProduct } from '../types/index.dto';
import prisma from '../utils/prisma';

export default eventHandler(async (event) => {
  const body = await readBody<AddProduct>(event);
  const newAdmin = await prisma.product.create({
    data: {
      category: {
        connect: {
          categoryid: body.categoryid
        }
      },
      description: body.description,
      price: body.price,
      productname: body.productname,
      stock: body.stock, 
    },
  });

  return { success: true, data: newAdmin };
});



