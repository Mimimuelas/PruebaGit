import { useState } from 'react';
import './styles/App.css'; // <-- RUTA CORREGIDA (1)
import LoginScreen from './screens/LoginScreen.jsx'; 
import InputGasto from "./components/InputGasto/InputGasto.tsx"; // <-- RUTA CORREGIDA (2)
import ListaGastos from "./screens/ListaGastos.tsx"; // <-- RUTA CORREGIDA (3)
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
        <LoginScreen />
        <InputGasto onSubmit={handleAddGasto} /> 
    <ListaGastos gastos={gastos} />

        {/* CÓDIGO DE GASTOS: */}
        <h1 style={{ textAlign: 'center', color: '#334155' }}>💰OrdenaTuPlata</h1>
        <div style={{ margin: 'auto' }}>
            {/* ... aquí estará el InputGasto y ListaGastos ... */}
        </div>
    </div>
);
}

export default App;