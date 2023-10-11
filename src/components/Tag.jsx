import PropTypes from 'prop-types';

const Tag = ({ text }) => {
    return <div className="rounded-lg py-2 px-4 font-semibold bg-primary text-white">{text}</div>;
};

Tag.propTypes = {
   text: PropTypes.string.isRequired,
};

export default Tag;
