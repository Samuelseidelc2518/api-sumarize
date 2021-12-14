import express from 'express'
import { sumarize } from '../Controllers/sumari.controller.js'

const router = express.Router()

router.post('/', sumarize)

export default router