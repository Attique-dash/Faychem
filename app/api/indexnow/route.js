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

export async function GET(request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.INDEXNOW_SECRET}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

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

    return Response.json({
      success: true,
      status: response.status,
      message: `Submitted ${SITE_PAGES.length} URLs to IndexNow`,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
