import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

export const ImageGallery = ({ gallery, onShowModal }) => (
  <ul className={styles.ImageGallery}>
    {gallery.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        largeImage={largeImageURL}
        onShowModal={onShowModal}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
  onShowModal: PropTypes.func,
};
