import prisma from "~/utils/database";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const data = await readBody(event);

  return await prisma.receipt.update({
    where: { id },
    data,
  });
});
