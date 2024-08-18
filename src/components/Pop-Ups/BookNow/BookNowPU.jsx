import React from 'react';
import './BookNowPU.css';
import "../../../Fonts/Fonts.css";
import { RoomCounter } from '../../../components/Counter/RoomCount.jsx';

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
        <div className="booknow-popup-topic">Reserve NOW</div>
        <form className='booknow-form' style={{ backgroundColor: '#F7F7F7' }} onSubmit={handleClose}>
          <div className='booknow-content-description'>
            <h1>RESERVE THIS AMAZING HOTEL!</h1>
            <p>After reserving we will contact you for confirmation.</p>
          </div>
          <div className='form-group-main'>
            <div className="form-group">
              <label>Your Name:</label>
              <input placeholder="Enter Your Name" type="text" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input placeholder="Enter Your email" type="email" required />
            </div>
            <div className="form-group">
              <label>NIC Number:</label>
              <input placeholder="Enter NIC Number" type="text" required />
            </div>
            <div className="form-group">
              <label>Contact Number:</label>
              <input placeholder="Enter Contact Number" type="text" required />
            </div>
          </div>


          <div className="date-group">
            <label>From:</label>
            <input type="date" required />
            <label style={{ paddingLeft: 40 }}>To</label>
            <input type="date" required />
          </div>

          <div className='price'>Price(LKR)</div>
          <div className="room-selection">
            <div className="room-type">
              <label>Room Type:</label>
              <input list="rooms" name="rooms" />
              <datalist id="rooms">
                <option value="Single Room" />
                <option value="Double Room" />
                <option value="Twin Room" />
              </datalist>
            </div>
            <div>
              <RoomCounter />
            </div>

            <div>90 000</div>
          </div>


          <button className='booknow-form-button' type='submit'>RESERVE NOW</button>
        </form >
      </div >
    </div >
  );
}
