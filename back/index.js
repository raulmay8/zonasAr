import app from "./app.js";
import { sequelize } from "./config/db.js";
import './Model/Zona.js'

async function main(){
    try {
        await sequelize.sync()
        app.listen(4000)
        console.log('Usando el puerto ', 4000)
    } catch (error) {
        console.error('No se pudo conectar', error)
    }
}
main();
