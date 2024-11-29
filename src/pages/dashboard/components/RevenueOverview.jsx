import React from 'react'
import styles from './RevenueOverview.module.css'

export function RevenueOverview() {
  return (
    <section className={styles.revenueOverview}>
      <h2 className={styles.title}>Tổng quan về doanh thu</h2>
      <p className={styles.subtitle}>
        Thống kế tổng quan về số lượng khách hàng
      </p>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>2.345.071.000 VND</span>
            <span className={styles.statLabel}>Tổng doanh thu</span>
          </div>
          <img
            src="/imgs/revenue-total.png"
            alt="Total revenue chart"
            className={styles.statChart}
          />
        </div>
        <div className={styles.statItem}>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>1.890.230.000 VND</span>
            <span className={styles.statLabel}>Doanh thu</span>
          </div>
          <img
            src="/imgs/revenue-actual.png"
            alt="Actual revenue chart"
            className={styles.statChart}
          />
        </div>
        <div className={styles.statItem}>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>921.320.000 VND</span>
            <span className={styles.statLabel}>Thất thu</span>
          </div>
          <img
            src="/imgs/revenue-loss.png"
            alt="Revenue loss chart"
            className={styles.statChart}
          />
        </div>
      </div>
    </section>
  )
}
