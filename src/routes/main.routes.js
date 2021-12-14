import express from 'express'
import sumarizeRouter from './simpleSumari.routes.js'

const router = express.Router()

router
    .route('/status')

    .get((req, res) => {
        res.send("Ok")
    })

router.use('/sumari', sumarizeRouter)





export default router