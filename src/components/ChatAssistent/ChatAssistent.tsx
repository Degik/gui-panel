import React, { useState } from 'react';
import styles from './styles/ChatAssistant.module.css';

const ChatAssistant: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className={styles.chatAssistant}>
      {/* Bottone per aprire/chiudere la chat */}
      <button className={styles.chatButton} onClick={toggleChat}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/chat-icon.png" // Inserisci l'icona della chat
          alt="Chat Icon"
        />
      </button>

      {/* Finestra di chat */}
      {isChatOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>Virtual Assistant</h3>
            <button onClick={toggleChat} className={styles.closeButton}>×</button>
          </div>
          <div className={styles.chatContent}>
            <p>How can I help you today?</p>
            {/* Qui puoi aggiungere un'interfaccia per inviare/ricevere messaggi */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
