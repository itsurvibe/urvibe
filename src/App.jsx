import React from 'react';
import HomePage from './Pages/HomePage';
import Nosotros from './Pages/Nosotros';
import Terminos from './Pages/Terminos';
import Politicas from './Pages/Politicas';
import ScrollToTop from './Components/ScrollTop/ScrollTop';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

function App() {
  return(
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/politicas' element={<Politicas />} />
        <Route path='/terminos_condiciones' element={<Terminos />} />
      </Routes>
    </Router>
  )
}

export default App;