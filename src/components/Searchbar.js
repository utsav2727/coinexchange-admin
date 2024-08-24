import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axiosInstance from '../services/axiosInstance';


export default function SearchAppBar({setReload}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [rate, setRate] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const newCurrency = { name, code, rate: parseFloat(rate) };
      await axiosInstance.post('/currencies/add-new', newCurrency);
      // Optionally, refresh the currency list here after adding a new one
      handleClose();
      setReload();
      setName("")
      setCode("")
      setRate("")
    } catch (error) {
      console.error('Error adding currency:', error);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <h3>Manage Currency</h3>
          
          <Button
            variant="outlined"
            color='primary'
            onClick={handleClickOpen}
          >
            Add Currency
          </Button>
          </div>
      

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Currency</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="code"
            label="Code"
            type="text"
            fullWidth
            variant="outlined"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <TextField
            margin="dense"
            id="rate"
            label="Rate"
            type="number"
            fullWidth
            variant="outlined"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
