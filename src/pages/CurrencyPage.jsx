import React from 'react'
import { CrudPage } from '../components/CrudPage.jsx/CrudPage'
import { addCurrencies, deleteCurrencies, getCurrencies, updateCurrencies } from '../services/currencyServices';

const CurrencyPage = () => {

    const columns = [
        { field: 'name', headerName: 'Name' },
        { field: 'symbol', headerName: 'Symbol' },
        { field: 'tag', headerName: 'Tag' },
        { field: 'conversionRate', headerName: 'conversion rate' },
        { field: 'baseCurrency', headerName: 'Base Currency' },
        { field: 'createdAt', headerName: 'Created At' },
        { field: 'updatedAt', headerName: 'Updated At' }
      ];

    const addColumns = [
        { field: 'name', headerName: 'Name' },
        { field: 'symbol', headerName: 'Symbol' },
        { field: 'tag', headerName: 'Tag' },
        { field: 'conversionRate', headerName: 'conversion rate' },
        { field: 'baseCurrency', headerName: 'Base Currency' },
    ]  

    
  return (
    <CrudPage
    name={"currency"}
    columns={columns}
    fetchDatafn={getCurrencies}
    updateAPIfn={updateCurrencies}
    deleteAPIfn={deleteCurrencies}
    addDatafn={addCurrencies}
    addColumns={addColumns}
    />
  )
}

export default CurrencyPage
