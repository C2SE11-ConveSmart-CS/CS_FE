import React from 'react'
import styles from './Footer.module.css'

export const QuickLink = ({ text }) => (
  <a href="#" className={styles.quickLinkItem} tabIndex="0">
    {text}
  </a>
)
