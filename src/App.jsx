import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'
import WhatsAppButton from './components/WhatsappButton'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
          <WhatsAppButton/>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
