import {
    createBrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import React from 'react';
import DashboardPage from "../pages/DashboardPage";
import UserPage from "../pages/UserPage";
import CurrencyPage from "../pages/CurrencyPage";
import DepositPage from "../pages/DepositPage";
import WithdrawPage from "../pages/WithdrawPage";

const RoutePage = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage/>} />
            <Route path="/users" element={<UserPage/>} />
            <Route path="/currency" element={<CurrencyPage/>} />
            <Route path="/deposit" element={<DepositPage/>} />
            <Route path="/withdraw" element={<WithdrawPage/>} />
        </Routes>
    );
}

export default RoutePage;