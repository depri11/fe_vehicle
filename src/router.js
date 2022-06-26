import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'
import Popular from './pages/popular/popular'
import Create from './pages/create/create'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="vehicle/:id" element={<Detail />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="vehicle/new" element={<Create />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
