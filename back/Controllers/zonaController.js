import {Zona} from '../Model/Zona.js'
import {Estados} from '../Model/Estados.js'

export const getZonas = async (req, res) => {
    try {
        const zonas = await Zona.findAll({include: Estados})
        res.json(zonas)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getZona = async (req, res) =>{
  try {
      const {idZona} = req.params;
      const zona = await Zona.findOne({
          include: Estados,
          where: {
              idZona,
          },
      });
      if (!zona)
          return res.status(404).json({message: "La zona arqueológica no existe"})
      res.json(zona)
  } catch (error) {
      return res.status(500).json({message: error.message});
  }
}
export const getZonaEstado= async(req, res) =>{
    try {
        const {idZona} =req.params
        const estado = await Estados.findAll({
            where: {idEstado: idZona},
        });
        res.json(estado)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}