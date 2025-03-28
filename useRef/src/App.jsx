import { useRef } from "react";
import "./App.css";

function App() {
  const buttonRef = useRef(null);

  const changeColor = () => {
    buttonRef.current.style.backgroundColor =
      buttonRef.current.style.backgroundColor ===  "green" ? "blue" : "green" ;
  };

  return (
    <div className="App">
      <h1>useRef para cambiar color de un botón</h1>
      <button ref={buttonRef}>Soy un botón</button>
      <button onClick={changeColor} style={{ marginLeft: "40px" }}>
        Cambiar color
      </button>
    </div>
  );
}

export default App;


