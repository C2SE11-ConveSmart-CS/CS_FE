import React from 'react'
import styles from './ChatMessage.module.css'

function ChatMessage({ sender, content, avatar, image }) {
  const isAgent = sender === 'agent'
  const messageClass = isAgent ? styles.agentMessage : styles.userMessage
  const messageStyle = isAgent ? styles.sentMessage : styles.receivedMessage // Sử dụng lớp mới

  return (
    <div className={`${styles.messageContainer} ${messageClass}`}>
      {!isAgent && avatar && (
        <img src={avatar} alt="User avatar" className={styles.avatar} />
      )}
      {image ? (
        <img
          src={image}
          alt="Attached image"
          className={styles.attachedImage}
        />
      ) : (
        <p className={`${styles.messageContent} ${messageStyle}`}>{content}</p> // Áp dụng lớp mới
      )}
    </div>
  )
}

export default ChatMessage
