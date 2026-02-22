import { Link, useNavigate } from "react-router-dom";
import "./Otp.css";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

export default function Otp() {
  const {
    generatedOtp,
    setCanAccessOtp,
    setIsAuthenticated,
  } = useAuth();

  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verifyOtp = () => {
    console.log("Entered OTP:", otp);
    console.log("Generated OTP:", generatedOtp);
    if (Number(otp) === generatedOtp) {
      alert("verification Succeesfully!")
      setIsAuthenticated(true);
      console.log("AUTH SET TO TRUE");
      setCanAccessOtp(false);
      setTimeout(() => {
        navigate("/farmer");
      }, 0);

    } else {
      alert("Wrong OTP!");
    }
  };




  return (
    <div className="Otp">
      <h1>Verify OTP</h1>

      <div className="inputs">
        <div className="input">
          <label htmlFor="otp">Enter OTP</label>
          <input
            id="otp"
            maxLength={6}
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, ""))
            }
            placeholder="Enter OTP"
          />
        </div>

        <button onClick={verifyOtp}>
          Verify OTP
        </button>

        <div className="extra">
          <span>Didn’t receive OTP?</span>
          <button className="resend" type="button">
            Resend OTP
          </button>
        </div>

        <span className="back">
          Go back to <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}