export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email } = body;

  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email is required",
    });
  }

  // TODO: Send email or save to database
  console.log("New subscriber:", email);

  return { success: true, message: "Thank you for subscribing!" };
});
