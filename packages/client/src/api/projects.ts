import api from "./client";


export const getProjects = async () => {
  const res = await api.get("/projects");
  return res.data;
};
