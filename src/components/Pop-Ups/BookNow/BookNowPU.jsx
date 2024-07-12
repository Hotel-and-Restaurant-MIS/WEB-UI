import React from 'react';
import './BookNowPU.css';

export function BookNowPU({ isOpen, handleClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (


    <div className='booknow-popup-overlay' onClick={handleOverlayClick}>
      <div className="booknow-popup-container">
        <div className="booknow-popup-topic">BOOK NOW</div>
        <form className='booknow-form' style={{ backgroundColor: '#F7F7F7' }} onSubmit={handleClose}>
          <div className='booknow-content-description'>
            <h1>BOOK THIS AMAZING HOTEL!</h1>
            <p>After booking, we will contact you for confirmation.</p>
          </div>
          <div className='form-group-main'>
            <div className="form-group">
              <label>Your Name:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>NIC Number:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Contact Number:</label>
              <input type="text" required />
            </div>
          </div>


          <div className="date-group">
            <label>From:</label>
            <input type="date" required />
            <label style={{ paddingLeft: 40 }}>To</label>
            <input type="date" required />
          </div>

          <div className="room-selection">
            {/* <div className="room-row">
              <span>Single Rooms:</span>
              <input type="number" min="0" max="11" defaultValue="0" />
              <span>11 Available</span>
              <span>90,000 LKR</span>
            </div>
            <div className="room-row">
              <span>Double Rooms:</span>
              <input type="number" min="0" max="8" defaultValue="0" />
              <span>8 Available</span>
              <span>60,000 LKR</span>
            </div>
            <div className="room-row">
              <span>Twin Rooms:</span>
              <input type="number" min="0" max="9" defaultValue="0" />
              <span>9 Available</span>
              <span>125,000 LKR</span>
            </div> */}
          </div>


          <button className='booknow-form-button' type='submit'>BOOK NOW</button>
        </form>
      </div>
    </div>
  );
}
