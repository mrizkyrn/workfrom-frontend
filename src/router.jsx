import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "./components/layouts/CustomerLayout.jsx";
import AdminLayout from "./components/layouts/AdminLayout.jsx";
import Register from "./views/Register.jsx";
import Landing from "./views/Landing.jsx";
import AdminDashboard from "./views/AdminDashboard.jsx";
import NotFound from "./views/NotFound.jsx";
import Login from "./views/login.jsx";
import AuthLayout from "./components/layouts/AuthLayout.jsx";
import OwnerLayout from "./components/layouts/OwnerLayout.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <AuthLayout />,
      children: [
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
      ],
   },
   {
      path: "/",
      element: <CustomerLayout />,
      children: [
         {
            index: true,
            element: <Landing />,
         },
      ],
   },
   {
      path: "/admin",
      element: <AdminLayout />,
      children: [
         {
            index: true,
            element: <AdminDashboard />,
         },
      ],
   },
   {
      path: "/owner",
      element: <OwnerLayout />,
      children: [
         {
            index: true,
            element: <AdminDashboard />,
         },
      ],
   },
   {
      path: "*",
      element: <NotFound />,
   },
]);

export default router;
