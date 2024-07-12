import React from 'react';
import "./Footer.css";


export function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-name'>
        <div className='footer-name-topic'>
          <h1>LUXURY</h1>
          <h2>HOTELS</h2>
        </div>
        <p>Colombo, Sri Lanka</p>
        <p>+94 112 345 678</p>
        <p>luxury_hotels@gmail.com</p>
      </div>
      <div className='footer-about'>
        <h1>About Us</h1>
        <h1>Contact</h1>
        <h1>Terms and Conditions</h1>
      </div>
      <div className='footer-contact'>
        <div>
          <img src={require("../../images/Footer/fbicon.png")} alt="fbicon" />
          Facebook</div>
        <div>
          <img src={require("../../images/Footer/twittericon.png")} alt="twittericon" />
          Twitter</div>
        <div>
          <img src={require("../../images/Footer/instaicon.png")} alt="instaicon" />
          instagram</div>
      </div>

    </div>
  );
}
