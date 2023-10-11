import PropTypes from 'prop-types';

const Button = ({text, type=1, classname=""}) => {
   if (type === 1) {
      return (
         <div className={`rounded-full border-2 border-primary py-3 px-6 font-semibold bg-primary text-white hover:bg-white hover:text-primary cursor-pointer ${classname}`}>{text}</div>
      );
   } else {
      return (
         <div className={`rounded-full border-2 border-primary py-3 px-6 font-semibold bg-white text-primary hover:bg-primary hover:text-white cursor-pointer ${classname}`}>{text}</div>
      );
   }
};

Button.propTypes = {
   text: PropTypes.string.isRequired,
   type: PropTypes.number,
   classname: PropTypes.string
};

export default Button;
