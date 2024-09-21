import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";
// import { toast } from "react-toastify";

export const getKycDetails = async ()=>{
    let data = await axiosInstance.get('/kyc');
    let modified = data.data.map((item)=>{
        item.userId = item.userId.username;
        return item
    })
    return modified;
}

export const approvKyc = async (id) => {
    try {
        console.log('approve ',id);

        let data = await axiosInstance.put(`/kyc/approve/${id}`, {});
        toast.success('Approved success')
        return data.data;
    } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message); 
    }
}

export const rejectKyc = async (id) => {
    try {
        console.log('approve ',id);

        let data = await axiosInstance.put(`/kyc/reject/${id}`, {});
        toast.success('Approved success')
        return data.data;
    } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message); 
    }
}