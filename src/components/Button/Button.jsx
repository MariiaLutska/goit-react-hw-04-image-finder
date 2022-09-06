import PropTypes from "prop-types";

export const Button = ({ onShowMore }) => {
    return (
        <div>
            <button type="button" onClick={onShowMore}>
                Load More
            </button>
        </div>
    );
};

Button.propTypes = {
  onShowMore: PropTypes.func.isRequired,
};