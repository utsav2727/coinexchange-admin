import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import axiosInstance from '../services/axiosInstance';

const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
  { field: 'username', headerName: 'User Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'password', headerName: 'Password', width: 130 }
];

export default function UserPage() {


    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const data = await axiosInstance.get('/users')
            console.log('data', data);
            setUserData(data.data)
        }
        fetchData();
    },[])

    console.log('userData', userData)


  return (
    <div>
        <h3>Manage Users</h3>
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        getRowId={(item)=>item._id}
        rows={userData}
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