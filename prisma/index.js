import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma
	.$connect()
	.then(() => {})
	.then(() => {
		const post = prisma.user.findMany({});
		console.log(post);
		prisma.$disconnect();
	})
	.catch((err) => {
		console.log(err);
	});
const allUsers = prisma.user.findMany({});
console.log(allUsers);
