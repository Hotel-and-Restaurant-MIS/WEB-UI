import React, { useState, useEffect } from "react";
import "./BookNowPU.css";
import "../../../Fonts/Fonts.css";
import { RoomCounter } from "../../../components/Counter/RoomCount.jsx";
import { urlInstanse } from "../../../constants.js";
import emailjs from "emailjs-com";

export function BookNowPU({ isOpen, handleClose }) {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nic: "",
    contactNumber: "",
    fromDate: "",
    toDate: "",
    roomType: "",
    roomQuantity: "1", // Default room quantity is '1'
  });

  // State for room price, max room count, total price, date range validity, and submission status
  const [roomPrice, setRoomPrice] = useState(0);
  const [maxRoomCount, setMaxRoomCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice to 0
  const [isReservationSuccessful, setIsReservationSuccessful] = useState(false); // New state for success message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  // Update the room quantity in the state
  const handleRoomQuantityChange = (newQuantity) => {
    setFormData((prevData) => ({
      ...prevData,
      roomQuantity: newQuantity,
    }));
  };

  // Update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    handleRoomType(e);
  };

  // Update the room price based on the selected room type
  useEffect(() => {
    const fetchRoomPrice = async () => {
      try {
        const response = await urlInstanse.get("/roomtype/price");
        const roomTypeData = response.data.find(
          (record) => record.roomTypeName === formData.roomType
        );
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

    // Update room type and reset room quantity
    setFormData((prevData) => ({
      ...prevData,
      roomType: selectedRoomType,
      roomQuantity: "1", // Reset room quantity to 1 when the room type changes
    }));

    // Check if fromDate, toDate, and roomType exist before making the API call
    if (formData.fromDate && formData.toDate && selectedRoomType) {
      try {
        // Fetch available room count based on the selected room type and dates
        const response = await urlInstanse.get(
          `/bookings/totalAvailableRoomCount?from=${formData.fromDate}&to=${formData.toDate}`
        );
        const roomTypeData = response.data.find(
          (record) => record.roomTypeName === selectedRoomType
        );

        // If data for the selected room type is found, update the max room count
        if (roomTypeData) {
          setMaxRoomCount(roomTypeData.availableCount);
        }

        console.log(roomTypeData); // Debugging: Log the room type data
      } catch (e) {
        console.error(e); // Handle any errors from the API request
      }
    } else {
      console.log("Please select valid dates and room type"); // Log a message if any required fields are missing
    }
  };

  // Calculate total price and update it
  useEffect(() => {
    const fromDate = new Date(formData.fromDate);
    const toDate = new Date(formData.toDate);
    const dayRange = (toDate - fromDate) / (1000 * 60 * 60 * 24); // Calculate the number of days

    // Ensure the date range is positive
    if (dayRange > 0) {
      const calculatedTotalPrice =
        roomPrice * parseInt(formData.roomQuantity, 10) * dayRange;
      setTotalPrice(calculatedTotalPrice); // Set the correct total price
    } else {
      setTotalPrice(0); // If the date range is invalid, set total price to 0
    }
  }, [roomPrice, formData.roomQuantity, formData.fromDate, formData.toDate]);

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit random code
  };

  // Handle sending the verification code
  const handleSendVerification = async (e) => {
    e.preventDefault();
    
    // Generate verification code
    const code = generateVerificationCode();
    setGeneratedCode(code);

    // Set up email parameters
    const templateParams = {
      to_email: formData.email,
      verification_code: code,
      from_name: formData.name,
      room_type: formData.roomType,
      from_date: formData.fromDate,
      to_date: formData.toDate,
      price: totalPrice,
      roomQuantity: formData.roomQuantity,
    };
    setIsSubmitting(true);
    // Send email using EmailJS
    emailjs
      .send(
        "service_smko6vm",
        "template_izs0yap",
        templateParams,
        "wN6WvHDSnIaVRNCn9"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Verification code sent to your email!");
        setCodeSent(true);
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("Error sending verification code.");
      });
  };

  // Validate the verification code
  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (verificationCode === generatedCode) {
      handleSubmit(e);
    } else {
      alert("Incorrect verification code. Please try again.");
    }
  };

  // Validate date range and handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true); // Set isSubmitting to true while submitting
      console.log(formData); // Log form data for debugging

      // Send form data to the server
      const customerResponse = await urlInstanse.post("/customer/add", {
        name: formData.name,
        email: formData.email,
        nic: formData.nic,
        phone: formData.contactNumber,
      });
      console.log("Success");
      const customerId = customerResponse.data.customerId;

      await urlInstanse.post("/reservations/add", {
        customerId: customerId,
        checkinDate: formData.fromDate,
        checkoutDate: formData.toDate,
        roomQuantity: formData.roomQuantity,
        roomTypeName: formData.roomType,
      });

      setFormData({
        name: "",
        email: "",
        nic: "",
        contactNumber: "",
        fromDate: "",
        toDate: "",
        roomType: "",
        roomQuantity: "1", // Reset room quantity to '1'
      });
      
      setVerificationCode("");
      setTotalPrice(0); // Reset totalPrice to 0 after submission
      setIsReservationSuccessful(true); // Set success state to true
      setCodeSent(false); 

      setTimeout(() => {
        setIsReservationSuccessful(false); // Reset success state after 3 seconds
        handleClose(); // Close the popup after successful submission
      }, 3000);
    } catch (e) {
      console.error(e); // Log any errors that occur during submission
    } finally {
      setIsSubmitting(false); // End submitting
    }
  };

  // Return null if the popup is not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className="booknow-popup-overlay">
      <div className="booknow-popup-container">
        {isReservationSuccessful ? (
          <div className="success-message">Reservation Successful!</div>
        ) : (
          <div>
            <div className="booknow-popup-topic">
              <h1>RESERVE NOW</h1>
              <span className="booknow-close-btn" onClick={handleClose}>
                <i className="bx bx-x"></i>
              </span>
            </div>
            {!codeSent ? (
              <form
                className="booknow-form"
                style={{ backgroundColor: "#F7F7F7" }}
                onSubmit={handleSendVerification}
              >
                <div className="booknow-content-description">
                  <h1>RESERVE THIS AMAZING HOTEL!</h1>
                  <p>After reserving we will contact you for confirmation.</p>
                </div>
                <div className="form-group-main">
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
                      onChange={handleDateChange}
                      min={new Date().toISOString().split("T")[0]} // Set the minimum date to today
                      required
                    />
                  </div>
                  <div>
                    <label>To:</label>
                    <input
                      name="toDate"
                      type="date"
                      value={formData.toDate}
                      onChange={handleDateChange}
                      min={formData.fromDate} // Set the minimum date to the fromDate value
                      required
                    />
                  </div>
                </div>
                <div className="price">Price (LKR)</div>
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
                      <option value="" disabled>
                        Select Room Type
                      </option>
                      <option value="SINGLE ROOM">SINGLE ROOM</option>
                      <option value="DOUBLE ROOM">DOUBLE ROOM</option>
                      <option value="TWIN ROOM">TWIN ROOM</option>
                    </select>
                  </div>
                  <div>
                    <RoomCounter
                      className="book-room-counter"
                      value={formData.roomQuantity}
                      roomCount={maxRoomCount}
                      onChange={handleRoomQuantityChange}
                    />
                  </div>
                  <div className="room-price">
                    {totalPrice}.00{" "}
                    {/* Display the totalPrice which is initially set to 0 */}
                  </div>
                </div>
                <button
                  type="submit"
                  className="booknow-form-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send Verification Code"}
                </button>
              </form>
            ) : (
              // Verification Code Section
              <form className="verify-form" onSubmit={handleVerifyCode}>
                <input
                  type="text"
                  placeholder="Enter Verification Code"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                  required
                />
                <button
                  className="booknow-form-button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Reserve Now"}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
