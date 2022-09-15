import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from '../Modal/Modal.module.css';

export const Modal = ({ closeModal, largeImage }) => {
  useEffect(() => {
    const onEscapeBtnClick = event => {
      if (event.code === 'Escape')closeModal();
    };

    window.addEventListener('keydown', onEscapeBtnClick);

    return () => {
      window.removeEventListener('keydown', onEscapeBtnClick);
  };
}, [closeModal]);

const onOverlayClick = event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

return (
  <div className={s.Overlay} onClick={onOverlayClick}>
    <div className={s.Modal}>
          <img
            className={s.Image}
            src={largeImage}
            alt="choosed foto"
          />
    </div>
  </div>
);
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};