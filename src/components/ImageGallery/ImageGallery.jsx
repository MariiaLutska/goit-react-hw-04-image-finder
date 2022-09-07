// import React, { Component } from 'react';
import { Grid } from 'theme-ui';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';


export const ImageGallery = ({ images, onModal }) => {
  return (
    <Grid p={2}
      width={[260]}
    gap={2}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onModal={onModal} />
      ))}
    </Grid>
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
