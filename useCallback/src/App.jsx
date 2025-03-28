import './App.css'

import { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  // useCallback evita que la función se recree en cada render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="App">
      <h1>useCallback para optimización</h1>
      <p>Valor: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Incrementar</button>
    </div>
  );
}

export default App;

