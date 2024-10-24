/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import styles from './OrderOverview.module.css'
import { BarChart } from './charts/BarChart'

export function OrderOverview() {
  return (
    <section className={styles.orderOverview}>
      <h2 className={styles.title}>Tổng quan về đơn hàng</h2>
      <p className={styles.subtitle}>Thống kế tổng quan về số lượng đơn hàng</p>
      <div className={styles.mainValue}>2.362 đơn hàng</div>
      <BarChart className={styles.chart} />
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={styles.legendMarkerSuccess} />
          <span>Đơn hàng thành công</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendMarkerFailed} />
          <span>Đơn hàng không thành công</span>
        </div>
      </div>
    </section>
  )
}
