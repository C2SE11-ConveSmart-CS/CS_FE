import React from 'react'
import styles from './MessageCard.module.css'

export const MessageCard = ({ icon, title, count }) => {
  return (
    <div className={styles.messageCardContainer}>
      <img
        loading="lazy"
        src={icon}
        className={styles.messageIcon}
        alt={`${title} icon`}
      />
      <div className={styles.messageContent}>
        <div className={styles.messageTitle}>{title}</div>
        <div className={styles.messageCount}>{count}</div>
      </div>
    </div>
  )
}
