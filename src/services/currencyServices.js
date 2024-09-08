import axiosInstance from "./axiosInstance";
import { toast } from "react-toastify";

export const getCurrencies = async ()=>{
    let data = await axiosInstance.get('/currency');
    console.log('data', data.data);
    return data.data;
}

export const addCurrencies = async (body)=>{
    try {
        let data = await axiosInstance.post('/currency', body);
        toast.success('Created Successfully');
        console.log(data);
    } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message); 
    }

}

export const updateCurrencies = async (id, body)=>{
    try {
        let data = await axiosInstance.put(`/currency/${id}`, body);
        toast.success('Updated Successfully');
        console.log(data);
    } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message); 
    }

}

export const deleteCurrencies = async (id)=>{
    try {
        let data = await axiosInstance.delete(`/currency/${id}`);
        toast.success('Deleted Successfully');
        console.log(data);
    } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message); 
    }

}