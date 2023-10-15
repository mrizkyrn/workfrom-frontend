import PropTypes from "prop-types";
import Tag from "../Tag";
import { Link } from "react-router-dom";
import { BuildingIcon } from "../../icons/icons";
import Button from "../Button";
import { useStateContext } from "../../contexts/ContextProvider";
import { ToastContainer } from "react-toastify";
import showToastify from "../../helpers/showToastify";

const PropertyCard = ({ id, name, accommodate, price, location }) => {
   const { userToken } = useStateContext();

   const handleDelete = () => {
      fetch(`http://localhost:8000/buildings/deletebuild/${id}?api_token=${userToken}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.message === "Data deleted") {
               showToastify("success", "Properti berhasil dihapus");
            } else {
               showToastify("error", "Properti gagal dihapus");
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <>
         <div className="h-[680px] max-w-[350px] flex flex-col justify-between items-center border-2 rounded-md p-7 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out">
            <div>
               <div className="w-full h-52">
                  <img src="/image-10.png" className="w-full h-full object-cover rounded-md" />
               </div>
               <div className="flex flex-col gap-3 w-full mt-5">
                  <div className="flex gap-3 justify-start items-center w-full">
                     <Tag text="Tersedia" className="!bg-green-600" />
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
                     <span className="font-semibold text-2xl text-primary">{price}</span>/month
                  </h2>
               </div>
               <p className="text-left w-full">{location}</p>
            </div>
            <div className="w-full">
               <Link to={`edit-property/${id}`}>
                  <Button text="Edit Property" type={2} classname="text-center" />
               </Link>
               <button
                  className="w-full h-14 border-2 bg-red-700 text-white font-semibold rounded-full hover:bg-red-900 mt-3"
                  onClick={handleDelete}
               >
                  Delete Property
               </button>
            </div>
         </div>
         <ToastContainer />
      </>
   );
};

PropertyCard.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   accommodate: PropTypes.number.isRequired,
   price: PropTypes.number.isRequired,
   location: PropTypes.string.isRequired,
};

export default PropertyCard;
