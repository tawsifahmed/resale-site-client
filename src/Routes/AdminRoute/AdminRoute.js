import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex items-center justify-center mt-96">
            <div className="w-24 h-24 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>

    }

    if (user && isAdmin) {
        return children;

    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

};

export default AdminRoute;