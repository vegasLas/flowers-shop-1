import { CreateOrderDto } from "../types/index.dto";

export default eventHandler(async (event) => {
	const body = await readBody<CreateOrderDto>(event);
  
	// Extract order items from the request body
	const orderItems = body.orderitems;
  
	// Create the order
	const newOrder = await prisma.order.create({
	  data: {
		admin: {
		  connect: {
			adminid: body.adminid,
		  },
		},
		totalamount: body.totalamount,
		status: body.status,
	  },
	});
  
	// Create order items and link them to the created order
	for (const item of orderItems) {
	  await prisma.orderItem.create({
		data: {
		  quantity: item.quantity,
		  price: item.price,
		  order: {
			connect: {
			  orderid: newOrder.orderid,
			},
		  },
		  product: item.productid ? { connect: { productid: item.productid } } : undefined,
		  bouquet: item.bouquetid ? { connect: { bouquetid: item.bouquetid } } : undefined,
		},
	  });
	}
  
	return { success: true, data: newOrder };
  });
  