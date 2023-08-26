import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'


export default function ProtectedRoute ({ redirectPath }) {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  if (isLoggedIn) {
    return <Outlet />;
  } 
    return <Navigate to={redirectPath}/>;

};