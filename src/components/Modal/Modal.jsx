import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ImageHolder } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, closeModal }) {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    });
    return () => {
      window.removeEventListener('keydown', e => {
        if (e.code === 'Escape') {
        }
      });
    };
  }, []);

  const handleBackdropClick = e => {
    e.preventDefault();
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ImageHolder>{children}</ImageHolder>
    </Overlay>,
    modalRoot
  );
}
