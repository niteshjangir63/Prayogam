import api from "./axiosConfig";

export const getMillets=()=>{
return api.get("/millets");
}

export const addMillet=(data)=>{
return api.post("/millets/add",data);
}