import { Navigate } from "react-router-dom";

// Function that checks if the user is authenticated
const isAuthenticated = () => {
  // Check if a token exists in local storage
  return localStorage.getItem("authToken") !== null;
};

// Protected Route component that checks for authentication
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? (
    // If authenticated, render the children components
    children
  ) : (
    // If not authenticated, redirect to the login page
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
export { isAuthenticated };
