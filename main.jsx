import React from 'react';
import ReactDOM from 'react-dom/client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { TrendingUp, Users, DollarSign, Briefcase } from 'lucide-react';

const data = [
  { name: 'Ene', soles: 45200, dolares: 12150 },
  { name: 'Feb', soles: 52800, dolares: 14200 },
  { name: 'Mar', soles: 48600, dolares: 13050 },
];

const App = () => {
  return (
    <div style={{ backgroundColor: '#0a192f', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', borderBottom: '1px solid #112240', paddingBottom: '20px' }}>
        <h1 style={{ color: '#64ffda', margin: 0 }}>📊 Grupo Cabal BI Interactivo</h1>
        <p style={{ color: '#8892b0' }}>Reporte General de Ventas 2026</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#112240', padding: '20px', borderRadius: '12px', border: '1px solid #233554' }}>
          <h3 style={{ color: '#8892b0', fontSize: '14px' }}>TOTAL SOLES (MARZO)</h3>
          <h2 style={{ fontSize: '32px', margin: '10px 0' }}>S/ 48,600</h2>
          <span style={{ color: '#64ffda' }}>+12% vs mes anterior</span>
        </div>
        <div style={{ backgroundColor: '#112240', padding: '20px', borderRadius: '12px', border: '1px solid #233554' }}>
          <h3 style={{ color: '#8892b0', fontSize: '14px' }}>TOTAL DÓLARES (MARZO)</h3>
          <h2 style={{ fontSize: '32px', margin: '10px 0', color: '#64ffda' }}>$ 13,050</h2>
          <span style={{ color: '#64ffda' }}>Estable</span>
        </div>
      </div>

      <div style={{ backgroundColor: '#112240', padding: '25px', borderRadius: '15px', height: '400px', border: '1px solid #233554' }}>
        <h3 style={{ marginBottom: '20px' }}>Tendencia de Ventas (Soles vs Dólares)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#233554" />
            <XAxis dataKey="name" stroke="#8892b0" />
            <YAxis stroke="#8892b0" />
            <Tooltip contentStyle={{ backgroundColor: '#0a192f', border: '1px solid #64ffda' }} />
            <Legend />
            <Bar dataKey="soles" fill="#64ffda" name="Ventas Soles" />
            <Bar dataKey="dolares" fill="#1890ff" name="Ventas Dólares" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
