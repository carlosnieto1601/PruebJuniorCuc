import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/clases/";

const AgregarClase = () => {
  const [nombre, setnombre] = useState("");
  const [estudianteId, setestudianteId] = useState("");
  const [asignaturaId, setasignaturaId] = useState("");
  const navigate = useNavigate();

  // procedimiento de guardar

  const guardar = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      estudianteId: estudianteId,
      asignaturaId: asignaturaId
     
    });
    navigate("/");
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-11">
            <h1> Crear Clases </h1>
            
        <form onSubmit={guardar} >
            <div>
            <div className='col-6 mb-4'>
                <label htmlFor="nombre" className="mb-3"> Nombre </label>
                 <input 
                    id="nombre"
                    value={nombre}
                    onChange= {(e) => setnombre(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='nombre'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label htmlFor='estudiante' className='mb-3'> Estudiante </label>
                 <input 
                     id='estudiante'
                    value={estudianteId}
                    onChange= {(e) => setestudianteId(e.target.value)}
                    type='number'
                    className='form-control'
                    placeholder='estudiante'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label htmlFor='asig' className='mb-3'> Asignatura </label>
                 <input 
                     id='asig'
                    value={asignaturaId}
                    onChange= {(e) => setasignaturaId(e.target.value)}
                    type='number'
                    className='form-control'
                    placeholder='Asignatura'
                    required
                 /> 
                 </div>
                 
                
            </div>
            
                  
            <button type='submit' className='btn btn-primary' > Guardar </button>
        </form>
            </div>

        </div>
       
    </div>
  );
};

export default AgregarClase;