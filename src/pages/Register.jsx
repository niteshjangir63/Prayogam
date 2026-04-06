import React, { useState } from "react";
import RoleToggle from "../components/RoleToggle";
import { sendOTP, verifyOTP } from "../api/authApi";
import Loader from "../components/Loader";

function Register() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");

    const [role, setRole] = useState("customer");

    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);


    // SEND OTP
    const handleSendOtp = async () => {

        if (!name || !phone) {
            alert("Enter name and phone");
            return;
        }

        setLoading(true);

        try {

            await sendOTP({
                name,
                phone,
                role
            });

            setOtpSent(true);

            alert("OTP sent successfully");

        } catch (err) {
            console.log(err);
        }

        setLoading(false);

    };


    // VERIFY OTP
    const handleVerifyOtp = async () => {

        if (!otp) {
            alert("Enter OTP");
            return;
        }

        setLoading(true);

        try {

            await verifyOTP({
                phone,
                otp
            });

            alert("Registration successful");

            setName("");
            setPhone("");
            setOtp("");
            setOtpSent(false);

        } catch (err) {
            console.log(err);
            alert("Invalid OTP");
        }

        setLoading(false);

    };


    if (loading) return <Loader />

    return (

        <div className="container d-flex justify-content-center align-items-center vh-100">

            <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>

                <div className="card-body">

                    <h3 className="text-center mb-2">Create Account 🚀</h3>

                    <p className="text-muted text-center mb-4">
                        Register using your phone number
                    </p>

                    <input
                        className="form-control mb-3"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <RoleToggle role={role} setRole={setRole} />


                    {/* SEND OTP BUTTON */}

                    {!otpSent && (

                        <button
                            className="btn btn-success w-100 mt-3"
                            onClick={handleSendOtp}
                        >

                            Send OTP 📩

                        </button>

                    )}


                    {/* OTP INPUT */}

                    {otpSent && (

                        <>

                            <input
                                className="form-control mt-3"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />

                            <button
                                className="btn btn-primary w-100 mt-3"
                                onClick={handleVerifyOtp}
                            >

                                Verify OTP 🔐

                            </button>

                            <button
                                className="btn btn-link w-100 mt-2"
                                onClick={() => setOtpSent(false)}
                            >
                                Change Details
                            </button>

                        </>

                    )}


                </div>

            </div>

        </div>

    )

}

export default Register;
