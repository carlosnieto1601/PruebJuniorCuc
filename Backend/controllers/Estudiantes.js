import ModelsEstudiantes from "../models/ModelsEstudiantes.js";


export const getAllestudiantes= async (req,res) =>{

    
    try{    

        const estudiantes = await ModelsEstudiantes.findAll()
        res.json(estudiantes)

}catch(error){

    res.json({message: error.message})
}

}

// mostrar un solo registro 

export const getAllestudiante = async (req,res) => {

    try{    

        const estudiante = await ModelsEstudiantes.findAll({
            where:{id:req.params.id}
        })
        res.json(estudiante)

}catch(error){

    res.json({message: error.message})
}
}

// crear registro 

export const crearestudiante = async (req,res) =>{
    try {
        await ModelsEstudiantes.create(req.body)
        res.json({
            "message":"Resgistro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
export const actualizarestudiante = async (req,res) =>{

    try{    

       await ModelsEstudiantes.update(req.body,{
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

export const eliminarestudiante = async (req,res) =>{

    try{    

       await ModelsEstudiantes.destroy({
           where: {id:req.params.id}
       })
        res.json({
            "message": "Registro eliminado correctamente" 
        })

}catch(error){

    res.json({message: error.message})
}

}
