import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import NotFound from "./views/NotFound.jsx";
import Landing from "./views/Landing.jsx";
import GuestLayout from "./components/layouts/GuestLayout.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <GuestLayout />,
      children: [
         {
            index: true,
            element: <Landing />,
         },
      ],
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/register",
      element: <Register />,
   },
   {
      path: "*",
      element: <NotFound />,
   },
]);

export default router;