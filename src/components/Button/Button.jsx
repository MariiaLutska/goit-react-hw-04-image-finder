import PropTypes from "prop-types";
import { Box } from '../Box';
import { Button } from './Button.styled';

export const MoreButton = ({ onShowMore }) => {
    return (
        <Box display="flex"
            justifyContent="center"
            alignitems="center"
        >
            <Button type="button" onClick={onShowMore}>
                Load More
            </Button>
        </Box>
    );
};

MoreButton.propTypes = {
  onShowMore: PropTypes.func.isRequired,
};