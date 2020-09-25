import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export const Modal = ({ largeImage, onCloseModal }) => {
  const stopEvent = e => e.stopPropagation();
  return (
    <div className={styles.Overlay} onClick={onCloseModal}>
      <div className={styles.Modal} onClick={stopEvent}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImage: PropTypes.string,
  onCloseModal: PropTypes.func,
};
