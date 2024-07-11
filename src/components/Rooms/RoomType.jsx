import React from 'react';
import './RoomType.css';

export function RoomType(props) {
  return (
    <div className='room-type-container'>
      <div className='room-image-container'>
        <img src={props.src} alt={props.alt} className='room-background-image' />
      </div>
      <div className='room-cont'>
        <h1>{props.name}</h1>
        <div className='room-price-container'>
          {props.price}
        </div>
      </div>
    </div>
  );
}
