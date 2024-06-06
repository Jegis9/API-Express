import express from 'express'
import {PORT} from './config.js'
/*CALL TO ROUTES*/
import userRoutes from './routes/users.routes.js' 
import { json } from 'stream/consumers'
import morgan from 'morgan'
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(userRoutes);
app.listen(PORT);

console.log('server on port',PORT);