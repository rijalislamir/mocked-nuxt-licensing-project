export default defineEventHandler(async (event) => {
  const regex = /\/api\/receipts/;
  const authMethod = ["POST", "PUT"];
  const req = event.node.req;
  const body = await readBody(event);

  if (
    !regex.test(req.originalUrl || "") ||
    !authMethod.includes(req.method || "")
  )
    return;

  if (typeof body !== "object") {
    throw createError({
      statusCode: 400,
      statusMessage: "The request body should be in `application/json`",
    });
  }
});
