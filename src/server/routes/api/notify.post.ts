import { defineEventHandler, readBody, createError } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{ email: string }>(event);

    if (!body?.email) {
      throw createError({
        statusCode: 400,
        statusMessage: "Email is required",
      });
    }

    console.log("New subscriber:", body.email);
    return { success: true, message: "Thank you for subscribing!" };
  } catch (error) {
    console.error("Error processing request:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to process request",
    });
  }
});
