import React from 'react'
import styles from './SentimentCard.module.css'

export const SentimentCard = ({ icon, title, count }) => {
  return (
    <div className={styles.sentimentCardContainer}>
      <img
        loading="lazy"
        src={icon}
        className={styles.sentimentIcon}
        alt={`${title} icon`}
      />
      <div className={styles.sentimentContent}>
        <div className={styles.sentimentTitle}>{title}</div>
        <div className={styles.sentimentCount}>{count}</div>
      </div>
    </div>
  )
}
