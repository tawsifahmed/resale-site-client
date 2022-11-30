import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div class="flex items-center justify-center mt-96">
            <div class="w-24 h-24 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>

    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children;

};

export default PrivateRoute;