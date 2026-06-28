import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sathish.qzz.io";
  
  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/work", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/blogs", changeFrequency: "daily" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
