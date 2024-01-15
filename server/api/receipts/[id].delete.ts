import prisma from "~/utils/database";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  return await prisma.receipt.delete({ where: { id } });
});
