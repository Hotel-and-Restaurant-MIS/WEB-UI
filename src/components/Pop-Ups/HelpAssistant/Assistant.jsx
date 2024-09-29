import React from 'react';
import './Assistant.css';
import { GoogleGenerativeAI } from "@google/generative-ai";

export function Assistant({ isOpen, handleClose }) {
  
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const API_KEY = "AIzaSyDGj9JX4uBvAbttOs-yhPwc2_Q6eNK2Y-M"

  return (
    <div className="assistant-overlay" onClick={handleOverlayClick}>

      <div className="assistant-content">
        <div className="assistant-name" >
          <h2>Assistant</h2>
        </div>
        <div className='assistant-message'>
          Hello! How Can I help you?
        </div>
      </div>
    
    </div>
  );
}


// import React from 'react';
// import './Assistant.css';

// export function Assistant({ isOpen, handleClose }) {
  
//   if (!isOpen) return null;

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       handleClose();
//     }
//   };

//   return (
//     <div className="assistant-overlay" onClick={handleOverlayClick}>

//       {/* <div className="assistant-content">
//         <div className="assistant-name" >
//           <h2>Assistant</h2>
//         </div>
//         <div className='assistant-message'>
//           Hello! How Can I help you?
//         </div>
//       </div> */}
//     <iframe title='Chatbot' width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/6d9d6c84-437c-4cb2-9fae-fdfb9aae0ca4"></iframe>
//     </div>
//   );
// }

