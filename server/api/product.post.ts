import { CreateProductDto } from "../types/index.dto";

export default eventHandler(async (event) => {
	const body = await readBody<CreateProductDto>(event);
	const productsImages = body.productimages
	
	const newProduct = await prisma.product.create({
	  data: {
		productname: body.productname,
		description: body.description,
		price: body.price,
		stock: body.stock,
		category: {
		  connect: {
			categoryid: body.categoryid,
		  },
		},
	  },
	});


	for (const productsImage of productsImages) {
		await prisma.productImage.create({
			data: {
			  imageurl: productsImage.imageurl,
			  product: {
				connect: {
				  productid: newProduct.productid,
				},
			  },
			},
		  });
	}
	return { success: true, data: newProduct };
  });
  
