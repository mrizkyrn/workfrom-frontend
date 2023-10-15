import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout.jsx";
import OwnerLayout from "./components/layouts/OwnerLayout.jsx";
import CustomerLayout from "./components/layouts/CustomerLayout.jsx";
import AdminLayout from "./components/layouts/AdminLayout.jsx";
import AuthRequired from "./components/layouts/AuthRequired.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import Contact from "./views/Contact.jsx";
import NotFound from "./views/NotFound.jsx";
import AdminDashboard from "./views/AdminDashboard.jsx";
import Landing from "./views/customer/Landing.jsx";
import Location, { loader as locationLoader } from "./views/customer/Location.jsx";
import UseCase, { loader as useCaseLoader } from "./views/customer/UseCase.jsx";
import Booking from "./views/customer/Booking.jsx";
import Blog from "./views/customer/Blog.jsx";
import MyOrder from "./views/customer/MyOrder.jsx";
import DetailLocation from "./views/customer/DetailLocation.jsx";
import DetailUseCase from "./views/customer/DetailUseCase.jsx";
import UseCaseImages from "./views/usecase/UseCaseImages.jsx";
import UseCaseLocation from "./views/usecase/UseCaseLocation.jsx";
import UseCaseFacility from "./views/usecase/UseCaseFacility.jsx";
import UseCaseReview from "./views/usecase/UseCaseReview.jsx";
import OwnerDashboard from "./views/owner/OwnerDashboard.jsx";
import AddProperty from "./views/owner/AddProperty.jsx";
import EditProperty from "./views/owner/EditProperty.jsx";

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
            path: "/",
            element: <AuthRequired />,
            children: [
               {
                  path: "my-order",
                  element: <MyOrder />,
               },
               {
                  path: "use-case/:id/booking",
                  element: <Booking />,
               },
               {
                  path: "location/:id/booking",
                  element: <Booking />,
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
         },
      ],
   },
   {
      path: "*",
      element: <NotFound />,
   },
]);

export default router;
