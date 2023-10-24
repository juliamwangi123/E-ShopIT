import React from 'react'
import Modal from 'react-modal';
import ReactModal from 'react-modal';

Modal.setAppElement('#root'); // This is needed for accessibility

export default function AddToCart(props) {
    const { isOpen, onRequestClose, children ,portalClassName} = props;
  return (
    <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
        style={portalClassName}
    >
      {children}
    </ReactModal> )
}
