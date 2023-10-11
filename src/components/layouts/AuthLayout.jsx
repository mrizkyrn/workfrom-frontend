import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const AuthLayout = () => {
   const { currentUser, userToken } = useStateContext();

   if (userToken) {
      if (currentUser.role === "admin") {
         return <Navigate to="/admin" />;
      } else if (currentUser.role === "owner") {
         return <Navigate to="/owner" />;
      } else {
         return <Navigate to="/" />;
      }
   }

   return (
      <div>
         <Outlet />
      </div>
   );
};

export default AuthLayout;
