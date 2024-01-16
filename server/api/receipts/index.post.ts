import prisma from "~/utils/database";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (typeof body !== "object") {
    throw createError({
      statusCode: 400,
      statusMessage: "The request body should be in `application/json`",
    });
  }

  const { hash } = body;

  if (!hash) {
    throw createError({
      statusCode: 400,
      statusMessage: "`hash` prop is required in the request body",
    });
  }

  return await prisma.receipt.create({
    data: {
      ...body,
    },
  });
});
