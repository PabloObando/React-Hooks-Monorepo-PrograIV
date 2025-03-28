import { createContext, useContext, useState } from "react";
import "./App.css";

// Crear el contexto
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Que es lo que vez: {theme}</p>
      <button onClick={() => setTheme(theme === "anime" ? "pelicula" : "anime")}>
        Cambiar Tema
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <h1>useContext para temas</h1>
      <ChildComponent />
    </ThemeProvider>
  );
}

export default App;

