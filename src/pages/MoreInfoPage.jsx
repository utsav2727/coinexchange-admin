import React, { useEffect } from 'react';
import { Container, Grid, Typography, Paper, TextField, Button, Box, Divider, Stack, Avatar, List, ListItem, ListItemText, ListItemIcon, Card, CardContent, CardActions } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTradeItems } from '../services/tradeService';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const TradeConversions = () => {

    const [tradeItems, setTradeItems] = useState([]);

    const query = useQuery();
    // Get the value of a specific query parameter, e.g., 'id'
    const tradeId = query.get('tradeId');

    console.log('tardeId', tradeId);

    useEffect(()=>{

        async function fetchData(){
            const tradeArray =  await getTradeItems(tradeId);
            setTradeItems(tradeArray);
        }

        fetchData();
    },[]);

    console.log('tradeImte', tradeItems);

    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom>
                Trade Conversations
            </Typography>
            
            <Grid container spacing={3}>
                {/* {tradeData.map((trade) => ( */}
                    <Grid item xs={12} sm={6} md={4} >
                        {tradeItems.map((item)=>
                        <Card>
                            {console.log('item ' , item)}
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Seller : {item.seller.username}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    Buyer : {item.buyer.username}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Status : {item.tradeId.status.name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                        size="small"
                                        color="primary"
                                        // onClick={() => {
                                        //     window.location.href = `/tradeChat/${trade.tradeId}/${trade._id}`;
                                        // }}
                                    >
                                        View Details
                                    </Button>
                            </CardActions>
                        </Card>
                        )}
                    </Grid>
                
            </Grid>
        </div>

    )
}

export default TradeConversions;