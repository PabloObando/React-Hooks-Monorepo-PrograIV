import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // useMemo memoriza el resultado de la operación costosa
  const squaredNumber = useMemo(() => {
    console.log("Calculando...");
    return count * count;
  }, [count]);

  return (
    <div className="App">
      <h1>useMemo para cálculos optimizados</h1>
      <p>Valor: {count}</p>
      <p>Cuadrado: {squaredNumber}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default App;
