import axiosInstance from "./axiosInstance";

export const getSupport = async ()=>{
    let data = await axiosInstance.get('/support');
    // let modified = data.data.map((item)=>{
    //     item.userId = item.userId.username;
    //     return item
    // })
    return data.data;
}