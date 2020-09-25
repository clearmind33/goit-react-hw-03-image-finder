import React from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

export const Searchbar = ({ onSubmit, searchValue, onChangeInput }) => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.SearchForm_button} />
        <input
          className={styles.SearchForm_input}
          type="text"
          autoComplete="off"
          value={searchValue}
          onChange={onChangeInput}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  searchValue: PropTypes.string,
  onSubmit: PropTypes.func,
  onChangeInput: PropTypes.func,
};
