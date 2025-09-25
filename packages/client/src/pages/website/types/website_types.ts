import type { CategoryType } from "@/api/categories";
import type { TagType } from "@/api/tags";

export interface WebsiteType {
  id: string;
  name: string;
  url: string;
  description: string;
  value: number;
  imageUrl?: string | null;
  categoryId?: string | null;
  createdAt: string; // ISO string (parse as Date if needed)
  tags: TagType[];
  category?: CategoryType | null;
}

export interface WebsiteResponse {
  data: WebsiteType[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};