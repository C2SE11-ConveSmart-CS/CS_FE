import React from 'react'
import styles from './StatCard.module.css'

export const StatCard = ({ icon, label, value }) => {
  return (
    <div className={styles.statContainer}>
      <img loading="lazy" src={icon} className={styles.statIcon} alt="" />
      <div className={styles.statContent}>
        <div className={styles.statLabel}>{label}</div>
        <div className={styles.statValue}>{value}</div>
      </div>
    </div>
  )
}
