import React from 'react';
import { Navigate, Route,useLocation,Outlet } from 'react-router-dom';

const PrivateRoutes = (component) => {
    var username=localStorage.getItem("username");
    var senha=localStorage.getItem("senha");

    let location = useLocation();
    if (username!=false){
        return <Outlet />;
    }
    return (
         <Navigate to="/" state={{ from: location }} />
    )
}

export default PrivateRoutes