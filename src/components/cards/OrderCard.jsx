import { BuildingIcon } from "../../icons/icons";
import Tag from "../Tag";

import PropTypes from "prop-types";

const OrderCard = ({ category, name, accommodate, city, province }) => {
   return (
      <div className="flex justify-center items-center w-full h-52 shadow-md rounded-2xl p-6 gap-5">
         <div className="h-full">
            <img
               src="https://plus.unsplash.com/premium_photo-1695635983985-1b7e573d6b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
               alt="order"
               className="w-full h-full object-cover rounded-md"
            />
         </div>
         <div className="flex justify-between items-end w-full gap">
            <div className="flex flex-col justify-between items-start gap-3">
               <div className="flex gap-3 justify-start items-center w-full">
                  <Tag text={category} />
               </div>
               <div className="flex gap-3 justify-center items-center text-primary">
                  <BuildingIcon className="!h-8 !w-8" />
                  <h1 className="heading-2">{name}</h1>
               </div>
               <p className="font-semibold">{accommodate} persons</p>
            </div>
            <div>
               {city}, {province}
            </div>
         </div>
      </div>
   );
};

OrderCard.propTypes = {
   category: PropTypes.string,
   name: PropTypes.string,
   accommodate: PropTypes.number,
   city: PropTypes.string,
   province: PropTypes.string,
};

export default OrderCard;
