import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "./components/layouts/CustomerLayout.jsx";
import AdminLayout from "./components/layouts/AdminLayout.jsx";
import Register from "./views/Register.jsx";
import Landing from "./views/Landing.jsx";
import AdminDashboard from "./views/AdminDashboard.jsx";
import NotFound from "./views/NotFound.jsx";
import Login from "./views/Login.jsx";
import AuthLayout from "./components/layouts/AuthLayout.jsx";
import OwnerLayout from "./components/layouts/OwnerLayout.jsx";
import Location, { loader as locationLoader } from "./views/Location.jsx";
import UseCase, { loader as useCaseLoader } from "./views/UseCase.jsx";
import Blog from "./views/Blog.jsx";
import Contact from "./views/Contact.jsx";
import DetailLocation from "./views/DetailLocation.jsx";
import DetailUseCase from "./views/DetailUseCase.jsx";
import AuthRequired from "./components/layouts/AuthRequired.jsx";
import Booking from "./views/Booking.jsx";
import UseCaseImages from "./views/usecase/UseCaseImages.jsx";
import UseCaseLocation from "./views/usecase/UseCaseLocation.jsx";
import UseCaseFacility from "./views/usecase/UseCaseFacility.jsx";
import UseCaseReview from "./views/usecase/UseCaseReview.jsx";
import OwnerDashboard from "./views/OwnerDashboard.jsx";
import AddProperty from "./views/AddProperty.jsx";
import EditProperty from "./views/EditProperty.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <AuthLayout />,
      children: [
         {
            path: "login",
            element: <Login />,
         },
         {
            path: "register",
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
         {
            path: "location",
            element: <Location />,
            loader: locationLoader,
         },
         {
            path: "use-case",
            element: <UseCase />,
            loader: useCaseLoader,
         },
         {
            path: "blog",
            element: <Blog />,
         },
         {
            path: "contact-us",
            element: <Contact />,
         },
         {
            path: "location/:id",
            element: <DetailLocation />,
         },
         {
            path: "use-case/:id",
            element: <DetailUseCase />,
            children: [
               {
                  index: true,
                  element: <UseCaseImages />,
               },
               {
                  path: "facility",
                  element: <UseCaseFacility />,
               },
               {
                  path: "review",
                  element: <UseCaseReview />,
               },
               {
                  path: "location",
                  element: <UseCaseLocation />,
               },
            ],
         },
         {
            path: "/",
            element: <AuthRequired />,
            children: [
               {
                  path: "use-case/:1/booking",
                  element: <Booking />,
               },
               {
                  path: "location/:1/booking",
                  element: <Booking />,
               },
            ],
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
            element: <OwnerDashboard />,
         },
         {
            path: "add-property",
            element: <AddProperty />,
         },
         {
            path: "edit-property/:id",
            element: <EditProperty />,
         }
      ],
   },
   {
      path: "*",
      element: <NotFound />,
   },
]);

export default router;
