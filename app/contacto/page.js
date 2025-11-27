"use client";

import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          Contáctanos
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
          ¿Tienes preguntas? Estamos aquí para ayudarte
        </p>
      </section>

      <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px"
        }}>
          {/* Contact Form */}
          <div style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{
              fontSize: "2rem",
              marginBottom: "25px",
              color: "#333"
            }}>
              Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "25px" }}>
                <label htmlFor="name" style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#555"
                }}>
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "8px",
                    border: "2px solid #e0e0e0",
                    fontSize: "1rem",
                    transition: "border-color 0.3s",
                    outline: "none"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#667eea"}
                  onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  placeholder="Juan Pérez"
                />
              </div>

              <div style={{ marginBottom: "25px" }}>
                <label htmlFor="email" style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#555"
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "8px",
                    border: "2px solid #e0e0e0",
                    fontSize: "1rem",
                    transition: "border-color 0.3s",
                    outline: "none"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#667eea"}
                  onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  placeholder="tu@email.com"
                />
              </div>

              <div style={{ marginBottom: "25px" }}>
                <label htmlFor="subject" style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#555"
                }}>
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "8px",
                    border: "2px solid #e0e0e0",
                    fontSize: "1rem",
                    transition: "border-color 0.3s",
                    outline: "none"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#667eea"}
                  onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  placeholder="Consulta sobre SEO"
                />
              </div>

              <div style={{ marginBottom: "25px" }}>
                <label htmlFor="message" style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#555"
                }}>
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "8px",
                    border: "2px solid #e0e0e0",
                    fontSize: "1rem",
                    transition: "border-color 0.3s",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#667eea"}
                  onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "16px",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
                }}
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              marginBottom: "30px"
            }}>
              <h3 style={{
                fontSize: "1.5rem",
                marginBottom: "25px",
                color: "#333"
              }}>
                Información de contacto
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                  <span style={{ fontSize: "1.5rem" }}>📧</span>
                  <div>
                    <strong style={{ display: "block", color: "#667eea", marginBottom: "5px" }}>Email</strong>
                    <span style={{ color: "#666" }}>contacto@mi-sitio.com</span>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                  <span style={{ fontSize: "1.5rem" }}>📱</span>
                  <div>
                    <strong style={{ display: "block", color: "#667eea", marginBottom: "5px" }}>Teléfono</strong>
                    <span style={{ color: "#666" }}>+34 123 456 789</span>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                  <span style={{ fontSize: "1.5rem" }}>📍</span>
                  <div>
                    <strong style={{ display: "block", color: "#667eea", marginBottom: "5px" }}>Ubicación</strong>
                    <span style={{ color: "#666" }}>Madrid, España</span>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                  <span style={{ fontSize: "1.5rem" }}>🕐</span>
                  <div>
                    <strong style={{ display: "block", color: "#667eea", marginBottom: "5px" }}>Horario</strong>
                    <span style={{ color: "#666" }}>Lun - Vie: 9:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{
                fontSize: "1.5rem",
                marginBottom: "20px",
                color: "#333"
              }}>
                Preguntas frecuentes
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                  <strong style={{ display: "block", color: "#667eea", marginBottom: "5px" }}>¿Cuánto tarda la respuesta?</strong>
                  <span style={{ color: "#666", fontSize: "0.95rem" }}>Normalmente respondemos en 24-48 horas.</span>
                </div>
                
                <div>
                  <strong style={{ display: "block", color: "#667eea", marginBottom: "5px" }}>¿Ofrecen consultas gratuitas?</strong>
                  <span style={{ color: "#666", fontSize: "0.95rem" }}>Sí, la primera consulta es totalmente gratuita.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
