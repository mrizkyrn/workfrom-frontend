import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import showToastify from "../helpers/showToastify";

export default function Register() {
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [role, setRole] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("onSubmit Register");

      const payload = {
         name: name,
         email: email,
         password: password,
         role: role,
      };

      console.log(payload);

      fetch("http://localhost:8000/auth/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(payload),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.success) {
               showToastify("success", "Register Berhasil, Silahkan Login");

               setTimeout(() => {
                  navigate("/login");
               }, 5000);
            } else {
               toast.error("Register Gagal", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
               });
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <>
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen">
            <ToastContainer />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
               />
               <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Register to your account
               </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <form className="space-y-6" action="" method="POST" onSubmit={handleSubmit}>
                  <div>
                     <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                     </label>
                     <div className="mt-2">
                        <input
                           onChange={(e) => setName(e.target.value)}
                           id="name"
                           name="name"
                           type="text"
                           autoComplete="name"
                           required
                           className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                     </label>
                     <div className="mt-2">
                        <input
                           onChange={(e) => setEmail(e.target.value)}
                           id="email"
                           name="email"
                           type="email"
                           autoComplete="email"
                           required
                           className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div>
                     <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                           Password
                        </label>
                     </div>
                     <div className="mt-2">
                        <input
                           onChange={(e) => setPassword(e.target.value)}
                           id="password"
                           name="password"
                           type="password"
                           autoComplete="current-password"
                           required
                           className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="flex items-center justify-between">
                     <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                        Register as
                     </label>
                  </div>
                  <div className="mt-2">
                     <select
                        onChange={(e) => setRole(e.target.value)}
                        id="role"
                        name="role"
                        autoComplete="current-role"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     >
                        <option value="customer">Customer</option>
                        <option value="owner">Building Owner</option>
                     </select>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                     >
                        Register
                     </button>
                  </div>
               </form>

               <p className="mt-10 text-center text-sm text-gray-500">
                  Sudah punya akun?{" "}
                  <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                     Login
                  </Link>
               </p>
            </div>
         </div>
      </>
   );
}
