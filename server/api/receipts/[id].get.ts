import prisma from "~/utils/database";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  return await prisma.receipt.findUnique({ where: { id } });
});
