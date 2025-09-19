import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const getProjects = async (req:Request, res:Response) => {
  const projects = await prisma.project.findMany({
    include: { tags: true, category: true },
  });
  res.json(projects);
};

export const createProject = async (req:Request, res:Response) => {
  const { name, url, description, value, imageUrl, tags, categoryId } = req.body;

  try {
    const project = await prisma.project.create({
      data: {
        name,
        url,
        description,
        value,
        imageUrl,
        categoryId: categoryId || undefined,
        tags: {
          connectOrCreate: tags?.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
      },
      include: { tags: true, category: true },
    });
    res.json(project);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
