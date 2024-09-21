import React from 'react'
import { CrudPage } from '../components/CrudPage.jsx/CrudPage'
import { getCurrencies } from '../services/currencyServices';
import { approveWithdraw, getWithdraw, rejectWithdraw } from '../services/withdrawService';
import { getBuyingTrade, getSellingTrade, getTrade, handleMoreInfo } from '../services/tradeService';

const TradeSellingPage = () => {

    const columns = [
        { field: '_id', headerName: 'ID' },
        { field: 'username', headerName: 'User Name' },
        { field: 'type', headerName: 'Trade Type' },
        { field: 'sourceAmount', headerName: 'Amount' },
        { field: 'exchangeRate', headerName: 'ExchangeRate' },
        { field: 'status', headerName: 'Status' },
        { field: 'createdAt', headerName: 'Submitted On' }
      ];

  return (
    <CrudPage
    name={"Trade"}
    columns={columns}
    isAdd={false}
    isUpdate={false}
    isDelete={false}
    fetchDatafn={getSellingTrade}
    isApprove={false}
    isReject={false}
    isMoreDetails={true}
    moreDetailsfn={handleMoreInfo}
    />
  )
}

export default TradeSellingPage


export const TradeBuyingPage = () => {

  const columns = [
      { field: '_id', headerName: 'ID' },
      { field: 'username', headerName: 'User Name' },
      { field: 'type', headerName: 'Trade Type' },
      { field: 'sourceAmount', headerName: 'Amount' },
      { field: 'exchangeRate', headerName: 'ExchangeRate' },
      { field: 'status', headerName: 'Status' },
      { field: 'createdAt', headerName: 'Submitted On' }
    ];

return (
  <CrudPage
  name={"Trade"}
  columns={columns}
  isAdd={false}
  isUpdate={false}
  isDelete={false}
  fetchDatafn={getBuyingTrade}
  isApprove={false}
  isReject={false}
  isMoreDetails={true}
  moreDetailsfn={handleMoreInfo}
  />
)
}
