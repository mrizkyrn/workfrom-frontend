import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UseCaseCard = ({ title, description }) => {
   return (
      <div
         className="bg-cover bg-center h-[500px] w-[500px] flex flex-col justify-end items-start rounded-lg p-5"
         style={{backgroundImage: "url(https://images.unsplash.com/photo-1696789738756-ff48fcc02d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)"}}
      >
         <div className="flex flex-col gap-5 backdrop-blur-sm bg-opacity-50 text-white p-4">
            <h2 className="special-heading">{title}</h2>
            <p className="paragraph !text-white">{description}</p>
            <Link to="/signup" className="font-semibold text-base">
               Book Now
            </Link>
         </div>
      </div>
   );
};

UseCaseCard.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired
};

export default UseCaseCard;
