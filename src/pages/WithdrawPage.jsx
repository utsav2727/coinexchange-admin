import React from 'react'
import { CrudPage } from '../components/CrudPage.jsx/CrudPage'
import { getCurrencies } from '../services/currencyServices';
import { approveWithdraw, getWithdraw, rejectWithdraw } from '../services/withdrawService';

const WithdrawPage = () => {

    const columns = [
        { field: '_id', headerName: 'ID' },
        { field: 'username', headerName: 'UserName' },
        { field: 'useremail', headerName: 'UserEmail' },
        { field: 'transactionRef', headerName: 'Transaction Ref' },
        { field: 'currencyId', headerName: 'Currency' },
        { field: 'status', headerName: 'Status' },
        { field: 'amount', headerName: 'Amount' },
        { field: 'transactionMode', headerName: 'Transaction Mode' },
        { field: 'createdAt', headerName: 'Submitted On' }
      ];

  return (
    <CrudPage
    name={"Withdraw"}
    columns={columns}
    isAdd={false}
    isUpdate={false}
    isDelete={false}
    fetchDatafn={getWithdraw}
    isApprove={true}
    isReject={true}
    approveAPIfn={approveWithdraw}
    rejectAPIfn={rejectWithdraw}
    />
  )
}

export default WithdrawPage