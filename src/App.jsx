import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'
import NavBar from './components/NavBar'
import AuthProvider from './context/AuthContext'


const App = () => {
  return (
    <AuthProvider>
      <div className='bg-slate-100 min-h-screen'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/checkout' element={<Checkout />} />#
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
