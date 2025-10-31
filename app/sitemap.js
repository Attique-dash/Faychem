export default async function sitemap() {
  const base = "https://www.silverlinetradingcompany.com";
  const staticPages = [
    "", // home
    "/contact",
    "/pink-salt",
    "/white-salt",
    "/black-salt",
    "/custom",
  ];
  const now = new Date();
  return staticPages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
