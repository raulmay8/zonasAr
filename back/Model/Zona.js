import { DataTypes } from "sequelize";
import {sequelize} from '../config/db.js'

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
        type:DataTypes.TEXT
    },
    coordinate:{
        type:DataTypes.STRING
    },
    idEstado:{
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