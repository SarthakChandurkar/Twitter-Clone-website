import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Login from './components/Login'
import Register from './components/Register'
import RequireAuth from './features/auth/RequireAuth'

const App = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element= {<RequireAuth />} >
          <Route path='/' element={<Layout />} />
        </Route>
    </Routes>
  )
}

export default App