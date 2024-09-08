import React from 'react'
import { CrudPage } from '../components/CrudPage.jsx/CrudPage'
import { getCurrencies } from '../services/currencyServices';
import { approveDeposits, getDeposits, rejectDeposits } from '../services/depositServices';

const DepositPage = () => {

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
    name={"Deposits"}
    columns={columns}
    isAdd={false}
    isUpdate={false}
    isDelete={false}
    fetchDatafn={getDeposits}
    isApprove={true}
    isReject={true}
    approveAPIfn={approveDeposits}
    rejectAPIfn={rejectDeposits}
    />
  )
}

export default DepositPage