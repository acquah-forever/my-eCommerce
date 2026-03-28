import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <div className='bg-slate-100 min-h-screen'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
 