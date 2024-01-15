import { PrismaClient } from "@prisma/client";

// @ts-expect-error - solve `Do not know how to serialize a BigInt` error
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const prisma = new PrismaClient();

export default prisma;
