// import { PrismaClient } from '@prisma/client';
// import { Prisma } from '@prisma/client';

// export const prisma = new PrismaClient();

// /lib/prisma.ts
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({ log: ['query'] });
  }
  prisma = global.prisma;
}

// prisma.$extends({
//   model: {
//     address: {
//       async create(data: {

//       })
//     }
//   }
// })

export default prisma;
