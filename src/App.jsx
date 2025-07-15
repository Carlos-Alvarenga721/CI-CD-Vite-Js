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
    </div>
  );
}

export default App;

