import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const URI = "http://localhost:8000/clases/";
// const URI1 = "http://localhost:8000/asignaturas/";

const MostrarClases = () => {

  const [clases, setClases] = useState([]);
  useEffect(() => {
  getClases();
}, []);

const getClases = async () => {
  const res = await axios.get(URI);
  setClases(res.data);
};
const deleteaclases = async (id) => {
  await axios.delete(`${URI}${id}`)
  getClases()
};


  return (
    <div className="container" >
      <div className="row">
        <div className="col-md-50">
          <br></br>
          <Link to={'/crearclase'} className="btn btn-primary center"> Crear Clases </Link>
          {/* <Link to={'/consumir'} className="btn btn-primary center"> Consumir Api </Link> */}

          <br></br>
          <br></br>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Estudiante</th>
                <th scope="col">Asignatura</th>
                <th scope="col">Accion</th>

              </tr>
            </thead>
            <tbody>
                {clases.map((clase)=>(
                    <tr key={clase.id}>
                    <td>{clase.id}</td>
                    <td>{clase.nombre}</td>
                    <td></td>
                    <td></td>
                    <td>
                      
                     <Link to={`/edit/${clase.id}`} className="btn btn-primary"> Editar Asignatura</Link>{' '}
                      <button onClick={()=>deleteaclases(clase.id)} className='btn btn-danger'> Eliminar</button>
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

export default MostrarClases;