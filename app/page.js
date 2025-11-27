"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
        }}>
          Bienvenido a Mi Sitio Optimizado
        </h1>
        <p style={{
          fontSize: "1.5rem",
          marginBottom: "40px",
          maxWidth: "700px",
          margin: "0 auto 40px"
        }}>
          Aprende cómo mejorar el rendimiento y SEO en Next.js con las mejores prácticas
        </p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/blog" style={{
            padding: "15px 40px",
            backgroundColor: "white",
            color: "#667eea",
            borderRadius: "50px",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.3s"
          }}>
            Ver Blog
          </Link>
          <Link href="/contacto" style={{
            padding: "15px 40px",
            backgroundColor: "transparent",
            color: "white",
            border: "2px solid white",
            borderRadius: "50px",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "transform 0.3s"
          }}>
            Contactar
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "60px", color: "#333" }}>
          ¿Por qué optimizar tu sitio web?
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px"
        }}>
          <div style={{
            padding: "40px",
            backgroundColor: "#f8f9fa",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
          }}>
            <div style={{
              fontSize: "3rem",
              marginBottom: "20px"
            }}>🚀</div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#667eea" }}>Rendimiento</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Carga más rápida, mejor experiencia de usuario y mejores rankings en Google
            </p>
          </div>

          <div style={{
            padding: "40px",
            backgroundColor: "#f8f9fa",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
          }}>
            <div style={{
              fontSize: "3rem",
              marginBottom: "20px"
            }}>📈</div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#667eea" }}>SEO Optimizado</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Meta tags, sitemaps dinámicos y estructura optimizada para motores de búsqueda
            </p>
          </div>

          <div style={{
            padding: "40px",
            backgroundColor: "#f8f9fa",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
          }}>
            <div style={{
              fontSize: "3rem",
              marginBottom: "20px"
            }}>💡</div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#667eea" }}>Mejores Prácticas</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Código limpio, componentes dinámicos y optimización de fuentes web
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Component Section */}
      <section style={{ padding: "80px 20px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "40px", color: "#333" }}>
            Componentes Dinámicos
          </h2>
          <DynamicComponent />
        </div>
      </section>
    </div>
  );
}
