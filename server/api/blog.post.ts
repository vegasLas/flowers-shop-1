import { AddBlog } from '../types/index.dto';
import prisma from '../utils/prisma';

// Handler for creating a new Blog
eventHandler(async (event) => {
  const body = await readBody<AddBlog>(event);
  const newBlog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      createdat: new Date(),
      updatedat: new Date(),
      author: {
        connect: {
          adminid: body.authorid,
        },
      },
    },
  });
  return { success: true, data: newBlog };
});
