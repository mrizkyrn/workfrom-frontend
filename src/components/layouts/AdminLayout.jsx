import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const AdminLayout = () => {
   return (
      <div>
         <h1>admin layout</h1>
         <Outlet />
         <Footer />
      </div>
   );
};

export default AdminLayout;
