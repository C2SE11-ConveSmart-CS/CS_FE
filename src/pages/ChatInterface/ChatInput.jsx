import React, { useState, useContext } from 'react';
import EmojiPicker from 'emoji-picker-react';
import styles from './ChatInput.module.css';
import { ChatContext } from '../../contexts/ChatsContext';
import { AuthContext } from '../../contexts/AuthContext';
import { baseURL } from '../../utils/axios';

function ChatInput({ prop }) {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { messages, setMessages, selectedConversation } = useContext(ChatContext);
  const senderId = prop.currentUserId;
  const {authUser} = useContext(AuthContext)
  // current user ni là user đang chọn má ôi, muoons lay user của mình phải lấy ở Authcontext

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    try {
      const response = await fetch(`${baseURL}/api/${selectedConversation?.type === "instagram"?"insta":"chats"}/message/${selectedConversation?.senderId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message }),
      });

      if (response.ok) {
        const newMessage = { 
          senderId: authUser, 
          content: message,
          id: new Date().getTime(), 
          sender: "agent"
        };
        
        setMessages([...messages, newMessage]);
        setMessage('');
        // thêm hiệu ứng scroll tới tin nhắn mới nhất lúc gửi xong
      
      } else {
        console.error('Lỗi khi gửi tin nhắn');
      }
    } catch (error) {
      console.error('Lỗi:', error);
    }
  };

  const onEmojiClick = (emojiObject) => {
    if (emojiObject && emojiObject.emoji) {
      setMessage(prevMessage => prevMessage + emojiObject.emoji);
      setShowEmojiPicker(false);
    }
  };

  return (
    <form className={styles.messageEditor} onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Nhập tin nhắn"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.inputField}
          aria-label="Enter message"
        />
        <button type="button" className={styles.attachButton} onClick={handleSendMessage}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/759d02b0ef865715624d19a407172d264e07f5e33374406d3360f7a5ce910961?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Gửi tin nhắn"
          />
        </button>
        <button
          type="button"
          className={styles.emojiButton}
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7d85521c093a3c11bfc87f46e588aae1fc188abd11ccc449fd12c892ef5f0d3?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Chèn emoji"
          />
        </button>
      </div>

      {showEmojiPicker && (
        <div className={styles.emojiPicker}>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}

      <div className={styles.actionBar}>
        <div className={styles.actionButtons}>
          {/* Các nút hành động khác */}
        </div>
      </div>
    </form>
  );
}

export default ChatInput;
