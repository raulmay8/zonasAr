import  express  from "express";
import cors from 'cors'
import zonas from './Routes/zonaRoutes.js'
import estados from './Routes/estadoRoutes.js'

const app =  express()
    
//configuracion de cors
const whitelist = ["http://127.0.0.1:5173"]
const corsOptions = {
    origin: function(origin, callback){
        if(whitelist.includes(origin) || !origin){
            callback(null, true)
        }else{
            callback(new Error('Error de cors'))
        }
    }
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(zonas)
app.use(estados)


export default app;