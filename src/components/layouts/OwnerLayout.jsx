import { Navigate, Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useStateContext } from "../../contexts/ContextProvider";

const OwnerLayout = () => {
   const { currentUser, userToken } = useStateContext();

   if (!userToken) {
      return <Navigate to="/login" />;
   }
   if (currentUser.role !== "owner") {
      return <Navigate to="/" />;
   }

   return (
      <div>
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default OwnerLayout;
