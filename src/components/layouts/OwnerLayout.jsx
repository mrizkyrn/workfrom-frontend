import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const OwnerLayout = () => {
   return (
      <div>
         <h1>owner layout</h1>
         <Outlet />
         <Footer />
      </div>
   );
};

export default OwnerLayout;
