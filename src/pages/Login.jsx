import React, { useState } from "react";
import { sendOTP, verifyOTP } from "../api/authApi";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


function Login() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");

    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { setUser } = useAuth();

    // SEND OTP
    const handleSendOtp = async () => {
        if (!phone) {
            alert("Please enter phone number");
            return;
        }

        setLoading(true);

        try {
            await sendOTP({ phone });
            setOtpSent(true);
            alert("OTP sent successfully");
        } catch (err) {
            console.log(err);
            alert("Failed to send OTP");
        }

        setLoading(false);
    };

    // VERIFY OTP
    const handleVerifyOtp = async () => {
        if (!otp) {
            alert("Please enter OTP");
            return;
        }

        setLoading(true);

        try {
            const res = await verifyOTP({
                phone,
                otp,
            });

            const user = res.data;

            setUser(user);

            setPhone("");
            setOtp("");
            setOtpSent(false);

            alert("Login successful");

            if (user.role === "farmer") {
                navigate("/farmer/dashboard");
            } else if (user.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/customer/dashboard");
            }
        } catch (err) {
            console.log(err);
            alert("Invalid OTP");
        }

        setLoading(false);
    };

    if (loading) return <Loader />;

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4"
                style={{ width: "400px", borderRadius: "15px" }}
            >
                <div className="card-body">
                    <h3 className="text-center mb-2">Welcome Back 👋</h3>
                    <p className="text-muted text-center mb-4">
                        Login using your phone number
                    </p>

                    {/* PHONE INPUT */}
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    {/* SEND OTP */}
                    {!otpSent && (
                        <button
                            className="btn btn-success w-100"
                            onClick={handleSendOtp}
                        >
                            Send OTP 📩
                        </button>
                    )}

                    {/* OTP SECTION */}
                    {otpSent && (
                        <>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Enter OTP</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>

                            <button
                                className="btn btn-primary w-100"
                                onClick={handleVerifyOtp}
                            >
                                Verify OTP 🔐
                            </button>

                            <button
                                className="btn btn-link w-100 mt-2"
                                onClick={() => setOtpSent(false)}
                            >
                                Change phone number
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
