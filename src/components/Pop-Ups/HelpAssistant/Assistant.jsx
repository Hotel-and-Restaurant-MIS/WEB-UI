import React from 'react';
import './Assistant.css';

export function Assistant({ isOpen, handleClose }) {

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="assistant-overlay" onClick={handleOverlayClick}>
      <div className="assistant-content">
        <div className="assistant-name" >
          <h2>Assistant</h2>
        </div>
        <div className='assistant-message'>
          Hello! How Can I help you?
        </div>
      </div>
    </div>
  );
}

