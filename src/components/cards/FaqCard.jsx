import { useState } from "react";

import PropTypes from "prop-types";
import { CloseIcon, PlusIcon } from "../../icons/icons";

const FaqCard = ({ question, answer }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="flex justify-start items-start gap-5 shadow-xl w-3/4 border-2 rounded-md p-12">
         <button className=" text-primary" onClick={() => setIsOpen((prev) => !prev)} aria-label="open-close">
            {isOpen ? <CloseIcon /> : <PlusIcon />}
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
