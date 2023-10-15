import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "./Button";

const navigation = [
   { name: "Location", to: "/location" },
   { name: "Use Case", to: "/use-case" },
   { name: "Blog", to: "/blog" },
   { name: "Contact Us", to: "/contact-us" },
];

const ownerNavigation = [
   { name: "My Property", to: "/owner" },
   { name: "Contact Us", to: "/contact-us" },
];

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

export default function Example() {
   const { currentUser, setCurrentUser, userToken, setUserToken } = useStateContext();

   const handleLogout = () => {
      setCurrentUser(null);
      setUserToken(null);
   };

   return (
      <Disclosure as="nav" className="bg-white">
         {({ open }) => (
            <>
               <div className="mx-auto max-w-7xl px-2 pt-5 sm:px-6 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                           <span className="absolute -inset-0.5" />
                           <span className="sr-only">Open main menu</span>
                           {open ? (
                              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                           ) : (
                              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                           )}
                        </Disclosure.Button>
                     </div>
                     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                           {currentUser && currentUser.role === "owner" ? (
                              <Link to="/owner">
                                 <img className="h-8 w-auto mr-5" src="/Logo-WF.png" alt="Your Company" />
                              </Link>
                           ) : (
                              <Link to="/">
                                 <img className="h-8 w-auto mr-5" src="/Logo-WF.png" alt="Your Company" />
                              </Link>
                           )}
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                           <div className="flex space-x-4">
                              {currentUser && currentUser.role === "owner"
                                 ? ownerNavigation.map((item) => (
                                      <NavLink
                                         key={item.name}
                                         to={item.to}
                                         className={({ isActive }) =>
                                            classNames(
                                               isActive
                                                  ? "text-primary font-black bg-white"
                                                  : "text-dark1 hover:text-primary",
                                               "px-3 py-2 rounded-md font-medium text-base"
                                            )
                                         }
                                      >
                                         {item.name}
                                      </NavLink>
                                   ))
                                 : navigation.map((item) => (
                                      <NavLink
                                         key={item.name}
                                         to={item.to}
                                         className={({ isActive }) =>
                                            classNames(
                                               isActive
                                                  ? "text-primary font-black bg-white"
                                                  : "text-dark1 hover:text-primary",
                                               "px-3 py-2 rounded-md font-medium text-lg"
                                            )
                                         }
                                      >
                                         {item.name}
                                      </NavLink>
                                   ))}
                           </div>
                        </div>
                     </div>
                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        {userToken ? (
                           <Menu as="div" className="relative ml-3">
                              <div>
                                 <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                       className="h-8 w-8 rounded-full"
                                       src="/profile-pic.png"
                                       alt=""
                                    />
                                 </Menu.Button>
                              </div>
                              <Transition
                                 as={Fragment}
                                 enter="transition ease-out duration-100"
                                 enterFrom="transform opacity-0 scale-95"
                                 enterTo="transform opacity-100 scale-100"
                                 leave="transition ease-in duration-75"
                                 leaveFrom="transform opacity-100 scale-100"
                                 leaveTo="transform opacity-0 scale-95"
                              >
                                 <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                       {({ active }) => (
                                          <a
                                             href=""
                                             className={classNames(
                                                active ? "bg-gray-100" : "",
                                                "block px-4 py-2 text-sm text-gray-700"
                                             )}
                                          >
                                             {currentUser.name}
                                          </a>
                                       )}
                                    </Menu.Item>
                                    <Menu.Item>
                                       {({ active }) => (
                                          <Link
                                             to="my-order"
                                             className={classNames(
                                                active ? "bg-gray-100" : "",
                                                "block px-4 py-2 text-sm text-gray-700"
                                             )}
                                          >
                                             My Order
                                          </Link>
                                       )}
                                    </Menu.Item>
                                    <Menu.Item>
                                       {({ active }) => (
                                          <a
                                             href=""
                                             onClick={handleLogout}
                                             className={classNames(
                                                active ? "bg-gray-100" : "",
                                                "block px-4 py-2 text-sm text-gray-700"
                                             )}
                                          >
                                             Log out
                                          </a>
                                       )}
                                    </Menu.Item>
                                 </Menu.Items>
                              </Transition>
                           </Menu>
                        ) : (
                           <Link to="/login">
                              <Button text="Login" type={2} />
                           </Link>
                        )}
                     </div>
                  </div>
               </div>

               <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                     {navigation.map((item) => (
                        <Disclosure.Button
                           key={item.name}
                           as="a"
                           href={item.to}
                           className={classNames(
                              item.current
                                 ? "bg-gray-900 text-primary"
                                 : "text-dark1 hover:bg-gray-700 hover:text-dark1",
                              "block rounded-md px-3 py-2 text-base font-medium"
                           )}
                           aria-current={item.current ? "page" : undefined}
                        >
                           {item.name}
                        </Disclosure.Button>
                     ))}
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   );
}
