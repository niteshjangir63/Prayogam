import { Route, Routes } from "react-router-dom";
import FarmerDashboard from "./pages/FarmerDashboard/FarmerDashboard";
import Login from "./Components/Authenthication/Login";
import SignUp from "./Components/Authenthication/SignUp";
import Otp from "./Components/Authenthication/Otp";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedOtpRoute from "./ProtectedOtpRoute";
import SelectRole from "./Components/SelectRole/SelectRole";
import MilletDashboard from "./pages/MilletDashBoard/MilletDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectRole />} />
      <Route
        path="/farmer"
        element={
          <ProtectedRoute>
            <FarmerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer"
        element={
          
            <MilletDashboard/>
          
        }
      />


      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={
        <ProtectedOtpRoute>
          <Otp />
        </ProtectedOtpRoute>
      } />
    </Routes>
  );
}

export default App;