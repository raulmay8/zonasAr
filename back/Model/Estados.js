import { DataTypes } from "sequelize";
import {sequelize} from '../config/db.js'

export const Zona = sequelize.define('zona',{
    idEstado:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nameEstado:{
        type:DataTypes.STRING
    },
    imgEstado:{
        type:DataTypes.STRING
    }
})