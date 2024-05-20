import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import Acceuil from './pages/acceuil.jsx'
import Education from './pages/education.jsx'
import Marketing from './pages/marketing.jsx'
import Inscription from './pages/inscription.jsx'
import Connexion from './pages/connexion.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <Routes>
          <Route path='/acceuil' Component={Acceuil} />
          <Route path='/education' Component={Education} />
          <Route path='/connexion' Component={Connexion} />
          <Route path='/inscription' Component={Inscription} />
          <Route path='/marketing' Component={Marketing} />
        </Routes>
    </>
  )
}

export default App
