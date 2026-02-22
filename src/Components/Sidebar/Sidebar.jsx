import "./Sidebar.css"
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">🌾 Prayogam</h2>

      <nav>
       
        <Link className="active" to={"/"}>Dashboard</Link>
        <Link to={"/products"}>My Products</Link>
        <Link to={"/add"}>Add Millets</Link>
        <Link to={"/orders"}>Orders</Link>
        <Link className="logout" to={"/login"}>Logout</Link>
        
      </nav>
    </aside>
  );
}