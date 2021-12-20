import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../components/login/LoginPage'
import ContentRoutes from './ContentRoutes'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>

                <Route path="/*" element={<ContentRoutes/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
