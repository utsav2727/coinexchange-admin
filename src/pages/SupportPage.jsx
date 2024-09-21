import React from 'react'
import { CrudPage } from '../components/CrudPage.jsx/CrudPage'
import { getCurrencies } from '../services/currencyServices';
import { approveWithdraw, getWithdraw, rejectWithdraw } from '../services/withdrawService';
import { getSupport } from '../services/supportService';
//import { approvKyc, getKycDetails, rejectKyc } from '../services/kycService';

const SupportPage = () => {

    const columns = [
        { field: '_id', headerName: 'ID' },
        { field: 'username', headerName: 'UserName' },
        { field: 'email', headerName: 'Email' },
        { field: 'message', headerName: 'Message' },
        { field: 'createdAt', headerName: 'Submitted On' },
        { field: 'documentFile', headerName: 'Document File' },
      ];

  return (
    <CrudPage
    name={"Support"}
    columns={columns}
    isAdd={false}
    isUpdate={false}
    isDelete={false}
    fetchDatafn={getSupport}
    isApprove={false}
    isReject={false}
    // approveAPIfn={approvKyc}
    // rejectAPIfn={rejectKyc}
    />
  )
}

export default SupportPage