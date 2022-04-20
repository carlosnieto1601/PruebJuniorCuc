import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/estudiantes/";

const CrearEstudiantes = () => {
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [cedula, setcedula] = useState("");
  const [correo, setcorreo] = useState("");
  const [programaacademico, setprogramaacademico] = useState("");
  const navigate = useNavigate();

  // procedimiento de guardar

  const guardar = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      correo: correo,
      programaacademico: programaacademico,
    });
    navigate("/");
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
                <label className="mb-3"> Apellido </label>
                 <input 
                    value={apellido}
                    onChange= {(e) => setapellido(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='apellido'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label className="mb-3"> Numero de Identificacion </label>
                 <input 
                    value={cedula}
                    onChange= {(e) => setcedula(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='Numero de Identificacion'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label  className="mb-3"> Correo Electronico </label>
                 <input 
                    value={correo}
                    onChange= {(e) => setcorreo(e.target.value)}
                    type='email'
                    className='form-control'
                    placeholder='correo'
                    required
                 /> 
                 </div>
                 <div className='col-6 mb-3'>
                <label className="mb-3"> Programa Academico </label>
                 <input 
                    value={programaacademico}
                    onChange= {(e) => setprogramaacademico(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='Programa Academico'
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

export default CrearEstudiantes;
