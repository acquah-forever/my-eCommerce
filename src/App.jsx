import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' />
        <Route path='/auth' />
        <Route path='/checkout' />
      </Routes>
      
    </div>
  )
}

export default App
