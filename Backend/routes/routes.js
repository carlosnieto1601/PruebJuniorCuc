import express from 'express'
import { actualizarestudiante, crearestudiante, eliminarestudiante, getAllestudiante, getAllestudiantes } from '../controllers/controllers.js'

const routes = express.Router()

routes.get('/', getAllestudiantes)
routes.get('/:id', getAllestudiante)
routes.post('/', crearestudiante )
routes.put('/:id', actualizarestudiante )
routes.delete('/:id',eliminarestudiante )


export default routes;