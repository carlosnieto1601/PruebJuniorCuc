import Models from "../models/models.js";

export const getAllestudiantes= async (req,res) =>{

    
    try{    

        const estudiantes = await Models.findAll()
        res.json(estudiantes)

}catch(error){

    res.json({message: error.message})
}

}

// mostrar un solo registro 

export const getAllestudiante = async (req,res) => {

    try{    

        const estudiante = await Models.findAll({
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
        await Models.create(req.body)
        res.json({
            "message":"Resgistro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
export const actualizarestudiante = async (req,res) =>{

    try{    

       await Models.update(req.body,{
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

       await Models.destroy({
           where: {id:req.params.id}
       })
        res.json({
            "message": "Registro eliminado correctamente" 
        })

}catch(error){

    res.json({message: error.message})
}

}