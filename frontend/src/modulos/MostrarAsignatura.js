
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/asignaturas/";
const URI1 = "http://localhost:8000/profesores/";

 const MostrarAsignatura = () => {

  const [asignaturas, setAsignaturas] = useState([]);
  useEffect(() => {
  getAsignaturas();
}, []);
const [profesores, setprofesores] = useState([]);
  useEffect(() => {
  getProfesores();
}, []);
const getProfesores = async () => {
  const res = await axios.get(URI1);
  setprofesores(res.data);
};
const getAsignaturas = async () => {
  const res = await axios.get(URI);
  setAsignaturas(res.data);
};
const deleteasignaturas = async (id) => {
  await axios.delete(`${URI}${id}`)
  getAsignaturas()
};


  return (
    <div className="container" >
      <div className="row">
        <div className="col-md-50">
          <br></br>
          <Link to={'/crear'} className="btn btn-primary center"> Crear Asignatura </Link>
          {/* <Link to={'/consumir'} className="btn btn-primary center"> Consumir Api </Link> */}

          <br></br>
          <br></br>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"> Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">salon</th>
                <th scope="col">Horario</th>
                <th scope="col">Profesor</th>
                <th scope="col">Accion</th>

              </tr>
            </thead>
            <tbody>

                {asignaturas.map((asignatura)=> (
                  
                    <tr key={asignatura.id}>
                    <td>{asignatura.id}</td>
                    <td>{asignatura.nombre}</td>
                    <td>{asignatura.salon}</td>
                    <td>{asignatura.horario}</td>
                    {/* <td>{asignatura.profesores.id}</td> */}
                   
                    <td>{profesores.map((profesor) =>(
                        <td>{profesor.nombre}</td>
                    ))}

                    </td>
                    <td>
                      
                    <Link to={`/edit/${asignatura.id}`} className="btn btn-primary"> Editar Asignatura</Link>{' '}
                      <button onClick={()=>deleteasignaturas(asignatura.id)} className='btn btn-danger'> Eliminar</button>
                    </td>
                  </tr>
                    
                 
                  

                ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MostrarAsignatura;