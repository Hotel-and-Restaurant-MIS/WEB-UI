import React, { useState } from 'react';
import './Massenger.css'; // Import the CSS file for styling
import { Assistant } from '../Pop-Ups/HelpAssistant/Assistant';

export function MassengerIcon() {
  const [isAssistantOpen, setAssistantOpen] = useState(false);

  const handleOpenAssistant = () => {
    setAssistantOpen(true);
  };
  
  const handleCloseAssistant = () => {
    setAssistantOpen(false);
  };

  return (
    <div className="massenger-icon">
      <img src={require("../../images/messenger-icon.png")} alt="Icon" onClick={handleOpenAssistant} />
      
      <Assistant isOpen={isAssistantOpen} handleClose={handleCloseAssistant} />
    </div>
  );
};


