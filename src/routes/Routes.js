import {
    createBrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import React from 'react';
import Dashboard from "../Dashboard";
import DashboardPage from "../pages/DashboardPage";
import UserPage from "../pages/UserPage";

const RoutePage = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage/>} />
            <Route path="/users" element={<UserPage/>} />
        </Routes>
    );
}

export default RoutePage;