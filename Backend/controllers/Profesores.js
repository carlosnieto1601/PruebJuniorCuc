import ModeloProfesores from "../models/ModeloProfesores.js";

export const getAllprofesores= async (req,res) =>{

    
    try{    

        const profesores = await ModeloProfesores.findAll()
        res.json(profesores)

}catch(error){

    res.json({message: error.message})
}

}

// mostrar un solo registro 

export const getAllprofesor = async (req,res) => {

    try{    

        const profesores = await ModeloProfesores.findAll({
            where:{id:req.params.id}
        })
        res.json(profesores)

}catch(error){

    res.json({message: error.message})
}
}

// crear registro 

export const crearprofesor = async (req,res) =>{
    try {
        await ModeloProfesores.create(req.body)
        res.json({
            "message":"Resgistro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
export const actualizarprofesor = async (req,res) =>{

    try{    

       await ModeloProfesores.update(req.body,{
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

export const eliminarprofesor = async (req,res) =>{

    try{    

       await ModeloProfesores.destroy({
           where: {id:req.params.id}
       })
        res.json({
            "message": "Registro eliminado correctamente" 
        })

}catch(error){

    res.json({message: error.message})
}

}

