import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import './App.css'
import WhatsAppButton from './components/WhatsappButton'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <WhatsAppButton/>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
