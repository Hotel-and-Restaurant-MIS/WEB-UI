import React, { useState, useEffect } from 'react';
import './BookNowPU.css';
import "../../../Fonts/Fonts.css";
import { RoomCounter } from '../../../components/Counter/RoomCount.jsx';
import { urlInstance } from "../../../constants.js";


export function BookNowPU({ isOpen, handleClose }) {

  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nic: '',
    contactNumber: '',
    fromDate: '',
    toDate: '',
    roomType: '',
    roomQuantity: '1', // Default room quantity is '1'
  });

  // State for room price, max room count, total price, date range validity, and submission status
  const [roomPrice, setRoomPrice] = useState(0);
  const [maxRoomCount, setMaxRoomCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice to 0
  const [isDateRangeValid, setIsDateRangeValid] = useState(true); // Track date range validity
  const [isReservationSuccessful, setIsReservationSuccessful] = useState(false); // New state for success message

  // Update the room quantity in the state
  const handleRoomQuantityChange = (newQuantity) => {
    setFormData(prevData => ({
      ...prevData,
      roomQuantity: newQuantity
    }));
  };

  // Update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Update the room price based on the selected room type
  useEffect(() => {
    const fetchRoomPrice = async () => {
      try {
        const response = await urlInstance.get("/roomtype/price");
        const roomTypeData = response.data.find(record => record.roomTypeName === formData.roomType);
        if (roomTypeData) {
          setRoomPrice(roomTypeData.pricePerDay);
        } else {
          setRoomPrice(0);
        }
      } catch (e) {
        console.error(e);
      }
    };

    if (formData.roomType) {
      fetchRoomPrice();
    }
  }, [formData.roomType]);

  // Update max room count based on room type and dates
  const handleRoomType = async (e) => {
    const selectedRoomType = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      roomType: selectedRoomType,
      roomQuantity: '1', // Reset room quantity to 1 when the room type changes
    }));

    try {
      const response = await urlInstance.get(`/bookings/totalAvailableRoomCount?from=${formData.fromDate}&to=${formData.toDate}`);
      const roomTypeData = response.data.find(record => record.roomTypeName === selectedRoomType);
      if (roomTypeData) {
        setMaxRoomCount(roomTypeData.availableCount);
      }
      console.log(roomTypeData);
    } catch (e) {
      console.error(e);
    }
  };

  // Calculate total price and update it
  useEffect(() => {
    const fromDate = new Date(formData.fromDate);
    const toDate = new Date(formData.toDate);
    const dayRange = (toDate - fromDate) / (1000 * 60 * 60 * 24); // Calculate the number of days

    // Ensure the date range is positive
    if (dayRange > 0) {
      const calculatedTotalPrice = roomPrice * parseInt(formData.roomQuantity, 10) * dayRange;
      setTotalPrice(calculatedTotalPrice); // Set the correct total price
      setIsDateRangeValid(true); // Set date range validity to true
    } else {
      setTotalPrice(0); // If the date range is invalid, set total price to 0
      setIsDateRangeValid(false); // Set date range validity to false
    }
  }, [roomPrice, formData.roomQuantity, formData.fromDate, formData.toDate]);

  // Validate date range and handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fromDate = new Date(formData.fromDate);
    const toDate = new Date(formData.toDate);

    // Validate date range
    if (toDate <= fromDate) {
      alert("The date period is invalid.");
      return;
    }

    try {
      console.log(formData); // Log form data for debugging

      // Send form data to the server
      const customerResponse = await urlInstance.post("/customer/add", {
        name: formData.name,
        email: formData.email,
        nic: formData.nic,
        phone: formData.contactNumber,
      });
      console.log("Success");
      const customerId = customerResponse.data.customerId;

      await urlInstance.post("/reservations/add", {
        customerId: customerId,
        checkinDate: formData.fromDate,
        checkoutDate: formData.toDate,
        roomQuantity: formData.roomQuantity,
        roomTypeName: formData.roomType
      });

      setFormData({
        name: '',
        email: '',
        nic: '',
        contactNumber: '',
        fromDate: '',
        toDate: '',
        roomType: '',
        roomQuantity: '1', // Reset room quantity to '1'
      });

      setTotalPrice(0); // Reset totalPrice to 0 after submission
      setIsReservationSuccessful(true); // Set success state to true

      setTimeout(() => {
        setIsReservationSuccessful(false); // Reset success state after 3 seconds
        handleClose(); // Close the popup after successful submission
      }, 3000);

    } catch (e) {
      console.error(e); // Log any errors that occur during submission
    }
  };

  // Return null if the popup is not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className='booknow-popup-overlay'>
      <div className="booknow-popup-container">
        {isReservationSuccessful ? (
          <div className='success-message'>
            Reservation Successful!
          </div>
        ) : (
          <div>
            <div className="booknow-popup-topic">
              <h1>RESERVE NOW</h1>
              <span className='booknow-close-btn' onClick={handleClose}><i className='bx bx-x'></i></span>
            </div>
            <form className='booknow-form' style={{ backgroundColor: '#F7F7F7' }} onSubmit={handleSubmit}>
              <div className='booknow-content-description'>
                <h1>RESERVE THIS AMAZING HOTEL!</h1>
                <p>After reserving we will contact you for confirmation.</p>
              </div>
              <div className='form-group-main'>
                <div className="form-group">
                  <label>Your Name:</label>
                  <input
                    name="name"
                    placeholder="Enter Your Name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    name="email"
                    placeholder="Enter Your email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>NIC Number:</label>
                  <input
                    name="nic"
                    placeholder="Enter NIC Number"
                    type="text"
                    value={formData.nic}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Contact Number:</label>
                  <input
                    name="contactNumber"
                    placeholder="Enter Contact Number"
                    type="text"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="date-group">
                <div>
                  <label>From:</label>
                  <input
                    name="fromDate"
                    type="date"
                    value={formData.fromDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>To:</label>
                  <input
                    name="toDate"
                    type="date"
                    value={formData.toDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className='price'>Price (LKR)</div>
              <div className="room-selection">
                <div className="room-type">
                  <label>Room Type:</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleRoomType}
                    required
                    readOnly // This will make the dropdown uneditable but still show the arrow
                  >
                    <option value="" disabled>Select Room Type</option>
                    <option value="SINGLE ROOM">SINGLE ROOM</option>
                    <option value="DOUBLE ROOM">DOUBLE ROOM</option>
                    <option value="TWIN ROOM">TWIN ROOM</option>
                  </select>
                </div>
                <div>
                  <RoomCounter
                    className='book-room-counter'
                    value={formData.roomQuantity}
                    roomCount={maxRoomCount}
                    onChange={handleRoomQuantityChange}
                    disabled={!isDateRangeValid} // Disable RoomCounter if date range is invalid
                  />
                </div>
                <div className='room-price'>
                  {totalPrice}.00 {/* Display the totalPrice which is initially set to 0 */}
                </div>
              </div>
              <button className='booknow-form-button' type='submit'>Reserve Now</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
