import React from 'react'
import ReactDOM from 'react-dom/client'

const DashboardCabal = () => {
  const datos = [
    { mes: 'Enero', soles: 45200, dolares: 12150 },
    { mes: 'Febrero', soles: 52800, dolares: 14200 },
    { mes: 'Marzo', soles: 48600, dolares: 13050 },
  ];

  const estilos = {
    container: { backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '40px', fontFamily: 'Arial, sans-serif' },
    header: { backgroundColor: '#001529', color: 'white', padding: '30px', borderRadius: '15px', marginBottom: '30px', textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' },
    card: { backgroundColor: 'white', borderRadius: '15px', padding: '25px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '5px solid #1890ff' },
    label: { color: '#8c8c8c', fontSize: '14px', marginBottom: '5px' },
    monto: { fontSize: '24px', fontWeight: 'bold', color: '#262626', margin: '0' }
  };

  return (
    <div style={estilos.container}>
      <div style={estilos.header}>
        <h1 style={{ margin: 0, fontSize: '32px' }}>📊 Grupo Cabal - Business Intelligence</h1>
        <p style={{ opacity: 0.8, marginTop: '10px' }}>Reporte Consolidado de Ventas 2026</p>
      </div>

      <div style={estilos.grid}>
        {datos.map((d, i) => (
          <div key={i} style={estilos.card}>
            <h2 style={{ color: '#001529', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>{d.mes}</h2>
            <div style={{ marginTop: '15px' }}>
              <p style={estilos.label}>Ingresos en Soles</p>
              <p style={estilos.monto}>S/ {d.soles.toLocaleString()}</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <p style={estilos.label}>Ingresos en Dólares</p>
              <p style={{ ...estilos.monto, color: '#52c41a' }}>$ {d.dolares.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '50px', textAlign: 'center', color: '#bfbfbf' }}>
        © 2026 Grupo Cabal | Generado por el área de BI
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DashboardCabal />
  </React.StrictMode>
);
