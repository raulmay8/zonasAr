import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

const DetalleZona = () => {

    let { id } = useParams();

    const URLF = 'http://localhost:4000/zonas/'+id;

    const [zonas, setZonas] = useState([])
    useEffect(()=>{
        getZonas()
    }, [])

    const getZonas = async()=>{
        const res = await axios.get(URLF)
        setZonas(res.data)
    }
  return (
    <div className="block mx-auto max-w-7xl m-3 p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">  
            <img className="h-auto w-auto mx-auto max-w-full rounded-lg cursor-pointer"
                src={zonas.image}
                alt={`Imagen ${zonas.idZona}`}                        
                />   
            <h1  className="mb-4 text-4xl p-5 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {zonas.name}
            </h1>
            <p className="mb-2 text-2xl p-5 font-bold  text-gray-900 dark:text-white">
                {zonas.description}
            </p>
            <div>
                <h5 className="mb-2 text-2xl  p-5 font-bold  text-gray-900 dark:text-white">
                    Coordenadas:
                </h5>
                <h5 className="mb-2 text-2xl p-5 font-bold  text-gray-900 dark:text-white">
                    {zonas.coordinate}
                </h5>
            </div>
            <h5 className="mb-2 text-2xl p-5 font-bold  text-gray-900 dark:text-white">
                {zonas.status}
            </h5>
    </div>   
    
  )
}

export default DetalleZona