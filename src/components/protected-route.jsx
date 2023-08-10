/* eslint-disable react/jsx-boolean-value */
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'


export default function ProtectedRoute ({  redirectPath = "/"}) {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};