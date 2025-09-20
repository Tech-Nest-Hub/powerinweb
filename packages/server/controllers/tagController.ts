import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const getTags = async (req:Request, res:Response) => {
  const tags = await prisma.tag.findMany({
    include: { websites: true, projects: true },
  });
  res.json(tags);
};
