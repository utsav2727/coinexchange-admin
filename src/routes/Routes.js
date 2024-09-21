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
import TradePage, { TradeBuyingPage } from "../pages/TradePage";
import TradeSellingPage from "../pages/TradePage";
import ChatWindow from "../pages/TradeDetailsPage";
import TradeConversions from "../pages/MoreInfoPage";
import KycPage from "../pages/KycPage";
import SupportPage from "../pages/SupportPage";

const RoutePage = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage/>} />
            <Route path="/users" element={<UserPage/>} />
            <Route path="/currency" element={<CurrencyPage/>} />
            <Route path="/deposit" element={<DepositPage/>} />
            <Route path="/withdraw" element={<WithdrawPage/>} />
            <Route path="/trade/selling" element={<TradeSellingPage/>} />
            <Route path="/trade/buying" element={<TradeBuyingPage/>} />
            {/* <Route path="/trade/moreInfo/tradeDetails" element={<ChatWindow/>} /> */}
            <Route path="/trade/moreInfo" element={<TradeConversions/>} />
            <Route path="/kyc" element={<KycPage/>} />
            <Route path="/support" element={<SupportPage/>} />
        </Routes>
    );
}

export default RoutePage;