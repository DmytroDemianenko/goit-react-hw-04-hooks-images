import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ImageHolder } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

 function Modal({ src, alt, children, closeModal }) {
   const handleKeyDown = e => {
     if (e.code === 'Escape') {
       closeModal();
     }
   };

   useEffect(() => {
     window.addEventListener('keydown', handleKeyDown);
     return () => {
       window.removeEventListener('keydown', handleKeyDown);
     };
   });

   const handleBackdropClick = e => {
     e.preventDefault();
     if (e.currentTarget === e.target) {
       closeModal();
     }
   };

   return createPortal(
     <Overlay onClick={handleBackdropClick}>
       {children}
       <ImageHolder>
         <img src={src} alt={alt} />
       </ImageHolder>
     </Overlay>,
     modalRoot
   );
 }
 export default Modal;