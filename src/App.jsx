import { useState } from 'react'
import './styles/App.css' //esta es de donde traemos nuestros estilos
import LoginScreen from './screens/LoginScreen' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <LoginScreen />

  )
}

export default App
