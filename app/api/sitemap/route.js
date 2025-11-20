const BASE_URL = "https://semana14-ebta.onrender.com";

// Función para obtener rutas dinámicas (puedes conectar a una base de datos aquí)
async function getPages() {
  // Aquí podrías hacer una consulta a tu base de datos o CMS
  // Ejemplo: const posts = await db.posts.findAll();
  // return posts.map(post => `/blog/${post.slug}`);
  
  return [
    { url: "/", lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: "/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "/contacto", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}

export async function GET() {
  const pages = await getPages();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
