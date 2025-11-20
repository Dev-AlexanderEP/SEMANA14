export const metadata = {
  title: "Contacto - Ponte en contacto con nosotros",
  description: "¿Tienes preguntas sobre SEO, Next.js o rendimiento web? Contáctanos y te ayudaremos a optimizar tu proyecto.",
  keywords: "contacto, consultas, ayuda, soporte, SEO, Next.js",
  openGraph: {
    title: "Contacto - Ponte en contacto con nosotros",
    description: "¿Tienes preguntas sobre SEO, Next.js o rendimiento web? Contáctanos.",
    url: "https://semana14-ebta.onrender.com/contacto",
    siteName: "Mi Sitio Optimizado",
    images: [
      {
        url: "https://semana14-ebta.onrender.com/contacto-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto - Mi Sitio Optimizado",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - Ponte en contacto con nosotros",
    description: "¿Tienes preguntas sobre SEO, Next.js o rendimiento web? Contáctanos.",
    images: ["https://semana14-ebta.onrender.com/contacto-og.jpg"],
  },
};

export default function Contacto() {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contacto</h1>
      <p>¿Tienes preguntas o necesitas ayuda con tu proyecto? ¡Estamos aquí para ayudarte!</p>
      
      <form style={{ marginTop: "30px" }}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            placeholder="Tu nombre"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            placeholder="tu@email.com"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="message" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            placeholder="¿En qué podemos ayudarte?"
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "12px 30px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Enviar mensaje
        </button>
      </form>

      <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
        <h3>Información de contacto</h3>
        <p><strong>Email:</strong> info@mi-sitio.com</p>
        <p><strong>Teléfono:</strong> +1 234 567 890</p>
        <p><strong>Dirección:</strong> Ciudad, País</p>
      </div>
    </div>
  );
}
