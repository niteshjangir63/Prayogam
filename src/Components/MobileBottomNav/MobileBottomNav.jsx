import { Link } from "react-router-dom";
import "./MobileBottomNav.css"
export default function MobileBottomNav() {
  return (
    <div className="mobile-nav">
      <Link to={"/"}>🏠</Link>
      <Link to={"/products"}>📦</Link>
      <Link to={"/add"}>➕</Link>
      <Link to={"/orders"}>🧾</Link>
      <Link to={"/logout"}>⏻</Link>
    </div>
  );
}