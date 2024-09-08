import { Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, styled, TextField } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

const CustomModal = ({handleClose, open, addColumns, handleSubmit, mode,selectedRow, handleEdit}) => {

    console.log(selectedRow);
  return (
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {mode=='create'? 'Create ': ' Edit '} Currency
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <Grid component="form" onSubmit={(e)=>{mode == 'create' ? handleSubmit(e): handleEdit(e, selectedRow._id)}} container spacing={2}>
            {addColumns.map((item)=>{
                return <Grid item xs={12} md={6}>
                <TextField
                  defaultValue={mode=='edit'? selectedRow[item.field] : ""}
                  margin="normal"
                  required
                  fullWidth
                  size="small"
                  id={item.field}
                  label={item.headerName}
                  name={item.field}
                />
              </Grid>
            })}
            <Grid item xs={12} md={6}>
              <Button 
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
                {mode=='create'? 'Add': 'Update'}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        </BootstrapDialog>
  )
}

export default CustomModal