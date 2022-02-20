import './App.css';
import { useState, useEffect } from 'react';
import API from './utility/api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';

export default function App() {
  // const Status = {
  //   IDLE: 'idle',
  //   PENDING: 'pending',
  //   RESOLVED: 'resolved',
  //   REJECTED: 'rejected',
  // };
  const [imageName, setImageName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [gallery, setGallery] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('null');
  const [page, setPage] = useState(1);

  const handleFormSubmit = imageName => {
    setImageName(imageName);
    setPage(1);
  };
  useEffect(() => {
    if (imageName !== '') {
      setStatus('pending');
      searchImage();
    }
    // if (page !== setPage) {
    //   window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: 'smooth',
    //   });
    // }
  }, [imageName]);
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, []);

  const searchImage = () => {
    API.fetchImage(imageName, page)
      .then(data => {
        console.log(data);
        setGallery([...gallery, ...data.hits]);
        setStatus('resolved');
        setPage(page + 1);
      })
      .catch(() => {
        setError(error);
        setStatus('rejected');
      });
  };
  const onLoadMore = () => {
    searchImage();
  };
  const onOpenModal = (url, alt) => {
    setLargeImageURL(url);
    setImageAlt(alt);
    toggleModal();
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      <ImageGallery
        status={status}
        error={error}
        gallery={gallery}
        onClick={onOpenModal}
        onLoadMore={onLoadMore}
      ></ImageGallery>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <img src={largeImageURL} alt={imageAlt} />
        </Modal>
      )}
    </>
  );
}
