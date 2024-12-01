import React from 'react'
import styles from './Footer.module.css'

export const SocialIcon = ({ src, alt }) => (
  <div className={styles.socialIcon}>
    <img
      loading="lazy"
      src={src}
      className={styles.socialIconImage}
      alt={alt}
    />
  </div>
)
