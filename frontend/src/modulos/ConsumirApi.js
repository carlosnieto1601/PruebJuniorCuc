
import React, {useState, useEffect} from 'react';


const ConsumirApi = () => {


  const [date, setdate]= useState ([])
  
  useEffect ( ()=> {
  const getCovid =  () =>{
    fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res=> setdate(res))
  }
  getCovid()
  }, [])


    return (
      <div className="container" >
      <div className="row">
        <div className="col-md-50">
          <br></br>
         

          <br></br>
          <br></br>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"> Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">telefono</th>

              </tr>
            </thead>
            <tbody>

                {/* {date.map((dato)=> (
                  
                    <tr key={dato.date}>
                    <td>
                      
                   
                      <button className='btn btn-danger'> Eliminar</button>
                    </td>
                  </tr>

                ))} */}

            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
    
  }
    

    

 
export default ConsumirApi;