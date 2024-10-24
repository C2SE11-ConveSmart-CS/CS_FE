/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import styles from './CallCenter.module.css'
import { DonutChart } from './charts/DonutChart'

const stats = [
  {
    label: 'Cuộc gọi đến',
    value: '345',
    icon: '/assets/icons/call-incoming.svg',
  },
  {
    label: 'Cuộc gọi đi',
    value: '489',
    icon: '/assets/icons/call-outgoing.svg',
  },
  { label: 'Cuộc gọi nhỡ', value: '34', icon: '/assets/icons/call-missed.svg' },
]
export function CallCenter() {
  return (
    <section className={styles.callCenter}>
      <h2 className={styles.title}>Tổng đài</h2>
      <p className={styles.subtitle}>Tổng số lượng cuộc gọi trên tổng đài</p>
      <div className={styles.mainChart}>
        <DonutChart value={641} percentage={8.5} />
        <div className={styles.chartLabel}>
          <div>Tổng cuộc gọi</div>
          <div className={styles.chartValue}>641</div>
        </div>
      </div>
      <div className={styles.stats}>
        {stats.map(stat => (
          <div key={stat.label} className={styles.statItem}>
            <div className={styles.statMain}>
              <img
                src={stat.icon}
                alt={stat.label}
                className={styles.statIcon}
              />
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
            <span className={styles.statValue}>{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}