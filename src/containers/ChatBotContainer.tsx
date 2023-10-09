import React, { useState } from 'react';
import useChatBot from '../hooks/chatBot';
import './ChatBotContainerStyle.css';

function ChatBotContainer() {
  const { messages, soru, setSoru, sendMessage } = useChatBot();

  const handleSendMessage = () => {
    if (soru.trim() === '') return;
    sendMessage(soru);
    setSoru('');
  };

  const lastTwoMessages = messages.slice(-1);

  return (
    <div className="chat-container">
      <div className="messages">
        {lastTwoMessages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="May I Help You?"
          value={soru}
          onChange={(e) => setSoru(e.target.value)}
        />
        <button className="pulse-button" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBotContainer;
