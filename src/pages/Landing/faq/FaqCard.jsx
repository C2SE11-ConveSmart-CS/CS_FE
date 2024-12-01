import React from 'react'
import styles from './FaqCard.module.css'

export const FaqCard = ({ question, answer, iconSrc, isHighlighted }) => {
  return (
    <div
      className={`${styles.faqCard} ${
        isHighlighted ? styles.highlighted : styles.regular
      }`}
    >
      <div className={styles.content}>
        <h3 className={styles.question}>{question}</h3>
        {answer && <p className={styles.answer}>{answer}</p>}
      </div>
      <img
        loading="lazy"
        src={iconSrc}
        className={styles.icon}
        alt=""
        aria-hidden="true"
      />
    </div>
  )
}
