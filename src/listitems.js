import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person4Icon from '@mui/icons-material/Person4';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddCardIcon from '@mui/icons-material/AddCard';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton onClick={()=>{window.location.href='/'}}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/users'}}>
      <ListItemIcon>
        <Person4Icon/>
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/currency'}}>
      <ListItemIcon>
        <CurrencyExchangeIcon/>
      </ListItemIcon>
      <ListItemText primary="Currency" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/deposit'}}>
      <ListItemIcon>
        <AddCardIcon/>
      </ListItemIcon>
      <ListItemText primary="Deposits" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href='/withdraw'}}>
      <ListItemIcon>
        <AddCardIcon/>
      </ListItemIcon>
      <ListItemText primary="Withdraw" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
  </React.Fragment>
);