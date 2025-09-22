export interface TagType {
  id: string;
  name: string;
}

export interface CategoryType {
  id: string;
  name: string;
}

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
