import React from 'react'
import CustomTable from '../components/CustomTable'
import { useEffect } from 'react';
import { addCurrencies, deleteCurrencies, getCurrencies, updateCurrencies } from '../services/currencyServices';
import { useState } from 'react';
import { Box, Button, DialogContent, Grid, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import CustomModal from '../components/Modal/CustomModal';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const CurrencyPage = () => {

    const [open, setOpen] = React.useState(false);
    const [reload, setReload] = useState(false);
    const [mode, setMode] = useState('create');
    const [selectedRow,setSelectedRow] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
      { field: '_id', headerName: 'ID' },
      { field: 'name', headerName: 'Name' },
      { field: 'symbol', headerName: 'Symbol' },
      { field: 'tag', headerName: 'Tag' },
      { field: 'conversionRate', headerName: 'conversion rate' },
      { field: 'createdAt', headerName: 'Created At' },
      { field: 'updatedAt', headerName: 'Updated At' },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        renderCell: (params) => (
          <div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginRight: 5 }}
              onClick={() => handleEdit(params.row)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleDelete(params.row)}
            >
              Delete
            </Button>
          </div>
        ),
      },
    ];

    const handleEdit= async (row)=>{

        console.log('row', row);
       
        setReload((prev)=>!prev);
        setMode('edit');
        setOpen(true);
        setSelectedRow(row)
    };

    const handleUpdate = async (event, id)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const ids = addColumns.map((item)=>item.field);
        
        let body = {};
        
        for(let item of ids){
            body[item] = data.get(item);
        }
        console.log('body', body);
        await updateCurrencies(id, body);
        setTimeout(()=>{
            handleClose();
        }, 1000)

        setReload((prev)=>!prev);
    }

    const handleDelete = async (row)=>{

        await deleteCurrencies(row._id);
        setReload((prev)=>!prev);
    }

    const addColumns = [
        { field: 'name', headerName: 'Name' },
      { field: 'symbol', headerName: 'Symbol' },
      { field: 'tag', headerName: 'Tag' },
      { field: 'conversionRate', headerName: 'conversion rate' },
    ]

    const [rows, setRows] = useState([]);


    useEffect(()=>{
        async function fetchData(){
            let response = await getCurrencies();
            setRows(response);
        }
        fetchData();
    },[reload]);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const ids = addColumns.map((item)=>item.field);
        
        let body = {};
        
        for(let item of ids){
            body[item] = data.get(item);
        }
        console.log('body', body);
        await addCurrencies(body);
        setTimeout(()=>{
            handleClose();
        }, 1000)

        setReload((prev)=>!prev);

    }
    

  return (
    <div>
        <h3>Manage Currency</h3>
        <Box justifyItems={'end'} textAlign={'end'} sx={{my:2}}>
            <Button variant='outlined' onClick={handleClickOpen}>Add</Button>
        </Box>
        <CustomModal selectedRow={selectedRow} open={open} mode={mode} addColumns={addColumns} handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleEdit= {handleUpdate}
        />
        <CustomTable rows={rows} columns={columns}/>
    </div>
  )
}

export default CurrencyPage
