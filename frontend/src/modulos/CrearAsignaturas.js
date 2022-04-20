import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const URI = "http://localhost:8000/asignaturas/";

const CrearAsignaturas = () => {
  const [nombre, setnombre] = useState("");
  const [salon, setsalon] = useState("");
  const [horario, sethorario] = useState("");
  const [profesorId, setprofesorId] = useState("");
  const navigate = useNavigate();

  // procedimiento de guardar

  const guardar = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      salon: salon,
      horario: horario,
      profesorId: profesorId,
   
    });
    navigate("/asignatura");
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-11">
            <h1> Crear Estudiante </h1>
            
        <form onSubmit={guardar} className="boreder" >
            <div>
            <div className='col-6 mb-4'>
                <label className="mb-3"> Nombre </label>
                 <input 
                    value={nombre}
                    onChange= {(e) => setnombre(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='nombre'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label className="mb-3"> Salon </label>
                 <input 
                    value={salon}
                    onChange= {(e) => setsalon(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='salon'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label className="mb-3"> Horario </label>
                 <input 
                    value={horario}
                    onChange= {(e) => sethorario(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='Horario'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label  className="mb-3"> Profesor </label>
                 <input 
                    value={profesorId}
                    onChange= {(e) => setprofesorId(e.target.value)}
                    type='number'
                    className='form-control'
                    placeholder='profesor'
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

export default CrearAsignaturas;