import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";

export function Explore() {
  return (
    <Link to='/rooms'>
      <button className='explore-button'>EXPLORE</button>
    </Link>
  )
}