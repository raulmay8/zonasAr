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
/* Estados.hasMany(Zona, {
    foreignKey: 'idZonaF',
    sourceKey: 'idZona'
})
Zona.belongsTo(Estados,{
    foreignKey: 'idZonaF',
    targetId: 'idZona'
}) */
/* Estados.hasMany(Zona, {
    foreignKey: 'idEstadoF',
    sourceKey: 'idEstado',
    allowNull: true
})
Zona.belongsTo(Estados,{
    foreignKey: 'idEstadoF',
    targetId: 'idEstado',
    allowNull: true
}) */