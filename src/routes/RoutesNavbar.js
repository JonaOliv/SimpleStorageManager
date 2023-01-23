import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home/Index';
import Records from '../pages/Records/Index';
import Employees from '../pages/Employees/Index';
import Inventory from '../pages/Inventory/Index';
import NoPage from '../pages/400/Index';

function RoutesNavbar(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/employees" element={<Employees currentPageNavbar={1}/>} />
            <Route path="/inventory" element={<Inventory currentPageNavbar={2}/>} />
            <Route path="/records" element={<Records currentPageNavbar={3}/>} />
            <Route path="*" element={<NoPage />} />
        </Routes>
        </BrowserRouter>
    );
}

export default RoutesNavbar;



