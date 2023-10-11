import PropTypes from "prop-types";
import Tag from "./Tag";

const UseCaseCard = () => {
   return (
      <div className="h-[550px] max-w-[350px] flex flex-col justify-between items-center border-2 rounded-md p-7">
         <div className="w-full h-52">
            <img
               src="https://plus.unsplash.com/premium_photo-1695635983985-1b7e573d6b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
               className="w-full h-full object-cover rounded-md"
            />
         </div>
         <div className="flex flex-col gap-3">
            <div className="flex gap-3 justify-start items-center w-full">
               <Tag text="Kantor" />
               <Tag text="Meeting" />
            </div>
            <div className="flex justify-between items-center w-full">
               <h1 className="special-heading">Type</h1>
               <p className="font-semibold">30 Person</p>
            </div>
            <p>buliding name</p>
            <h2><span className="font-semibold text-2xl text-primary">1.400.000</span>/year</h2>
            <p>Komplek Multatuli Indah, Jl. Multatuli No.30-31, Hamdan, Kec. Medan Maimun, 20212</p>
         </div>
      </div>
   );
};

UseCaseCard.propTypes = {
   title: PropTypes.string.isRequired,
   image: PropTypes.string,
   location: PropTypes.string,
   address: PropTypes.string,
};

export default UseCaseCard;
