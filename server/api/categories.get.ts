import prisma from '../utils/prisma';

export default eventHandler(async (event) => {
  // const body = await read<GetCategory>(event);
  const results = await prisma.category.findMany({});

  return results;
});



