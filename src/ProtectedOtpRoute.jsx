import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function ProtectedOtpRoute({ children }) {
  const { canAccessOtp } = useAuth();

  if (!canAccessOtp) {
    return <Navigate to="/login" replace />;
  }

  return children;
}