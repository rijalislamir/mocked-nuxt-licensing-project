import prisma from "~/utils/database";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const data = await readBody(event);

  if (typeof data !== "object") {
    throw createError({
      statusCode: 400,
      statusMessage: "The request body should be in `application/json`",
    });
  }

  const { hash, merchantId, terminalName, storeName, currency, amount } = data;

  if (
    !hash &&
    !merchantId &&
    !terminalName &&
    !storeName &&
    !currency &&
    !amount
  ) {
    throw createError({
      statusCode: 400,
      statusMessage:
        "One of the `hash`, `merchantId`, `terminalName, `storeName`, `currency` or `amount` props should be exist in the request body",
    });
  }

  return await prisma.receipt.update({
    where: { id },
    data,
  });
});
