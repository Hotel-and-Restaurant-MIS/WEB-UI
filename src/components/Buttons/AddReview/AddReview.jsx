import React, { useState } from 'react';
import './AddReview.css';
import { ReviewPopUp } from '../../Pop-Ups/AddReviewPU/ReviewPopUp';
import "../../../Fonts/Fonts.css";

export function AddReview() {

  const [isReviewPopUpOpen, setReviewPopUpOpen] = useState(false);

  const handleOpenReviewPopUp = () => {
    setReviewPopUpOpen(true);
  };

  const handleCloseReviewPopUp = () => {
    setReviewPopUpOpen(false);
  };


  return (
    <div className="review-button-container">
      <button className='review-button' onClick={handleOpenReviewPopUp}>
        Add Review
      </button>
      <ReviewPopUp isOpen={isReviewPopUpOpen} handleClose={handleCloseReviewPopUp} />
    </div>

  );
}

