import { DataTypes } from "sequelize";
import {sequelize} from '../config/db.js'
import { Zona } from "./Zona.js";

export const Estados = sequelize.define('estados',{
    
    idEstado:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING,
    }},{
    timestamps: false,
    
});
/* Estados.hasOne(Zona, {
    foreignKey: 'idEstadoF',
    sourceKey: 'idEstado'
})
Zona.belongsTo(Estados,{
    foreignKey: 'idEstadoF',
    targetId: 'idZona'
}) */
/* Zona.hasOne(Estados, {
    foreignKey: 'idZonaF',
    sourceKey: 'idZona'
})
Estados.belongsTo(Zona,{
    foreignKey: 'idZonaF',
    targetId: 'idEstado'
})*/