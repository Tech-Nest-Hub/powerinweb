import api from "./client";

export const getTags = async () => {
  const res = await api.get("/tags");
  return res.data;
};