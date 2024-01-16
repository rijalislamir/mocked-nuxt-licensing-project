import prisma from "~/utils/database";

export default defineEventHandler(async (event) => {
  const hash = getRouterParam(event, "hash");

  return await prisma.receipt.findFirst({ where: { hash } });
});
