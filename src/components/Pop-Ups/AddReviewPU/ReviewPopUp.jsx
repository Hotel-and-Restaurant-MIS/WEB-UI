import React, { useState } from 'react';
import './ReviewPopUp.css';
import "../../../Fonts/Fonts.css";
import { urlInstanse } from '../../../constants.js';

export function ReviewPopUp({ isOpen, handleClose }) {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    review: '',
  });

  // State to manage success message
  const [isReviewSubmit, setReviewSubmit] = useState(false);
  
  // State to manage form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true); // Set submitting state to true

    try {
      await urlInstanse.post("/review/temp/add", formData);
      setFormData({
        name: '',
        review: '',
      });
      setReviewSubmit(true);
      setTimeout(() => {
        handleClose();
        setReviewSubmit(false); // Reset review state when closing
      }, 3000); // Hide message and close popup after 3 seconds
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false); // End submitting
    }
  };

  // If the pop-up is not open, render nothing
  if (!isOpen) return null;

  return (
    <div className="review-popup-overlay">
      <div className="review-popup-content">
        {isReviewSubmit ? (
          <div className="success-message">Review submitted successfully!</div>
        ) : (
          <>
            <div className="review-popup-name">
              <h1>Add Review</h1>
              <span className='review-close-btn' onClick={handleClose}><i className='bx bx-x'></i></span>
            </div>
            <form className='review-popup-form' onSubmit={handleSubmit}>
              <div className='review-popup'>
                <label>Your Name:</label>
                <input
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className='review-popup'>
                <label>Review:</label>
                <input
                  placeholder="Your Review"
                  type="text"
                  name="review"
                  required
                  value={formData.review}
                  onChange={handleInputChange}
                />
              </div>
              <div className='review-popup-button-container'>
                <button 
                  type="submit" 
                  className='review-submit-button' 
                  disabled={isSubmitting} // Disable button while submitting
                >
                  {isSubmitting ? 'Submitting...' : 'Add Review'} 
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
