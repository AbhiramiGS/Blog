import { PrismaClient } from '@prisma/client';

const db = new PrismaClient({

    log: ["query", "error", "warn"]
});


export { db };
