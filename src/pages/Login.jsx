import React,{useState} from "react";
import {sendOTP,verifyOTP} from "../api/authApi";
import Loader from "../components/Loader";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login(){

const [phone,setPhone]=useState("");
const [otp,setOtp]=useState("");

const [otpSent,setOtpSent]=useState(false);
const [loading,setLoading]=useState(false);

const navigate = useNavigate();
const {setUser} = useAuth();


// SEND OTP
const handleSendOtp = async()=>{

if(!phone){
alert("Enter phone number");
return;
}

setLoading(true);

try{

await sendOTP({phone});

setOtpSent(true);

alert("OTP sent. Check backend terminal.");

}catch(err){
console.log(err);
}

setLoading(false);

};


// VERIFY OTP
const handleVerifyOtp = async()=>{

if(!otp){
alert("Enter OTP");
return;
}

setLoading(true);

try{

const res = await verifyOTP({
phone,
otp
});

const user = res.data;

setUser(user); // save user in context

// CLEAR INPUTS
setPhone("");
setOtp("");
setOtpSent(false);

alert("Login successful");

// REDIRECT BASED ON ROLE
if(user.role === "farmer"){
navigate("/farmer/dashboard");
}
else if(user.role === "admin"){
navigate("/admin/dashboard");
}
else{
navigate("/customer/dashboard");
}

}catch(err){

console.log(err);
alert("Invalid OTP");

}

setLoading(false);

};


if(loading) return <Loader/>

return(

<div className="row justify-content-center">

<div className="col-md-4">

<h3 className="mb-3 text-center">Login</h3>

<input
className="form-control mb-3"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>


{/* SEND OTP BUTTON */}

{!otpSent && (

<button
className="btn btn-success w-100"
onClick={handleSendOtp}
>

Send OTP

</button>

)}


{/* OTP INPUT */}

{otpSent && (

<>

<input
className="form-control mt-3"
placeholder="Enter OTP"
value={otp}
onChange={(e)=>setOtp(e.target.value)}
/>

<button
className="btn btn-primary w-100 mt-3"
onClick={handleVerifyOtp}
>

Verify OTP

</button>

</>

)}

</div>

</div>

)

}

export default Login;