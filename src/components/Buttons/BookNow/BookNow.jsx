import React from "react";
import "./BookNow.css";

export function BookNow() {

  return (
    <button className="book-now-btn">
      <img src={require('../../../images/book-now.png')} alt="book-now-img" />
      BOOK NOW</button>
  )

}