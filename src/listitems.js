import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person4Icon from '@mui/icons-material/Person4';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddCardIcon from '@mui/icons-material/AddCard';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import ReceiptLongTwoToneIcon from '@mui/icons-material/ReceiptLongTwoTone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

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
    <ListItemButton onClick={()=>{window.location.href='/kyc'}}>
      <ListItemIcon>
        <AddCardIcon/>
      </ListItemIcon>
      <ListItemText primary="KYC Details" />
    </ListItemButton>
    
      {/* <ListItemIcon>
        <AddCardIcon/>
      </ListItemIcon>
      <ListItemText primary="Trade Details" /> */}
      
    <Accordion sx={{backgroundColor:"#EAF0F5"}}>
      <AccordionSummary
        DashboardIcon={<ReceiptLongTwoToneIcon />}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        style={{ backgroundcolor: (0, 0, 0, 0.04) }}
      >
        <ListItemButton>
      <ListItemIcon>
        <AddCardIcon/>
      </ListItemIcon>
      <ListItemText primary="Trade Details" />
    </ListItemButton>
      </AccordionSummary>
      <AccordionDetails>
        <ListItemButton onClick={() => { window.location.href = '/trade/selling' }}>
          <ListItemIcon>
            Selling Trade
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton onClick={() => { window.location.href = '/trade/buying' }}>
          <ListItemIcon>
            Buying Trade
          </ListItemIcon>
        </ListItemButton>
      </AccordionDetails>
    </Accordion>

    <ListItemButton onClick={()=>{window.location.href='/support'}}>
      <ListItemIcon>
        <SupportAgentIcon/>
      </ListItemIcon>
      <ListItemText primary="Support" />
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