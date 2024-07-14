import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";
import "../../../Fonts/Fonts.css";

export function Explore() {
  return (
    <Link to='/rooms'>
      <button className='explore-button'>EXPLORE</button>
    </Link>
  )
}