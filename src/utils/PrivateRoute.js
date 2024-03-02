import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    // Check authentication status from backend or local storage
    const isAuthenticated = localStorage.getItem('token') !== null; // Assuming you store the token in local storage

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
