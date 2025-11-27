import React from "react";
import CardGasto from "../components/CardGasto/CardGasto";

export default function ListaGastos() {
  const gastos = [
    {
      nombre: "Transporte",
      monto: 18000,
      categoria: "Movilidad",
      fecha: "2025-01-15",
    },
    {
      nombre: "Almuerzo",
      monto: 25000,
      categoria: "Comida",
      fecha: "2025-01-16",
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2>Lista de gastos</h2>

      {gastos.map((gasto, index) => (
        <CardGasto key={index} {...gasto} />
      ))}
    </div>
  );
}
