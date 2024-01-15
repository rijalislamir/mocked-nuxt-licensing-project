import jwt from "jsonwebtoken";

export default defineEventHandler((event) => {
  const authRoute = "/api/receipts";
  const authMethod = ["POST", "PUT", "DELETE"];
  const req = event.node.req;

  if (req.originalUrl === authRoute && authMethod.includes(req.method || "")) {
    try {
      const token = event.node.req.headers.authorization?.split(" ")[1] || "";
      const { jwtSecret } = useRuntimeConfig(event);
      jwt.verify(token, jwtSecret);
    } catch (error) {
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      });
    }
  }
});
