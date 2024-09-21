import React from 'react'
import { CrudPage } from '../components/CrudPage.jsx/CrudPage'
import { getCurrencies } from '../services/currencyServices';
import { approveWithdraw, getWithdraw, rejectWithdraw } from '../services/withdrawService';
import { approvKyc, getKycDetails, rejectKyc } from '../services/kycService';

const KycPage = () => {

    const columns = [
        { field: '_id', headerName: 'ID' },
        { field: 'userId', headerName: 'UserName' },
        { field: 'documentType', headerName: 'Document Type' },
        { field: 'documentNumber', headerName: 'Document Number' },
        { field: 'documentFile', headerName: 'Document File' },
        { field: 'status', headerName: 'Status' },
        { field: 'createdAt', headerName: 'Submitted On' }
      ];

  return (
    <CrudPage
    name={"KYC"}
    columns={columns}
    isAdd={false}
    isUpdate={false}
    isDelete={false}
    fetchDatafn={getKycDetails}
    isApprove={true}
    isReject={true}
    approveAPIfn={approvKyc}
    rejectAPIfn={rejectKyc}
    />
  )
}

export default KycPage