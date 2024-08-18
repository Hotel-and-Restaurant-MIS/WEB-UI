import React, { useEffect, useState } from 'react';
import './AddReview.css';
import { ReviewPopUp } from '../../Pop-Ups/AddReviewPU/ReviewPopUp';
import "../../../Fonts/Fonts.css";
import { axiosInstance } from '../../../constants';

export function AddReview() {

  const [isReviewPopUpOpen, setReviewPopUpOpen] = useState(false);

  const [data, setData] = useState(null);

  const handleOpenReviewPopUp = () => {
    setReviewPopUpOpen(true);
  };

  const handleCloseReviewPopUp = () => {
    setReviewPopUpOpen(false);
  };

  const handleBtnPress = async (formData) => {
    setData(formData);
  }

  useEffect(() => {

    async function addReview() {
      await axiosInstance.post("/review/temp/add", data);
    }

    if (data != null) {
      addReview();
      setData(null);
    } else {
      return;
    }
  }, [data])

  return (
    <div className="review-button-container">
      <button className='review-button' onClick={handleOpenReviewPopUp}>
        Add Review
      </button>
      <ReviewPopUp isOpen={isReviewPopUpOpen} handleClose={handleCloseReviewPopUp} handleBtnPress={handleBtnPress} />
    </div>

  );
}

