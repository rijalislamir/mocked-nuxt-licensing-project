import prisma from "~/utils/database";

export default defineEventHandler(async (event) => {
  return await prisma.receipt.create({
    data: {
      merchantId: "merchant-id",
      storeName: "Store Name",
      currency: "USD",
      amount: 5025,
      pdfLink: "http://",
    },
  });
});
