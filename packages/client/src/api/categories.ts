import api from "./client";

export interface CategoryType {
  id: string;
  name: string;
}


export const getCategories = async () => {
  const res = await api.get("/categories");
  return res.data;
};