import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">{children}</div>;
};

Container.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Container;
