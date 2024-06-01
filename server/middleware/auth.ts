import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; // Use a secure key in production

export default eventHandler(async (event) => {
  try {
    // Read token from cookies
    const token = getCookie(event, 'auth_token');

    if (!token) {
      // No token found
	  throw createError({
		statusCode: 401,
		message: 'Unauthorized'
	})
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET as string);

    // If verification is successful, continue to the next handler
    return;
  } catch (err) {
    // If token verification fails, return an error
    throw createError({
		statusCode: 401,
		message: 'Unauthorized'
	})
  }
});
