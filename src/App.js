import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Shop from './Components/Shop';
import SideBar from './Components/SideBar';

const App = () => {
    const Option = [
        {
            label: 'Home',
            id: 131,
            path: '/',
            element: <Home />
        },
        {
            label: 'Blog',
            path: '/blog',
            id: 121,
            element: <Blog />
        },
        {
            label: 'Shop',
            path: '/shop',
            id: 141,
            element: <Shop />
        }
    ];
    const renderRoutes = Option.map((route) => {
        return <Route key={route.label} path={route.path} element={route.element} />
    })
    return (
        // <div>
        <>
            <BrowserRouter>
                <SideBar Option={Option} />
                <Routes>
                    {renderRoutes}
                </Routes>
            </BrowserRouter>
        </>
        // </div>
    )
}

export default App
