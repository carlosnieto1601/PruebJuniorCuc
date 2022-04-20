import ModeloAsignaturas from "../models/ModeloAsignaturas.js"




export const getAllasignaturas= async (req,res) =>{

    
    try{    

        const asignaturas = await ModeloAsignaturas.findAll()
        res.json(asignaturas)

}catch(error){

    res.json({message: error.message})
}

}

// mostrar un solo registro 

export const getAllAsignatura = async (req,res) => {

    try{    

        const asignaturas = await ModeloAsignaturas.findAll({
            where:{id:req.params.id}
        })
        res.json(asignaturas)

}catch(error){

    res.json({message: error.message})
}
}

// crear registro 

export const crearAsignatura = async (req,res) =>{
    try {
        await ModeloAsignaturas.create(req.body)
        res.json({
            "message":"Resgistro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
export const actualizarAsignatura = async (req,res) =>{

    try{    

       await ModeloAsignaturas.update(req.body,{
           where: {id:req.params.id}
       })
        res.json({
            "message": "registro actualizado correctamente" 
        })

}catch(error){

    res.json({message: error.menssage})
}

}
// Eliminar un registro

export const eliminarasignatura = async (req,res) =>{

    try{    

       await ModeloAsignaturas.destroy({
           where: {id:req.params.id}
       })
        res.json({
            "message": "Registro eliminado correctamente" 
        })

}catch(error){

    res.json({message: error.message})
}

}
