import React, { useState } from 'react';
import './AddReview.css';
import { ReviewPopUp } from '../../Pop-Ups/AddReviewPU/ReviewPopUp';
import "../../../Fonts/Fonts.css";

export function AddReview() {

  // State to manage the visibility of the review pop-up
  const [isReviewPopUpOpen, setReviewPopUpOpen] = useState(false);

  // Open the review pop-up when the button is clicked
  const handleOpenReviewPopUp = () => {
    setReviewPopUpOpen(true);
  };

  // Close the review pop-up
  const handleCloseReviewPopUp = () => {
    setReviewPopUpOpen(false);
  };

  return (
    <div className="review-button-container">
      {/* Button to open the review pop-up */}
      <button className='review-button' onClick={handleOpenReviewPopUp}>
        Add Review
      </button>

      {/* Review pop-up component */}
      <ReviewPopUp isOpen={isReviewPopUpOpen} handleClose={handleCloseReviewPopUp} />
    </div>
  );
}
