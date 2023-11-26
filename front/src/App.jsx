import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Estado from './Pages/Estado'
import Nosotros from './Pages/Nosotros'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/estado' element={<Estado/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
