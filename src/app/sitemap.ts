import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sathishdev.in";
  const now = new Date();

  const routes = [
    // Core routes
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/work", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/blogs", changeFrequency: "daily" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },

    // Hiring-intent landing pages
    { path: "/hire-flutter-developer", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/flutter-developer-india", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/flutter-developer-coimbatore", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/freelance-flutter-developer", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/full-stack-developer", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/nodejs-developer", changeFrequency: "monthly" as const, priority: 0.85 },

    // Service sub-pages
    { path: "/services/custom-software-development", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services/erp-development", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services/crm-development", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services/web-development", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services/mobile-app-development", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services/flutter-development", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/services/backend-development", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/services/nodejs-development", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/services/full-stack-development", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/services/react-development", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/services/saas-development", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/services/api-development", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/services/admin-dashboard-development", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/services/business-automation", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/services/mvp-development", changeFrequency: "monthly" as const, priority: 0.85 },

    // Case study pages
    { path: "/work/mayiliragu-academy", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/work/judah-food-delivery", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/work/premium-parts", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/work/virtual-2-live", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/work/akirva-rider", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/work/flatsms-sms-gateway", changeFrequency: "monthly" as const, priority: 0.85 },

    // Blog article pages
    { path: "/blogs/flutter-vs-react-native", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/blogs/flutter-performance-optimization", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/blogs/how-i-built-a-food-delivery-app", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/blogs/devops-aws-docker-guide", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/blogs/flutter-state-management-bloc-provider", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/blogs/nodejs-microservices-architecture", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
