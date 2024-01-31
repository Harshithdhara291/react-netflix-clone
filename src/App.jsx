import React from 'react'
import {Routes,Route, HashRouter} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'
import Register from './pages/Register'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/' element={<Netflix/>} />
      </Routes>
    </HashRouter>
  )
}

export default App