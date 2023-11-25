import Zona from '../Model/Zona.js'
const zonaController = {
    getAllUsers: (req, res) => {
      Zona.getAllUsers((err, result) => {
       res.json({msg: "Desde mi casa"})
      });
    },
  };

export {zonaController}
