import React from "react";
import { CardGastoProps } from "./CardGasto.types.ts";

export default function CardGasto({
  nombre,
  monto,
  categoria,
  fecha,
}: CardGastoProps) {
  const style = {
    padding: "12px 18px",
    borderRadius: 8,
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    marginBottom: "12px",
  };

  const title = {
    fontSize: 16,
    fontWeight: "bold",
  };

  return (
    <div style={style}>
      <div style={title}>{nombre}</div>
      <p>Monto: ${monto}</p>
      <p>Categoría: {categoria}</p>
      <p>Fecha: {fecha}</p>
    </div>
  );
}
