import React, { useState } from "react";

export interface GastoFormdata {
  nombre: string;
  monto: number;
  categoria: string;
  fecha: string;
}

interface InputGastoProps {
  onSubmit: (gasto: GastoFormdata) => void;
}

// DEFINIMOS LAS OPCIONES AQUÍ
const CATEGORIAS = [
  "Comida",
  "Servicios",
  "Transporte",
  "Entretenimiento",
  "Salud",
  "Otros"
];

export default function InputGasto({ onSubmit }: InputGastoProps) {
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState(""); // Empieza vacío
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoria) {
      alert("Por favor selecciona una categoría");
      return;
    }
    onSubmit({ nombre, monto: Number(monto), categoria, fecha });
    
    // Limpiar
    setNombre("");
    setMonto("");
    setCategoria("");
    setFecha("");
  };

  // ESTILOS
  const box = {
    padding: "20px",
    background: "#fff",
    borderRadius: 12,
    marginBottom: "20px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  };

  const label = {
    display: "block",
    marginTop: "12px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#475569"
  };

  const input = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: 8,
    border: "1px solid #cbd5e1",
    fontSize: "1rem",
    boxSizing: "border-box" as const
  };

  const button = {
    marginTop: "20px",
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: "1rem"
  };

  return (
    <form style={box} onSubmit={handleSubmit}>
      <label style={label}>Nombre del gasto</label>
      <input
        style={input}
        placeholder="Ej: Almuerzo, Uber..."
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1 }}>
            <label style={label}>Monto</label>
            <input
              style={input}
              type="number"
              placeholder="$0"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              required
            />
        </div>
        <div style={{ flex: 1 }}>
            <label style={label}>Fecha</label>
            <input
              style={input}
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
        </div>
      </div>

      <label style={label}>Categoría</label>
      {/* CAMBIO: AHORA ES UN SELECT */}
      <select
        style={input}
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        required
      >
        <option value="" disabled>-- Selecciona una --</option>
        {CATEGORIAS.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button style={button} type="submit">
        + Agregar Gasto
      </button>
    </form>
  );
}