import React, { useState } from 'react';
import './BookNowPU.css';


export function BookNowPU({ isOpen, handleClose }) {

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className='booknow-popup-overlay' onClick={handleOverlayClick}>
      <div className="review-popup-content">djva</div>
    </ div>
  );
}
