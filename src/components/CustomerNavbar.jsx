import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/authApi";

function CustomerNavbar(){

const navigate = useNavigate();

const handleLogout = async ()=>{

try{

await logoutUser(); 
navigate("/login");

}
catch(err){
console.log("Logout error:",err);
}

}

return(

<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">

<div className="container">

{/* LOGO */}

<Link className="navbar-brand fw-bold text-success" to="/marketplace">
🌾 MilletMart
</Link>

{/* MENU */}

<div className="ms-auto d-flex gap-3">

<Link to="/cart" className="btn btn-outline-success">
🛒 Cart
</Link>

<Link to="/profile" className="btn btn-outline-success">
👤 Profile
</Link>

<button
className="btn btn-success"
onClick={handleLogout}
>
Logout
</button>

</div>

</div>

</nav>

)

}

export default CustomerNavbar;