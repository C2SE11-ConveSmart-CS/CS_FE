import React from 'react'
import styles from './CustomerOverview.module.css'
import { LineChart } from './charts/LineChart'

export function CustomerOverview() {
  return (
    <section className={styles.customerOverview}>
      <h2 className={styles.title}>Tổng quan về khách hàng</h2>
      <p className={styles.subtitle}>
        Thống kế tổng quan về số lượng khách hàng
      </p>
      <LineChart className={styles.chart} />
    </section>
  )
}
