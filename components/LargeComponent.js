export default function LargeComponent() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px", marginTop: "20px",color:"#333" }}>
      <h2>Componente Grande Cargado Dinámicamente</h2>
      <p>Este componente se carga solo cuando es necesario, optimizando el rendimiento de la aplicación.</p>
      <ul>
        <li>Reduce el tamaño del bundle inicial</li>
        <li>Mejora el tiempo de carga de la página</li>
        <li>Optimiza el SEO y rendimiento</li>
      </ul>
    </div>
  );
}
