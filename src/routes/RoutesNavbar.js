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
            <Route path="/employees" element={<Employees />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/records" element={<Records />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
        </BrowserRouter>
    );
}

export default RoutesNavbar;



