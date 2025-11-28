import React from "react";
import { CardGastoProps } from "./CardGasto.types";

export default function CardGasto({
  nombre,
  monto,
  categoria,
  fecha,
}: CardGastoProps) {

  // 1. Diccionario de colores (Tonos pastel suaves)
  const colores: Record<string, string> = {
    Comida: "#fed7aa",          // Naranja suave
    Servicios: "#bfdbfe",       // Azul suave
    Transporte: "#cbd5e1",      // Gris
    Entretenimiento: "#fbcfe8", // Rosa
    Salud: "#bbf7d0",           // Verde
    Otros: "#e2e8f0"            // Gris claro por defecto
  };

  // 2. Elegimos el color según la categoría, si no existe usamos gris
  const colorFondo = colores[categoria] || "#e2e8f0";

  const style = {
    padding: "16px",
    borderRadius: 12,
    background: colorFondo, // <--- Aquí aplicamos el color dinámico
    marginBottom: "12px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    border: "1px solid rgba(0,0,0,0.05)", // Borde sutil
    color: "#1e293b", // Texto oscuro para buen contraste
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const titleStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    margin: 0,
    color: "#0f172a"
  };

  const subStyle = {
    fontSize: "0.85rem",
    margin: "4px 0 0 0",
    opacity: 0.8
  };

  const amountStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#0f172a"
  };

  return (
    <div style={style}>
      {/* Columna Izquierda: Datos */}
      <div>
        <h3 style={titleStyle}>{nombre}</h3>
        <p style={subStyle}>
           {categoria} • {fecha}
        </p>
      </div>

      {/* Columna Derecha: Precio */}
      <div style={amountStyle}>
        ${Number(monto).toLocaleString()}
      </div>
    </div>
  );
}