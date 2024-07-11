import React from 'react';
import { ReactComponent as LeftArrow } from '../../assets/arrow-left-icon.svg';
import { ReactComponent as RightArrow } from '../../assets/arrow-right-icon.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavArrow.css';

export function NavArrow() {

  const navigate = useNavigate();
  const location = useLocation();

  const handleLeftClick = () => {
    if (location.pathname === '/facilities') {
      navigate('/');
    }
    else if (location.pathname === '/rooms') {
      navigate('/facilities');
    }
  };

  const handleRightClick = () => {
    if (location.pathname === '/') {
      navigate('/facilities');
    } else if (location.pathname === '/facilities') {
      navigate('/rooms');
    } else if (location.pathname === '/rooms') {
      navigate('/contactus');
    };
  }

  return (
    <div className='arrow-container'>
      <div className='left-arrow' onClick={handleLeftClick}>
        <LeftArrow />
      </div>
      <div className='right-arrow' onClick={handleRightClick}>
        <RightArrow />
      </div>
    </div>
  );
}
