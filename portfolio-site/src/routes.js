import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home/Home'
import Dashboard from './Projects/Dashboard/dashboard'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;