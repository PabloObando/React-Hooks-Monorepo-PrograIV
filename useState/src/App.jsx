import { useState } from "react";
import './App.css'

function App() {
  // Hook useState para manejar el estado del contador
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Contador con useState</h1>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default App;