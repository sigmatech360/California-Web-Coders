const fs = require("fs");
const path = require("path");

const BASE_URL = "https://californiawebcoders.com";
const ROUTES_FILE = path.join(__dirname, "src/Routers/index.js");
const STATIC_SITEMAP_PATH = path.join(__dirname, "build", "sitemap-static.xml");
const MAIN_SITEMAP_PATH = path.join(__dirname, "build", "sitemap.xml");

// Read file
const fileContent = fs.readFileSync(ROUTES_FILE, "utf-8");

// Extract all Route paths using regex
const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
const routes = [];
let match;

while ((match = routeRegex.exec(fileContent)) !== null) {
  // Ignore dynamic blog URLs like /blog/:slug
  if (!match[1].includes(":")) {
    routes.push(match[1]);
  }
}

console.log(" Extracted routes:", routes);

// Generate sitemap-static.xml
const urls = routes.map(
  (route) => `
  <!-- ${route === "/" ? "Home" : route.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())} -->
  <url>
    <loc>${BASE_URL}${route}</loc>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
);

const staticXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n\n")}
</urlset>`;

fs.writeFileSync(STATIC_SITEMAP_PATH, staticXml);
console.log(" sitemap-static.xml generated!");

// Generate main sitemap.xml
const mainXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- React Static Pages -->
  <sitemap>
    <loc>${BASE_URL}/sitemap-static.xml</loc>
  </sitemap>

  <!-- WordPress Blogs -->
  <sitemap>
    <loc>${BASE_URL}/blogs/sitemap_index.xml</loc>
  </sitemap>

</sitemapindex>`;

fs.writeFileSync(MAIN_SITEMAP_PATH, mainXml);
console.log(" sitemap.xml generated!");
