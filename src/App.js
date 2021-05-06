import React,{useState,useEffect} from 'react';
import Formulario from './components/Formulario';

function App() {

  //state de la app
  const[busqueda,guardarBusqueda] = useState('');

  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda === '') return;

    const imagenesPorPagina = 30;
    const key = "21500840-40c7419a84e9891fcbdfdd4a2";
    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    guardarBusqueda(resultado.hits);
    }
    consultarApi();
  },[busqueda])

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
