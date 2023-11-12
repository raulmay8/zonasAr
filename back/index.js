import express from "express"
import conectarBaseDeDatos from "./config/db.js"

const app = express()

conectarBaseDeDatos()

app.listen(4000,  () =>{
    console.log("Servidor corriendo en el puerto 4000")
})