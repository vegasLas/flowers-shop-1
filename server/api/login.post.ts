import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default eventHandler(async (event) => {
  const body = await readBody<{username: string, password: string}>(event);
  const { username, password } = body;
  
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        username
      }
    });

    if (!admin) {
		throw createError({
			statusCode: 401,
			message: 'Не корректный пароль или логин'
		})
    }

    const passwordMatch = await bcrypt.compare(password, admin.passwordhash);

    if (!passwordMatch) {
		throw createError({
			statusCode: 401,
			message: 'Не корректный пароль или логин'
		})
    }

    const token = jwt.sign({ adminId: admin.adminid }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
	// Generate JWT

	// Set JWT in HTTP-only cookie
	setCookie(event, 'auth_token', token, {
		httpOnly: true,
		secure: true, // Set to true in production
		// secure: process.env.NODE_ENV === 'production', // Set to true in production
		maxAge: 36000, // 1 hour in seconds
		path: '/'
	});
	return {
		status: "successes"
	}
  } catch (error) {
    throw createError({
		statusCode: 500,
		message: 'Серверная ошибка'
	})
  }
});





