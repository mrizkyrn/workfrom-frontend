import PropTypes from 'prop-types';

const Button = ({text, classname=""}) => {
   return (
      <div className={`rounded-full py-3 px-6 font-semibold border-primary border-2 cursor-pointer ${classname}`}>{text}</div>
   );
};

Button.propTypes = {
   text: PropTypes.string.isRequired,
   classname: PropTypes.string
};

export default Button;
