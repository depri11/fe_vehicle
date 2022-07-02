import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Details from './pages/detail/detail'
import Login from './pages/login/login'
import Register from './pages/register/register'
// import Create from './pages/create/create'
function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="vehicle/:id" element={<Details />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
