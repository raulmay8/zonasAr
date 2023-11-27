import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

const DetalleEstado = () => {
    let { id } = useParams();

    const URLF = 'http://localhost:4000/estados/'+id;

    const [zonas, setZonas] = useState([])
    useEffect(()=>{
        getZonas()
    }, [])

    const getZonas = async()=>{
        const res = await axios.get(URLF)
        setZonas(res.data)
    }
  return (
    <div className="grid grid-cols-2 m-5 md:grid-cols-3 gap-4 m-10">
      {zonas.map((zona) => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
             key={zona.idZona}>
            <ul className='list-none'>
                <div key={zona.idZona}>  
                    <a href={`zona/${zona.idZona}`}>
                        <img className="h-auto max-w-full rounded-lg cursor-pointer"
                            src={zona.image}
                            alt=''                        
                            />      
                        <h5  className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">
                            {zona.name}
                        </h5>
                    </a> 
                </div>   
            </ul>
        </div>
      ))}
    </div>
  )
}

export default DetalleEstado