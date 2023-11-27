import React from 'react';
import { useLocation } from 'react-router-dom';

import image1 from '../img/zona1.png';
import image2 from '../img/zona2.png';
import image3 from '../img/zona3.png';
import image4 from '../img/zona4.png';
import image5 from '../img/zona5.png';

const imageInfo = [
  { id: 1, src: image1, title: 'Muyil', description: 'El nombre original del sitio arqueológico Muyil, ubicado en la Península de Yucatán, es desconocido. El nombre "Muyil" se deriva de una laguna cercana y se ha utilizado desde la época colonial. Este sitio también es conocido como Chunyaxché. La falta de información sobre su nombre original es común en muchos sitios mayas, donde los nombres contemporáneos a menudo no reflejan las denominaciones originales de estas antiguas ciudades.' },
  { id: 2, src: image2, title: 'Chichén Itzá', description: 'Chichén Itzá fue una ciudad o centro ceremonial maya notable por su diversidad de estilos arquitectónicos y culturales, resultado de las diferentes épocas y pueblos que influyeron en su desarrollo. Desde su fundación, Chichén Itzá experimentó varias fases constructivas, cada una reflejando la influencia cultural y tecnológica de los pueblos que la ocuparon en diferentes momentos de su historia.' },
  { id: 3, src: image3, title: 'Coba', description: 'El nombre original de la ciudad maya de Cobá, según las inscripciones jeroglíficas encontradas en estelas y paneles en el sitio, efectivamente era "Cobá". Este nombre, que en maya podría significar "agua picada", se considera el más plausible dada la cercanía de la ciudad a varias lagunas. Este tipo de nombres, que a menudo reflejan características geográficas o naturales relevantes, es común en las ciudades mayas, y proporciona una visión de la importancia que los antiguos mayas daban a su entorno natural en la denominación de sus asentamientos.' },
  { id: 4, src: image4, title: 'Zona Arqueológica de Tulum', description: 'La Zona Arqueológica de Tulum es destacada por la excepcional conservación de sus murales y edificaciones, lo que permite a los visitantes apreciar ampliamente su historia. Este sitio maya, situado en la costa del Caribe mexicano, se compone de cinco zonas de acceso y cuenta con dos torres de vigilancia. Entre sus numerosas estructuras, el edificio más famoso y emblemático es El Castillo, que se erige como un punto focal del sitio. ' },
  { id: 5, src: image5, title: 'Ek Balam', description: 'Según una relación escrita en 1579 por Juan Gutiérrez Picón, Ek Balam era el nombre de un gran señor que fundó y gobernó un sitio durante 40 años, aunque no hay pruebas arqueológicas de su existencia. El glifo emblema de Ek Balam, encontrado en monumentos de piedra conocidos como Las Serpientes Jeroglíficas, confirma el nombre del sitio en la época clásica.' },
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
      <div
        className="background-image bg-cover h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url(${imageData.src})` }}
      >
        <div className="text-white text-center p-8">
          <div className="bg-black bg-opacity-50 rounded p-4">
            <h1 className="text-4xl font-bold mb-4">{imageData.title}</h1>
            <p className="text-lg mb-8 text-justify">{imageData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mejores;
