import ModeloClases from "../models/ModeloClases.js"


export const getAllclases= async (req,res) =>{

    
    try{    

        const clases = await ModeloClases.findAll()
        res.json(clases)

}catch(error){

    res.json({message: error.message})
}

}