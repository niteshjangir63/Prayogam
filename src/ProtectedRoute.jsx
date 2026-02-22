import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

console.log("ProtectedRoute file loaded");

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  console.log("ProtectedRoute auth:", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}