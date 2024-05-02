import { PrismaClient } from '@prisma/client/edge';

const prisma = new PrismaClient({
  errorFormat: 'minimal',
});

export default prisma;
