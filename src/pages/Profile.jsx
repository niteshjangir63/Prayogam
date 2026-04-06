import React from "react";
import useAuth from "../hooks/useAuth";
import { logoutUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

function Profile(){

const {user,setUser} = useAuth();
const navigate = useNavigate();

const handleLogout = async ()=>{

try{
await logoutUser();
setUser(null);
navigate("/login");
}catch(err){
console.log(err);
}

};

if(!user){
return <p className="text-center mt-5">User not logged in</p>;
}

return(

<div className="container py-5">

<div className="row justify-content-center">

<div className="col-md-6">

<div className="card shadow-lg border-0">

{/* PROFILE HEADER */}

<div className="card-header bg-success text-white text-center">

<img
src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
alt="profile"
style={{width:"80px"}}
/>

<h4 className="mt-2 mb-0">{user.name || "User"}</h4>

<p className="mb-0 text-capitalize">
{user.role}
</p>

</div>


{/* PROFILE BODY */}

<div className="card-body">

<div className="row mb-3">

<div className="col-5 fw-bold">
Phone
</div>

<div className="col-7">
{user.phone}
</div>

</div>


<div className="row mb-3">

<div className="col-5 fw-bold">
User ID
</div>

<div className="col-7">
{user._id}
</div>

</div>


<div className="row mb-3">

<div className="col-5 fw-bold">
Role
</div>

<div className="col-7 text-capitalize">
{user.role}
</div>

</div>


<div className="row mb-3">

<div className="col-5 fw-bold">
Joined
</div>

<div className="col-7">
{new Date(user.createdAt || Date.now()).toLocaleDateString()}
</div>

</div>

</div>


{/* ACTION BUTTONS */}

<div className="card-footer d-flex gap-2">

<button
className="btn btn-outline-success w-100"
>
Edit Profile
</button>

<button
className="btn btn-danger w-100"
onClick={handleLogout}
>
Logout
</button>

</div>

</div>

</div>

</div>

</div>

)

}

export default Profile;