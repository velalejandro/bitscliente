import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UsuarioPage from '../components/usuarios/UsuarioPage'
import ProyectosPage from '../components/proyectos/ProyectosPage'
import Navbar from '../components/container/Navbar'

const ContentRoutes = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/usuarios/:action" element={<UsuarioPage />} />
                <Route path="/usuarios" element={<UsuarioPage />} />
                <Route path="/proyectos" element={<ProyectosPage />} />

                <Route path="/" element={<UsuarioPage />} />
            </Routes>
        </>
    )
}

export default ContentRoutes

