import React, { useState, useEffect } from 'react';
import './ReviewPopUp.css';
import "../../../Fonts/Fonts.css";

export function ReviewPopUp({ isOpen, handleClose }) {


  const [formData, setFormData] = useState({
    name: '',
    review: '',
  });

  useEffect(() => {
    if (!isOpen) {
      // Reset form data when the modal is closed
      setFormData({
        input1: '',
        input2: '',
        input3: ''
      });
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };


  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="review-popup-overlay" onClick={handleOverlayClick}>
      <div className="review-popup-content">
        <h1>Add Review</h1>
        <form className='review-popup-form' onSubmit={handleSubmit}>
          <div>
            <label>
              Your Name:
            </label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div>
            <label>
              Review:
            </label>
            <input type="text" name="review" value={formData.review} onChange={handleInputChange} />
          </div>
          <div className='review-popup-button-container'>
            <button type="submit" className='review-submit-button'>Add Review</button>
          </div>
        </form>
      </div>
    </div>
  );
}
