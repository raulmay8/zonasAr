import mysql from 'mysql'

const zonaM = {
  getAllUsers: (callback) => {
    mysql.query('SELECT * FROM zona', callback);
  },
};

export default zonaM;
