// import { find } from "../../../coinexchang-backend/coinexchange-backend/model/UserModel";
import axiosInstance from "./axiosInstance";
import { toast } from "react-toastify";

export const getTrade = async ()=>{
    let data = await axiosInstance.get('/trades');
    console.log("trade",data)
    let modified = data.data.map((item)=>{
         item.username = item?.seller?.username || item?.buyer?.username
         item.status = item.status.name
         return item
     })
    return modified;
}

export const getSellingTrade = async ()=>{
    let data = await axiosInstance.get('/trades/getSellingTrade');
    console.log("trade",data)
    let modified = data.data.map((item)=>{
         item.username = item?.seller?.username || item?.buyer?.username
         item.status = item.status.name
         return item
     })
    return modified;
}

export const getBuyingTrade = async ()=>{
    let data = await axiosInstance.get('/trades/getBuyingTrade');
    console.log("trade",data)
    let modified = data.data.map((item)=>{
         item.username = item?.seller?.username || item?.buyer?.username
         item.status = item.status.name
         return item
     })
    return modified;
}


export const handleMoreInfo = async (id)=>{
    console.log('tradeId', id);
    window.location.href = `/trade/moreInfo?tradeId=${id}`;  
}


export const getTradeItems = async (id)=>{
    let data = await axiosInstance.get('/tradeItem/tradeItems/'+ id);
    console.log("tradeItems ",data)
    return data.data;
}