import React from 'react';
import { Box } from '../Box';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onModal }) => {
  const { largeImageURL, webformatURL, tags } = image;
    return (
      <Box color="primary" as="li" onClick={() => onModal(largeImageURL)}>
        <img src={webformatURL} alt={tags} />
        </Box>
    );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onModal: PropTypes.func.isRequired,
};

