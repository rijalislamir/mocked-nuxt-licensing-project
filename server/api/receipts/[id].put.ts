import prisma from "~/utils/database";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const data = await readBody(event);

  return await prisma.receipt.update({
    where: { id },
    data,
  });
});
