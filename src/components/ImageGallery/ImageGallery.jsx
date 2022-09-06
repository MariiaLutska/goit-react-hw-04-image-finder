// import React, { Component } from 'react';
import { Box } from '../Box';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';



export const ImageGallery = ({ images, onModal }) => {
  return (
    <Box color="primary" as="ul">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onModal={onModal} />
      ))}
    </Box>
  );
};


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
  onModal: PropTypes.func.isRequired,
};
