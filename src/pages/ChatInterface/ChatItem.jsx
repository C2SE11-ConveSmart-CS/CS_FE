/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import styles from './ChatItem.module.css'

function ChatItem({ avatar, name, message, time, tags, social, isOnline }) {
  return (
    <div className={styles.chatItem}>
      <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.name}>
            {isOnline && (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcdb8bfe685882c8562e6bdd95f814867d8f1cd9ecaf29dd2d9c8393a97aa137?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Online"
                className={styles.onlineIndicator}
              />
            )}
            <span>{name}</span>
          </div>
          <div className={styles.social}>
            {social.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt=""
                className={styles.socialIcon}
              />
            ))}
          </div>
        </div>
        <div className={styles.messagePreview}>
          <p className={styles.message}>{message}</p>
          <span className={styles.time}>{time}</span>
        </div>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatItem