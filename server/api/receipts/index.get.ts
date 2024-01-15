import prisma from "~/utils/database";

export default defineEventHandler(async (event) => {
  return await prisma.receipt.findMany({
    orderBy: { createdAt: "desc" },
  });
});
