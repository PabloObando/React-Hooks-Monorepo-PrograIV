import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Cargando...");

  // Hook useEffect que se ejecuta una vez al montar el componente
  useEffect(() => {
    setTimeout(() => {
      setMessage("¡Holaaaaaaa");
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1>useEffect en acción</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

