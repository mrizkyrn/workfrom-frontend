import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const AuthRequired = () => {
   // auth logic here
   const { currentUser, userToken } = useStateContext();

   if (!userToken) {
      return <Navigate to="/login" />;
   } else if (currentUser.role === "admin") {
      return <Navigate to="/admin" />;
   } else if (currentUser.role === "owner") {
      return <Navigate to="/owner" />;
   }

   return <Outlet />;
};

export default AuthRequired;
