import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

export const Modal = ({ modalText, openModalStatus, closeModal }) => {
    return (
        <div className={openModalStatus ? 'modal-wrapper modal-show' : 'modal-wrapper modal-hide'}>
            <div className='modal-window'>
                <p className='title-modal'>{modalText}</p>
                <div className='button-group'>
                    <button className='success-btn btn' onClick={() => closeModal()}>Ok</button>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    modalText: PropTypes.string.isRequired,
    openModalStatus: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default Modal;
