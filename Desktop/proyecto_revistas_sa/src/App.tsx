import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Ruteo } from "./app/utilidades/rutas/Ruteo";
import { Cabecera } from "./app/componets/conetenedor/Cabecera";


function App () {
  return (
    <>
    <div className="container-fluid">
      <BrowserRouter>
      <Cabecera/>
      <Ruteo/>
      
      </BrowserRouter>
    </div>;
    </>
  )
    
}

export default App;
