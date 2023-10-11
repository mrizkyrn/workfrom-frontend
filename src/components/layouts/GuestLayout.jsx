import { Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../../contexts/ContextProvider";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function GuestLayout() {
   // const { userToken } = useStateContext();
   
   // if (userToken) {
   //    return <Navigate to="/" />;
   // } else {
   //    console.log("userToken", userToken);
   // }

   return (
      <div id="guestLayout">
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
}
