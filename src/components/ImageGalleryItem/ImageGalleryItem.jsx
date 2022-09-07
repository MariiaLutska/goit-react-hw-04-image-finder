// import React from 'react';
// import { Box } from '../Box';
import { Grid, Card, Image } from 'theme-ui';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onModal }) => {
  const { largeImageURL, webformatURL, tags } = image;
  return (
    <Grid width={[128, null, 192]}>
    <Card sx={{ maxWidth: 256,}} listStyle="none">
      <li  onClick={() => onModal(largeImageURL)}>
        <Image src={webformatURL} alt={tags} height="260px" width="100%" />
      </li>
      </Card>
      </Grid>
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

