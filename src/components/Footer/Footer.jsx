import React from 'react';
import "./Footer.css";
import "../../Fonts/Fonts.css";


export function Footer() {
  return (
    <div className='footer-container'>

      {/* Section displaying the hotel name and contact information */}
      <div className='footer-name'>
        <div className='footer-name-topic'>
          <h1>LUXURY</h1>
          <h2>HOTELS</h2>
        </div>
        <p>Colombo, Sri Lanka</p>
        <p>+94 112 345 678</p>
        <p>luxury_hotels@gmail.com</p>
      </div>

      {/* Section with links to about us, contact, and terms and conditions */}
      <div className='footer-about'>
        <h1>About Us</h1>
        <h1>Contact</h1>
        <h1>Terms and Conditions</h1>
      </div>

      {/* Section with social media icons and links */}
      <div className='footer-contact'>
        <div>
          <img src={require("../../images/Footer/fbicon.png")} alt="fbicon" />
          Facebook
        </div>
        <div>
          <img src={require("../../images/Footer/twittericon.png")} alt="twittericon" />
          Twitter
        </div>
        <div>
          <img src={require("../../images/Footer/instaicon.png")} alt="instaicon" />
          Instagram
        </div>
      </div>

    </div>
  );
}
