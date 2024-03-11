import React from 'react';
import HomePage from './Pages/HomePage';
import Nosotros from './Pages/Nosotros';
import FAQ from './Pages/FAQ';
import TerminosPage from './Pages/Terminos';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/politicas' element={<FAQ />} />
        <Route path='/terminos_condiciones' element={<TerminosPage />} />
      </Routes>
    </Router>
  )
}

export default App;