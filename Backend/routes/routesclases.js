import express from 'express'
import { getAllclases } from '../controllers/Clases.js'

const routesclases = express.Router()

routesclases.get('/', getAllclases)


export default routesclases;