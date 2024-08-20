import React, { useState } from "react";
import "./BookNow.css";
import { BookNowPU } from "../../Pop-Ups/BookNow/BookNowPU";
import "../../../Fonts/Fonts.css";


export function BookNow() {

  // State to manage the visibility of the "Book Now" pop-up
  const [isBookNowOpen, setBookNowOpen] = useState(false);

  // Open the "Book Now" pop-up when the button is clicked
  const handleBookNowOpen = () => {
    setBookNowOpen(true);
  }

  // Close the "Book Now" pop-up
  const handleBookNowClose = () => {
    setBookNowOpen(false);
  }

  return (
    <div>
      {/* Button to open the "Book Now" pop-up */}
      <button className="book-now-btn" onClick={handleBookNowOpen}>
        <img src={require('../../../images/book-now.png')} alt="book-now-img" />
        RESERVE NOW
      </button>

      {/* "Book Now" pop-up component */}
      <BookNowPU isOpen={isBookNowOpen} handleClose={handleBookNowClose} />
    </div>
  )
}
