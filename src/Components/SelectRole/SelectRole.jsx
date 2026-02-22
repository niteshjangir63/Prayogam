import "./SelectRole.css";
import { useNavigate } from "react-router-dom";

export default function SelectRole({ onSelect }) {
    const navigate = useNavigate();
  return (
    <div className="role-container">
      <h2>Continue as</h2>

      <div className="role-cards">
        <div className="role-card" onClick={() => navigate("/signup")}>
          <span className="emoji">🌾</span>
          <h3>Farmer</h3>
          <p>Sell your crops directly</p>
        </div>

        <div className="role-card" onClick={() => navigate("/signup")}>
          <span className="emoji">🛒</span>
          <h3>Customer</h3>
          <p>Buy fresh products</p>
        </div>
      </div>
    </div>
  );
}