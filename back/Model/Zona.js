import { DataTypes } from "sequelize";
import {sequelize} from '../config/db.js'

export const Zona = sequelize.define('zona',{
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
    state:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING
    }
})