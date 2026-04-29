import React from 'react'
import ReactDOM from 'react-dom/client'

// Aquí va todo el código de tu Dashboard (el que tiene los colores y datos)
const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#001529', color: 'white', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Dashboard Grupo Cabal</h1>
      <p>Análisis de Ventas 2026</p>
      {/* ... el resto de tu código de tarjetas y gráficos ... */}
    </div>
  )
}

// ESTO ES LO MÁS IMPORTANTE:
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
)
