import axios from 'axios'
import { useEffect, useState } from 'react'
import Modal from 'react-modal';

const URI = 'http://localhost:4000/zonas/'

const BusquedaEstado = () => {

    const [zonas, setZonas] = useState([])
    useEffect(()=>{
        getZonas()
    }, [])

    const getZonas = async()=>{
        const res = await axios.get(URI)
        setZonas(res.data)
    }
    /* const [estados, setEstados] = useState([])
    useEffect(()=>{
        getEstados()
    }, [])

    const getEstados = async()=>{
        const res = await axios.get(URI)
        setEstados(res.data)
    } */

    Modal.setAppElement('#root'); 


    const [modalIsOpen, setModalIsOpen] = useState(null);

    // Función para abrir la modal
    const openModal = (zonaId) => {
        setModalIsOpen(zonaId);
    };

    // Función para cerrar la modal
    const closeModal = () => {
        setModalIsOpen(null);
    }
  return (
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-10 ">
    {zonas.map((zona) => 
        <ul className='list-none' key={zona.idZona}>
        
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    
                    <img className="h-auto max-w-full rounded-lg cursor-pointer"
                        src={zona.image}
                        alt="Imagen 1" 
                        onClick={() => openModal(zona.idZona)}
                    />
                </a>
                <div  className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {zona.estados.name}
                        </h5>
                    </a>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen === zona.idZona}
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
                {/* <img src={estado.image} alt="" /> */}
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