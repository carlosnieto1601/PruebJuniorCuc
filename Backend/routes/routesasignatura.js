import express from 'express'
import { actualizarAsignatura, crearAsignatura, eliminarasignatura, getAllAsignatura, getAllasignaturas } from '../controllers/Asignatura.js'

const routesasignatura = express.Router()

routesasignatura.get('/', getAllasignaturas)
routesasignatura.get('/:id', getAllAsignatura)
routesasignatura.post('/', crearAsignatura)
routesasignatura.put('/:id', actualizarAsignatura)
routesasignatura.delete('/:id', eliminarasignatura)


export default routesasignatura;