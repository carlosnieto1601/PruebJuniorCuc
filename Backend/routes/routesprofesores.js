import express from 'express'
import { actualizarprofesor, crearprofesor, eliminarprofesor, getAllprofesor, getAllprofesores } from '../controllers/Profesores.js'

const routesprofesores = express.Router()

routesprofesores.get('/', getAllprofesores)
routesprofesores.get('/:id', getAllprofesor)
routesprofesores.post('/', crearprofesor)
routesprofesores.put('/:id', actualizarprofesor)
routesprofesores.delete('/:id', eliminarprofesor)



export default routesprofesores;