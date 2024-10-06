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
      const API_KEY = process.env.REACT_APP_API_KEY; // Get the API key from environment variables
      const genAI = new GoogleGenerativeAI(API_KEY); // Initialize the Google Generative AI
      const model = await genAI.getGenerativeModel({ model: "tunedModels/luxury-restaurant-abis6m9ywrxa" }); // Get the specific model

      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };

      // Prepare the input format for the model
      const parts = [
        { text: `input: ${userPrompt}` },
        { text: 'output: ' },
      ];

      // Generate the AI response
      const result = await model.generateContent({
        contents: [{ role: 'user', parts }],
        generationConfig,
      });

      // Process the AI's response
      let aiResponse = result.response.text();

      // Split the response into paragraphs and handle bold text
      const paragraphParts = aiResponse.split('\n\n');
      const formattedResponse = paragraphParts.map((paragraph, index) => {
        const parts = paragraph.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={index}>
            {parts.map((part, i) =>
              i % 2 === 1 ? <span key={i} style={{ fontWeight: 'bold' }}>{part}</span> : part
            )}
          </p>
        );
      });

      // Update the conversation state with the AI response
      setConversation([...newConversation, { sender: 'ai', message: formattedResponse }]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      // Add an error message to the conversation if something goes wrong
      setConversation([...newConversation, { sender: 'ai', message: 'Error fetching AI response.' }]);
    }

    // Clear the input field after asking
    setUserPrompt('');
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
