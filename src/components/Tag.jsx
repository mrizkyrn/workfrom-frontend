import PropTypes from "prop-types";

const Tag = ({ text, className = "" }) => {
   return <div className={`rounded-lg py-2 px-4 font-semibold bg-primary text-white ${className}`}>{text}</div>;
};

Tag.propTypes = {
   text: PropTypes.string.isRequired,
   className: PropTypes.string,
};

export default Tag;
