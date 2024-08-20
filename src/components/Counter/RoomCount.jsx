import "./RoomCount.css";
import React from "react";
import { ReactComponent as AddIcon } from "../../assets/addition-icon.svg";
import { ReactComponent as MinusIcon } from "../../assets/minus-icon.svg";

// Component to manage room quantity with increment and decrement functionality
export function RoomCounter({ roomCount, value, onChange }) {

  const maxcount = roomCount; // Maximum allowed room count

  // Function to increase the room count by 1
  const incrementCounter = () => {
    const newValue = Number(value) + 1;
    if (newValue <= maxcount) {
      onChange(newValue); // Call the onChange handler with the new value
    }
  };

  // Function to decrease the room count by 1
  const decrementCounter = () => {
    const newValue = Number(value) - 1;
    if (newValue >= 1) {
      onChange(newValue); // Call the onChange handler with the new value
    }
  };

  return (
    <div className="room-count">
      {/* Button to decrease room count */}
      <MinusIcon className="add_minus-icon" onClick={decrementCounter} />

      {/* Display the current room count */}
      <input className="count-input" name="room_quantity" type="number" required
        value={value} readOnly
        style={{ maxWidth: "30px" }}
      />

      {/* Button to increase room count */}
      <AddIcon className="add_minus-icon" onClick={incrementCounter} />
    </div>
  );
}
