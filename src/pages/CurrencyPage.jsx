import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import axiosInstance from '../services/axiosInstance';
import SearchAppBar from '../components/Searchbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';




export default function CurrencyPage() {
    
    const [currRate, setCurrRate] = useState([]);
    const [reload, setReload] = useState(false);
    
    const handleDelete = async (id) => {
        try {
            const data = await axiosInstance.delete(`/deleteCurr/${id}`);
            console.log('data', data);
            setReload(!reload);
        } catch (error) {
            console.error('Error deleting currency:', error);
        }
    };
    
    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'Name', width: 200 },
      { field: 'code', headerName: 'Code', width: 100 },
      { field: 'rate', headerName: 'Rate', width: 130 },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        renderCell: (params) => (
          <>
            {console.log(params)}
            
            <Button variant="contained"  >
                Edit
            </Button>
        
            <Button variant="contained" color="error" onClick={() => handleDelete(params.row._id)} style={{marginLeft:"5px"}} >
                Delete
            </Button>
            
          </>
        ),
      },
    ];
    
    


    useEffect(()=>{
        async function fetchData(){
            const data = await axiosInstance.get('/currencies')
            console.log('data', data);
            setCurrRate(data.data)
        }
        fetchData();
    },[reload])

    console.log('userData', currRate)

    const handleEdit = (row) => {
        // Implement your edit logic here
        // For example, you could open a dialog with a form to edit the row
        console.log('Editing row:', row);
    };

    


  return (
      <div>
          <SearchAppBar setReload={setReload}/>
          <div style={{ height: 600, width: '100%' }}>
              <DataGrid
                  getRowId={(item) => item._id}
                  rows={currRate}
                  columns={columns}
                  initialState={{
                      pagination: {
                          paginationModel: { page: 0, pageSize: 10 },
                      },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
              />
          </div>
      </div>
  );
}