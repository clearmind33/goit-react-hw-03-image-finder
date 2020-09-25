import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadButton } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

import { fetchImages } from '../services/imagesApi';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './App.module.css';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeInput = ({ target }) => {
    const { value } = target;
    setSearchValue(value);
    setImagePage(1);
  };

  const [gallery, setGallery] = useState([]);

  const [imagePage, setImagePage] = useState(1);

  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [largeImageUrl, setLargeImageUrl] = useState('');

  const handleShowModal = url => {
    setLargeImageUrl(url);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchValue) {
      setLoading(true);
      fetchImages(searchValue, imagePage).then(data => {
        setLoading(false);
        setGallery(prevState => [...prevState, ...data]);
        setImagePage(prevState => prevState + 1);
        imagePage > 1 &&
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
      });
    }
  };

  return (
    <div className={styles.App}>
      <Searchbar
        onChangeInput={handleChangeInput}
        searchValue={searchValue}
        onSubmit={handleSubmit}
      />
      <ImageGallery gallery={gallery} onShowModal={handleShowModal} />
      {gallery.length > 0 && !loading && (
        <LoadButton onLoadMore={handleSubmit} />
      )}
      {loading && (
        <Loader
          className={styles.Loader}
          type="Audio"
          color="#3f51b5"
          height={40}
          width={40}
        />
      )}
      {showModal && (
        <Modal onCloseModal={handleCloseModal} largeImage={largeImageUrl} />
      )}
    </div>
  );
}

export default App;
