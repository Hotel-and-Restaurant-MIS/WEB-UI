import React, { useState } from 'react';
import './ReviewPopUp.css';
import "../../../Fonts/Fonts.css";
import { reviewService } from '../../../constants.js';

export function ReviewPopUp({ isOpen, handleClose }) {

  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    review: '',
  });

  // Update form data as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Log data for debugging
    try {
      await reviewService.post("/temp/add", formData);
      setFormData({
        name: '',
        review: '',
      });
      handleClose();
    } catch (e) {
      console.error(e);
    }
  };

  // Close the pop-up when clicking outside of the form
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // If the pop-up is not open, render nothing
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
            <input type="text" name="name" required value={formData.name} onChange={handleInputChange} />
          </div>
          <div>
            <label>
              Review:
            </label>
            <input type="text" name="review" required value={formData.review} onChange={handleInputChange} />
          </div>
          <div className='review-popup-button-container'>
            <button type="submit" className='review-submit-button'>Add Review</button>
          </div>
        </form>
      </div>
    </div>
  );
}
