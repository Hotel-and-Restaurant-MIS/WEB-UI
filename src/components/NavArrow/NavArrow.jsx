import React from 'react';
import { ReactComponent as LeftArrow } from '../../assets/arrow-left-icon.svg';
import { ReactComponent as RightArrow } from '../../assets/arrow-right-icon.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavArrow.css';

export function NavArrow() {

  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to the previous page based on the current location
  const handleLeftClick = () => {
    if (location.pathname === '/facilities') {
      navigate('/'); // Go to the home page
    }
    else if (location.pathname === '/rooms') {
      navigate('/facilities'); // Go to the facilities page
    }
  };

  // Navigate to the next page based on the current location
  const handleRightClick = () => {
    if (location.pathname === '/') {
      navigate('/facilities'); // Go to the facilities page
    } else if (location.pathname === '/facilities') {
      navigate('/rooms'); // Go to the rooms page
    } else if (location.pathname === '/rooms') {
      navigate('/contactus'); // Go to the contact us page
    }
  }

  return (
    <div className='arrow-container'>
      {/* Left arrow to navigate to the previous page */}
      <div className='left-arrow' onClick={handleLeftClick}>
        <LeftArrow />
      </div>

      {/* Right arrow to navigate to the next page */}
      <div className='right-arrow' onClick={handleRightClick}>
        <RightArrow />
      </div>
    </div>
  );
}
