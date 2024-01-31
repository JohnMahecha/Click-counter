import React from "react";
import "../hoja-de-estilo/contador.css";

function contador ({ numClics }) {
  return (
    <div className="contador">
      {numClics}
    </div>
    );
}

export default contador;