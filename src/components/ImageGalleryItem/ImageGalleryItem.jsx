import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ onShowModal, src, largeImage }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onShowModal(largeImage)}
    >
      <img src={src} alt="" className={styles.ImageGalleryItem_image} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  largeImage: PropTypes.string,
  onShowModal: PropTypes.func,
};
