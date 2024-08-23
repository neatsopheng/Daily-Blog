import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem('token')
  // send token to server to verify

  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PublicRoute;
