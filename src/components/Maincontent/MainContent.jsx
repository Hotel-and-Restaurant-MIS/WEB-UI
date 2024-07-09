import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ReactComponent as ArrowDownIcon } from "../../assets/arrow-down-icon.svg"
import './MainContent.css';


export function MainContent() {

  return (
    <div>
      <Navbar></Navbar>
      <div className="main-hero-text-cont">
        <p className="main-hero-sub-text">WELCOME TO</p>
        <p className="main-hero-main-text">LUXURY</p>
        <p className="main-hero-sub-text">HOTELS</p>
        <p className="main-hero-tag-line">Book your stay and enjoy luxury</p>
        <p className="main-hero-tag-line">redefined at the most affordable rates.</p>
      </div>
      <button className="main-hero-book-now-btn">
        <img src={require('../../images/book-now.png')} alt="book-now-img" />
        BOOK NOW</button>
      <div className="main-hero-scroll-text">Scroll</div>
      <ArrowDownIcon className="main-hero-scroll-down-icon"></ArrowDownIcon>
    </div>
  )
}
