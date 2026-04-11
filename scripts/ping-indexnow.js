const INDEXNOW_KEY = "f1e98b3d64a5e245baa08cec0e78a875";
const SITE_URL = "https://www.silverlinetradingcompany.com";

const SITE_PAGES = [
  "/",
  "/pink-salt",
  "/white-salt",
  "/black-salt",
  "/custom",
  "/contact",
];

async function pingIndexNow() {
  try {
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: "www.silverlinetradingcompany.com",
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: SITE_PAGES.map((page) => `${SITE_URL}${page}`),
      }),
    });

    console.log(
      `IndexNow: Submitted ${SITE_PAGES.length} URLs (status: ${response.status})`
    );
  } catch (error) {
    console.log(`IndexNow: Ping failed (${error.message}) — skipping`);
  }
}

pingIndexNow();
