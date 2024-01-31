import './App.css';
import Boton from './componentes/boton';
import Contador from "./componentes/contador";
import kimetsunoyaibalogo from "./img/Tanjiro.png";
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className="kimetsunoyaiba-logo-contenedor">
        <img className="kimetsunoyaiba-logo"
        src={kimetsunoyaibalogo}
        alt="logo de kimetsunoyaiba"/>
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics}
          
          />
        <Boton
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}
          />
        <Boton 
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
          />
      </div>
    </div>
  );
}

export default App;
