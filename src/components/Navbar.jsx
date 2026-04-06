import React from "react";
import {Link, useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {logoutUser} from "../api/authApi";

function Navbar(){

const {user,setUser} = useAuth();
const navigate = useNavigate();

const handleLogout = async ()=>{

try{

await logoutUser();

setUser(null); // clear user state

navigate("/login");

}catch(err){
console.log(err);
}

};

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">

<div className="container">

<Link className="navbar-brand fw-bold" to="/">
🌾 Millet Platform
</Link>

<button
className="navbar-toggler"
data-bs-toggle="collapse"
data-bs-target="#menu"
>
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="menu">

{/* SEARCH BAR */}

<form className="d-flex mx-auto w-50">

<input
className="form-control me-2"
type="search"
placeholder="Search millets..."
/>

<button className="btn btn-light">
Search
</button>

</form>


<ul className="navbar-nav ms-auto align-items-center">

{/* MARKETPLACE */}

<li className="nav-item">
<Link className="nav-link" to="/marketplace">
Marketplace
</Link>
</li>

{/* CART */}

<li className="nav-item">
<Link className="nav-link" to="/cart">
🛒
</Link>
</li>

{/* LOGIN OR USER MENU */}

{!user ? (

<li className="nav-item">
<Link className="nav-link" to="/login">
Login
</Link>
</li>

) : (

<li className="nav-item dropdown">

<a
className="nav-link dropdown-toggle"
href="#"
role="button"
data-bs-toggle="dropdown"
>

👤 {user?.name || "User"}

</a>

<ul className="dropdown-menu dropdown-menu-end">

<li>
<Link className="dropdown-item" to="/profile">
Profile
</Link>
</li>

<li>
<Link className="dropdown-item" to="/orders">
Orders
</Link>
</li>

<li>
<hr className="dropdown-divider"/>
</li>

<li>
<button
className="dropdown-item"
onClick={handleLogout}
>
Logout
</button>
</li>

</ul>

</li>

)}

</ul>

</div>

</div>

</nav>

)

}

export default Navbar;