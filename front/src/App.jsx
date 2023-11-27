<<<<<<< HEAD
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Estado from './Pages/Estado'
import Nosotros from './Pages/Nosotros'
import Mejores from './Pages/Mejores'
import Header from './components/Header'
import DetalleEstado from './components/DetalleEstado'
import DetalleZona from './components/DetalleZona'
function App() {
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Estado from './Pages/Estado';
import Nosotros from './Pages/Nosotros';
import Mejores from './Pages/Mejores';
>>>>>>> 2fce085827688a4c221bbd45b11bee1954fdc1b1

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Inicio/>}/>
        <Route path='/estado' element={<Estado/>}/>
        <Route path='/estado/:id' element={<Estado/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/mejores/:id' element={<Mejores/>}/>
        <Route path='/mejores' element={<Mejores/>}/>
        <Route path='/detalle/:id' element={<DetalleEstado/>}/>
        <Route path='/detalle/zona/:id' element={<DetalleZona/>}/>
=======
        <Route path="/" element={<Inicio />} />
        <Route path="/estado" element={<Estado />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/mejores/:id" element={<Mejores />} />
        <Route path="/mejores" element={<Mejores />} />
>>>>>>> 2fce085827688a4c221bbd45b11bee1954fdc1b1
      </Routes>
    </BrowserRouter>
  );
}

export default App;