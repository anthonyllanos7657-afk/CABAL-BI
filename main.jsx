import React, { useState } from 'react';

// --- LOGO OFICIAL GRUPO CABAL ---
const CabalLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
    <img 
      src="https://imagizer.imageshack.com/img922/506/p9XyYm.png" 
      alt="Grupo Cabal" 
      style={{ height: '70px', width: 'auto', filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.1))' }} 
    />
    <div style={{ borderLeft: '3px solid #0056b3', paddingLeft: '20px' }}>
      <h1 style={{ margin: 0, fontSize: '28px', color: '#003366', fontWeight: '800', letterSpacing: '-1px' }}>cabal</h1>
      <p style={{ margin: 0, fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600' }}>
        El progreso viene de nuestro interior
      </p>
    </div>
  </div>
);

// --- DATA AUDITADA Q1 2026 ---
const DATA_CABAL = {
  Soles: {
    Enero: { efec: 124702.21, transf: 311545.70, total: 436247.91, bajo: "Martes", pico: "Sábado" },
    Febrero: { efec: 86403.01, transf: 400567.37, total: 486970.38, bajo: "Lunes", pico: "Jueves" },
    Marzo: { efec: 152823.18, transf: 424717.49, total: 577540.67, bajo: "Sábado", pico: "Miércoles" }
  },
  Dolares: {
    Enero: { efec: 2230.00, transf: 5089.36, total: 7319.36, bajo: "Lunes", pico: "Viernes" },
    Febrero: { efec: 542.00, transf: 0, total: 542.00, bajo: "Sábado", pico: "Martes" },
    Marzo: { efec: 1459.00, transf: 19296.76, total: 20755.76, bajo: "Viernes", pico: "Martes" }
  }
};

export default function App() {
  const [moneda, setMoneda] = useState('Soles');
  const [mes, setMes] = useState('Marzo');

  const info = DATA_CABAL[moneda][mes];
  const simbolo = moneda === 'Soles' ? 'S/' : '$';
  const mesesArr = Object.keys(DATA_CABAL[moneda]);
  const maxVenta = Math.max(...mesesArr.map(m => DATA_CABAL[moneda][m].total));

  // Cálculo de variación porcentual real (lo único útil del otro código)
  const index = mesesArr.indexOf(mes);
  const anterior = index > 0 ? DATA_CABAL[moneda][mesesArr[index - 1]].total : null;
  const variacion = anterior ? ((info.total - anterior) / anterior) * 100 : null;

  const styles = {
    container: { 
      backgroundColor: '#f0f4f8', 
      backgroundImage: 'radial-gradient(#d1dce5 1px, transparent 1px)', 
      backgroundSize: '20px 20px',
      minHeight: '100vh', 
      padding: '50px 20px', 
      fontFamily: '"Inter", sans-serif' 
    },
    wrapper: { maxWidth: '1150px', margin: '0 auto' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
    card: { 
      backgroundColor: '#ffffff', 
      borderRadius: '20px', 
      padding: '30px', 
      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
      border: '1px solid rgba(226, 232, 240, 0.8)'
    },
    bar: (val, max, isActive) => ({
      height: `${(val / max) * 160}px`,
      width: '50px',
      backgroundColor: isActive ? '#0056b3' : '#cbd5e1',
      borderRadius: '8px 8px 2px 2px',
      transition: 'all 0.5s ease',
      boxShadow: isActive ? '0 4px 12px rgba(0,86,179,0.3)' : 'none'
    })
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <header style={styles.header}>
          <CabalLogo />
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ background: '#e2e8f0', padding: '5px', borderRadius: '14px', display: 'flex' }}>
              {['Soles', 'Dolares'].map(m => (
                <button key={m} onClick={() => setMoneda(m)} style={{
                  padding: '10px 22px', border: 'none', borderRadius: '10px', cursor: 'pointer',
                  backgroundColor: moneda === m ? '#fff' : 'transparent',
                  color: moneda === m ? '#0056b3' : '#64748b', fontWeight: '700'
                }}>{m}</button>
              ))}
            </div>
            <select value={mes} onChange={(e) => setMes(e.target.value)} style={{ padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', fontWeight: '700' }}>
              {mesesArr.map(m => <option key={m}>{m}</option>)}
            </select>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px' }}>
          
          {/* GRÁFICO PRINCIPAL */}
          <div style={{ ...styles.card, gridColumn: 'span 8' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <div>
                <h3 style={{ margin: 0, color: '#1e293b' }}>Rendimiento Mensual</h3>
                {variacion !== null && (
                  <span style={{ fontSize: '13px', fontWeight: 'bold', color: variacion >= 0 ? '#10b981' : '#ef4444' }}>
                    {variacion >= 0 ? '▲' : '▼'} {Math.abs(variacion).toFixed(1)}% vs mes anterior
                  </span>
                )}
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 'bold' }}>VALOR BRUTO</span>
                <div style={{ fontSize: '24px', fontWeight: '800', color: '#0056b3' }}>{simbolo} {info.total.toLocaleString()}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '180px', borderBottom: '2px solid #f1f5f9' }}>
              {mesesArr.map(m => (
                <div key={m} style={{ textAlign: 'center' }}>
                  <div style={styles.bar(DATA_CABAL[moneda][m].total, maxVenta, m === mes)} />
                  <div style={{ marginTop: '15px', fontWeight: '700', color: m === mes ? '#0056b3' : '#94a3b8', fontSize: '14px' }}>{m}</div>
                </div>
              ))}
            </div>
          </div>

          {/* LATERALES DE AUDITORÍA */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ ...styles.card, flex: 1, display: 'flex', alignItems: 'center', gap: '20px', borderLeft: '6px solid #10b981' }}>
              <div style={{ fontSize: '24px' }}>📈</div>
              <div>
                <p style={{ margin: 0, fontSize: '11px', fontWeight: 'bold', color: '#64748b' }}>PICO DE VENTAS</p>
                <p style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#065f46' }}>{info.pico}</p>
              </div>
            </div>
            <div style={{ ...styles.card, flex: 1, display: 'flex', alignItems: 'center', gap: '20px', borderLeft: '6px solid #ef4444' }}>
              <div style={{ fontSize: '24px' }}>📉</div>
              <div>
                <p style={{ margin: 0, fontSize: '11px', fontWeight: 'bold', color: '#64748b' }}>VALLE DE VENTAS</p>
                <p style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#991b1b' }}>{info.bajo}</p>
              </div>
            </div>
          </div>

          {/* MÉTODO DE PAGO */}
          <div style={{ ...styles.card, gridColumn: 'span 4' }}>
            <h4 style={{ margin: '0 0 20px', color: '#1e293b' }}>Composición de Cobro</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                  <span>Transferencias</span>
                  <strong>{((info.transf/info.total)*100).toFixed(1)}%</strong>
                </div>
                <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{ width: `${(info.transf/info.total)*100}%`, height: '100%', background: 'linear-gradient(90deg, #0056b3, #3b82f6)' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                  <span>Efectivo</span>
                  <strong>{((info.efec/info.total)*100).toFixed(1)}%</strong>
                </div>
                <div style={{ height: '10px', background: '#f1f5f9', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{ width: `${(info.efec/info.total)*100}%`, height: '100%', background: 'linear-gradient(90deg, #f59e0b, #fbbf24)' }} />
                </div>
              </div>
            </div>
          </div>

          {/* TABLA DE AUDITORÍA TOTAL */}
          <div style={{ ...styles.card, gridColumn: 'span 8', padding: '0' }}>
            <div style={{ padding: '20px 30px', borderBottom: '1px solid #f1f5f9' }}>
              <h4 style={{ margin: 0 }}>Consolidado Trimestral ({moneda})</h4>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f8fafc' }}>
                <tr style={{ textAlign: 'left', color: '#64748b', fontSize: '11px', textTransform: 'uppercase' }}>
                  <th style={{ padding: '15px 30px' }}>Periodo</th>
                  <th style={{ padding: '15px' }}>Efectivo</th>
                  <th style={{ padding: '15px' }}>Transf.</th>
                  <th style={{ padding: '15px 30px' }}>Total</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '13px' }}>
                {mesesArr.map(m => (
                  <tr key={m} style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: m === mes ? 'rgba(0, 86, 179, 0.02)' : 'transparent' }}>
                    <td style={{ padding: '15px 30px', fontWeight: '700' }}>{m}</td>
                    <td style={{ padding: '15px' }}>{simbolo}{DATA_CABAL[moneda][m].efec.toLocaleString()}</td>
                    <td style={{ padding: '15px' }}>{simbolo}{DATA_CABAL[moneda][m].transf.toLocaleString()}</td>
                    <td style={{ padding: '15px 30px', fontWeight: '800', color: '#0056b3' }}>{simbolo}{DATA_CABAL[moneda][m].total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
