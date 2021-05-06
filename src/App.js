import React,{useState,useEffect} from 'react';
import Formulario from './components/Formulario';

function App() {

  //state de la app
  const[busqueda,guardarBusqueda] = useState('');

  

  return (
   <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>

        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
   </div>
  );
}

export default App;
