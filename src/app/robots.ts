import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/webstudio/", "/api/"],
  },
  sitemap: `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
});

export default robots;
