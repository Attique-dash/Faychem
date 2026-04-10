import { execSync } from "child_process";

function getLastCommitDate(filePath) {
  try {
    const date = execSync(`git log -1 --format=%cI -- ${filePath}`, {
      encoding: "utf-8",
    }).trim();
    return date ? new Date(date) : new Date("2026-04-10");
  } catch {
    return new Date("2026-04-10");
  }
}

export default function sitemap() {
  const baseUrl = "https://www.silverlinetradingcompany.com";

  return [
    {
      url: baseUrl,
      lastModified: getLastCommitDate("app/page.js"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: getLastCommitDate("app/contact/page.js"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pink-salt`,
      lastModified: getLastCommitDate("app/pink-salt/page.js"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/white-salt`,
      lastModified: getLastCommitDate("app/white-salt/page.js"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/black-salt`,
      lastModified: getLastCommitDate("app/black-salt/page.js"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/custom`,
      lastModified: getLastCommitDate("app/custom/page.js"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
