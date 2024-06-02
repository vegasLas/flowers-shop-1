import prisma from '../utils/prisma'; // Предположим, что prisma экспортируется из '../prisma'
import bcrypt from 'bcrypt';
import { CreateAdminDto } from '../types/index.dto';

export default eventHandler(async (event) => {
  const body = await readBody<CreateAdminDto>(event);
  // Хэширование пароля
  const saltRounds = 5;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  // Создание записи администратора
  const newAdmin = await prisma.admin.create({
    data: {
      username: body.username,
      email: body.email,
      passwordhash: passwordHash,
      fullname: body.fullname,
      createdat: new Date(),
    },
  });

  return { success: true, data: newAdmin };
});
