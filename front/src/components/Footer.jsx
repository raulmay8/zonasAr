import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const estiloCafe = {
    backgroundColor: '#4d2d1e',
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
  };

  return (
    <footer style={estiloCafe}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contacto</h2>
            <p>Dirección: Calle Principal, Ciudad</p>
            <p>Email: info@misitioweb.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Enlaces útiles</h2>
            <ul>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/estado">Estados</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center"> {/* Agregado para centrar los íconos */}
            <h2 className="text-xl font-semibold mb-2">Síguenos</h2>
            <div className="flex space-x-2">
              <a href="#" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;