import prisma from "~/utils/database";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  return await prisma.receipt.delete({ where: { id } });
});
