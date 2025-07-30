import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h1>{darkMode ? 'Modo Oscuro' : 'Modo Claro'}</h1>
      <button onClick={toggleDarkMode} className="toggle-button">
        Cambiar a {darkMode ? 'Claro' : 'Oscuro'}
      </button>
      <h1>Ejemplo final para probar CI/CD</h1>
      <h2> Esto es un ejemplo de una aplicación React que cambia entre modo claro y oscuro.</h2>
    </div>
  );
}

export default App;

