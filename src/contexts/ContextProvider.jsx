import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
   currentUser: {},
   userToken: null,
   toast: {
      message: null,
      show: false,
   },
   setCurrentUser: () => {},
   setUserToken: () => {},
});

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
   const savedUser = JSON.parse(localStorage.getItem("USER")) || {};
   const [currentUser, setCurrentUser] = useState(savedUser);
   const [userToken, _setUserToken] = useState(localStorage.getItem("TOKEN") || "");
   const [toast, setToast] = useState({ message: "", show: false });

   const setUserToken = (token) => {
      if (token) {
         localStorage.setItem("TOKEN", token);
      } else {
         localStorage.removeItem("TOKEN");
      }
      _setUserToken(token);
   };

   const showToast = (message) => {
      setToast({ message, show: true });
      setTimeout(() => {
         setToast({ message: "", show: false });
      }, 5000);
   };

   useEffect(() => {
      if (currentUser) {
         localStorage.setItem("USER", JSON.stringify(currentUser));
      } else {
         localStorage.removeItem("USER");
      }
   }, [currentUser]);

   return (
      <StateContext.Provider
         value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            toast,
            showToast,
         }}
      >
         {children}
      </StateContext.Provider>
   );
};

export const useStateContext = () => useContext(StateContext);
