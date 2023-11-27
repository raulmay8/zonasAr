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
Zona.hasMany(Estados, {
    foreignKey: 'idEstado',
    sourceKey: 'idZona'
})
Estados.belongsTo(Zona,{
    foreignKey: 'idEstado',
    targetId: 'idZona'
})