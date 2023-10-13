import { Navigate, Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useStateContext } from "../../contexts/ContextProvider";

const CustomerLayout = () => {
   const { currentUser } = useStateContext();

   if (currentUser.role === "owner") {
      return <Navigate to="/owner" />;
   }
   
   return (
      <div>
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default CustomerLayout;
