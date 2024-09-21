import axiosInstance from "./axiosInstance";
import { toast } from "react-toastify";

export const getWithdraw = async ()=>{
    let data = await axiosInstance.get('/withdraw');
    let modified = data.data.map((item)=>{
        item.currencyId = item.currencyId.tag;
        item.status = item.status.name;
        item.username= item.userId.username;
        item.useremail = item.userId.email;
        return item
    })
    return modified;
}

export const approveWithdraw = async (id)=>{
    try {
        console.log('approve ',id);

        let data = await axiosInstance.post(`/withdraw/approve/${id}`, {});
        toast.success('Approved success')
        return data.data;
    } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message); 
    }

}

export const rejectWithdraw = async (id)=>{
    try {
        console.log('approve ',id);

        let data = await axiosInstance.post(`/withdraw/reject/${id}`, {});
        toast.success('Rejected success')
        return data.data;
    } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message); 
    }

}