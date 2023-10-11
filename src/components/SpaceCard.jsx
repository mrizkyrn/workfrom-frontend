import PropTypes from "prop-types";
import Button from "./Button";

const SpaceCard = ({ title, location, address }) => {
   return (
      <div className="h-[550px] min-w-[320px] flex flex-col justify-between items-center border-2 rounded-md pb-8">
         <div>
            <div className="w-full h-52 mb-5">
               <img
                  src="https://plus.unsplash.com/premium_photo-1695635983985-1b7e573d6b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  className="w-full h-full object-cover rounded-t-md"
               />
            </div>
            <div className="flex flex-col justify-center items-center gap-3 px-5 text-center">
               <h1 className="special-heading">{title}</h1>
               <h2>{location}</h2>
               <p className="paragraph">{address}</p>
            </div>
         </div>
         <Button text="Lihat" classname="text-primary bg-white !px-10" />
      </div>
   );
};

SpaceCard.propTypes = {
   title: PropTypes.string.isRequired,
   image: PropTypes.string,
   location: PropTypes.string,
   address: PropTypes.string,
};

export default SpaceCard;
