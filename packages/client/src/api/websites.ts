import type { WebsiteResponse, WebsiteType } from "@/pages/website/types/website_types";
import api from "./client";

export const getWebsites = async ({
  page = 1,
  limit = 12,
  search = "",
  tag,
  category,
}: {
  page?: number;
  limit?: number;
  search?: string;
  tag?: string;
  category?: string;
}): Promise<WebsiteResponse> => {
  const res = await api.get<WebsiteResponse>("/websites", {
    params: { page, limit, search, tag, category },
  });

  // ✅ Normalize data here
  return {
    ...res.data,
    data: res.data.data.map((w: WebsiteType) => ({
      ...w,
      description: w.description || "",
      tags: Array.isArray(w.tags) ? w.tags : [],
      category: w.category || undefined,
    })),
  };
};

export default getWebsites;
