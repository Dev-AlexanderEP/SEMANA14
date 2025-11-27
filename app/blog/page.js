export const metadata = {
  title: "Blog - Artículos sobre SEO y Next.js",
  description: "Lee nuestros artículos sobre optimización SEO, rendimiento web y las mejores prácticas en Next.js para mejorar tus proyectos.",
  keywords: "blog, SEO, Next.js, artículos, optimización web, tutoriales",
  openGraph: {
    title: "Blog - Artículos sobre SEO y Next.js",
    description: "Lee nuestros artículos sobre optimización SEO y rendimiento web.",
    url: "https://semana14-9go3.onrender.com/blog",
    siteName: "Mi Sitio Optimizado",
    images: [
      {
        url: "https://semana14-9go3.onrender.com/blog-og.jpg",
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
  const posts = [
    {
      id: 1,
      title: "Cómo optimizar el SEO en Next.js",
      excerpt: "Descubre las técnicas más efectivas para mejorar el posicionamiento de tu sitio web en Google. Aprende sobre meta tags, structured data y más.",
      date: "26 de Noviembre, 2025",
      category: "SEO",
      readTime: "5 min",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Meta Tags y Open Graph: Guía completa",
      excerpt: "Una guía detallada sobre cómo configurar correctamente los meta tags para mejorar la presencia en redes sociales y motores de búsqueda.",
      date: "25 de Noviembre, 2025",
      category: "Marketing",
      readTime: "7 min",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Sitemaps dinámicos en Next.js",
      excerpt: "Aprende a generar sitemaps automáticamente para mejorar la indexación en Google y facilitar el crawling de tu sitio web.",
      date: "24 de Noviembre, 2025",
      category: "Desarrollo",
      readTime: "6 min",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Optimización de Fuentes Web",
      excerpt: "Mejora el rendimiento de tu sitio web optimizando la carga de fuentes. Google Fonts, preload y mejores prácticas.",
      date: "23 de Noviembre, 2025",
      category: "Performance",
      readTime: "4 min",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <section style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "80px 20px 60px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "15px"
        }}>
          Blog
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
          Artículos sobre SEO, Next.js y desarrollo web moderno
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "30px"
        }}>
          {posts.map(post => (
            <article key={post.id} style={{
              backgroundColor: "white",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
            }}>
              {/* Card Header */}
              <div style={{
                background: post.gradient,
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <span style={{
                  fontSize: "3rem",
                  filter: "brightness(1.2)"
                }}>📝</span>
              </div>
              
              {/* Card Content */}
              <div style={{ padding: "25px" }}>
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px", alignItems: "center" }}>
                  <span style={{
                    padding: "5px 12px",
                    backgroundColor: "#667eea",
                    color: "white",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "bold"
                  }}>
                    {post.category}
                  </span>
                  <span style={{ color: "#999", fontSize: "0.9rem" }}>{post.readTime}</span>
                </div>
                
                <h2 style={{
                  fontSize: "1.5rem",
                  marginBottom: "15px",
                  color: "#333",
                  fontWeight: "bold"
                }}>
                  {post.title}
                </h2>
                
                <p style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "20px"
                }}>
                  {post.excerpt}
                </p>
                
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "15px",
                  borderTop: "1px solid #eee"
                }}>
                  <span style={{ color: "#999", fontSize: "0.9rem" }}>{post.date}</span>
                  <span style={{
                    color: "#667eea",
                    fontWeight: "bold",
                    fontSize: "0.9rem"
                  }}>Leer más →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
