import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const getWebsites = async (req:Request, res: Response) => {
  const websites = await prisma.website.findMany({
    include: { tags: true, category: true },
  });
  res.json(websites);
};

export const createWebsite = async (req:Request, res: Response) => {
  const { name, url, description, value, imageUrl, tags, categoryId } = req.body;

  try {
    const website = await prisma.website.create({
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
    res.json(website);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
