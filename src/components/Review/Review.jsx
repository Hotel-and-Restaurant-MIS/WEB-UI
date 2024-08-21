import React, { useState, useEffect } from 'react';
import "./Review.css";
import "../../Fonts/Fonts.css";
import { reviewInstance } from '../../constants';

export function Review() {

  // State to store fetched reviews
  const [reviews, updateReviews] = useState([]);

  // State to track the current review being displayed
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Fetch reviews when the component mounts
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await reviewInstance.get("/review/approved");
        updateReviews(response.data); // Update state with fetched reviews
      } catch (e) {
        console.error("Error fetching reviews:", e); // Handle any errors during fetch
      }
    }
    fetchReviews();
  }, []);

  // Change the displayed review at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(prevIndex =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1 // Cycle through reviews
      );
    }, 30000); // Change review every 1 minute

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [reviews]);

  return (
    <div className="reviews-container">
      <h1>Reviews</h1>
      <div className="review-item">
        {/* Display the current review and reviewer name */}
        <p>{reviews[currentReviewIndex]?.review}</p>
        <h2>{reviews[currentReviewIndex]?.name}</h2>
      </div>
    </div>
  );
}
