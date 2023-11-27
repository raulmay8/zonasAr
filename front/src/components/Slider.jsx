// Importa React y los hooks necesarios
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../img/zona1.png';
import image2 from '../img/zona2.png';
import image3 from '../img/zona3.png';
import image4 from '../img/zona4.png';
import image5 from '../img/zona5.png';

// Componente SimpleCarousel
const SimpleCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  const goToPrevious = () => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  return (
    <div>
      {/* Título y márgenes */}
      <div className="flex items-center justify-between py-4 bg-gray-200">
        <div className="w-full max-w-[calc(50%-2rem)] h-5 bg-yellow-900 rounded-full"></div>
        <h2 className="mx-4 text-xl font-bold text-center flex-shrink-0">
          Conoce las más famosas
        </h2>
        <div className="w-full max-w-[calc(50%-2rem)] h-5 bg-yellow-900 rounded-full"></div>
      </div>

      {/* Carrusel de imágenes */}
      <div id='default-carousel' className="relative w-full" data-carousel="slide">
        <div className="relative flex items-center justify-center mt-8">
          <div className="max-w-screen-lg mx-auto" data-carousel-item>
            {/* Utilizamos Link en lugar de "a" */}
            <Link to={`/mejores?id=${activeIndex + 1}`}>
              <img
                src={images[activeIndex]}
                alt={`Slide ${activeIndex + 1}`}
                className="w-full h-auto object-cover rounded-xl cursor-pointer"
              />
            </Link>
          </div>
        </div>
        {/* Buttons */}
        <button onClick={goToPrevious} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10 dark:bg-gray-800/30 group-hover:bg-black/10 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button onClick={goToNext} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SimpleCarousel;
=======
export default SimpleCarousel;
>>>>>>> 2fce085827688a4c221bbd45b11bee1954fdc1b1
