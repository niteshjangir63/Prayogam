import React from "react";
import {Link,useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {logoutUser} from "../api/authApi";

function Navbar(){

const {user,setUser} = useAuth();
const navigate = useNavigate();


// LOGOUT FUNCTION
const handleLogout = async () => {

try{

await logoutUser(); // backend logout API

}
catch(err){
console.log(err);
}

// remove user from context
setUser(null);

// redirect to login
navigate("/login");

};


return(

<nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">

<div className="container">

<Link className="navbar-brand fw-bold" to="/">
🌾 Millet Platform
</Link>


<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#menu"
>
<span className="navbar-toggler-icon"></span>
</button>


<div className="collapse navbar-collapse" id="menu">

<ul className="navbar-nav ms-auto align-items-center">

{/* CUSTOMER DASHBOARD */}

{user?.role === "customer" && (

<li className="nav-item">
<Link
className="nav-link"
to="/customer/dashboard"
>
Customer Dashboard
</Link>
</li>

)}


{/* FARMER DASHBOARD */}

{user?.role === "farmer" && (

<li className="nav-item">
<Link
className="nav-link"
to="/farmer/dashboard"
>
Farmer Dashboard
</Link>
</li>

)}


{/* PROFILE */}

{user && (

<li className="nav-item">
<Link
className="nav-link"
to="/profile"
>
Profile
</Link>
</li>

)}


{/* USER NAME */}

{user && (

<li className="nav-item">

<span className="nav-link fw-semibold">
👤 {user.name}
</span>

</li>

)}


{/* LOGIN */}

{!user && (

<li className="nav-item">
<Link
className="nav-link"
to="/login"
>
Login
</Link>
</li>

)}


{/* LOGOUT */}

{user && (

<li className="nav-item">

<button
className="btn btn-light ms-2"
onClick={handleLogout}
>
Logout
</button>

</li>

)}

</ul>

</div>

</div>

</nav>

)

}

export default Navbar;