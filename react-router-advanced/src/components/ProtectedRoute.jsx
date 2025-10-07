import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Custom hook for authentication
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if a token exists in local storage
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      setIsAuthenticated(token !== null);
      setLoading(false);
    };

    checkAuth();

    // Listen for storage changes (logout from other tabs)
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return { isAuthenticated, loading };
};

// Function that checks if the user is authenticated (for backward compatibility)
const isAuthenticated = () => {
  // Check if a token exists in local storage
  return localStorage.getItem("authToken") !== null;
};

// Protected Route component that checks for authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated: authenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return authenticated ? (
    // If authenticated, render the children components
    children
  ) : (
    // If not authenticated, redirect to the login page
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
export { isAuthenticated, useAuth };
