import express from 'express'
import { actualizarclases, crearclases, eliminarclase, getAllclase, getAllclases } from '../controllers/Clases.js'

const routesclases = express.Router()

routesclases.get('/', getAllclases)
routesclases.get('/:id', getAllclase)
routesclases.post('/', crearclases)
routesclases.put('/:id', actualizarclases)
routesclases.put('/:id', eliminarclase)



export default routesclases;