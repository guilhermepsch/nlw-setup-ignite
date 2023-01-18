import { PrismaClient } from "@prisma/client";
import cors from '@fastify/cors'
import fastify from "fastify";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors)

app.get("/", async (request, reply) => {
  const habits = await prisma.habit.findMany();

  return habits;
})

app.listen({
  port: 3333,
})