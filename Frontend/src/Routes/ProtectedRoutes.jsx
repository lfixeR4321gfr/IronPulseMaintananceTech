import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes({ role }) {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (!token) {
        return <Navigate to="/login" replace />;

    }
    if (role && userRole !== role) {
        return <Navigate to="/login" replace />;

    }
    return <Outlet />;
}

export default ProtectedRoutes;