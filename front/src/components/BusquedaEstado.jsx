import axios from 'axios'
import { useEffect, useState } from 'react'
import Modal from 'react-modal';

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

    // Configura el elemento de la aplicación para react-modal
Modal.setAppElement('#root'); // Reemplaza '#root' con el ID de tu elemento de la aplicación principal


    const [modalIsOpen, setModalIsOpen] = useState(false);

  // Función para abrir la modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Función para cerrar la modal
  const closeModal = () => {
    setModalIsOpen(false);
  }
  return (
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-10 ">
    {estados.map(estado => 
        <ul className='list-style-type: none' key={estado.idEstado}>
        
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    
                    <img   className="h-auto max-w-full rounded-lg"
                        src={estado.image}
                        alt="Imagen 1" 
                        onClick={openModal}
                        style={{cursor: 'pointer'}}
                    />
                </a>
                <div  className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {estado.name}
                        </h5>
                    </a>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                overlay: {
                    background: '',
                },
                content: {
                margin: 'auto',
                width: '50%',
                height: '50%',
                borderRadius: '10px'
                },
                    }}
                    >
                <img src={estado.image} alt="" />
                <button 
                onClick={closeModal} 
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
                >Cerrar</button>
            </Modal> 
        </ul>
    )}
</div>
  )
}
export default BusquedaEstado