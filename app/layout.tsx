import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mi Sitio Optimizado - SEO y Rendimiento en Next.js",
  description: "Aprende cómo mejorar el rendimiento y SEO en Next.js con meta tags, sitemaps dinámicos y optimización de fuentes.",
  keywords: "Next.js, SEO, rendimiento, optimización, React, meta tags",
  openGraph: {
    title: "Mi Sitio Optimizado - SEO y Rendimiento en Next.js",
    description: "Aprende cómo mejorar el rendimiento y SEO en Next.js con meta tags, sitemaps dinámicos y optimización de fuentes.",
    url: "https://semana14-ebta.onrender.com",
    siteName: "Mi Sitio Optimizado",
    images: [
      {
        url: "https://semana14-ebta.onrender.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mi Sitio Optimizado",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Sitio Optimizado - SEO y Rendimiento en Next.js",
    description: "Aprende cómo mejorar el rendimiento y SEO en Next.js",
    images: ["https://semana14-ebta.onrender.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
