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
      {/* <div className="assistant-content">
        <div className="assistant-name" >
          <h2>Assistant</h2>
        </div>
        <div className='assistant-message'>
          Hello! How Can I help you?
        </div>
      </div> */}
    <iframe title="chatbot" height="430" width="350" src="https://bot.dialogflow.com/6d9d6c84-437c-4cb2-9fae-fdfb9aae0ca4"></iframe>

    </div>
  );
}

