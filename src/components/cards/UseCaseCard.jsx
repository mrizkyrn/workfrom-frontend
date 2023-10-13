import PropTypes from "prop-types";
import Tag from "../Tag";
import { useNavigate } from "react-router-dom";
import { BuildingIcon } from "../../icons/icons";

const UseCaseCard = ({id, category, name, accommodate, price, location}) => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate(`${id}`);
      window.scrollTo(0, 0);
   };

   return (
      <div
         onClick={handleClick}
         className="h-[550px] max-w-[350px] flex flex-col justify-between items-center border-2 rounded-md p-7 cursor-pointer hover:shadow-lg hover:scale-95 transition duration-300 ease-in-out"
      >
         <div className="w-full h-52">
            <img
               src="/image-10.png"
               className="w-full h-full object-cover rounded-md"
            />
         </div>
         <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-3 justify-start items-center w-full">
               <Tag text={category} />
            </div>
            <div className="flex justify-between items-center w-full">
               <h1 className="special-heading">{name}</h1>
               <p className="font-semibold">{accommodate} Person</p>
            </div>
            <div className="flex gap-3">
               <BuildingIcon />
               <p>{name}</p>
            </div>
            <h2>
               <span className="font-semibold text-2xl text-primary">{price}</span>/year
            </h2>
         </div>
            <p className="text-left w-full">{location}</p>
      </div>
   );
};

UseCaseCard.propTypes = {
   id: PropTypes.number.isRequired,
   category: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   accommodate: PropTypes.number.isRequired,
   price: PropTypes.number.isRequired,
   location: PropTypes.string.isRequired,
};

export default UseCaseCard;
