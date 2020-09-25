import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const LoadButton = ({ onLoadMore }) => (
  <button type="buttom" className={styles.Button} onClick={onLoadMore}>
    Load more
  </button>
);

LoadButton.propTypes = {
  onLoadMore: PropTypes.func,
};
