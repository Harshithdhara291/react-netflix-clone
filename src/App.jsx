import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'
import Register from './pages/Register'
import Player from './pages/Player'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Netflix/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/in' element={<Signup/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/player' element={<Player/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App