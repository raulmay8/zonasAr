// Map.js

import React, { useEffect } from 'react';

const Map = ({ latitud, longitud }) => {
  useEffect(() => {
    const iniciarMap = () => {
      var coord = { lat: latitud, lng: longitud };
      var map = new window.google.maps.Map(document.getElementById('map-container'), {
        zoom: 10,
        center: coord
      });
      var marker = new window.google.maps.Marker({
        position: coord,
        map: map
      });
    };

    // Llamada a la función iniciarMap después de cargar la API de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API&callback=iniciarMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonta para evitar problemas
      document.head.removeChild(script);
    };
  }, [latitud, longitud]);

  return <div id="map-container" style={{ height: '400px' }}></div>;
};

export default Map;
