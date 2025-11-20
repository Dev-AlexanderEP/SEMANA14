"use client";

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <h1>Bienvenido a mi página optimizada</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
      <DynamicComponent />
    </>
  );
}
