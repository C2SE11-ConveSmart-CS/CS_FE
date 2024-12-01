import React from 'react'
import styles from './MetricCard.module.css'

export const MetricCard = ({ title, value }) => {
  return (
    <div className={styles.metricContainer}>
      <div className={styles.metricTitle}>{title}</div>
      <div className={styles.metricValue}>{value}</div>
    </div>
  )
}
