import { AddCategory } from '../types/index.dto';

export default eventHandler(async (event) => {
  const body = await readBody<AddCategory>(event);
  const newAdmin = await prisma.category.create({
    data: {
      categoryname: body.categoryname
    },
  });

  return { success: true, data: newAdmin };
});



