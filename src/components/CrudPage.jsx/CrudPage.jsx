import { Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import CustomModal from '../Modal/CustomModal'
import CustomTable from '../CustomTable'
import { useState } from 'react'

export const CrudPage = ({name, isAdd= true,isDelete=true, isUpdate=true, columns, addColumns,
    updateAPIfn, deleteAPIfn, fetchDatafn, addDatafn,
    isApprove=false, isReject=false,
    approveAPIfn, rejectAPIfn
 }) => {

    const [open, setOpen] = React.useState(false);
    const [reload, setReload] = useState(false);
    const [mode, setMode] = useState('create');
    const [selectedRow,setSelectedRow] = useState({});
    const [rows, setRows] = useState([]);

    const heading = `Manage ${name}`;

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit= async (row)=>{
        console.log('row', row); 
        setReload((prev)=>!prev);
        setMode('edit');
        setOpen(true);
        setSelectedRow(row)
    };


    const handleDelete = async (row)=>{
        await deleteAPIfn(row._id);
        setReload((prev)=>!prev);
    }


    const handleApprove = async (row)=>{
      await approveAPIfn(row._id);
      setReload((prev)=>!prev);
    }

    const handleReject = async (row)=>{
      await rejectAPIfn(row._id);
      setReload((prev)=>!prev);
    }


    console.log('columns', columns);   
    let modifiedColumns = [...columns, 
        {
                field: 'actions',
                headerName: 'Actions',
                width: 150,
                renderCell: (params) => (
                  <div>
                    {isUpdate && <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginRight: 5 }}
                      onClick={() => handleEdit(params.row)}
                    >
                      Edit
                    </Button>}
                    {isDelete &&  <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      style={{ marginRight: 5 }}
                      onClick={() => handleDelete(params.row)}
                    >
                      Delete
                    </Button>}

                    {isApprove &&  <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      style={{ marginRight: 5 }}
                      onClick={() => handleApprove(params.row)}
                    >
                      Approve
                    </Button>}

                    {isReject &&  <Button
                      variant="contained"
                      color="error"
                      size="small"
                      style={{ marginRight: 5 }}
                      onClick={() => handleReject(params.row)}
                    >
                      Reject
                    </Button>}

                  </div>
                ),
              }
        ]

    console.log('modifiedColumns' , columns);

    const handleUpdate = async (event, id)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const ids = addColumns.map((item)=>item.field);
        
        let body = {};
        
        for(let item of ids){
            body[item] = data.get(item);
        }
        console.log('body', body);
        await updateAPIfn(id, body);
        setTimeout(()=>{
            handleClose();
        }, 1000)

        setReload((prev)=>!prev);
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const ids = addColumns.map((item)=>item.field);
        
        let body = {};
        
        for(let item of ids){
            body[item] = data.get(item);
        }
        console.log('body', body);
        await addDatafn(body);
        setTimeout(()=>{
            handleClose();
        }, 1000)

        setReload((prev)=>!prev);

    }

    useEffect(()=>{
        async function fetchData(){
            let response = await fetchDatafn();
            setRows(response);
        }
        fetchData();
    },[reload]);

    console.log('rows', rows);

  return (
    <div>
        <h3>{heading}</h3>
        <Box justifyItems={'end'} textAlign={'end'} sx={{my:2}}>
            {isAdd ? <Button variant='outlined' onClick={handleClickOpen}>Add</Button>: null}
        </Box>
        {isAdd ? <CustomModal selectedRow={selectedRow} open={open} mode={mode} addColumns={addColumns} handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleEdit= {handleUpdate}
        />: null} 
        <CustomTable rows={rows} columns={modifiedColumns}/>
    </div>
  )
}
