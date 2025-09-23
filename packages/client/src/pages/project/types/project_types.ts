import {type CategoryType} from "@/api/categories"
import type { TagType } from "@/api/tags";



export interface ProjectType {
  id: string;
  name: string;
  url: string;
  description: string;
  value: number;
  imageUrl?: string | null;
  categoryId?: string | null;
  createdAt: string; // or Date if you parse it
  tags: TagType[];
  category?: CategoryType | null;
}
