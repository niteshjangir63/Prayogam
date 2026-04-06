import api from "./axiosConfig";

export const getOrders=()=>{
return api.get("/orders");
}

export const createOrder=(data)=>{
return api.post("/orders",data);
}