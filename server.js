import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import 'express-async-errors'
import morgan from 'morgan'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

import helmet from 'helmet'
import cors from 'cors'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

// hello
// db and authenticateUser
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'
//import jobsRouter from '../my-project/out'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

const __dirname = dirname(fileURLToPath(import.meta.url))

//only when ready to deploy
// only when ready to deploy
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
// })
//
//app.use(express.static(path.join(__dirname, '../my-project/out')))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(mongoSanitize())

// app.use('/',(req,res)=>{
//   res.send('emed Africa api')
// })
//app.get('/', function (req, res) {
// res.send("ORO API by DPOMMY ON GCP")
// res.end()
// })

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 80

const start = async () => {
  try {
    await connectDB(
      'mongodb+srv://dommy:dommy2021@cluster0.wr5fv.mongodb.net/EmedAfricaShipA?retryWrites=true&w=majority'
    )
    // ongata rongai online  // await connectDB(
    //   'mongodb+srv://dommy:dommy2021@cluster0.wr5fv.mongodb.net/oroShipA?retryWrites=true&w=majority'
    // )
    // emedAfrica_GCP await connectDB('mongodb://localhost:27017/oroV18')
    // emedAfrica_GCP await connectDB('mongodb://localhost:27017/blessedOne6')

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
