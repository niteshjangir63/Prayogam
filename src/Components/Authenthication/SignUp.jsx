
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import "./SignUp.css"
export default function SignUp() {

    const navigate = useNavigate();
    const { setCanAccessOtp } = useAuth();
    const [number, setNumber] = useState("");
    const { setOtp } = useAuth();

    const sendOtp = (e) => {
        e.preventDefault();

        if (number.length !== 10) return;
        const newOtp = Math.floor(100000 + Math.random() * 900000);
        setOtp(newOtp);
        
        
        setCanAccessOtp(true);
        navigate("/otp");
    };

    return (
        <div className="Signup">
            <h1>Signup</h1>

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

                    <button type="submit">Send OTP</button>

                    <span>
                        Already have an account? <Link to="/login">Login</Link>
                    </span>
                </form>
            </div>
        </div>
    )
}