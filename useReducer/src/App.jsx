import { useReducer } from "react";
import "./App.css";

// Función reductora para manejar acciones
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    case "reset":
      return { ...state, count: state.initialValue };
    default:
      return state;
  }
};

function App() {
  const initialValue = Math.floor(Math.random() * 50) + 5; // Valor inicial aleatorio entre 1 y 10
  const [state, dispatch] = useReducer(reducer, { count: initialValue, initialValue });

  return (
    <div className="App">
      <h1>useReducer: Contador con Reset y Estado Inicial Aleatorio</h1>
      <h2>Valor actual: {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "increment" })} className="btn">
          ➕ Aumentar
        </button>
        <button onClick={() => dispatch({ type: "decrement" })} className="btn">
          ➖ Disminuir
        </button>
        <button onClick={() => dispatch({ type: "reset" })} className="btn reset">
          🔄 Reiniciar
        </button>
      </div>
    </div>
  );
}

export default App;
