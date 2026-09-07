import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.eddiezhuang.com",
      lastModified: new Date(),
    },
  ];
}
