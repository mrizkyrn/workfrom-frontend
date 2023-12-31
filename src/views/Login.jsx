import { Link } from "react-router-dom";
import { createRef } from "react";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import { useState } from "react";

export default function Login() {
   const emailRef = createRef();
   const passwordRef = createRef();
   const { setCurrentUser, setUserToken } = useStateContext();
   const [message, setMessage] = useState(null);

   const onSubmit = (e) => {
      e.preventDefault();
      console.log("onSubmit");

      const payload = {
         email: emailRef.current.value,
         password: passwordRef.current.value,
      };

      console.log(payload);

      fetch("http://localhost:8000/auth/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(payload),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.success) {
               setCurrentUser({ name: data.data.name, email: data.data.email, role: data.data.role });
               console.log(data.data);
               setUserToken(data.api_token);
            } else {
               setMessage(data.message);
            }
         })
         .catch((err) => {
            console.log(err);
            setMessage(err.message);
         });
   };
   return (
      <>
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <img
                  className="mx-auto h-10 w-auto"
                  src="/Logo-WF.png"
                  alt="Your Company"
               />
               <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Login to your account
               </h2>
            </div>

            {message && (
               <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <p className="text-red-800 text-center font-semibold">{message}</p>
               </div>
            )}

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <form className="space-y-6" action="#" method="POST" onSubmit={onSubmit}>
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                     </label>
                     <div className="mt-2">
                        <input
                           ref={emailRef}
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
                        <div className="text-sm">
                           <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                              Forgot password?
                           </a>
                        </div>
                     </div>
                     <div className="mt-2">
                        <input
                           ref={passwordRef}
                           id="password"
                           name="password"
                           type="password"
                           autoComplete="current-password"
                           required
                           className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                     >
                        Login
                     </button>
                  </div>
               </form>

               <p className="mt-10 text-center text-sm text-gray-500">
                  Belum punya akun?{" "}
                  <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                     Register
                  </Link>
               </p>
            </div>
         </div>
      </>
   );
}
