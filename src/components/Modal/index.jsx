import React from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from '../../store/actions/modalActions';
import SavedUsers from '../SavedUsers';
import './modal.css';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal">
      <div className="modal__content">
        <SavedUsers />
        <div
          onClick={() => dispatch(closeModal())}
          className="modal__close-button"
        >
          Close X
        </div>
      </div>
    </div>
  );
};

export default Modal;
