import { useState } from "react";
import "./App.css";

// --- AQUÍ ESTÁ EL ARREGLO ---
// Quitamos las llaves { } porque InputGasto se exporta como "default"
import InputGasto from "./components/InputGasto/InputGasto"; 

import ListaGastos from "./screens/ListaGastos";
// import Dashboard from "./components/Dashboard/Dashboard"; // Descomenta esto si ya creaste el Dashboard

function App() {
  const [gastos, setGastos] = useState([]);

  const handleAddGasto = (nuevoGasto) => {
    const gastoConId = {
      ...nuevoGasto,
      id: crypto.randomUUID(), // Genera un ID único
      monto: Number(nuevoGasto.monto) // Asegura que se guarde como número
    };
    
    setGastos([...gastos, gastoConId]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      
      <h1 style={{ textAlign: 'center', color: '#334155' }}>OrdenaTuPlata 💰</h1>
      
      {/* <Dashboard gastos={gastos} /> */}

      {/* Formulario */}
      <div style={{ marginTop: 20 }}>
         <InputGasto onSubmit={handleAddGasto} />
      </div>

      {/* Lista */}
      <ListaGastos gastos={gastos} />
      
    </div>
  );
}

export default App;