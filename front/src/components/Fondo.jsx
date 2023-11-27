import React from 'react';

const Fondo = () => {
  const backgroundImage = '../img/fondo.jpeg';

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    zIndex: -1,
  };

  return (
    <div style={backgroundStyle}></div>
  );
};

export default Fondo;
