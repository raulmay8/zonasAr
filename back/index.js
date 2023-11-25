import express from "express"
import conectarBaseDeDatos from "./config/db.js"
import zonaRoutes from "./Routes/zonaRoutes.js"

const app = express()
app.use(express.json());

conectarBaseDeDatos()

app.use('/zonas', zonaRoutes);

const PORT = process.env.PORT || 4000 

const servidor = app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})


