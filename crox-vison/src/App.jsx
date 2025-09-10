import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './components/Navigation/Navbar'
import Fullnav from './components/Navigation/Fullnav'

const App = () => {
  return (
    <div className='overflow-x-hidden text-white'>
      {/* <Navbar/> */}
      <Fullnav/>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/project' element={<Projects />} />
      </Routes> */}
    </div>
  )
}

export default App