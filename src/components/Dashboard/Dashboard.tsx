import React from 'react';

// Reutilizamos tu interfaz de Gasto
interface Gasto {
  id: string | number;
  nombre: string;
  monto: number;
  categoria: string;
  fecha: string;
}

interface DashboardProps {
  gastos: Gasto[];
}

export default function Dashboard({ gastos }: DashboardProps) {
  
  // 1. Calcular el Total Gastado
  const totalGastado = gastos.reduce((total, gasto) => total + gasto.monto, 0);

  // 2. Agrupar gastos por categoría (Lógica simple)
  // Esto crea un objeto tipo: { "Comida": 5000, "Transporte": 2000 }
  const porCategoria = gastos.reduce((acc, gasto) => {
    acc[gasto.categoria] = (acc[gasto.categoria] || 0) + gasto.monto;
    return acc;
  }, {} as Record<string, number>);

  // Formato de moneda colombiana (o la que uses)
  const formatoMoneda = (cantidad: number) => {
    return new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: 'COP', 
      maximumFractionDigits: 0 
    }).format(cantidad);
  };

  // --- ESTILOS ---
  const containerStyle = {
    padding: '20px',
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', // Fondo oscuro moderno
    color: 'white',
    borderRadius: '16px',
    marginBottom: '24px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
  };

  const headerStyle = {
    fontSize: '0.9rem',
    opacity: 0.8,
    marginBottom: '5px'
  };

  const bigTotalStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px'
  };

  const categoriesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '10px'
  };

  const catCardStyle = {
    background: 'rgba(255, 255, 255, 0.1)', // Efecto cristal
    padding: '10px',
    borderRadius: '8px',
    textAlign: 'center' as const
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>Balance Total</div>
      <div style={bigTotalStyle}>{formatoMoneda(totalGastado)}</div>

      <p style={{ marginBottom: 10, fontSize: '0.9rem', fontWeight: 600 }}>
        Gastos por Categoría
      </p>

      <div style={categoriesGridStyle}>
        {/* Si no hay gastos, mostramos un mensaje pequeño */}
        {Object.keys(porCategoria).length === 0 && (
           <div style={{ opacity: 0.5, fontStyle: 'italic' }}>Sin datos aún...</div>
        )}

        {/* Renderizamos las tarjetitas de categorías */}
        {Object.keys(porCategoria).map((cat) => (
          <div key={cat} style={catCardStyle}>
            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{cat}</div>
            <div style={{ fontWeight: 'bold' }}>
                {formatoMoneda(porCategoria[cat])}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}