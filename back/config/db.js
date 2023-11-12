import mysql from 'mysql';

const conectarBaseDeDatos = async () => {
  const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zonas'
  });

  conexion.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
      return;
    }
    console.log('Conexión exitosa');
  });
}

export default conectarBaseDeDatos
