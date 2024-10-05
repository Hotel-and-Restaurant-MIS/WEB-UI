import React, { useState, useRef, useEffect } from 'react';
import './Assistant.css';
import { GoogleGenerativeAI } from "@google/generative-ai";

export function Assistant({ isOpen, handleClose }) {
  const [conversation, setConversation] = useState([]); // To store the history of prompts and responses
  const [userPrompt, setUserPrompt] = useState(''); // To store the current user input
  const conversationEndRef = useRef(null); // Reference for auto-scrolling

  // Early return should be at the end of the functional component
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleInputChange = (e) => {
    setUserPrompt(e.target.value); // Update the user input
  };

  const fetchAIResponse = async () => {
    if (!userPrompt) return; // Don't do anything if input is empty

    // Add the user's question to the conversation
    const newConversation = [...conversation, { sender: 'user', message: userPrompt }];

    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = await genAI.getGenerativeModel({ model: "tunedModels/luxury-restaurant-abis6m9ywrxa" });
      const result = await model.generateContent(userPrompt);

      // Refactor the AI's response to handle bold and paragraphs
      let aiResponse = result.response.text();

      // Step 1: Split response into paragraphs by looking for double newlines (\n\n)
      const paragraphParts = aiResponse.split('\n\n');

      // Step 2: For each paragraph, handle bold text using **word**
      const formattedResponse = paragraphParts.map((paragraph, index) => {
        // Split the paragraph based on bold markers **word**
        const parts = paragraph.split(/\*\*(.*?)\*\*/g);

        // Format each part of the paragraph, adding bold style when necessary
        return (
          <p key={index}>
            {parts.map((part, i) =>
              i % 2 === 1 ? <span key={i} style={{ fontWeight: 'bold' }}>{part}</span> : part
            )}
          </p>
        );
      });

      // Add the formatted response to the conversation
      setConversation([...newConversation, { sender: 'ai', message: formattedResponse }]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      setConversation([...newConversation, { sender: 'ai', message: 'Error fetching AI response.' }]);
    }

    setUserPrompt(''); // Clear the input field after asking
  };


  // Auto-scroll to the bottom when conversation changes
  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation]);

  // Return null if the assistant is not open, but after the hooks
  if (!isOpen) return null;

  return (
    <div className="assistant-overlay" onClick={handleOverlayClick}>
      <div className="assistant-content">
        <div className="assistant-name">
          <h2>Assistant</h2>
        </div>

        {/* Conversation history */}
        <div className="conversation-history">
          {conversation.map((entry, index) => (
            <div
              key={index}
              className={entry.sender === 'user' ? 'user-message' : 'ai-message'}
            >
              {entry.message}
            </div>
          ))}
          {/* This div acts as the scroll target */}
          <div ref={conversationEndRef} />
        </div>

        {/* Input field and button */}
        <div className="assistant-input">
          <input
            type="text"
            value={userPrompt}
            onChange={handleInputChange}
            placeholder="Ask a question..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                fetchAIResponse();
              }
            }}
          />
          <button onClick={fetchAIResponse}>Ask</button>
        </div>
      </div>
    </div>
  );
}
