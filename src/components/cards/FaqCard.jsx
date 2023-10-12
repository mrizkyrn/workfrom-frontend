import { useState } from "react";

import PropTypes from "prop-types";

const FaqCard = ({ question, answer }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="flex justify-start items-start gap-5 shadow-xl w-3/4 border-2 rounded-md p-12">
         <button className=" text-primary" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
               </svg>
            ) : (
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
               </svg>
            )}
         </button>
         <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-dark1">{question}</h2>
            {isOpen && <p className="paragraph mt-5">{answer}</p>}
         </div>
      </div>
   );
};

FaqCard.propTypes = {
   question: PropTypes.string.isRequired,
   answer: PropTypes.string.isRequired,
};

export default FaqCard;
