import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Estado from './Pages/Estado'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/estado' element={<Estado/>}/>
        <Route path='/nosotros' element={<Estado/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
