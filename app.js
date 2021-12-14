import express from 'express'
import Cors from 'cors'
import bodyParser from 'body-parser'
import multer from 'multer'
import routes from './src/routes/main.routes.js'

//initialize app
const app = express()

// Setting port to enviroment variable PORT or 3001
app.set('port', process.env.PORT || 3001)

//Middlewares

// application/json
// app.use(express.json())
app.use(bodyParser.text())
// CORS Policy
app.use(Cors())

//Setting routes
app.use('/api/v1', routes)

// starting the server
app.listen(app.get('port'), () => console.log(`Server listen on port ${app.get('port')}`))