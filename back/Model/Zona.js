import { DataTypes } from "sequelize";
import {sequelize} from '../config/db.js'
import { Estados } from "./Estados.js";

export const Zona = sequelize.define('zonas',{
    idZona:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    coordinate:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING
    }},{
        timestamps: false,
})
Estados.hasOne(Zona, {
    foreignKey: 'idEstadoF',
    sourceKey: 'idEstado'
})
Zona.belongsTo(Estados,{
    foreignKey: 'idEstadoF',
    targetId: 'idZona'
})