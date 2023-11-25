import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'zonas',
    'root',
    '',
    {
    host: 'localhost',
    dialect: 'mysql',
}
); 