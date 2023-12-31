import { useOutletContext } from "react-router-dom";
import { LocationIcon } from "../../icons/icons";

const UseCaseLocation = () => {
   const data = useOutletContext();

   return (
      <div className="flex justify-between items-center gap-16">
         <div>
            <div className="flex gap-3 mb-3">
               <LocationIcon className="text-primary" />
               <p className="paragraph !text-primary">
                  {data.city}, {data.provinc}
               </p>
            </div>
            <p className="paragraph">{data.location}</p>
         </div>
         <div>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7932.714110202923!2d106.8302693!3d-6.2165557!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1697186902128!5m2!1sid!2sid"
               width="800"
               height="500"
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               className="rounded-3xl"
            ></iframe>
         </div>
      </div>
   );
};

export default UseCaseLocation;
