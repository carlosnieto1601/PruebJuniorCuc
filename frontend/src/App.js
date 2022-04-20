
import './App.css';
import MostrarEstudiantes from './modulos/MostrarEstudiantes.js';
import Navbar from './modulos/Navbar.js';
import { Fragment } from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import CrearEstudiantes from './modulos/CrearEstudiantes.js';
import EditarEstudiante from './modulos/EditarEstudiante.js';
import ConsumirApi from './modulos/ConsumirApi.js';
import AgregarClase from './modulos/AgregarClase.js';
import MostrarAsignatura from './modulos/MostrarAsignatura.js';
import CrearAsignaturas from './modulos/CrearAsignaturas.js';
import MostrarClases from './modulos/MostrarClases.js';

function App() {
  return (

    <div>  
      <Fragment>
      <Navbar brand="Prueba Junior" api="Mostar Api" 
      asignatura="Asignaturas" clase="Clases" />
      <BrowserRouter>
        <Routes>
          <Route  path='/' element= {<MostrarEstudiantes/>} />
          <Route path='/create' element= {<CrearEstudiantes/>} />
          <Route path='/edit/:id/' element= {<EditarEstudiante/>} />
          <Route path='/consumir' element= {<ConsumirApi/>} />
          <Route path='/asignatura' element= {<MostrarAsignatura/>} />
          <Route path='/agregar' element= {<AgregarClase/>} />
          <Route path='/crear' element= {<CrearAsignaturas/>} />
          <Route path='/clase' element= {<MostrarClases/>} />

        </Routes>
      </BrowserRouter>
      </Fragment>

      
    </div>
  );
}

export default App;
