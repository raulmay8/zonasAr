import {Zona} from '../Model/Zona.js'

export const getZonas = async (req, res) => {
    try {
        const zonas = await Zona.findAll()
        res.json(zonas)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getZona = async (req, res) =>{
  try {
      const {idZona} = req.params;
      const zona = await Zona.findOne({
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