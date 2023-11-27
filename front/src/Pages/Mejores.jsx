import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

import image1 from '../img/zona1.png';
import image2 from '../img/zona2.png';
import image3 from '../img/zona3.png';
import image4 from '../img/zona4.png';
import image5 from '../img/zona5.png';

const imageInfo = [
  { id: 1, src: image1, title: 'Zona 1', description: 'Descripción de la Zona 1' },
  { id: 2, src: image2, title: 'Zona 2', description: 'Descripción de la Zona 2' },
  { id: 3, src: image3, title: 'Zona 3', description: 'Descripción de la Zona 3' },
  { id: 4, src: image4, title: 'Zona 4', description: 'Descripción de la Zona 4' },
  { id: 5, src: image5, title: 'Zona 5', description: 'Descripción de la Zona 5' },
];

const Mejores = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  console.log("ID recibido:", id);

  const selectedId = id ? parseInt(id, 10) : 1;
  const imageData = imageInfo.find(img => img.id === selectedId) || imageInfo[0];

  return (
    <div className="tops-container">
      <Header />
      <div
        className="background-image bg-cover h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url(${imageData.src})` }}
      >
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">{imageData.title}</h1>
          <p className="text-lg mb-8">{imageData.description}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Localizar</button>
        </div>
      </div>
    </div>
  );
};

export default Mejores;
