import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const getCategories = async (req:Request, res:Response) => {
  const categories = await prisma.category.findMany({
    include: { websites: true, projects: true },
  });
  res.json(categories);
};

export const createCategory = async (req:Request, res:Response) => {
  const { name } = req.body;

  try {
    const category = await prisma.category.create({ data: { name } });
    res.json(category);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
