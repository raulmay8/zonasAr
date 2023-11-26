
const Header = () => {
  return (
    <>
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <a href="#" className="flex items-center py-4 px-0"> {/* Ajusta el padding si es necesario */}
                {/* Asegúrate de que la ruta al logo sea correcta */}
                <img src="src/img/logo.png" alt="Logo" className="h-20 w-20" /> {/* Eliminé mr-12 para pegarlo a la izquierda */}
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
          {/* Secondary Navbar items */}
          <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-blue-800 transition ease-in-out duration-150">
          <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
          </svg>
          Suscribete
          </button>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              {/* Icono de menú aquí */}
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header
