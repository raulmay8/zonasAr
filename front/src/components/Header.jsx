import { useState } from 'react';
import Logo from '../img/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <a href="/" className="flex items-center py-4 px-0"> {/* Ajusta el padding si es necesario */}
                {/* Asegúrate de que la ruta al logo sea correcta */}
                <img src={Logo} alt="Logo" className="h-20 w-20" /> {/* Eliminé mr-12 para pegarlo a la izquierda */}
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Aumenta el tamaño de la fuente aquí */}
              <a href="/" className="py-4 px-2 text-gray-500 font-semibold text-xl">Home</a>
              <a href="/nosotros" className="py-4 px-2 text-gray-500 font-semibold text-xl">Nosotros</a>
              <a href="/estado" className="py-4 px-2 text-gray-500 font-semibold text-xl">Estados</a>
            </div>
          </div>
          <div>
          <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
              <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
              </svg>
              <a href="https://www.facebook.com/profile.php?id=61553636476647&mibextid=ZbWKwL">Suscríbete</a>
              </button>
            </div>
            <button className="md:hidden outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z" />
              </svg>
            </button>
        </div>
      </div>
    </nav>
    {isMenuOpen && (
        <div className="md:hidden">
          <a href="/" className="block px-4 py-2 text-sm text-gray-700">Home</a>
          <a href="/nosotros" className="block px-4 py-2 text-sm text-gray-700">Nosotros</a>
          <a href="/estado" className="block px-4 py-2 text-sm text-gray-700">Estados</a>
        </div>
      )}
    </>
  );
};

export default Header
