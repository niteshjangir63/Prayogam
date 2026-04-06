import api from "./axiosConfig";

export const sendOTP = (data)=>{
return api.post("/auth/send-otp",data);
}

export const verifyOTP = (data)=>{
return api.post("/auth/verify-otp",data);
}

export const getProfile = ()=>{
return api.get("/users/profile");
}

export const logoutUser = ()=>{
return api.post("/auth/logout");
}