import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(200);

  const handleCount = () => {
    setCount(count + 2);
  }
  
  const estaciones = ["primavera", "verano", "otonio", "invierno"];

  return (
    <>
      <div className="card">
        <img src={`https://picsum.photos/${count}`} alt="soy una imagen de la web" />
        <button onClick={handleCount}>
          count is {count}
        </button>
        <ul>
          {estaciones.map((estacion, index) => (
            <li key={index}>{estacion}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
