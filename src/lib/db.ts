import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  // Prevent multiple instantiations of Prisma Client in development.
  var prismaGlobal: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prismaGlobal) {
    global.prismaGlobal = new PrismaClient();
  }
  prisma = global.prismaGlobal;
}

export default prisma;
