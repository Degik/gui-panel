import React, { useState } from 'react';
import styles from './styles/ChatAssistant.module.css';

interface Message {
  id: number;
  sender: 'user' | 'assistant';
  content: string;
}

const ChatAssistant: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    // Aggiungi il messaggio dell'utente alla chat
    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      content: newMessage,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewMessage('');

    // Simula una risposta dell'assistente virtuale (da sostituire con API)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: messages.length + 2,
        sender: 'assistant',
        content: `This is a placeholder response for: "${newMessage}"`,
      };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    }, 1000); // Simula un ritardo di risposta
  };

  return (
    <div className={styles.chatAssistant}>
      {/* Bottone per aprire/chiudere la chat */}
      <button className={styles.chatButton} onClick={toggleChat}>
        <img
          src={require('./styles/icons/ChatsTeardrop.svg').default}
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
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.sender === 'user'
                    ? styles.userMessage
                    : styles.assistantMessage
                }
              >
                {message.content}
              </div>
            ))}
          </div>
          <div className={styles.chatInputContainer}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className={styles.chatInput}
            />
            <button onClick={handleSendMessage} className={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
