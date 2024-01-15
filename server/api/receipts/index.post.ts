import prisma from "~/utils/database";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { merchantId, terminalName, storeName, currency, amount } = body;

  if (!merchantId || !terminalName || !storeName || !currency || !amount) {
    throw createError({
      statusCode: 400,
      statusMessage:
        "`merchantId`, `terminalName`, `storeName`, `currency` and `amount` props are required in the request body",
    });
  }

  return await prisma.receipt.create({
    data: {
      merchantId,
      terminalName,
      storeName,
      currency,
      amount,
      pdfLink: "/receipt.pdf",
    },
  });
});
