export const metadata = {
  title: "Blog - Artículos sobre SEO y Next.js",
  description: "Lee nuestros artículos sobre optimización SEO, rendimiento web y las mejores prácticas en Next.js para mejorar tus proyectos.",
  keywords: "blog, SEO, Next.js, artículos, optimización web, tutoriales",
  openGraph: {
    title: "Blog - Artículos sobre SEO y Next.js",
    description: "Lee nuestros artículos sobre optimización SEO y rendimiento web.",
    url: "https://semana14-ebta.onrender.com/blog",
    siteName: "Mi Sitio Optimizado",
    images: [
      {
        url: "https://semana14-ebta.onrender.com/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Blog - Mi Sitio Optimizado",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Artículos sobre SEO y Next.js",
    description: "Lee nuestros artículos sobre optimización SEO y rendimiento web.",
    images: ["https://semana14-ebta.onrender.com/blog-og.jpg"],
  },
};

export default function Blog() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Blog</h1>
      <p>Bienvenido a nuestro blog sobre SEO y Next.js</p>
      
      <article style={{ marginTop: "30px", padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
        <h2>Cómo optimizar el SEO en Next.js</h2>
        <p>Aprende las mejores técnicas para mejorar el posicionamiento de tu sitio web...</p>
      </article>
      
      <article style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
        <h2>Meta Tags y Open Graph: Guía completa</h2>
        <p>Descubre cómo configurar correctamente los meta tags para redes sociales...</p>
      </article>

      <article style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
        <h2>Sitemaps dinámicos en Next.js</h2>
        <p>Genera sitemaps automáticamente para mejorar la indexación en Google...</p>
      </article>
    </div>
  );
}
