import {Estados} from '../Model/Estados.js'
import {Zona} from '../Model/Zona.js'

export const getEstados = async (req, res) => {
    try {
        const estados = await Estados.findAll()
        /* const estados = await Estados.findAll({include: Zona}) */
        res.json(estados)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getEstado = async (req, res) =>{
  try {
      const {idEstado} = req.params;
      const estado = await Estados.findOne({
          where: {
              idEstado,
          },
      });
      if (!estado)
          return res.status(404).json({message: "La Estado no existe"})
      res.json(estado)
  } catch (error) {
      return res.status(500).json({message: error.message});
  }
}
/* export const getEstadoZona= async(req, res) =>{
    try {
        const {id} =req.params
        const zona = await Zona.findAll({
            where: {idEstado: id},
        });
        res.json(zona)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
 */
