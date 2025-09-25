import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const getWebsites = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const search = (req.query.search as string) || "";
  const tag = req.query.tag as string | undefined;
  const category = req.query.category as string | undefined;

  const skip = (page - 1) * limit;

  try {
   const where = {
  AND: [
    search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" as const } },
            { description: { contains: search, mode: "insensitive" as const } },
            { tags: { some: { name: { contains: search, mode: "insensitive" as const } } } },
          ],
        }
      : {},
    tag
      ? { tags: { some: { name: { equals: tag, mode: "insensitive" as const } } } }
      : {},
    category
      ? { category: { name: { equals: category, mode: "insensitive" as const } } }
      : {},
  ],
};


    const [websites, total] = await Promise.all([
      prisma.website.findMany({
        where,
        include: { tags: true, category: true },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.website.count({ where }),
    ]);

    res.json({
      data: websites,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
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
