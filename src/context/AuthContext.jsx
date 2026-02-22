import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [canAccessOtp, setCanAccessOtp] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [generatedOtp,setGeneratedOtp] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        canAccessOtp,
        setCanAccessOtp,
        isAuthenticated,
        setIsAuthenticated,
        generatedOtp,
        setGeneratedOtp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}