import { AddAdminAction } from "../types/index.dto";

export default eventHandler(async (event) => {
	const body = await readBody<AddAdminAction>(event);
	const newAdminAction = await prisma.adminAction.create({
	  data: {
		actiontype: body.actiontype,
		admin: {
		  connect: {
			adminid: body.adminid,
		  },
		},
		product: body.productid ? { connect: { productid: body.productid } } : undefined,
		bouquet: body.bouquetid ? { connect: { bouquetid: body.bouquetid } } : undefined,
	  },
	});
	return { success: true, data: newAdminAction };
  });