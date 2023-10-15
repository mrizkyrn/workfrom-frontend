import Button from "../Button";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SpaceCard = ({ id, name, city, province, location }) => {
   return (
      <div className="h-[550px] w-[350px] flex flex-col justify-between items-center border-2 rounded-md pb-8 bg-white hover:shadow-lg transition duration-300 ease-in-out">
         <div className="w-full">
            <div className="w-full h-52 mb-5">
               <img
                  src="/image-10.png"
                  alt="Space"
                  className="w-full h-full object-cover rounded-t-md"
               />
            </div>
            <div className="flex flex-col justify-center items-center gap-3 px-5 text-center">
               <h1 className="special-heading">{name}</h1>
               <p className="paragraph !text-primary">
                  {city}, {province}
               </p>
               <p className="paragraph">{location}</p>
            </div>
         </div>
         <Link to={`${id}`}>
            <Button text="Lihat" type={2} classname="!px-10" />
         </Link>
      </div>
   );
};


export default SpaceCard;
