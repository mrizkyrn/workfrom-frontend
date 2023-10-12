import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CaseCard = ({ imageSrc, title, description }) => {
   return (
      <div className="bg-cover bg-center h-[500px] w-[500px] flex flex-col justify-between items-start p-5 border-2 rounded-xl">
         <div className="w-full h-72">
            <img src={imageSrc} alt="Case" className="w-full h-full object-cover rounded-md" />
         </div>
         <h2 className="special-heading">{title}</h2>
         <p className="paragraph">{description}</p>
         <Link to="/signup" className="font-bold text-base text-primary">
            Book Now
         </Link>
      </div>
   );
};

CaseCard.propTypes = {
   imageSrc: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
};

export default CaseCard;
