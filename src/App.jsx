import { useState } from "react";
import InputGasto from "./components/InputGasto"; // Ajusta la ruta si es necesario
import ListaGastos from "./screens/ListaGastos";
import "./App.css";

function App() {
  const [gastos, setGastos] = useState([]);

  const handleAddGasto = (nuevoGasto) => {
    // 1. Creamos un nuevo objeto que incluye todo lo del form + un ID único
    const gastoConId = {
      ...nuevoGasto,
      id: crypto.randomUUID() // O usa Date.now() si prefieres algo simple
    };

    // 2. Guardamos en el estado
    setGastos([...gastos, gastoConId]);
  };

  return (
    <>
      <h1>Lista de Gastos</h1>
      
      {/* El formulario envía los datos sin ID */}
      <InputGasto onSubmit={handleAddGasto} />

      {/* La lista recibe los datos CON ID y propiedades correctas */}
      <ListaGastos gastos={gastos} />
    </>
  );
}

export default App;