import React, { useState } from "react";
import "./BookNow.css";
import { BookNowPU } from "../../Pop-Ups/BookNow/BookNowPU";
import "../../../Fonts/Fonts.css";

export function BookNow() {

  const [isBookNowOpen, setBookNowOpen] = useState(false);

  const handleBookNowOpen = () => {
    setBookNowOpen(true);
  }

  const handleBookNowClose = () => {
    setBookNowOpen(false);
  }


  return (
    <div>
      <button className="book-now-btn" onClick={handleBookNowOpen}>
        <img src={require('../../../images/book-now.png')} alt="book-now-img" />
        BOOK NOW</button>
      <BookNowPU isOpen={isBookNowOpen} handleClose={handleBookNowClose} />
    </div>

  )

}