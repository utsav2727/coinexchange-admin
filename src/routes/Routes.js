import {
    createBrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import React from 'react';
import Dashboard from "../Dashboard";
import DashboardPage from "../pages/DashboardPage";
import UserPage from "../pages/UserPage";
import CurrencyPage from "../pages/CurrencyPage";

const RoutePage = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage/>} />
            <Route path="/users" element={<UserPage/>} />
            <Route path="/currency" element={<CurrencyPage/>} />
        </Routes>
    );
}

export default RoutePage;