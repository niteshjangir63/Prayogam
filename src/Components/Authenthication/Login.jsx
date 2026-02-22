import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { setCanAccessOtp, setGeneratedOtp } = useAuth();
  const [number, setNumber] = useState("");

  useEffect(() => {
    setCanAccessOtp(false);
  }, []);

  const sendOtp = (e) => {
    e.preventDefault();
    if (number.length !== 10) return;

    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log("OTP (demo only):", otp);

    setGeneratedOtp(otp);
    setCanAccessOtp(true);
    navigate("/otp");
  };

  return (
    <div className="Login">
      <h1>Log In</h1>

      <div className="inputs">
        <form onSubmit={sendOtp}>
          <div className="input">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              id="mobile"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={number}
              onChange={(e) =>
                setNumber(e.target.value.replace(/\D/g, ""))
              }
              placeholder="Enter mobile number"
            />
          </div>

          <button type="submit" disabled={number.length !== 10}>
            Send OTP
          </button>

          <span>
            Don&apos;t have an account? <Link to="/signup">Signup</Link>
          </span>
        </form>
      </div>
    </div>
  );
}