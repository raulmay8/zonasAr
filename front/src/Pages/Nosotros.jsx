import React from 'react';
import teamImage from '../img/nos.png';

const Nosotros = () => {
  return (
    <>
      <div className="relative bg-gray-100">
        {/* Full-width image with overlay */}
        <img
          src={teamImage}
          alt="Nuestro equipo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="text-center text-white p-6 max-w-2xl">
            <h3 className="text-3xl font-semibold">
              Sobre Nosotros
            </h3>
            <p className="mt-4">
              Nuestra misión es llevar la informacion cultural a todos en mexico sobre la arqueología y la historia de México. Proporcionamos una plataforma tecnológica que soporta la divulgación y educación sobre zonas arqueológicas a través de México.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
