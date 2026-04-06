import React,{createContext,useState,useEffect} from "react";
import {getProfile} from "../api/authApi";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);

useEffect(()=>{

const loadUser=async()=>{

try{
const res=await getProfile();
setUser(res.data);
}
catch(err){
setUser(null);
}

setLoading(false);

}

loadUser();

},[])

return(

<AuthContext.Provider value={{user,setUser,loading}}>
{children}
</AuthContext.Provider>

)

}