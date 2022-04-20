import ModeloClases from "../models/ModeloClases.js"


export const getAllclases= async (req,res) =>{

    
    try{    

        const clases = await ModeloClases.findAll()
        res.json(clases)

}catch(error){

    res.json({message: error.message})
}

}

// mostrar un solo registro 

export const getAllclase = async (req,res) => {

    try{    

        const clases = await ModeloClases.findAll({
            where:{id:req.params.id}
        })
        res.json(clases)

}catch(error){

    res.json({message: error.message})
}
}

// crear registro 

export const crearclases = async (req,res) =>{
    try {
        await ModeloClases.create(req.body)
        res.json({
            "message":"Resgistro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
export const actualizarclases = async (req,res) =>{

    try{    

       await ModeloClases.update(req.body,{
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

export const eliminarclase = async (req,res) =>{

    try{    

       await ModeloClases.destroy({
           where: {id:req.params.id}
       })
        res.json({
            "message": "Registro eliminado correctamente" 
        })

}catch(error){

    res.json({message: error.message})
}

}