import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
