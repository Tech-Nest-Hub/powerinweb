import api from "./client";

export interface TagType {
  id: string;
  name: string;
}


export const getTags = async () => {
  const res = await api.get("/tags");
  return res.data;
};