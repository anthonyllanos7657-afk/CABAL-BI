import React from 'react'
import ReactDOM from 'react-dom/client'

const Dashboard = () => {
  const datos = [
    { mes: 'Enero', soles: 'S/ 45,200', dolares: '$ 12,150' },
    { mes: 'Febrero', soles: 'S/ 52,800', dolares: '$ 14,200' },
    { mes: 'Marzo', soles: 'S/ 48,600', dolares: '$ 13,050' },
  ];

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      {/* Encabezado Elegante */}
      <div style={{ backgroundColor: '#001529', color: 'white', padding: '30px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '28px' }}>Dashboard Grupo Cabal</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Resumen de Inteligencia de Negocios - Ventas 2026</p>
      </div>

      {/* Contenedor de Tarjetas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {datos.map((item, index) => (
          <div key={index} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderLeft: '6px solid #1890ff' }}>
            <h2 style={{ color: '#001529', marginTop: 0 }}>{item.mes}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
              <div>
                <p style={{ color: '#8c8c8c', margin: 0, fontSize: '14px' }}>Ventas en Soles</p>
                <p style={{ fontSize: '22px', fontWeight: 'bold', margin: '5px 0', color: '#262626' }}>{item.soles}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#8c8c8c', margin: 0, fontSize: '14px' }}>Ventas en Dólares</p>
                <p style={{ fontSize: '22px', fontWeight: 'bold', margin: '5px 0', color: '#52c41a' }}>{item.dolares}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center', color: '#8c8c8c', fontSize: '12px' }}>
        © 2026 Grupo Cabal | Departamento de Análisis de Datos
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
