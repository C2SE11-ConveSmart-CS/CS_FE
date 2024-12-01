import React from 'react'
import styles from './Footer.module.css'

export const ContactItem = ({ icon, text, alt }) => (
  <div className={styles.contactItem}>
    <img loading="lazy" src={icon} className={styles.contactIcon} alt={alt} />
    <div className={styles.contactText}>{text}</div>
  </div>
)
