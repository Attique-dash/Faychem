export default async function sitemap() {
  const base = "https://www.silverlinetradingcompany.com";
  const lastModified = new Date();
  
  const staticPages = [
    {
      url: "",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/pink-salt",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/white-salt",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/black-salt",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/custom",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return staticPages.map((page) => ({
    url: `${base}${page.url === "" ? "" : page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}