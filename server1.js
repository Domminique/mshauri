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
//import jobsRouter from '../Mshauri_web/.next/server/pages'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

const __dirname = dirname(fileURLToPath(import.meta.url))

//only when ready to deploy C:\a_100Days_of_GADS\Mshauri_web\.next\server\pages\index.html
// only when ready to deploy
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
// })
//
app.use(express.static(path.join(__dirname, '../Mshauri_web/.next/static')))

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
    // Mshauri_GCP await connectDB('mongodb+srv://dommy:dommy2021@cluster0.wr5fv.mongodb.net/MshauriShipA?retryWrites=true&w=majority')
    // ongata rongai online await connectDB('mongodb+srv://dommy:dommy2021@cluster0.wr5fv.mongodb.net/oroShipA?retryWrites=true&w=majority')
    await connectDB('mongodb://localhost:27017/oroV12')
    //await connectDB('mongodb://localhost:27017/blessedOne')

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
{
  "name": "Ongata Rongai Onlineweb2",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next export"

  },
  "scripts": {
  "dev": "node server.js",
  "build": "next build",
  "start": "NODE_ENV=production node server.js"
}
  "dependencies": {
    "@badrap/bar-of-progress": "^0.2.1",
    "@heroicons/react": "^2.0.11",
    "@reduxjs/toolkit": "^1.8.1",
    "@tailwindcss/line-clamp": "^0.4.2",
    "axios": "^0.26.1",
    "date-fns": "^2.29.3",
    "firebase": "^9.10.0",
    "geolib": "^3.3.3",
    "mapbox-gl": "^2.10.0",
    "moment": "^2.29.2",
    "next": "  latest",
    "next-auth": "^4.12.0",
    "nodemailer": "^6.7.8",
    "react": "^18.2.0",
    "react-currency-formatter": "^1.1.0",
    "react-date-range": "^1.4.0",
    "react-dom": "18.2.0",
    "react-map-gl": "^6.1.18",
    "react-redux": "^7.2.8",
    "react-responsive-carousel": "^3.2.23",
    "react-toastify": "^8.2.0",
    "recharts": "^2.1.9",
    "sharp": "^0.31.0",
    "tailwind-scrollbar-hide": "^1.1.7"
  },
  "devDependencies": {
    "eslint": "8.23.1",
    "eslint-config-next": "12.3.0"
  }
}
