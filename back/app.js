import  express  from "express";
import zonas from './Routes/zonaRoutes.js'

const app =  express()
    
app.use(express.json());
app.use(zonas)

export default app;