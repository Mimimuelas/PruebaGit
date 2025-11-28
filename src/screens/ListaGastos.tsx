import React from 'react';
import CardGasto from '../components/CardGasto/CardGasto';
// 1. CORREGIDO: Usamos los nombres que vienen del formulario
export interface Gasto {
  id: string | number;
  nombre: string;     // Antes era description
  monto: number;      // Antes era amount
  categoria: string;  // Nueva propiedad
  fecha: string;      // Antes era date
}

interface ListaGastosProps {
  gastos: Gasto[];
}

export default function ListaGastos({ gastos }: ListaGastosProps) {
  return (
    <div style={{ padding: 24 }}>
      <h2>Lista de gastos</h2>

      {gastos.length === 0 && (
        <p style={{ opacity: 0.6 }}>Aún no hay gastos registrados...</p>
      )}

      {gastos.map((gasto) => (
        // Usamos gasto.id como key (mucho mejor que index)
        <CardGasto key={gasto.id} {...gasto} />
      ))}
    </div>
  );
}