import React from 'react';
import './RoomType.css';
import "../../Fonts/Fonts.css";

export function RoomType(props) {
  return (
    <div className='room-type-container'>
      {/* Container for displaying the room image */}
      <div className='room-image-container'>
        <img src={props.src} alt={props.alt} className='room-background-image' />
      </div>

      {/* Container for displaying room details like name and price */}
      <div className='room-cont'>
        <h1>{props.name}</h1> {/* Room name */}
        <div className='room-price-container'>
          {props.price} {/* Room price */}
        </div>
      </div>
    </div>
  );
}
