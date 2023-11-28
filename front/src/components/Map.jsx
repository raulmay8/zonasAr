import React, { useEffect } from 'react';

const Map = ({ latitud, longitud }) => {
  useEffect(() => {
    const iniciarMap = () => {
      console.log('Iniciando el mapa...');

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

    // Load Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap`;
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      console.error('Error loading Google Maps API script.');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup script when the component is unmounted
      document.head.removeChild(script);
    };
  }, [latitud, longitud]);

  return <div id="map-container" style={{ height: '400px' }}></div>;
};

export default Map;
