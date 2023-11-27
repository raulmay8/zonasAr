import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Fondo from '../components/Fondo';
import Footer from '../components/Footer';

const Inicio = () => {
  return (
    <div>
      <Header />
      <div style={{ marginBottom: '20px' }}>
        <Slider />
      </div>
      <Fondo />
      <Footer />
    </div>
  );
}

export default Inicio;
