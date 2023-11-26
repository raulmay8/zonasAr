import axios from 'axios'
import { useEffect, useState } from 'react'

const URI = 'http://localhost:4000/estados'

const BusquedaEstado = () => {

    const [estados, setEstados] = useState([])
    useEffect(()=>{
        getEstados()
    }, [])

    const getEstados = async()=>{
        const res = await axios.get(URI)
        setEstados(res.data)
    }

  return (
    

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-10">
    {estados.map((estado) => (
        
        <>
            <div key={estado.idEstado}  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    
                    <img   className="h-auto max-w-full rounded-lg"
                        src={estado.image}
                        alt="" />
                </a>
                <div  className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {estado.name}
                        </h5>
                    </a>
                </div>
            </div>
            
        </>

    ))}
</div>

  )
}

export default BusquedaEstado