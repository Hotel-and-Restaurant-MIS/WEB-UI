import React from 'react';
import "./Locations.css";

export function Locations(props) {
  return (
    <div className="image-container">
      <img src={props.src} alt={props.name} className='background-image' />
      <div className="text-overlay">
        <div>{props.name}</div>
      </div>
    </div>
  );
}
