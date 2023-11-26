import  express  from "express";
import cors from 'cors'
import zonas from './Routes/zonaRoutes.js'

const app =  express()
    
//configuracion de cors
const whitelist = ["http://localhost:5173"]
const corsOptions = {
    origin: function(origin, callback){
        if(whitelist.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error('Error de cors'))
        }
    }
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(zonas)

export default app;