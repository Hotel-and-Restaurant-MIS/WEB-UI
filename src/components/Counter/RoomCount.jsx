import "./RoomCount.css";
import React, { useState } from "react";
import { ReactComponent as AddIcon } from "../../assets/addition-icon.svg";
import { ReactComponent as MinusIcon } from "../../assets/minus-icon.svg";


export function RoomCounter() {

  const maxcount = 15;
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if (counter !== maxcount)
      setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="room-count">
      <MinusIcon className="add_minus-icon" onClick={decrementCounter} />
      <span className="number" style={{ border: '1px solid black', padding: '5px', borderRadius: '5px' }}>
        {counter}
      </span>
      <AddIcon className="add_minus-icon" onClick={incrementCounter} />
    </div>
  )
};

