import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginButton  from "./components/LoginButton"; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Aquí usamos el nuevo componente */}
      <LoginButton />
    </>
  );
}
export default App
